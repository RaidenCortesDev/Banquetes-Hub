(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Os=/(url\()([^)]*)(\))/g,zs=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,St,se;function lt(t,e){if(t&&zs.test(t)||t==="//")return t;if(St===void 0){St=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",St=i.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),St)try{return new URL(t,e).href}catch{return t}return se||(se=document.implementation.createHTMLDocument("temp"),se.base=se.createElement("base"),se.head.appendChild(se.base),se.anchor=se.createElement("a"),se.body.appendChild(se.anchor)),se.base.href=e,se.anchor.href=t,se.anchor.href||t}function Dr(t,e){return t.replace(Os,function(i,n,r,s){return n+"'"+lt(r.replace(/["']/g,""),e)+"'"+s})}function Ir(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rr=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Ds=Rr&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let Is=window.Polymer&&window.Polymer.rootPath||Ir(document.baseURI||window.location.href),zt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Rs=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,qe=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Ms=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,pt=window.Polymer&&window.Polymer.legacyOptimizations||!1,fn=window.Polymer&&window.Polymer.legacyWarnings||!1,Ls=window.Polymer&&window.Polymer.syncInitialRender||!1,dr=window.Polymer&&window.Polymer.legacyUndefined||!1,Bs=window.Polymer&&window.Polymer.orderedComputed||!1,ri=window.Polymer&&window.Polymer.removeNestedTemplates||!1,mn=window.Polymer&&window.Polymer.fastDomIf||!1,ur=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Et=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Hs=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let js=0;const ae=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=js++;function n(r){let s=r.__mixinSet;if(s&&s[i])return r;let a=e,o=a.get(r);if(!o){o=t(r),a.set(r,o);let l=Object.create(o.__mixinSet||s||null);l[i]=!0,o.__mixinSet=l}return o}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Mr={},gn={};function ii(t,e){Mr[t]=gn[t.toLowerCase()]=e}function ni(t){return Mr[t]||gn[t.toLowerCase()]}function $s(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class ft extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,i){if(e){let n=ni(e);return n&&i?n.querySelector(i):n}return null}attributeChangedCallback(e,i,n,r){i!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=lt(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Ir(i)}return this.__assetpath}register(e){if(e=e||this.id,e){if(qe&&ni(e)!==void 0)throw ii(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,ii(e,this),$s(this)}}}ft.prototype.modules=Mr;customElements.define("dom-module",ft);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vs="link[rel=import][type~=css]",qs="include",si="shady-unscoped";function Lr(t){return ft.import(t)}function oi(t){let e=t.body?t.body:t;const i=Dr(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=i,n}function Us(t){const e=t.trim().split(/\s+/),i=[];for(let n=0;n<e.length;n++)i.push(...Zs(e[n]));return i}function Zs(t){const e=Lr(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const i=[];i.push(...Hr(e));const n=e.querySelector("template");n&&i.push(...Br(n,e.assetpath)),e._styles=i}return e._styles}function Br(t,e){if(!t._styles){const i=[],n=t.content.querySelectorAll("style");for(let r=0;r<n.length;r++){let s=n[r],a=s.getAttribute(qs);a&&i.push(...Us(a).filter(function(o,l,c){return c.indexOf(o)===l})),e&&(s.textContent=Dr(s.textContent,e)),i.push(s)}t._styles=i}return t._styles}function Ys(t){let e=Lr(t);return e?Hr(e):[]}function Hr(t){const e=[],i=t.querySelectorAll(Vs);for(let n=0;n<i.length;n++){let r=i[n];if(r.import){const s=r.import,a=r.hasAttribute(si);if(a&&!s._unscopedStyle){const o=oi(s);o.setAttribute(si,""),s._unscopedStyle=o}else s._style||(s._style=oi(s));e.push(a?s._unscopedStyle:s._style)}}return e}function Ws(t){let e=t.trim().split(/\s+/),i="";for(let n=0;n<e.length;n++)i+=Js(e[n]);return i}function Js(t){let e=Lr(t);if(e&&e._cssText===void 0){let i=Xs(e),n=e.querySelector("template");n&&(i+=Gs(n,e.assetpath)),e._cssText=i||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function Gs(t,e){let i="";const n=Br(t,e);for(let r=0;r<n.length;r++){let s=n[r];s.parentNode&&s.parentNode.removeChild(s),i+=s.textContent}return i}function Xs(t){let e="",i=Hr(t);for(let n=0;n<i.length;n++)e+=i[n].textContent;return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const O=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function hr(t){return t.indexOf(".")>=0}function _e(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function _n(t,e){return t.indexOf(e+".")===0}function mt(t,e){return e.indexOf(t+".")===0}function gt(t,e,i){return e+i.slice(t.length)}function Ks(t,e){return t===e||_n(t,e)||mt(t,e)}function nt(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let n=t[i].toString().split(".");for(let r=0;r<n.length;r++)e.push(n[r])}return e.join(".")}else return t}function yn(t){return Array.isArray(t)?nt(t).split("."):t.toString().split(".")}function re(t,e,i){let n=t,r=yn(e);for(let s=0;s<r.length;s++){if(!n)return;let a=r[s];n=n[a]}return i&&(i.path=r.join(".")),n}function ai(t,e,i){let n=t,r=yn(e),s=r[r.length-1];if(r.length>1){for(let a=0;a<r.length-1;a++){let o=r[a];if(n=n[o],!n)return}n[s]=i}else n[e]=i;return r.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Dt={},Qs=/-[a-z]/g,eo=/([A-Z])/g;function jr(t){return Dt[t]||(Dt[t]=t.indexOf("-")<0?t:t.replace(Qs,e=>e[1].toUpperCase()))}function Jt(t){return Dt[t]||(Dt[t]=t.replace(eo,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let to=0,vn=0,je=[],ro=0,pr=!1,bn=document.createTextNode("");new window.MutationObserver(io).observe(bn,{characterData:!0});function io(){pr=!1;const t=je.length;for(let e=0;e<t;e++){let i=je[e];if(i)try{i()}catch(n){setTimeout(()=>{throw n})}}je.splice(0,t),vn+=t}const ct={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},Ce={run(t){return pr||(pr=!0,bn.textContent=ro++),je.push(t),to++},cancel(t){const e=t-vn;if(e>=0){if(!je[e])throw new Error("invalid async handle: "+t);je[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const no=Ce,xn=ae(t=>{class e extends t{static createProperties(n){const r=this.prototype;for(let s in n)s in r||r._createPropertyAccessor(s)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,r){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,r))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let r=this.__dataAttributes[n];return r||(r=this.constructor.attributeNameForProperty(n),this.__dataAttributes[r]=n),r}_definePropertyAccessor(n,r){Object.defineProperty(this,n,{get(){return this.__data[n]},set:r?function(){}:function(s){this._setPendingProperty(n,s,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,r){this._setPendingProperty(n,r)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,r,s){let a=this.__data[n],o=this._shouldPropertyChange(n,r,a);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=a),this.__data[n]=r,this.__dataPending[n]=r),o}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,no.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,r=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(n,r,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,r,s)),this.__dataCounter--}_shouldPropertiesChange(n,r,s){return!!r}_propertiesChanged(n,r,s){}_shouldPropertyChange(n,r,s){return s!==r&&(s===s||r===r)}attributeChangedCallback(n,r,s,a){r!==s&&this._attributeToProperty(n,s),super.attributeChangedCallback&&super.attributeChangedCallback(n,r,s,a)}_attributeToProperty(n,r,s){if(!this.__serializing){const a=this.__dataAttributes,o=a&&a[n]||n;this[o]=this._deserializeValue(r,s||this.constructor.typeForProperty(o))}}_propertyToAttribute(n,r,s){this.__serializing=!0,s=arguments.length<3?this[n]:s,this._valueToNodeAttribute(this,s,r||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,r,s){const a=this._serializeValue(r);(s==="class"||s==="name"||s==="slot")&&(n=O(n)),a===void 0?n.removeAttribute(s):n.setAttribute(s,a===""&&window.trustedTypes?window.trustedTypes.emptyScript:a)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n?.toString()}}_deserializeValue(n,r){switch(r){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wn={};let kt=HTMLElement.prototype;for(;kt;){let t=Object.getOwnPropertyNames(kt);for(let e=0;e<t.length;e++)wn[t[e]]=!0;kt=Object.getPrototypeOf(kt)}const so=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function oo(t,e){if(!wn[e]){let i=t[e];i!==void 0&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}const Cn=ae(t=>{const e=xn(t);class i extends e{static createPropertiesForAttributes(){let r=this.observedAttributes;for(let s=0;s<r.length;s++)this.prototype._createPropertyAccessor(jr(r[s]))}static attributeNameForProperty(r){return Jt(r)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(r){for(let s in r)this._setProperty(s,r[s])}_ensureAttribute(r,s){const a=this;a.hasAttribute(r)||this._valueToNodeAttribute(a,s,r)}_serializeValue(r){switch(typeof r){case"object":if(r instanceof Date)return r.toString();if(r){if(so(r))return r;try{return JSON.stringify(r)}catch{return""}}default:return super._serializeValue(r)}}_deserializeValue(r,s){let a;switch(s){case Object:try{a=JSON.parse(r)}catch{a=r}break;case Array:try{a=JSON.parse(r)}catch{a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${r}`)}break;case Date:a=isNaN(r)?String(r):Number(r),a=new Date(a);break;default:a=super._deserializeValue(r,s);break}return a}_definePropertyAccessor(r,s){oo(this,r),super._definePropertyAccessor(r,s)}_hasAccessor(r){return this.__dataHasAccessor&&this.__dataHasAccessor[r]}_isPropertyPending(r){return!!(this.__dataPending&&r in this.__dataPending)}}return i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ao={"dom-if":!0,"dom-repeat":!0};let li=!1,ci=!1;function lo(){if(!li){li=!0;const t=document.createElement("textarea");t.placeholder="a",ci=t.placeholder===t.textContent}return ci}function co(t){lo()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const uo=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,i,n)=>{const r=i.getAttribute(n);if(t&&n.startsWith("on-")){e.setAttribute(n,t.createScript(r,n));return}e.setAttribute(n,r)}})();function ho(t){let e=t.getAttribute("is");if(e&&ao[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;){const{name:n}=i.attributes[0];uo(t,i,n),i.removeAttribute(n)}}return t}function Sn(t,e){let i=e.parentInfo&&Sn(t,e.parentInfo);if(i){for(let n=i.firstChild,r=0;n;n=n.nextSibling)if(e.parentIndex===r++)return n}else return t}function po(t,e,i,n){n.id&&(e[n.id]=i)}function fo(t,e,i){if(i.events&&i.events.length)for(let n=0,r=i.events,s;n<r.length&&(s=r[n]);n++)t._addMethodEventListenerToNode(e,s.name,s.value,t)}function mo(t,e,i,n){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=n)}function go(t,e,i){return t=t._methodHost||t,function(r){t[i]?t[i](r,r.detail):console.warn("listener method `"+i+"` not defined")}}const _o=ae(t=>{class e extends t{static _parseTemplate(n,r){if(!n._templateInfo){let s=n._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=!!r,s.stripWhiteSpace=r&&r.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,s,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,r,s){return this._parseTemplateNode(n.content,r,s)}static _parseTemplateNode(n,r,s){let a=!1,o=n;return o.localName=="template"&&!o.hasAttribute("preserve-content")?a=this._parseTemplateNestedTemplate(o,r,s)||a:o.localName==="slot"&&(r.hasInsertionPoint=!0),co(o),o.firstChild&&this._parseTemplateChildNodes(o,r,s),o.hasAttributes&&o.hasAttributes()&&(a=this._parseTemplateNodeAttributes(o,r,s)||a),a||s.noted}static _parseTemplateChildNodes(n,r,s){if(!(n.localName==="script"||n.localName==="style"))for(let a=n.firstChild,o=0,l;a;a=l){if(a.localName=="template"&&(a=ho(a)),l=a.nextSibling,a.nodeType===Node.TEXT_NODE){let d=l;for(;d&&d.nodeType===Node.TEXT_NODE;)a.textContent+=d.textContent,l=d.nextSibling,n.removeChild(d),d=l;if(r.stripWhiteSpace&&!a.textContent.trim()){n.removeChild(a);continue}}let c={parentIndex:o,parentInfo:s};this._parseTemplateNode(a,r,c)&&(c.infoIndex=r.nodeInfoList.push(c)-1),a.parentNode&&o++}}static _parseTemplateNestedTemplate(n,r,s){let a=n,o=this._parseTemplate(a,r);return(o.content=a.content.ownerDocument.createDocumentFragment()).appendChild(a.content),s.templateInfo=o,!0}static _parseTemplateNodeAttributes(n,r,s){let a=!1,o=Array.from(n.attributes);for(let l=o.length-1,c;c=o[l];l--)a=this._parseTemplateNodeAttribute(n,r,s,c.name,c.value)||a;return a}static _parseTemplateNodeAttribute(n,r,s,a,o){return a.slice(0,3)==="on-"?(n.removeAttribute(a),s.events=s.events||[],s.events.push({name:a.slice(3),value:o}),!0):a==="id"?(s.id=o,!0):!1}static _contentForTemplate(n){let r=n._templateInfo;return r&&r.content||n.content}_stampTemplate(n,r){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),r=r||this.constructor._parseTemplate(n);let s=r.nodeInfoList,a=r.content||n.content,o=document.importNode(a,!0);o.__noInsertionPoint=!r.hasInsertionPoint;let l=o.nodeList=new Array(s.length);o.$={};for(let c=0,d=s.length,h;c<d&&(h=s[c]);c++){let g=l[c]=Sn(o,h);po(this,o.$,g,h),mo(this,g,h,r),fo(this,g,h)}return o=o,o}_addMethodEventListenerToNode(n,r,s,a){a=a||n;let o=go(a,r,s);return this._addEventListenerToNode(n,r,o),o}_addEventListenerToNode(n,r,s){n.addEventListener(r,s)}_removeEventListenerFromNode(n,r,s){n.removeEventListener(r,s)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let _t=0;const yt=[],Y={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},En="__computeInfo",yo=/[A-Z]/;function tr(t,e,i){let n=t[e];if(!n)n=t[e]={};else if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),i))for(let r in n){let s=n[r],a=n[r]=Array(s.length);for(let o=0;o<s.length;o++)a[o]=s[o]}return n}function st(t,e,i,n,r,s){if(e){let a=!1;const o=_t++;for(let l in i){let c=r?_e(l):l,d=e[c];if(d)for(let h=0,g=d.length,u;h<g&&(u=d[h]);h++)(!u.info||u.info.lastRun!==o)&&(!r||$r(l,u.trigger))&&(u.info&&(u.info.lastRun=o),u.fn(t,l,i,n,u.info,r,s),a=!0)}return a}return!1}function vo(t,e,i,n,r,s,a,o){let l=!1,c=a?_e(n):n,d=e[c];if(d)for(let h=0,g=d.length,u;h<g&&(u=d[h]);h++)(!u.info||u.info.lastRun!==i)&&(!a||$r(n,u.trigger))&&(u.info&&(u.info.lastRun=i),u.fn(t,n,r,s,u.info,a,o),l=!0);return l}function $r(t,e){if(e){let i=e.name;return i==t||!!(e.structured&&_n(i,t))||!!(e.wildcard&&mt(i,t))}else return!0}function di(t,e,i,n,r){let s=typeof r.method=="string"?t[r.method]:r.method,a=r.property;s?s.call(t,t.__data[a],n[a]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function bo(t,e,i,n,r){let s=t[Y.NOTIFY],a,o=_t++;for(let c in e)e[c]&&(s&&vo(t,s,o,c,i,n,r)||r&&xo(t,c,i))&&(a=!0);let l;a&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function xo(t,e,i){let n=_e(e);if(n!==e){let r=Jt(n)+"-changed";return kn(t,r,i[e],e),!0}return!1}function kn(t,e,i,n){let r={value:i,queueProperty:!0};n&&(r.path=n),O(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function wo(t,e,i,n,r,s){let o=(s?_e(e):e)!=e?e:null,l=o?re(t,o):t.__data[e];o&&l===void 0&&(l=i[e]),kn(t,r.eventName,l,o)}function Co(t,e,i,n,r){let s,a=t.detail,o=a&&a.path;o?(n=gt(i,n,o),s=a&&a.value):s=t.currentTarget[i],s=r?!s:s,(!e[Y.READ_ONLY]||!e[Y.READ_ONLY][n])&&e._setPendingPropertyOrPath(n,s,!0,!!o)&&(!a||!a.queueProperty)&&e._invalidateProperties()}function So(t,e,i,n,r){let s=t.__data[e];zt&&(s=zt(s,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,s)}function Eo(t,e,i,n){let r=t[Y.COMPUTE];if(r)if(Bs){_t++;const s=Ao(t),a=[];for(let l in e)ui(l,r,a,s,n);let o;for(;o=a.shift();)An(t,"",e,i,o)&&ui(o.methodInfo,r,a,s,n);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let s=e;for(;st(t,r,s,i,n);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),s=t.__dataPending,t.__dataPending=null}}const ko=(t,e,i)=>{let n=0,r=e.length-1,s=-1;for(;n<=r;){const a=n+r>>1,o=i.get(e[a].methodInfo)-i.get(t.methodInfo);if(o<0)n=a+1;else if(o>0)r=a-1;else{s=a;break}}s<0&&(s=r+1),e.splice(s,0,t)},ui=(t,e,i,n,r)=>{const s=r?_e(t):t,a=e[s];if(a)for(let o=0;o<a.length;o++){const l=a[o];l.info.lastRun!==_t&&(!r||$r(t,l.trigger))&&(l.info.lastRun=_t,ko(l.info,i,n))}};function Ao(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[Y.COMPUTE];let{counts:n,ready:r,total:s}=Po(t),a;for(;a=r.shift();){e.set(a,e.size);const o=i[a];o&&o.forEach(l=>{const c=l.info.methodInfo;--s,--n[c]===0&&r.push(c)})}s!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function Po(t){const e=t[En],i={},n=t[Y.COMPUTE],r=[];let s=0;for(let a in e){const o=e[a];s+=i[a]=o.args.filter(l=>!l.literal).length+(o.dynamicFn?1:0)}for(let a in n)e[a]||r.push(a);return{counts:i,ready:r,total:s}}function An(t,e,i,n,r){let s=fr(t,e,i,n,r);if(s===yt)return!1;let a=r.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,s,!0):(t[a]=s,!1)}function To(t,e,i){let n=t.__dataLinkedPaths;if(n){let r;for(let s in n){let a=n[s];mt(s,e)?(r=gt(s,a,e),t._setPendingPropertyOrPath(r,i,!0,!0)):mt(a,e)&&(r=gt(a,s,e),t._setPendingPropertyOrPath(r,i,!0,!0))}}}function rr(t,e,i,n,r,s,a){i.bindings=i.bindings||[];let o={kind:n,target:r,parts:s,literal:a,isCompound:s.length!==1};if(i.bindings.push(o),Do(o)){let{event:c,negate:d}=o.parts[0];o.listenerEvent=c||Jt(r)+"-changed",o.listenerNegate=d}let l=e.nodeInfoList.length;for(let c=0;c<o.parts.length;c++){let d=o.parts[c];d.compoundIndex=c,Fo(t,e,o,d,l)}}function Fo(t,e,i,n,r){if(!n.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let s=n.dependencies,a={index:r,binding:i,part:n,evaluator:t};for(let o=0;o<s.length;o++){let l=s[o];typeof l=="string"&&(l=Tn(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:No,info:a,trigger:l})}}}function No(t,e,i,n,r,s,a){let o=a[r.index],l=r.binding,c=r.part;if(s&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&o.__isPropertyEffectsClient&&o.__dataHasAccessor&&o.__dataHasAccessor[l.target]){let d=i[e];e=gt(c.source,l.target,e),o._setPendingPropertyOrPath(e,d,!1,!0)&&t._enqueueClient(o)}else{let d=r.evaluator._evaluateBinding(t,c,e,i,n,s);d!==yt&&Oo(t,o,l,c,d)}}function Oo(t,e,i,n,r){if(r=zo(e,r,i,n),zt&&(r=zt(r,i.target,i.kind,e)),i.kind=="attribute")t._valueToNodeAttribute(e,r,i.target);else{let s=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[s]?(!e[Y.READ_ONLY]||!e[Y.READ_ONLY][s])&&e._setPendingProperty(s,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,s,r)}}function zo(t,e,i,n){if(i.isCompound){let r=t.__dataCompoundStorage[i.target];r[n.compoundIndex]=e,e=r.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function Do(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function Io(t,e){let{nodeList:i,nodeInfoList:n}=e;if(n.length)for(let r=0;r<n.length;r++){let s=n[r],a=i[r],o=s.bindings;if(o)for(let l=0;l<o.length;l++){let c=o[l];Ro(a,c),Mo(a,t,c)}a.__dataHost=t}}function Ro(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,r=new Array(n.length);for(let a=0;a<n.length;a++)r[a]=n[a].literal;let s=e.target;i[s]=r,e.literal&&e.kind=="property"&&(s==="className"&&(t=O(t)),t[s]=e.literal)}}function Mo(t,e,i){if(i.listenerEvent){let n=i.parts[0];t.addEventListener(i.listenerEvent,function(r){Co(r,e,i.target,n.source,n.negate)})}}function hi(t,e,i,n,r,s){s=e.static||s&&(typeof s!="object"||s[e.methodName]);let a={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:s};for(let o=0,l;o<e.args.length&&(l=e.args[o]);o++)l.literal||t._addPropertyEffect(l.rootProperty,i,{fn:n,info:a,trigger:l});return s&&t._addPropertyEffect(e.methodName,i,{fn:n,info:a}),a}function fr(t,e,i,n,r){let s=t._methodHost||t,a=s[r.methodName];if(a){let o=t._marshalArgs(r.args,e,i);return o===yt?yt:a.apply(s,o)}else r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const Lo=[],Pn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Bo="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Ho="(?:'(?:[^'\\\\]|\\\\.)*')",jo='(?:"(?:[^"\\\\]|\\\\.)*")',$o="(?:"+Ho+"|"+jo+")",pi="(?:("+Pn+"|"+Bo+"|"+$o+")\\s*)",Vo="(?:"+pi+"(?:,\\s*"+pi+")*)",qo="(?:\\(\\s*(?:"+Vo+"?)\\)\\s*)",Uo="("+Pn+"\\s*"+qo+"?)",Zo="(\\[\\[|{{)\\s*",Yo="(?:]]|}})",Wo="(?:(!)\\s*)?",Jo=Zo+Wo+Uo+Yo,fi=new RegExp(Jo,"g");function mi(t){let e="";for(let i=0;i<t.length;i++){let n=t[i].literal;e+=n||""}return e}function ir(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let n={methodName:e[1],static:!0,args:Lo};if(e[2].trim()){let r=e[2].replace(/\\,/g,"&comma;").split(",");return Go(r,n)}else return n}return null}function Go(t,e){return e.args=t.map(function(i){let n=Tn(i);return n.literal||(e.static=!1),n},this),e}function Tn(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},n=e[0];switch(n==="-"&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0;break}return i.literal||(i.rootProperty=_e(e),i.structured=hr(e),i.structured&&(i.wildcard=e.slice(-2)==".*",i.wildcard&&(i.name=e.slice(0,-2)))),i}function gi(t,e,i){let n=re(t,i);return n===void 0&&(n=e[i]),n}function Fn(t,e,i,n){const r={indexSplices:n};dr&&!t._overrideLegacyUndefined&&(e.splices=r),t.notifyPath(i+".splices",r),t.notifyPath(i+".length",e.length),dr&&!t._overrideLegacyUndefined&&(r.indexSplices=[])}function et(t,e,i,n,r,s){Fn(t,e,i,[{index:n,addedCount:r,removed:s,object:e,type:"splice"}])}function Xo(t){return t[0].toUpperCase()+t.substring(1)}const Gt=ae(t=>{const e=_o(Cn(t));class i extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Y}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(tt.length){let r=tt[tt.length-1];r._enqueueClient(this),this.__dataHost=r}}_initializeProtoProperties(r){this.__data=Object.create(r),this.__dataPending=Object.create(r),this.__dataOld={}}_initializeInstanceProperties(r){let s=this[Y.READ_ONLY];for(let a in r)(!s||!s[a])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=r[a])}_addPropertyEffect(r,s,a){this._createPropertyAccessor(r,s==Y.READ_ONLY);let o=tr(this,s,!0)[r];o||(o=this[s][r]=[]),o.push(a)}_removePropertyEffect(r,s,a){let o=tr(this,s,!0)[r],l=o.indexOf(a);l>=0&&o.splice(l,1)}_hasPropertyEffect(r,s){let a=this[s];return!!(a&&a[r])}_hasReadOnlyEffect(r){return this._hasPropertyEffect(r,Y.READ_ONLY)}_hasNotifyEffect(r){return this._hasPropertyEffect(r,Y.NOTIFY)}_hasReflectEffect(r){return this._hasPropertyEffect(r,Y.REFLECT)}_hasComputedEffect(r){return this._hasPropertyEffect(r,Y.COMPUTE)}_setPendingPropertyOrPath(r,s,a,o){if(o||_e(Array.isArray(r)?r[0]:r)!==r){if(!o){let l=re(this,r);if(r=ai(this,r,s),!r||!super._shouldPropertyChange(r,s,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(r,s,a))return To(this,r,s),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[r])return this._setPendingProperty(r,s,a);this[r]=s}return!1}_setUnmanagedPropertyToNode(r,s,a){(a!==r[s]||typeof a=="object")&&(s==="className"&&(r=O(r)),r[s]=a)}_setPendingProperty(r,s,a){let o=this.__dataHasPaths&&hr(r),l=o?this.__dataTemp:this.__data;return this._shouldPropertyChange(r,s,l[r])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),r in this.__dataOld||(this.__dataOld[r]=this.__data[r]),o?this.__dataTemp[r]=s:this.__data[r]=s,this.__dataPending[r]=s,(o||this[Y.NOTIFY]&&this[Y.NOTIFY][r])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[r]=a),!0):!1}_setProperty(r,s){this._setPendingProperty(r,s,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(r){this.__dataPendingClients=this.__dataPendingClients||[],r!==this&&this.__dataPendingClients.push(r)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let r=this.__dataPendingClients;if(r){this.__dataPendingClients=null;for(let s=0;s<r.length;s++){let a=r[s];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(r,s){for(let a in r)(s||!this[Y.READ_ONLY]||!this[Y.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,r[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(r,s,a){let o=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Eo(this,s,a,o),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(s,a,o),this._flushClients(),st(this,this[Y.REFLECT],s,a,o),st(this,this[Y.OBSERVE],s,a,o),l&&bo(this,l,s,a,o),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(r,s,a){this[Y.PROPAGATE]&&st(this,this[Y.PROPAGATE],r,s,a),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,r,s,a)}_runEffectsForTemplate(r,s,a,o){const l=(c,d)=>{st(this,r.propertyEffects,c,a,d,r.nodeList);for(let h=r.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,c,a,d)};r.runEffects?r.runEffects(l,s,o):l(s,o)}linkPaths(r,s){r=nt(r),s=nt(s),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[r]=s}unlinkPaths(r){r=nt(r),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[r]}notifySplices(r,s){let a={path:""},o=re(this,r,a);Fn(this,o,a.path,s)}get(r,s){return re(s||this,r)}set(r,s,a){a?ai(a,r,s):(!this[Y.READ_ONLY]||!this[Y.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,s,!0)&&this._invalidateProperties()}push(r,...s){let a={path:""},o=re(this,r,a),l=o.length,c=o.push(...s);return s.length&&et(this,o,a.path,l,s.length,[]),c}pop(r){let s={path:""},a=re(this,r,s),o=!!a.length,l=a.pop();return o&&et(this,a,s.path,a.length,0,[l]),l}splice(r,s,a,...o){let l={path:""},c=re(this,r,l);s<0?s=c.length-Math.floor(-s):s&&(s=Math.floor(s));let d;return arguments.length===2?d=c.splice(s):d=c.splice(s,a,...o),(o.length||d.length)&&et(this,c,l.path,s,o.length,d),d}shift(r){let s={path:""},a=re(this,r,s),o=!!a.length,l=a.shift();return o&&et(this,a,s.path,0,0,[l]),l}unshift(r,...s){let a={path:""},o=re(this,r,a),l=o.unshift(...s);return s.length&&et(this,o,a.path,0,s.length,[]),l}notifyPath(r,s){let a;if(arguments.length==1){let o={path:""};s=re(this,r,o),a=o.path}else Array.isArray(r)?a=nt(r):a=r;this._setPendingPropertyOrPath(a,s,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(r,s){this._addPropertyEffect(r,Y.READ_ONLY),s&&(this["_set"+Xo(r)]=function(a){this._setProperty(r,a)})}_createPropertyObserver(r,s,a){let o={property:r,method:s,dynamicFn:!!a};this._addPropertyEffect(r,Y.OBSERVE,{fn:di,info:o,trigger:{name:r}}),a&&this._addPropertyEffect(s,Y.OBSERVE,{fn:di,info:o,trigger:{name:s}})}_createMethodObserver(r,s){let a=ir(r);if(!a)throw new Error("Malformed observer expression '"+r+"'");hi(this,a,Y.OBSERVE,fr,null,s)}_createNotifyingProperty(r){this._addPropertyEffect(r,Y.NOTIFY,{fn:wo,info:{eventName:Jt(r)+"-changed",property:r}})}_createReflectedProperty(r){let s=this.constructor.attributeNameForProperty(r);s[0]==="-"?console.warn("Property "+r+" cannot be reflected to attribute "+s+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(r,Y.REFLECT,{fn:So,info:{attrName:s}})}_createComputedProperty(r,s,a){let o=ir(s);if(!o)throw new Error("Malformed computed expression '"+s+"'");const l=hi(this,o,Y.COMPUTE,An,r,a);tr(this,En)[r]=l}_marshalArgs(r,s,a){const o=this.__data,l=[];for(let c=0,d=r.length;c<d;c++){let{name:h,structured:g,wildcard:u,value:p,literal:y}=r[c];if(!y)if(u){const f=mt(h,s),m=gi(o,a,f?s:h);p={path:f?s:h,value:m,base:f?re(o,h):m}}else p=g?gi(o,a,h):o[h];if(dr&&!this._overrideLegacyUndefined&&p===void 0&&r.length>1)return yt;l[c]=p}return l}static addPropertyEffect(r,s,a){this.prototype._addPropertyEffect(r,s,a)}static createPropertyObserver(r,s,a){this.prototype._createPropertyObserver(r,s,a)}static createMethodObserver(r,s){this.prototype._createMethodObserver(r,s)}static createNotifyingProperty(r){this.prototype._createNotifyingProperty(r)}static createReadOnlyProperty(r,s){this.prototype._createReadOnlyProperty(r,s)}static createReflectedProperty(r){this.prototype._createReflectedProperty(r)}static createComputedProperty(r,s,a){this.prototype._createComputedProperty(r,s,a)}static bindTemplate(r){return this.prototype._bindTemplate(r)}_bindTemplate(r,s){let a=this.constructor._parseTemplate(r),o=this.__preBoundTemplateInfo==a;if(!o)for(let l in a.propertyEffects)this._createPropertyAccessor(l);if(s)if(a=Object.create(a),a.wasPreBound=o,!this.__templateInfo)this.__templateInfo=a;else{const l=r._parentTemplateInfo||this.__templateInfo,c=l.lastChild;a.parent=l,l.lastChild=a,a.previousSibling=c,c?c.nextSibling=a:l.firstChild=a}else this.__preBoundTemplateInfo=a;return a}static _addTemplatePropertyEffect(r,s,a){let o=r.hostProps=r.hostProps||{};o[s]=!0;let l=r.propertyEffects=r.propertyEffects||{};(l[s]=l[s]||[]).push(a)}_stampTemplate(r,s){s=s||this._bindTemplate(r,!0),tt.push(this);let a=super._stampTemplate(r,s);if(tt.pop(),s.nodeList=a.nodeList,!s.wasPreBound){let o=s.childNodes=[];for(let l=a.firstChild;l;l=l.nextSibling)o.push(l)}return a.templateInfo=s,Io(this,s),this.__dataClientsReady&&(this._runEffectsForTemplate(s,this.__data,null,!1),this._flushClients()),a}_removeBoundDom(r){const s=r.templateInfo,{previousSibling:a,nextSibling:o,parent:l}=s;a?a.nextSibling=o:l&&(l.firstChild=o),o?o.previousSibling=a:l&&(l.lastChild=a),s.nextSibling=s.previousSibling=null;let c=s.childNodes;for(let d=0;d<c.length;d++){let h=c[d];O(O(h).parentNode).removeChild(h)}}static _parseTemplateNode(r,s,a){let o=e._parseTemplateNode.call(this,r,s,a);if(r.nodeType===Node.TEXT_NODE){let l=this._parseBindings(r.textContent,s);l&&(r.textContent=mi(l)||" ",rr(this,s,a,"text","textContent",l),o=!0)}return o}static _parseTemplateNodeAttribute(r,s,a,o,l){let c=this._parseBindings(l,s);if(c){let d=o,h="property";yo.test(o)?h="attribute":o[o.length-1]=="$"&&(o=o.slice(0,-1),h="attribute");let g=mi(c);return g&&h=="attribute"&&(o=="class"&&r.hasAttribute("class")&&(g+=" "+r.getAttribute(o)),r.setAttribute(o,g)),h=="attribute"&&d=="disable-upgrade$"&&r.setAttribute(o,""),r.localName==="input"&&d==="value"&&r.setAttribute(d,""),r.removeAttribute(d),h==="property"&&(o=jr(o)),rr(this,s,a,h,o,c,g),!0}else return e._parseTemplateNodeAttribute.call(this,r,s,a,o,l)}static _parseTemplateNestedTemplate(r,s,a){let o=e._parseTemplateNestedTemplate.call(this,r,s,a);const l=r.parentNode,c=a.templateInfo,d=l.localName==="dom-if",h=l.localName==="dom-repeat";ri&&(d||h)&&(l.removeChild(r),a=a.parentInfo,a.templateInfo=c,a.noted=!0,o=!1);let g=c.hostProps;if(mn&&d)g&&(s.hostProps=Object.assign(s.hostProps||{},g),ri||(a.parentInfo.noted=!0));else{let u="{";for(let p in g){let y=[{mode:u,source:p,dependencies:[p],hostProp:!0}];rr(this,s,a,"property","_host_"+p,y)}}return o}static _parseBindings(r,s){let a=[],o=0,l;for(;(l=fi.exec(r))!==null;){l.index>o&&a.push({literal:r.slice(o,l.index)});let c=l[1][0],d=!!l[2],h=l[3].trim(),g=!1,u="",p=-1;c=="{"&&(p=h.indexOf("::"))>0&&(u=h.substring(p+2),h=h.substring(0,p),g=!0);let y=ir(h),f=[];if(y){let{args:m,methodName:_}=y;for(let C=0;C<m.length;C++){let w=m[C];w.literal||f.push(w)}let x=s.dynamicFns;(x&&x[_]||y.static)&&(f.push(_),y.dynamicFn=!0)}else f.push(h);a.push({source:h,mode:c,negate:d,customEvent:g,signature:y,dependencies:f,event:u}),o=fi.lastIndex}if(o&&o<r.length){let c=r.substring(o);c&&a.push({literal:c})}return a.length?a:null}static _evaluateBinding(r,s,a,o,l,c){let d;return s.signature?d=fr(r,a,o,l,s.signature):a!=s.source?d=re(r,s.source):c&&hr(a)?d=re(r,a):d=r.__data[a],s.negate&&(d=!d),d}}return i}),tt=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ko(t){const e={};for(let i in t){const n=t[i];e[i]=typeof n=="function"?{type:n}:n}return e}const Qo=ae(t=>{const e=xn(t);function i(s){const a=Object.getPrototypeOf(s);return a.prototype instanceof r?a:null}function n(s){if(!s.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",s))){let a=null;if(s.hasOwnProperty(JSCompiler_renameProperty("properties",s))){const o=s.properties;o&&(a=Ko(o))}s.__ownProperties=a}return s.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const a=this._properties;this.__observedAttributes=a?Object.keys(a).map(o=>this.prototype._addPropertyToAttributeMap(o)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const a=i(this);a&&a.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const a=n(this);a&&this.createProperties(a)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const a=i(this);this.__properties=Object.assign({},a&&a._properties,n(this))}return this.__properties}static typeForProperty(a){const o=this._properties[a];return o&&o.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const ea="3.5.2",mr=window.ShadyCSS&&window.ShadyCSS.cssBuild,Xt=ae(t=>{const e=Qo(Gt(t));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let d in c){let h=c[d];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[d]=h)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function r(l,c,d,h){d.computed&&(d.readOnly=!0),d.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,d.computed,h)),d.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!d.computed):d.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),d.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):d.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),d.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):d.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),d.observer&&l._createPropertyObserver(c,d.observer,h[d.observer]),l._addPropertyToAttributeMap(c)}function s(l,c,d,h){if(!mr){const g=c.content.querySelectorAll("style"),u=Br(c),p=Ys(d),y=c.content.firstElementChild;for(let m=0;m<p.length;m++){let _=p[m];_.textContent=l._processStyleText(_.textContent,h),c.content.insertBefore(_,y)}let f=0;for(let m=0;m<u.length;m++){let _=u[m],x=g[f];x!==_?(_=_.cloneNode(!0),x.parentNode.insertBefore(_,x)):f++,_.textContent=l._processStyleText(_.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,d),Hs&&mr&&Ds){const g=c.content.querySelectorAll("style");if(g){let u="";Array.from(g).forEach(p=>{u+=p.textContent,p.parentNode.removeChild(p)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(u)}}}function a(l){let c=null;if(l&&(!qe||Ms)&&(c=ft.import(l,"template"),qe&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class o extends e{static get polymerElementVersion(){return ea}static _finalizeClass(){e._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):pt||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let d in c)r(this.prototype,d,c[d],c)}static createObservers(c,d){const h=this.prototype;for(let g=0;g<c.length;g++)h._createMethodObserver(c[g],d)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&a(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=Ir(c.url);else{const d=ft.import(this.is);this._importPath=d&&d.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Is,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let d in c){let h=c[d];if(this._canApplyPropertyDefault(d)){let g=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(d)?this._setPendingProperty(d,g,!0):this[d]=g}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,d){return Dr(c,d)}static _finalizeTemplate(c){const d=this.prototype._template;if(d&&!d.__polymerFinalized){d.__polymerFinalized=!0;const h=this.importPath,g=h?lt(h):"";s(this,d,c,g),this.prototype._bindTemplate(d)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const d=O(this);if(d.attachShadow)return c?(d.shadowRoot||(d.attachShadow({mode:"open",shadyUpgradeFragment:c}),d.shadowRoot.appendChild(c),this.constructor._styleSheet&&(d.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Ls&&window.ShadyDOM&&window.ShadyDOM.flushInitial(d.shadowRoot),d.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,d){return!d&&this.importPath&&(d=lt(this.importPath)),lt(c,d)}static _parseTemplateContent(c,d,h){return d.dynamicFns=d.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,d,h)}static _addTemplatePropertyEffect(c,d,h){return fn&&!(d in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${d}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,d,h)}}return o});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _i=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class Nn{constructor(e,i){zn(e,i);const n=i.reduce((r,s,a)=>r+On(s)+e[a+1],e[0]);this.value=n.toString()}toString(){return this.value}}function On(t){if(t instanceof Nn)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function ta(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Nn)return On(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const Te=function(e,...i){zn(e,i);const n=document.createElement("template");let r=i.reduce((s,a,o)=>s+ta(a)+e[o+1],e[0]);return _i&&(r=_i.createHTML(r)),n.innerHTML=r,n},zn=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ye=Xt(HTMLElement);(function(){var t={},e={};(function(i,n){function r(S){if(typeof S=="number")return S;var D={};for(var R in S)D[R]=S[R];return D}function s(){this._delay=0,this._endDelay=0,this._fill="none",this._iterationStart=0,this._iterations=1,this._duration=0,this._playbackRate=1,this._direction="normal",this._easing="linear",this._easingFunction=P}function a(){return i.isDeprecated("Invalid timing inputs","2016-03-02","TypeError exceptions will be thrown instead.",!0)}function o(S,D,R){var $=new s;return D&&($.fill="both",$.duration="auto"),typeof S!="number"||isNaN(S)?S!==void 0&&Object.getOwnPropertyNames(S).forEach(function(j){if(S[j]!="auto"){if((typeof $[j]=="number"||j=="duration")&&(typeof S[j]!="number"||isNaN(S[j]))||j=="fill"&&b.indexOf(S[j])==-1||j=="direction"&&A.indexOf(S[j])==-1||j=="playbackRate"&&S[j]!==1&&i.isDeprecated("AnimationEffectTiming.playbackRate","2014-11-28","Use Animation.playbackRate instead."))return;$[j]=S[j]}}):$.duration=S,$}function l(S){return typeof S=="number"&&(S=isNaN(S)?{duration:0}:{duration:S}),S}function c(S,D){return S=i.numericTimingToObject(S),o(S,D)}function d(S,D,R,$){return S<0||S>1||R<0||R>1?P:function(j){function G(Fs,Ns,fe){return 3*Fs*(1-fe)*(1-fe)*fe+3*Ns*(1-fe)*fe*fe+fe*fe*fe}if(j<=0){var ee=0;return S>0?ee=D/S:!D&&R>0&&(ee=$/R),ee*j}if(j>=1){var be=0;return R<1?be=($-1)/(R-1):R==1&&S<1&&(be=(D-1)/(S-1)),1+be*(j-1)}for(var Oe=0,Ke=1;Oe<Ke;){var Qe=(Oe+Ke)/2,ti=G(S,R,Qe);if(Math.abs(j-ti)<1e-5)return G(D,$,Qe);ti<j?Oe=Qe:Ke=Qe}return G(D,$,Qe)}}function h(S,D){return function(R){if(R>=1)return 1;var $=1/S;return(R+=D*$)-R%$}}function g(S){L||(L=document.createElement("div").style),L.animationTimingFunction="",L.animationTimingFunction=S;var D=L.animationTimingFunction;if(D==""&&a())throw new TypeError(S+" is not a valid value for easing");return D}function u(S){if(S=="linear")return P;var D=K.exec(S);if(D)return d.apply(this,D.slice(1).map(Number));var R=q.exec(S);if(R)return h(Number(R[1]),M);var $=Q.exec(S);return $?h(Number($[1]),{start:I,middle:z,end:M}[$[2]]):E[S]||P}function p(S){return Math.abs(y(S)/S.playbackRate)}function y(S){return S.duration===0||S.iterations===0?0:S.duration*S.iterations}function f(S,D,R){if(D==null)return ne;var $=R.delay+S+R.endDelay;return D<Math.min(R.delay,$)?de:D>=Math.min(R.delay+S,$)?le:Xe}function m(S,D,R,$,j){switch($){case de:return D=="backwards"||D=="both"?0:null;case Xe:return R-j;case le:return D=="forwards"||D=="both"?S:null;case ne:return null}}function _(S,D,R,$,j){var G=j;return S===0?D!==de&&(G+=R):G+=$/S,G}function x(S,D,R,$,j,G){var ee=S===1/0?D%1:S%1;return ee!==0||R!==le||$===0||j===0&&G!==0||(ee=1),ee}function C(S,D,R,$){return S===le&&D===1/0?1/0:R===1?Math.floor($)-1:Math.floor($)}function w(S,D,R){var $=S;if(S!=="normal"&&S!=="reverse"){var j=D;S==="alternate-reverse"&&(j+=1),$="normal",j!==1/0&&j%2!=0&&($="reverse")}return $==="normal"?R:1-R}function v(S,D,R){var $=f(S,D,R),j=m(S,R.fill,D,$,R.delay);if(j===null)return null;var G=_(R.duration,$,R.iterations,j,R.iterationStart),ee=x(G,R.iterationStart,$,R.iterations,j,R.duration),be=C($,R.iterations,ee,G),Oe=w(R.direction,be,ee);return R._easingFunction(Oe)}var b="backwards|forwards|both|none".split("|"),A="reverse|alternate|alternate-reverse".split("|"),P=function(S){return S};s.prototype={_setMember:function(S,D){this["_"+S]=D,this._effect&&(this._effect._timingInput[S]=D,this._effect._timing=i.normalizeTimingInput(this._effect._timingInput),this._effect.activeDuration=i.calculateActiveDuration(this._effect._timing),this._effect._animation&&this._effect._animation._rebuildUnderlyingAnimation())},get playbackRate(){return this._playbackRate},set delay(S){this._setMember("delay",S)},get delay(){return this._delay},set endDelay(S){this._setMember("endDelay",S)},get endDelay(){return this._endDelay},set fill(S){this._setMember("fill",S)},get fill(){return this._fill},set iterationStart(S){if((isNaN(S)||S<0)&&a())throw new TypeError("iterationStart must be a non-negative number, received: "+S);this._setMember("iterationStart",S)},get iterationStart(){return this._iterationStart},set duration(S){if(S!="auto"&&(isNaN(S)||S<0)&&a())throw new TypeError("duration must be non-negative or auto, received: "+S);this._setMember("duration",S)},get duration(){return this._duration},set direction(S){this._setMember("direction",S)},get direction(){return this._direction},set easing(S){this._easingFunction=u(g(S)),this._setMember("easing",S)},get easing(){return this._easing},set iterations(S){if((isNaN(S)||S<0)&&a())throw new TypeError("iterations must be non-negative, received: "+S);this._setMember("iterations",S)},get iterations(){return this._iterations}};var I=1,z=.5,M=0,E={ease:d(.25,.1,.25,1),"ease-in":d(.42,0,1,1),"ease-out":d(0,0,.58,1),"ease-in-out":d(.42,0,.58,1),"step-start":h(1,I),"step-middle":h(1,z),"step-end":h(1,M)},L=null,Z="\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",K=new RegExp("cubic-bezier\\("+Z+","+Z+","+Z+","+Z+"\\)"),q=/steps\(\s*(\d+)\s*\)/,Q=/steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,ne=0,de=1,le=2,Xe=3;i.cloneTimingInput=r,i.makeTiming=o,i.numericTimingToObject=l,i.normalizeTimingInput=c,i.calculateActiveDuration=p,i.calculateIterationProgress=v,i.calculatePhase=f,i.normalizeEasing=g,i.parseEasingFunction=u})(t),(function(i,n){function r(u,p){return u in g&&g[u][p]||p}function s(u){return u==="display"||u.lastIndexOf("animation",0)===0||u.lastIndexOf("transition",0)===0}function a(u,p,y){if(!s(u)){var f=c[u];if(f){d.style[u]=p;for(var m in f){var _=f[m],x=d.style[_];y[_]=r(_,x)}}else y[u]=r(u,p)}}function o(u){var p=[];for(var y in u)if(!(y in["easing","offset","composite"])){var f=u[y];Array.isArray(f)||(f=[f]);for(var m,_=f.length,x=0;x<_;x++)m={},m.offset="offset"in u?u.offset:_==1?1:x/(_-1),"easing"in u&&(m.easing=u.easing),"composite"in u&&(m.composite=u.composite),m[y]=f[x],p.push(m)}return p.sort(function(C,w){return C.offset-w.offset}),p}function l(u){function p(){var C=y.length;y[C-1].offset==null&&(y[C-1].offset=1),C>1&&y[0].offset==null&&(y[0].offset=0);for(var w=0,v=y[0].offset,b=1;b<C;b++){var A=y[b].offset;if(A!=null){for(var P=1;P<b-w;P++)y[w+P].offset=v+(A-v)*P/(b-w);w=b,v=A}}}if(u==null)return[];window.Symbol&&Symbol.iterator&&Array.prototype.from&&u[Symbol.iterator]&&(u=Array.from(u)),Array.isArray(u)||(u=o(u));for(var y=u.map(function(C){var w={};for(var v in C){var b=C[v];if(v=="offset"){if(b!=null){if(b=Number(b),!isFinite(b))throw new TypeError("Keyframe offsets must be numbers.");if(b<0||b>1)throw new TypeError("Keyframe offsets must be between 0 and 1.")}}else if(v=="composite"){if(b=="add"||b=="accumulate")throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"add compositing is not supported"};if(b!="replace")throw new TypeError("Invalid composite mode "+b+".")}else b=v=="easing"?i.normalizeEasing(b):""+b;a(v,b,w)}return w.offset==null&&(w.offset=null),w.easing==null&&(w.easing="linear"),w}),f=!0,m=-1/0,_=0;_<y.length;_++){var x=y[_].offset;if(x!=null){if(x<m)throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");m=x}else f=!1}return y=y.filter(function(C){return C.offset>=0&&C.offset<=1}),f||p(),y}var c={background:["backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat","backgroundAttachment","backgroundOrigin","backgroundClip","backgroundColor"],border:["borderTopColor","borderTopStyle","borderTopWidth","borderRightColor","borderRightStyle","borderRightWidth","borderBottomColor","borderBottomStyle","borderBottomWidth","borderLeftColor","borderLeftStyle","borderLeftWidth"],borderBottom:["borderBottomWidth","borderBottomStyle","borderBottomColor"],borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderLeft:["borderLeftWidth","borderLeftStyle","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderRight:["borderRightWidth","borderRightStyle","borderRightColor"],borderTop:["borderTopWidth","borderTopStyle","borderTopColor"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],flex:["flexGrow","flexShrink","flexBasis"],font:["fontFamily","fontSize","fontStyle","fontVariant","fontWeight","lineHeight"],margin:["marginTop","marginRight","marginBottom","marginLeft"],outline:["outlineColor","outlineStyle","outlineWidth"],padding:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},d=document.createElementNS("http://www.w3.org/1999/xhtml","div"),h={thin:"1px",medium:"3px",thick:"5px"},g={borderBottomWidth:h,borderLeftWidth:h,borderRightWidth:h,borderTopWidth:h,fontSize:{"xx-small":"60%","x-small":"75%",small:"89%",medium:"100%",large:"120%","x-large":"150%","xx-large":"200%"},fontWeight:{normal:"400",bold:"700"},outlineWidth:h,textShadow:{none:"0px 0px 0px transparent"},boxShadow:{none:"0px 0px 0px 0px transparent"}};i.convertToArrayForm=o,i.normalizeKeyframes=l})(t),(function(i){var n={};i.isDeprecated=function(r,s,a,o){var l=o?"are":"is",c=new Date,d=new Date(s);return d.setMonth(d.getMonth()+3),!(c<d&&(r in n||console.warn("Web Animations: "+r+" "+l+" deprecated and will stop working on "+d.toDateString()+". "+a),n[r]=!0,1))},i.deprecated=function(r,s,a,o){var l=o?"are":"is";if(i.isDeprecated(r,s,a,o))throw new Error(r+" "+l+" no longer supported. "+a)}})(t),(function(){if(document.documentElement.animate){var i=document.documentElement.animate([],0),n=!0;if(i&&(n=!1,"play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function(r){i[r]===void 0&&(n=!0)})),!n)return}(function(r,s,a){function o(c){for(var d={},h=0;h<c.length;h++)for(var g in c[h])if(g!="offset"&&g!="easing"&&g!="composite"){var u={offset:c[h].offset,easing:c[h].easing,value:c[h][g]};d[g]=d[g]||[],d[g].push(u)}for(var p in d){var y=d[p];if(y[0].offset!=0||y[y.length-1].offset!=1)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"Partial keyframes are not supported"}}return d}function l(c){var d=[];for(var h in c)for(var g=c[h],u=0;u<g.length-1;u++){var p=u,y=u+1,f=g[p].offset,m=g[y].offset,_=f,x=m;u==0&&(_=-1/0,m==0&&(y=p)),u==g.length-2&&(x=1/0,f==1&&(p=y)),d.push({applyFrom:_,applyTo:x,startOffset:g[p].offset,endOffset:g[y].offset,easingFunction:r.parseEasingFunction(g[p].easing),property:h,interpolation:s.propertyInterpolation(h,g[p].value,g[y].value)})}return d.sort(function(C,w){return C.startOffset-w.startOffset}),d}s.convertEffectInput=function(c){var d=r.normalizeKeyframes(c),h=o(d),g=l(h);return function(u,p){if(p!=null)g.filter(function(f){return p>=f.applyFrom&&p<f.applyTo}).forEach(function(f){var m=p-f.startOffset,_=f.endOffset-f.startOffset,x=_==0?0:f.easingFunction(m/_);s.apply(u,f.property,f.interpolation(x))});else for(var y in h)y!="offset"&&y!="easing"&&y!="composite"&&s.clear(u,y)}}})(t,e),(function(r,s,a){function o(u){return u.replace(/-(.)/g,function(p,y){return y.toUpperCase()})}function l(u,p,y){h[y]=h[y]||[],h[y].push([u,p])}function c(u,p,y){for(var f=0;f<y.length;f++)l(u,p,o(y[f]))}function d(u,p,y){var f=u;/-/.test(u)&&!r.isDeprecated("Hyphenated property names","2016-03-22","Use camelCase instead.",!0)&&(f=o(u)),p!="initial"&&y!="initial"||(p=="initial"&&(p=g[f]),y=="initial"&&(y=g[f]));for(var m=p==y?[]:h[f],_=0;m&&_<m.length;_++){var x=m[_][0](p),C=m[_][0](y);if(x!==void 0&&C!==void 0){var w=m[_][1](x,C);if(w){var v=s.Interpolation.apply(null,w);return function(b){return b==0?p:b==1?y:v(b)}}}}return s.Interpolation(!1,!0,function(b){return b?y:p})}var h={};s.addPropertiesHandler=c;var g={backgroundColor:"transparent",backgroundPosition:"0% 0%",borderBottomColor:"currentColor",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",borderBottomWidth:"3px",borderLeftColor:"currentColor",borderLeftWidth:"3px",borderRightColor:"currentColor",borderRightWidth:"3px",borderSpacing:"2px",borderTopColor:"currentColor",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderTopWidth:"3px",bottom:"auto",clip:"rect(0px, 0px, 0px, 0px)",color:"black",fontSize:"100%",fontWeight:"400",height:"auto",left:"auto",letterSpacing:"normal",lineHeight:"120%",marginBottom:"0px",marginLeft:"0px",marginRight:"0px",marginTop:"0px",maxHeight:"none",maxWidth:"none",minHeight:"0px",minWidth:"0px",opacity:"1.0",outlineColor:"invert",outlineOffset:"0px",outlineWidth:"3px",paddingBottom:"0px",paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",right:"auto",strokeDasharray:"none",strokeDashoffset:"0px",textIndent:"0px",textShadow:"0px 0px 0px transparent",top:"auto",transform:"",verticalAlign:"0px",visibility:"visible",width:"auto",wordSpacing:"normal",zIndex:"auto"};s.propertyInterpolation=d})(t,e),(function(r,s,a){function o(l){var c=r.calculateActiveDuration(l),d=function(h){return r.calculateIterationProgress(c,h,l)};return d._totalDuration=l.delay+c+l.endDelay,d}s.KeyframeEffect=function(l,c,d,h){var g,u=o(r.normalizeTimingInput(d)),p=s.convertEffectInput(c),y=function(){p(l,g)};return y._update=function(f){return(g=u(f))!==null},y._clear=function(){p(l,null)},y._hasSameTarget=function(f){return l===f},y._target=l,y._totalDuration=u._totalDuration,y._id=h,y}})(t,e),(function(r,s){function a(f,m){return!(!m.namespaceURI||m.namespaceURI.indexOf("/svg")==-1)&&(d in f||(f[d]=/Trident|MSIE|IEMobile|Edge|Android 4/i.test(f.navigator.userAgent)),f[d])}function o(f,m,_){_.enumerable=!0,_.configurable=!0,Object.defineProperty(f,m,_)}function l(f){this._element=f,this._surrogateStyle=document.createElementNS("http://www.w3.org/1999/xhtml","div").style,this._style=f.style,this._length=0,this._isAnimatedProperty={},this._updateSvgTransformAttr=a(window,f),this._savedTransformAttr=null;for(var m=0;m<this._style.length;m++){var _=this._style[m];this._surrogateStyle[_]=this._style[_]}this._updateIndices()}function c(f){if(!f._webAnimationsPatchedStyle){var m=new l(f);try{o(f,"style",{get:function(){return m}})}catch{f.style._set=function(x,C){f.style[x]=C},f.style._clear=function(x){f.style[x]=""}}f._webAnimationsPatchedStyle=f.style}}var d="_webAnimationsUpdateSvgTransformAttr",h={cssText:1,length:1,parentRule:1},g={getPropertyCSSValue:1,getPropertyPriority:1,getPropertyValue:1,item:1,removeProperty:1,setProperty:1},u={removeProperty:1,setProperty:1};l.prototype={get cssText(){return this._surrogateStyle.cssText},set cssText(f){for(var m={},_=0;_<this._surrogateStyle.length;_++)m[this._surrogateStyle[_]]=!0;this._surrogateStyle.cssText=f,this._updateIndices();for(var _=0;_<this._surrogateStyle.length;_++)m[this._surrogateStyle[_]]=!0;for(var x in m)this._isAnimatedProperty[x]||this._style.setProperty(x,this._surrogateStyle.getPropertyValue(x))},get length(){return this._surrogateStyle.length},get parentRule(){return this._style.parentRule},_updateIndices:function(){for(;this._length<this._surrogateStyle.length;)Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,get:(function(f){return function(){return this._surrogateStyle[f]}})(this._length)}),this._length++;for(;this._length>this._surrogateStyle.length;)this._length--,Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,value:void 0})},_set:function(f,m){this._style[f]=m,this._isAnimatedProperty[f]=!0,this._updateSvgTransformAttr&&r.unprefixedPropertyName(f)=="transform"&&(this._savedTransformAttr==null&&(this._savedTransformAttr=this._element.getAttribute("transform")),this._element.setAttribute("transform",r.transformToSvgMatrix(m)))},_clear:function(f){this._style[f]=this._surrogateStyle[f],this._updateSvgTransformAttr&&r.unprefixedPropertyName(f)=="transform"&&(this._savedTransformAttr?this._element.setAttribute("transform",this._savedTransformAttr):this._element.removeAttribute("transform"),this._savedTransformAttr=null),delete this._isAnimatedProperty[f]}};for(var p in g)l.prototype[p]=(function(f,m){return function(){var _=this._surrogateStyle[f].apply(this._surrogateStyle,arguments);return m&&(this._isAnimatedProperty[arguments[0]]||this._style[f].apply(this._style,arguments),this._updateIndices()),_}})(p,p in u);for(var y in document.documentElement.style)y in h||y in g||(function(f){o(l.prototype,f,{get:function(){return this._surrogateStyle[f]},set:function(m){this._surrogateStyle[f]=m,this._updateIndices(),this._isAnimatedProperty[f]||(this._style[f]=m)}})})(y);r.apply=function(f,m,_){c(f),f.style._set(r.propertyName(m),_)},r.clear=function(f,m){f._webAnimationsPatchedStyle&&f.style._clear(r.propertyName(m))}})(e),(function(r){window.Element.prototype.animate=function(s,a){var o="";return a&&a.id&&(o=a.id),r.timeline._play(r.KeyframeEffect(this,s,a,o))}})(e),(function(r,s){function a(o,l,c){if(typeof o=="number"&&typeof l=="number")return o*(1-c)+l*c;if(typeof o=="boolean"&&typeof l=="boolean")return c<.5?o:l;if(o.length==l.length){for(var d=[],h=0;h<o.length;h++)d.push(a(o[h],l[h],c));return d}throw"Mismatched interpolation arguments "+o+":"+l}r.Interpolation=function(o,l,c){return function(d){return c(a(o,l,d))}}})(e),(function(r,s){function a(c,d,h){return Math.max(Math.min(c,h),d)}function o(c,d,h){var g=r.dot(c,d);g=a(g,-1,1);var u=[];if(g===1)u=c;else for(var p=Math.acos(g),y=1*Math.sin(h*p)/Math.sqrt(1-g*g),f=0;f<4;f++)u.push(c[f]*(Math.cos(h*p)-g*y)+d[f]*y);return u}var l=(function(){function c(g,u){for(var p=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],y=0;y<4;y++)for(var f=0;f<4;f++)for(var m=0;m<4;m++)p[y][f]+=u[y][m]*g[m][f];return p}function d(g){return g[0][2]==0&&g[0][3]==0&&g[1][2]==0&&g[1][3]==0&&g[2][0]==0&&g[2][1]==0&&g[2][2]==1&&g[2][3]==0&&g[3][2]==0&&g[3][3]==1}function h(g,u,p,y,f){for(var m=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],_=0;_<4;_++)m[_][3]=f[_];for(var _=0;_<3;_++)for(var x=0;x<3;x++)m[3][_]+=g[x]*m[x][_];var C=y[0],w=y[1],v=y[2],b=y[3],A=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];A[0][0]=1-2*(w*w+v*v),A[0][1]=2*(C*w-v*b),A[0][2]=2*(C*v+w*b),A[1][0]=2*(C*w+v*b),A[1][1]=1-2*(C*C+v*v),A[1][2]=2*(w*v-C*b),A[2][0]=2*(C*v-w*b),A[2][1]=2*(w*v+C*b),A[2][2]=1-2*(C*C+w*w),m=c(m,A);var P=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];p[2]&&(P[2][1]=p[2],m=c(m,P)),p[1]&&(P[2][1]=0,P[2][0]=p[0],m=c(m,P)),p[0]&&(P[2][0]=0,P[1][0]=p[0],m=c(m,P));for(var _=0;_<3;_++)for(var x=0;x<3;x++)m[_][x]*=u[_];return d(m)?[m[0][0],m[0][1],m[1][0],m[1][1],m[3][0],m[3][1]]:m[0].concat(m[1],m[2],m[3])}return h})();r.composeMatrix=l,r.quat=o})(e),(function(r,s,a){r.sequenceNumber=0;var o=function(l,c,d){this.target=l,this.currentTime=c,this.timelineTime=d,this.type="finish",this.bubbles=!1,this.cancelable=!1,this.currentTarget=l,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()};s.Animation=function(l){this.id="",l&&l._id&&(this.id=l._id),this._sequenceNumber=r.sequenceNumber++,this._currentTime=0,this._startTime=null,this._paused=!1,this._playbackRate=1,this._inTimeline=!0,this._finishedFlag=!0,this.onfinish=null,this._finishHandlers=[],this._effect=l,this._inEffect=this._effect._update(0),this._idle=!0,this._currentTimePending=!1},s.Animation.prototype={_ensureAlive:function(){this.playbackRate<0&&this.currentTime===0?this._inEffect=this._effect._update(-1):this._inEffect=this._effect._update(this.currentTime),this._inTimeline||!this._inEffect&&this._finishedFlag||(this._inTimeline=!0,s.timeline._animations.push(this))},_tickCurrentTime:function(l,c){l!=this._currentTime&&(this._currentTime=l,this._isFinished&&!c&&(this._currentTime=this._playbackRate>0?this._totalDuration:0),this._ensureAlive())},get currentTime(){return this._idle||this._currentTimePending?null:this._currentTime},set currentTime(l){l=+l,isNaN(l)||(s.restart(),this._paused||this._startTime==null||(this._startTime=this._timeline.currentTime-l/this._playbackRate),this._currentTimePending=!1,this._currentTime!=l&&(this._idle&&(this._idle=!1,this._paused=!0),this._tickCurrentTime(l,!0),s.applyDirtiedAnimation(this)))},get startTime(){return this._startTime},set startTime(l){l=+l,isNaN(l)||this._paused||this._idle||(this._startTime=l,this._tickCurrentTime((this._timeline.currentTime-this._startTime)*this.playbackRate),s.applyDirtiedAnimation(this))},get playbackRate(){return this._playbackRate},set playbackRate(l){if(l!=this._playbackRate){var c=this.currentTime;this._playbackRate=l,this._startTime=null,this.playState!="paused"&&this.playState!="idle"&&(this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),s.applyDirtiedAnimation(this)),c!=null&&(this.currentTime=c)}},get _isFinished(){return!this._idle&&(this._playbackRate>0&&this._currentTime>=this._totalDuration||this._playbackRate<0&&this._currentTime<=0)},get _totalDuration(){return this._effect._totalDuration},get playState(){return this._idle?"idle":this._startTime==null&&!this._paused&&this.playbackRate!=0||this._currentTimePending?"pending":this._paused?"paused":this._isFinished?"finished":"running"},_rewind:function(){if(this._playbackRate>=0)this._currentTime=0;else{if(!(this._totalDuration<1/0))throw new DOMException("Unable to rewind negative playback rate animation with infinite duration","InvalidStateError");this._currentTime=this._totalDuration}},play:function(){this._paused=!1,(this._isFinished||this._idle)&&(this._rewind(),this._startTime=null),this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),s.applyDirtiedAnimation(this)},pause:function(){this._isFinished||this._paused||this._idle?this._idle&&(this._rewind(),this._idle=!1):this._currentTimePending=!0,this._startTime=null,this._paused=!0},finish:function(){this._idle||(this.currentTime=this._playbackRate>0?this._totalDuration:0,this._startTime=this._totalDuration-this.currentTime,this._currentTimePending=!1,s.applyDirtiedAnimation(this))},cancel:function(){this._inEffect&&(this._inEffect=!1,this._idle=!0,this._paused=!1,this._finishedFlag=!0,this._currentTime=0,this._startTime=null,this._effect._update(null),s.applyDirtiedAnimation(this))},reverse:function(){this.playbackRate*=-1,this.play()},addEventListener:function(l,c){typeof c=="function"&&l=="finish"&&this._finishHandlers.push(c)},removeEventListener:function(l,c){if(l=="finish"){var d=this._finishHandlers.indexOf(c);d>=0&&this._finishHandlers.splice(d,1)}},_fireEvents:function(l){if(this._isFinished){if(!this._finishedFlag){var c=new o(this,this._currentTime,l),d=this._finishHandlers.concat(this.onfinish?[this.onfinish]:[]);setTimeout(function(){d.forEach(function(h){h.call(c.target,c)})},0),this._finishedFlag=!0}}else this._finishedFlag=!1},_tick:function(l,c){this._idle||this._paused||(this._startTime==null?c&&(this.startTime=l-this._currentTime/this.playbackRate):this._isFinished||this._tickCurrentTime((l-this._startTime)*this.playbackRate)),c&&(this._currentTimePending=!1,this._fireEvents(l))},get _needsTick(){return this.playState in{pending:1,running:1}||!this._finishedFlag},_targetAnimations:function(){var l=this._effect._target;return l._activeAnimations||(l._activeAnimations=[]),l._activeAnimations},_markTarget:function(){var l=this._targetAnimations();l.indexOf(this)===-1&&l.push(this)},_unmarkTarget:function(){var l=this._targetAnimations(),c=l.indexOf(this);c!==-1&&l.splice(c,1)}}})(t,e),(function(r,s,a){function o(C){var w=u;u=[],C<x.currentTime&&(C=x.currentTime),x._animations.sort(l),x._animations=h(C,!0,x._animations)[0],w.forEach(function(v){v[1](C)}),d()}function l(C,w){return C._sequenceNumber-w._sequenceNumber}function c(){this._animations=[],this.currentTime=window.performance&&performance.now?performance.now():0}function d(){m.forEach(function(C){C()}),m.length=0}function h(C,w,v){_=!0,f=!1,s.timeline.currentTime=C,y=!1;var b=[],A=[],P=[],I=[];return v.forEach(function(z){z._tick(C,w),z._inEffect?(A.push(z._effect),z._markTarget()):(b.push(z._effect),z._unmarkTarget()),z._needsTick&&(y=!0);var M=z._inEffect||z._needsTick;z._inTimeline=M,M?P.push(z):I.push(z)}),m.push.apply(m,b),m.push.apply(m,A),y&&requestAnimationFrame(function(){}),_=!1,[P,I]}var g=window.requestAnimationFrame,u=[],p=0;window.requestAnimationFrame=function(C){var w=p++;return u.length==0&&g(o),u.push([w,C]),w},window.cancelAnimationFrame=function(C){u.forEach(function(w){w[0]==C&&(w[1]=function(){})})},c.prototype={_play:function(C){C._timing=r.normalizeTimingInput(C.timing);var w=new s.Animation(C);return w._idle=!1,w._timeline=this,this._animations.push(w),s.restart(),s.applyDirtiedAnimation(w),w}};var y=!1,f=!1;s.restart=function(){return y||(y=!0,requestAnimationFrame(function(){}),f=!0),f},s.applyDirtiedAnimation=function(C){if(!_){C._markTarget();var w=C._targetAnimations();w.sort(l),h(s.timeline.currentTime,!1,w.slice())[1].forEach(function(v){var b=x._animations.indexOf(v);b!==-1&&x._animations.splice(b,1)}),d()}};var m=[],_=!1,x=new c;s.timeline=x})(t,e),(function(r,s){function a(u,p){for(var y=0,f=0;f<u.length;f++)y+=u[f]*p[f];return y}function o(u,p){return[u[0]*p[0]+u[4]*p[1]+u[8]*p[2]+u[12]*p[3],u[1]*p[0]+u[5]*p[1]+u[9]*p[2]+u[13]*p[3],u[2]*p[0]+u[6]*p[1]+u[10]*p[2]+u[14]*p[3],u[3]*p[0]+u[7]*p[1]+u[11]*p[2]+u[15]*p[3],u[0]*p[4]+u[4]*p[5]+u[8]*p[6]+u[12]*p[7],u[1]*p[4]+u[5]*p[5]+u[9]*p[6]+u[13]*p[7],u[2]*p[4]+u[6]*p[5]+u[10]*p[6]+u[14]*p[7],u[3]*p[4]+u[7]*p[5]+u[11]*p[6]+u[15]*p[7],u[0]*p[8]+u[4]*p[9]+u[8]*p[10]+u[12]*p[11],u[1]*p[8]+u[5]*p[9]+u[9]*p[10]+u[13]*p[11],u[2]*p[8]+u[6]*p[9]+u[10]*p[10]+u[14]*p[11],u[3]*p[8]+u[7]*p[9]+u[11]*p[10]+u[15]*p[11],u[0]*p[12]+u[4]*p[13]+u[8]*p[14]+u[12]*p[15],u[1]*p[12]+u[5]*p[13]+u[9]*p[14]+u[13]*p[15],u[2]*p[12]+u[6]*p[13]+u[10]*p[14]+u[14]*p[15],u[3]*p[12]+u[7]*p[13]+u[11]*p[14]+u[15]*p[15]]}function l(u){var p=u.rad||0;return((u.deg||0)/360+(u.grad||0)/400+(u.turn||0))*(2*Math.PI)+p}function c(u){switch(u.t){case"rotatex":var w=l(u.d[0]);return[1,0,0,0,0,Math.cos(w),Math.sin(w),0,0,-Math.sin(w),Math.cos(w),0,0,0,0,1];case"rotatey":var w=l(u.d[0]);return[Math.cos(w),0,-Math.sin(w),0,0,1,0,0,Math.sin(w),0,Math.cos(w),0,0,0,0,1];case"rotate":case"rotatez":var w=l(u.d[0]);return[Math.cos(w),Math.sin(w),0,0,-Math.sin(w),Math.cos(w),0,0,0,0,1,0,0,0,0,1];case"rotate3d":var v=u.d[0],b=u.d[1],A=u.d[2],w=l(u.d[3]),p=v*v+b*b+A*A;if(p===0)v=1,b=0,A=0;else if(p!==1){var y=Math.sqrt(p);v/=y,b/=y,A/=y}var f=Math.sin(w/2),m=f*Math.cos(w/2),_=f*f;return[1-2*(b*b+A*A)*_,2*(v*b*_+A*m),2*(v*A*_-b*m),0,2*(v*b*_-A*m),1-2*(v*v+A*A)*_,2*(b*A*_+v*m),0,2*(v*A*_+b*m),2*(b*A*_-v*m),1-2*(v*v+b*b)*_,0,0,0,0,1];case"scale":return[u.d[0],0,0,0,0,u.d[1],0,0,0,0,1,0,0,0,0,1];case"scalex":return[u.d[0],0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"scaley":return[1,0,0,0,0,u.d[0],0,0,0,0,1,0,0,0,0,1];case"scalez":return[1,0,0,0,0,1,0,0,0,0,u.d[0],0,0,0,0,1];case"scale3d":return[u.d[0],0,0,0,0,u.d[1],0,0,0,0,u.d[2],0,0,0,0,1];case"skew":var x=l(u.d[0]),C=l(u.d[1]);return[1,Math.tan(C),0,0,Math.tan(x),1,0,0,0,0,1,0,0,0,0,1];case"skewx":var w=l(u.d[0]);return[1,0,0,0,Math.tan(w),1,0,0,0,0,1,0,0,0,0,1];case"skewy":var w=l(u.d[0]);return[1,Math.tan(w),0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"translate":var v=u.d[0].px||0,b=u.d[1].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,v,b,0,1];case"translatex":var v=u.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,v,0,0,1];case"translatey":var b=u.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,0,b,0,1];case"translatez":var A=u.d[0].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,A,1];case"translate3d":var v=u.d[0].px||0,b=u.d[1].px||0,A=u.d[2].px||0;return[1,0,0,0,0,1,0,0,0,0,1,0,v,b,A,1];case"perspective":return[1,0,0,0,0,1,0,0,0,0,1,u.d[0].px?-1/u.d[0].px:0,0,0,0,1];case"matrix":return[u.d[0],u.d[1],0,0,u.d[2],u.d[3],0,0,0,0,1,0,u.d[4],u.d[5],0,1];case"matrix3d":return u.d}}function d(u){return u.length===0?[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]:u.map(c).reduce(o)}function h(u){return[g(d(u))]}var g=(function(){function u(v){return v[0][0]*v[1][1]*v[2][2]+v[1][0]*v[2][1]*v[0][2]+v[2][0]*v[0][1]*v[1][2]-v[0][2]*v[1][1]*v[2][0]-v[1][2]*v[2][1]*v[0][0]-v[2][2]*v[0][1]*v[1][0]}function p(v){for(var b=1/u(v),A=v[0][0],P=v[0][1],I=v[0][2],z=v[1][0],M=v[1][1],E=v[1][2],L=v[2][0],Z=v[2][1],K=v[2][2],q=[[(M*K-E*Z)*b,(I*Z-P*K)*b,(P*E-I*M)*b,0],[(E*L-z*K)*b,(A*K-I*L)*b,(I*z-A*E)*b,0],[(z*Z-M*L)*b,(L*P-A*Z)*b,(A*M-P*z)*b,0]],Q=[],ne=0;ne<3;ne++){for(var de=0,le=0;le<3;le++)de+=v[3][le]*q[le][ne];Q.push(de)}return Q.push(1),q.push(Q),q}function y(v){return[[v[0][0],v[1][0],v[2][0],v[3][0]],[v[0][1],v[1][1],v[2][1],v[3][1]],[v[0][2],v[1][2],v[2][2],v[3][2]],[v[0][3],v[1][3],v[2][3],v[3][3]]]}function f(v,b){for(var A=[],P=0;P<4;P++){for(var I=0,z=0;z<4;z++)I+=v[z]*b[z][P];A.push(I)}return A}function m(v){var b=_(v);return[v[0]/b,v[1]/b,v[2]/b]}function _(v){return Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])}function x(v,b,A,P){return[A*v[0]+P*b[0],A*v[1]+P*b[1],A*v[2]+P*b[2]]}function C(v,b){return[v[1]*b[2]-v[2]*b[1],v[2]*b[0]-v[0]*b[2],v[0]*b[1]-v[1]*b[0]]}function w(v){var b=[v.slice(0,4),v.slice(4,8),v.slice(8,12),v.slice(12,16)];if(b[3][3]!==1)return null;for(var A=[],P=0;P<4;P++)A.push(b[P].slice());for(var P=0;P<3;P++)A[P][3]=0;if(u(A)===0)return null;var I,z=[];b[0][3]||b[1][3]||b[2][3]?(z.push(b[0][3]),z.push(b[1][3]),z.push(b[2][3]),z.push(b[3][3]),I=f(z,y(p(A)))):I=[0,0,0,1];var M=b[3].slice(0,3),E=[];E.push(b[0].slice(0,3));var L=[];L.push(_(E[0])),E[0]=m(E[0]);var Z=[];E.push(b[1].slice(0,3)),Z.push(a(E[0],E[1])),E[1]=x(E[1],E[0],1,-Z[0]),L.push(_(E[1])),E[1]=m(E[1]),Z[0]/=L[1],E.push(b[2].slice(0,3)),Z.push(a(E[0],E[2])),E[2]=x(E[2],E[0],1,-Z[1]),Z.push(a(E[1],E[2])),E[2]=x(E[2],E[1],1,-Z[2]),L.push(_(E[2])),E[2]=m(E[2]),Z[1]/=L[2],Z[2]/=L[2];var K=C(E[1],E[2]);if(a(E[0],K)<0)for(var P=0;P<3;P++)L[P]*=-1,E[P][0]*=-1,E[P][1]*=-1,E[P][2]*=-1;var q,Q,ne=E[0][0]+E[1][1]+E[2][2]+1;return ne>1e-4?(q=.5/Math.sqrt(ne),Q=[(E[2][1]-E[1][2])*q,(E[0][2]-E[2][0])*q,(E[1][0]-E[0][1])*q,.25/q]):E[0][0]>E[1][1]&&E[0][0]>E[2][2]?(q=2*Math.sqrt(1+E[0][0]-E[1][1]-E[2][2]),Q=[.25*q,(E[0][1]+E[1][0])/q,(E[0][2]+E[2][0])/q,(E[2][1]-E[1][2])/q]):E[1][1]>E[2][2]?(q=2*Math.sqrt(1+E[1][1]-E[0][0]-E[2][2]),Q=[(E[0][1]+E[1][0])/q,.25*q,(E[1][2]+E[2][1])/q,(E[0][2]-E[2][0])/q]):(q=2*Math.sqrt(1+E[2][2]-E[0][0]-E[1][1]),Q=[(E[0][2]+E[2][0])/q,(E[1][2]+E[2][1])/q,.25*q,(E[1][0]-E[0][1])/q]),[M,L,Z,Q,I]}return w})();r.dot=a,r.makeMatrixDecomposition=h,r.transformListToMatrix=d})(e),(function(r){function s(y,f){var m=y.exec(f);if(m)return m=y.ignoreCase?m[0].toLowerCase():m[0],[m,f.substr(m.length)]}function a(y,f){f=f.replace(/^\s*/,"");var m=y(f);if(m)return[m[0],m[1].replace(/^\s*/,"")]}function o(y,f,m){y=a.bind(null,y);for(var _=[];;){var x=y(m);if(!x)return[_,m];if(_.push(x[0]),m=x[1],!(x=s(f,m))||x[1]=="")return[_,m];m=x[1]}}function l(y,f){for(var m=0,_=0;_<f.length&&(!/\s|,/.test(f[_])||m!=0);_++)if(f[_]=="(")m++;else if(f[_]==")"&&(m--,m==0&&_++,m<=0))break;var x=y(f.substr(0,_));return x==null?void 0:[x,f.substr(_)]}function c(y,f){for(var m=y,_=f;m&&_;)m>_?m%=_:_%=m;return m=y*f/(m+_)}function d(y){return function(f){var m=y(f);return m&&(m[0]=void 0),m}}function h(y,f){return function(m){return y(m)||[f,m]}}function g(y,f){for(var m=[],_=0;_<y.length;_++){var x=r.consumeTrimmed(y[_],f);if(!x||x[0]=="")return;x[0]!==void 0&&m.push(x[0]),f=x[1]}if(f=="")return m}function u(y,f,m,_,x){for(var C=[],w=[],v=[],b=c(_.length,x.length),A=0;A<b;A++){var P=f(_[A%_.length],x[A%x.length]);if(!P)return;C.push(P[0]),w.push(P[1]),v.push(P[2])}return[C,w,function(I){var z=I.map(function(M,E){return v[E](M)}).join(m);return y?y(z):z}]}function p(y,f,m){for(var _=[],x=[],C=[],w=0,v=0;v<m.length;v++)if(typeof m[v]=="function"){var b=m[v](y[w],f[w++]);_.push(b[0]),x.push(b[1]),C.push(b[2])}else(function(A){_.push(!1),x.push(!1),C.push(function(){return m[A]})})(v);return[_,x,function(A){for(var P="",I=0;I<A.length;I++)P+=C[I](A[I]);return P}]}r.consumeToken=s,r.consumeTrimmed=a,r.consumeRepeated=o,r.consumeParenthesised=l,r.ignore=d,r.optional=h,r.consumeList=g,r.mergeNestedRepeated=u.bind(null,null),r.mergeWrappedNestedRepeated=u,r.mergeList=p})(e),(function(r){function s(d){function h(p){var y=r.consumeToken(/^inset/i,p);return y?(g.inset=!0,y):(y=r.consumeLengthOrPercent(p))?(g.lengths.push(y[0]),y):(y=r.consumeColor(p),y?(g.color=y[0],y):void 0)}var g={inset:!1,lengths:[],color:null},u=r.consumeRepeated(h,/^/,d);if(u&&u[0].length)return[g,u[1]]}function a(d){var h=r.consumeRepeated(s,/^,/,d);if(h&&h[1]=="")return h[0]}function o(d,h){for(;d.lengths.length<Math.max(d.lengths.length,h.lengths.length);)d.lengths.push({px:0});for(;h.lengths.length<Math.max(d.lengths.length,h.lengths.length);)h.lengths.push({px:0});if(d.inset==h.inset&&!!d.color==!!h.color){for(var g,u=[],p=[[],0],y=[[],0],f=0;f<d.lengths.length;f++){var m=r.mergeDimensions(d.lengths[f],h.lengths[f],f==2);p[0].push(m[0]),y[0].push(m[1]),u.push(m[2])}if(d.color&&h.color){var _=r.mergeColors(d.color,h.color);p[1]=_[0],y[1]=_[1],g=_[2]}return[p,y,function(x){for(var C=d.inset?"inset ":" ",w=0;w<u.length;w++)C+=u[w](x[0][w])+" ";return g&&(C+=g(x[1])),C}]}}function l(d,h,g,u){function p(C){return{inset:C,color:[0,0,0,0],lengths:[{px:0},{px:0},{px:0},{px:0}]}}for(var y=[],f=[],m=0;m<g.length||m<u.length;m++){var _=g[m]||p(u[m].inset),x=u[m]||p(g[m].inset);y.push(_),f.push(x)}return r.mergeNestedRepeated(d,h,y,f)}var c=l.bind(null,o,", ");r.addPropertiesHandler(a,c,["box-shadow","text-shadow"])})(e),(function(r,s){function a(f){return f.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function o(f,m,_){return Math.min(m,Math.max(f,_))}function l(f){if(/^\s*[-+]?(\d*\.)?\d+\s*$/.test(f))return Number(f)}function c(f,m){return[f,m,a]}function d(f,m){if(f!=0)return g(0,1/0)(f,m)}function h(f,m){return[f,m,function(_){return Math.round(o(1,1/0,_))}]}function g(f,m){return function(_,x){return[_,x,function(C){return a(o(f,m,C))}]}}function u(f){var m=f.trim().split(/\s*[\s,]\s*/);if(m.length!==0){for(var _=[],x=0;x<m.length;x++){var C=l(m[x]);if(C===void 0)return;_.push(C)}return _}}function p(f,m){if(f.length==m.length)return[f,m,function(_){return _.map(a).join(" ")}]}function y(f,m){return[f,m,Math.round]}r.clamp=o,r.addPropertiesHandler(u,p,["stroke-dasharray"]),r.addPropertiesHandler(l,g(0,1/0),["border-image-width","line-height"]),r.addPropertiesHandler(l,g(0,1),["opacity","shape-image-threshold"]),r.addPropertiesHandler(l,d,["flex-grow","flex-shrink"]),r.addPropertiesHandler(l,h,["orphans","widows"]),r.addPropertiesHandler(l,y,["z-index"]),r.parseNumber=l,r.parseNumberList=u,r.mergeNumbers=c,r.numberToString=a})(e),(function(r,s){function a(o,l){if(o=="visible"||l=="visible")return[0,1,function(c){return c<=0?o:c>=1?l:"visible"}]}r.addPropertiesHandler(String,a,["visibility"])})(e),(function(r,s){function a(d){d=d.trim(),c.fillStyle="#000",c.fillStyle=d;var h=c.fillStyle;if(c.fillStyle="#fff",c.fillStyle=d,h==c.fillStyle){c.fillRect(0,0,1,1);var g=c.getImageData(0,0,1,1).data;c.clearRect(0,0,1,1);var u=g[3]/255;return[g[0]*u,g[1]*u,g[2]*u,u]}}function o(d,h){return[d,h,function(g){function u(y){return Math.max(0,Math.min(255,y))}if(g[3])for(var p=0;p<3;p++)g[p]=Math.round(u(g[p]/g[3]));return g[3]=r.numberToString(r.clamp(0,1,g[3])),"rgba("+g.join(",")+")"}]}var l=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");l.width=l.height=1;var c=l.getContext("2d");r.addPropertiesHandler(a,o,["background-color","border-bottom-color","border-left-color","border-right-color","border-top-color","color","fill","flood-color","lighting-color","outline-color","stop-color","stroke","text-decoration-color"]),r.consumeColor=r.consumeParenthesised.bind(null,a),r.mergeColors=o})(e),(function(r,s){function a(C){function w(){var M=z.exec(C);I=M?M[0]:void 0}function v(){var M=Number(I);return w(),M}function b(){if(I!=="(")return v();w();var M=P();return I!==")"?NaN:(w(),M)}function A(){for(var M=b();I==="*"||I==="/";){var E=I;w();var L=b();E==="*"?M*=L:M/=L}return M}function P(){for(var M=A();I==="+"||I==="-";){var E=I;w();var L=A();E==="+"?M+=L:M-=L}return M}var I,z=/([\+\-\w\.]+|[\(\)\*\/])/g;return w(),P()}function o(C,w){if((w=w.trim().toLowerCase())=="0"&&"px".search(C)>=0)return{px:0};if(/^[^(]*$|^calc/.test(w)){w=w.replace(/calc\(/g,"(");var v={};w=w.replace(C,function(E){return v[E]=null,"U"+E});for(var b="U("+C.source+")",A=w.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g,"N").replace(new RegExp("N"+b,"g"),"D").replace(/\s[+-]\s/g,"O").replace(/\s/g,""),P=[/N\*(D)/g,/(N|D)[*\/]N/g,/(N|D)O\1/g,/\((N|D)\)/g],I=0;I<P.length;)P[I].test(A)?(A=A.replace(P[I],"$1"),I=0):I++;if(A=="D"){for(var z in v){var M=a(w.replace(new RegExp("U"+z,"g"),"").replace(new RegExp(b,"g"),"*0"));if(!isFinite(M))return;v[z]=M}return v}}}function l(C,w){return c(C,w,!0)}function c(C,w,v){var b,A=[];for(b in C)A.push(b);for(b in w)A.indexOf(b)<0&&A.push(b);return C=A.map(function(P){return C[P]||0}),w=A.map(function(P){return w[P]||0}),[C,w,function(P){var I=P.map(function(z,M){return P.length==1&&v&&(z=Math.max(z,0)),r.numberToString(z)+A[M]}).join(" + ");return P.length>1?"calc("+I+")":I}]}var d="px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",h=o.bind(null,new RegExp(d,"g")),g=o.bind(null,new RegExp(d+"|%","g")),u=o.bind(null,/deg|rad|grad|turn/g);r.parseLength=h,r.parseLengthOrPercent=g,r.consumeLengthOrPercent=r.consumeParenthesised.bind(null,g),r.parseAngle=u,r.mergeDimensions=c;var p=r.consumeParenthesised.bind(null,h),y=r.consumeRepeated.bind(void 0,p,/^/),f=r.consumeRepeated.bind(void 0,y,/^,/);r.consumeSizePairList=f;var m=function(C){var w=f(C);if(w&&w[1]=="")return w[0]},_=r.mergeNestedRepeated.bind(void 0,l," "),x=r.mergeNestedRepeated.bind(void 0,_,",");r.mergeNonNegativeSizePair=_,r.addPropertiesHandler(m,x,["background-size"]),r.addPropertiesHandler(g,l,["border-bottom-width","border-image-width","border-left-width","border-right-width","border-top-width","flex-basis","font-size","height","line-height","max-height","max-width","outline-width","width"]),r.addPropertiesHandler(g,c,["border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius","bottom","left","letter-spacing","margin-bottom","margin-left","margin-right","margin-top","min-height","min-width","outline-offset","padding-bottom","padding-left","padding-right","padding-top","perspective","right","shape-margin","stroke-dashoffset","text-indent","top","vertical-align","word-spacing"])})(e),(function(r,s){function a(h){return r.consumeLengthOrPercent(h)||r.consumeToken(/^auto/,h)}function o(h){var g=r.consumeList([r.ignore(r.consumeToken.bind(null,/^rect/)),r.ignore(r.consumeToken.bind(null,/^\(/)),r.consumeRepeated.bind(null,a,/^,/),r.ignore(r.consumeToken.bind(null,/^\)/))],h);if(g&&g[0].length==4)return g[0]}function l(h,g){return h=="auto"||g=="auto"?[!0,!1,function(u){var p=u?h:g;if(p=="auto")return"auto";var y=r.mergeDimensions(p,p);return y[2](y[0])}]:r.mergeDimensions(h,g)}function c(h){return"rect("+h+")"}var d=r.mergeWrappedNestedRepeated.bind(null,c,l,", ");r.parseBox=o,r.mergeBoxes=d,r.addPropertiesHandler(o,d,["clip"])})(e),(function(r,s){function a(_){return function(x){var C=0;return _.map(function(w){return w===p?x[C++]:w})}}function o(_){return _}function l(_){if((_=_.toLowerCase().trim())=="none")return[];for(var x,C=/\s*(\w+)\(([^)]*)\)/g,w=[],v=0;x=C.exec(_);){if(x.index!=v)return;v=x.index+x[0].length;var b=x[1],A=m[b];if(!A)return;var P=x[2].split(","),I=A[0];if(I.length<P.length)return;for(var z=[],M=0;M<I.length;M++){var E,L=P[M],Z=I[M];if((E=L?{A:function(K){return K.trim()=="0"?f:r.parseAngle(K)},N:r.parseNumber,T:r.parseLengthOrPercent,L:r.parseLength}[Z.toUpperCase()](L):{a:f,n:z[0],t:y}[Z])===void 0)return;z.push(E)}if(w.push({t:b,d:z}),C.lastIndex==_.length)return w}}function c(_){return _.toFixed(6).replace(".000000","")}function d(_,x){if(_.decompositionPair!==x){_.decompositionPair=x;var C=r.makeMatrixDecomposition(_)}if(x.decompositionPair!==_){x.decompositionPair=_;var w=r.makeMatrixDecomposition(x)}return C[0]==null||w[0]==null?[[!1],[!0],function(v){return v?x[0].d:_[0].d}]:(C[0].push(0),w[0].push(1),[C,w,function(v){var b=r.quat(C[0][3],w[0][3],v[5]);return r.composeMatrix(v[0],v[1],v[2],b,v[4]).map(c).join(",")}])}function h(_){return _.replace(/[xy]/,"")}function g(_){return _.replace(/(x|y|z|3d)?$/,"3d")}function u(_,x){var C=r.makeMatrixDecomposition&&!0,w=!1;if(!_.length||!x.length){_.length||(w=!0,_=x,x=[]);for(var v=0;v<_.length;v++){var b=_[v].t,A=_[v].d,P=b.substr(0,5)=="scale"?1:0;x.push({t:b,d:A.map(function(j){if(typeof j=="number")return P;var G={};for(var ee in j)G[ee]=P;return G})})}}var I=function(j,G){return j=="perspective"&&G=="perspective"||(j=="matrix"||j=="matrix3d")&&(G=="matrix"||G=="matrix3d")},z=[],M=[],E=[];if(_.length!=x.length){if(!C)return;var L=d(_,x);z=[L[0]],M=[L[1]],E=[["matrix",[L[2]]]]}else for(var v=0;v<_.length;v++){var b,Z=_[v].t,K=x[v].t,q=_[v].d,Q=x[v].d,ne=m[Z],de=m[K];if(I(Z,K)){if(!C)return;var L=d([_[v]],[x[v]]);z.push(L[0]),M.push(L[1]),E.push(["matrix",[L[2]]])}else{if(Z==K)b=Z;else if(ne[2]&&de[2]&&h(Z)==h(K))b=h(Z),q=ne[2](q),Q=de[2](Q);else{if(!ne[1]||!de[1]||g(Z)!=g(K)){if(!C)return;var L=d(_,x);z=[L[0]],M=[L[1]],E=[["matrix",[L[2]]]];break}b=g(Z),q=ne[1](q),Q=de[1](Q)}for(var le=[],Xe=[],S=[],D=0;D<q.length;D++){var R=typeof q[D]=="number"?r.mergeNumbers:r.mergeDimensions,L=R(q[D],Q[D]);le[D]=L[0],Xe[D]=L[1],S.push(L[2])}z.push(le),M.push(Xe),E.push([b,S])}}if(w){var $=z;z=M,M=$}return[z,M,function(j){return j.map(function(G,ee){var be=G.map(function(Oe,Ke){return E[ee][1][Ke](Oe)}).join(",");return E[ee][0]=="matrix"&&be.split(",").length==16&&(E[ee][0]="matrix3d"),E[ee][0]+"("+be+")"}).join(" ")}]}var p=null,y={px:0},f={deg:0},m={matrix:["NNNNNN",[p,p,0,0,p,p,0,0,0,0,1,0,p,p,0,1],o],matrix3d:["NNNNNNNNNNNNNNNN",o],rotate:["A"],rotatex:["A"],rotatey:["A"],rotatez:["A"],rotate3d:["NNNA"],perspective:["L"],scale:["Nn",a([p,p,1]),o],scalex:["N",a([p,1,1]),a([p,1])],scaley:["N",a([1,p,1]),a([1,p])],scalez:["N",a([1,1,p])],scale3d:["NNN",o],skew:["Aa",null,o],skewx:["A",null,a([p,f])],skewy:["A",null,a([f,p])],translate:["Tt",a([p,p,y]),o],translatex:["T",a([p,y,y]),a([p,y])],translatey:["T",a([y,p,y]),a([y,p])],translatez:["L",a([y,y,p])],translate3d:["TTL",o]};r.addPropertiesHandler(l,u,["transform"]),r.transformToSvgMatrix=function(_){var x=r.transformListToMatrix(l(_));return"matrix("+c(x[0])+" "+c(x[1])+" "+c(x[4])+" "+c(x[5])+" "+c(x[12])+" "+c(x[13])+")"}})(e),(function(r){function s(l){var c=Number(l);if(!(isNaN(c)||c<100||c>900||c%100!=0))return c}function a(l){return l=100*Math.round(l/100),l=r.clamp(100,900,l),l===400?"normal":l===700?"bold":String(l)}function o(l,c){return[l,c,a]}r.addPropertiesHandler(s,o,["font-weight"])})(e),(function(r){function s(u){var p={};for(var y in u)p[y]=-u[y];return p}function a(u){return r.consumeToken(/^(left|center|right|top|bottom)\b/i,u)||r.consumeLengthOrPercent(u)}function o(u,p){var y=r.consumeRepeated(a,/^/,p);if(y&&y[1]==""){var f=y[0];if(f[0]=f[0]||"center",f[1]=f[1]||"center",u==3&&(f[2]=f[2]||{px:0}),f.length==u){if(/top|bottom/.test(f[0])||/left|right/.test(f[1])){var m=f[0];f[0]=f[1],f[1]=m}if(/left|right|center|Object/.test(f[0])&&/top|bottom|center|Object/.test(f[1]))return f.map(function(_){return typeof _=="object"?_:d[_]})}}}function l(u){var p=r.consumeRepeated(a,/^/,u);if(p){for(var y=p[0],f=[{"%":50},{"%":50}],m=0,_=!1,x=0;x<y.length;x++){var C=y[x];typeof C=="string"?(_=/bottom|right/.test(C),m={left:0,right:0,center:m,top:1,bottom:1}[C],f[m]=d[C],C=="center"&&m++):(_&&(C=s(C),C["%"]=(C["%"]||0)+100),f[m]=C,m++,_=!1)}return[f,p[1]]}}function c(u){var p=r.consumeRepeated(l,/^,/,u);if(p&&p[1]=="")return p[0]}var d={left:{"%":0},center:{"%":50},right:{"%":100},top:{"%":0},bottom:{"%":100}},h=r.mergeNestedRepeated.bind(null,r.mergeDimensions," ");r.addPropertiesHandler(o.bind(null,3),h,["transform-origin"]),r.addPropertiesHandler(o.bind(null,2),h,["perspective-origin"]),r.consumePosition=l,r.mergeOffsetList=h;var g=r.mergeNestedRepeated.bind(null,h,", ");r.addPropertiesHandler(c,g,["background-position","object-position"])})(e),(function(r){function s(h){var g=r.consumeToken(/^circle/,h);if(g&&g[0])return["circle"].concat(r.consumeList([r.ignore(r.consumeToken.bind(void 0,/^\(/)),o,r.ignore(r.consumeToken.bind(void 0,/^at/)),r.consumePosition,r.ignore(r.consumeToken.bind(void 0,/^\)/))],g[1]));var u=r.consumeToken(/^ellipse/,h);if(u&&u[0])return["ellipse"].concat(r.consumeList([r.ignore(r.consumeToken.bind(void 0,/^\(/)),l,r.ignore(r.consumeToken.bind(void 0,/^at/)),r.consumePosition,r.ignore(r.consumeToken.bind(void 0,/^\)/))],u[1]));var p=r.consumeToken(/^polygon/,h);return p&&p[0]?["polygon"].concat(r.consumeList([r.ignore(r.consumeToken.bind(void 0,/^\(/)),r.optional(r.consumeToken.bind(void 0,/^nonzero\s*,|^evenodd\s*,/),"nonzero,"),r.consumeSizePairList,r.ignore(r.consumeToken.bind(void 0,/^\)/))],p[1])):void 0}function a(h,g){if(h[0]===g[0])return h[0]=="circle"?r.mergeList(h.slice(1),g.slice(1),["circle(",r.mergeDimensions," at ",r.mergeOffsetList,")"]):h[0]=="ellipse"?r.mergeList(h.slice(1),g.slice(1),["ellipse(",r.mergeNonNegativeSizePair," at ",r.mergeOffsetList,")"]):h[0]=="polygon"&&h[1]==g[1]?r.mergeList(h.slice(2),g.slice(2),["polygon(",h[1],d,")"]):void 0}var o=r.consumeParenthesised.bind(null,r.parseLengthOrPercent),l=r.consumeRepeated.bind(void 0,o,/^/),c=r.mergeNestedRepeated.bind(void 0,r.mergeDimensions," "),d=r.mergeNestedRepeated.bind(void 0,c,",");r.addPropertiesHandler(s,a,["shape-outside"])})(e),(function(r,s){function a(c,d){d.concat([c]).forEach(function(h){h in document.documentElement.style&&(o[c]=h),l[h]=c})}var o={},l={};a("transform",["webkitTransform","msTransform"]),a("transformOrigin",["webkitTransformOrigin"]),a("perspective",["webkitPerspective"]),a("perspectiveOrigin",["webkitPerspectiveOrigin"]),r.propertyName=function(c){return o[c]||c},r.unprefixedPropertyName=function(c){return l[c]||c}})(e)})(),(function(){if(document.createElement("div").animate([]).oncancel===void 0){var i;if(window.performance&&performance.now)var i=function(){return performance.now()};else var i=function(){return Date.now()};var n=function(s,a,o){this.target=s,this.currentTime=a,this.timelineTime=o,this.type="cancel",this.bubbles=!1,this.cancelable=!1,this.currentTarget=s,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()},r=window.Element.prototype.animate;window.Element.prototype.animate=function(s,a){var o=r.call(this,s,a);o._cancelHandlers=[],o.oncancel=null;var l=o.cancel;o.cancel=function(){l.call(this);var h=new n(this,null,i()),g=this._cancelHandlers.concat(this.oncancel?[this.oncancel]:[]);setTimeout(function(){g.forEach(function(u){u.call(h.target,h)})},0)};var c=o.addEventListener;o.addEventListener=function(h,g){typeof g=="function"&&h=="cancel"?this._cancelHandlers.push(g):c.call(this,h,g)};var d=o.removeEventListener;return o.removeEventListener=function(h,g){if(h=="cancel"){var u=this._cancelHandlers.indexOf(g);u>=0&&this._cancelHandlers.splice(u,1)}else d.call(this,h,g)},o}}})(),(function(i){var n=document.documentElement,r=null,s=!1;try{var a=getComputedStyle(n).getPropertyValue("opacity"),o=a=="0"?"1":"0";r=n.animate({opacity:[o,o]},{duration:1}),r.currentTime=0,s=getComputedStyle(n).getPropertyValue("opacity")==o}catch{}finally{r&&r.cancel()}if(!s){var l=window.Element.prototype.animate;window.Element.prototype.animate=function(c,d){return window.Symbol&&Symbol.iterator&&Array.prototype.from&&c[Symbol.iterator]&&(c=Array.from(c)),Array.isArray(c)||c===null||(c=i.convertToArrayForm(c)),l.call(this,c,d)}}})(t)})();/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Kt=!(window.ShadyDOM&&window.ShadyDOM.inUse);let It;function yi(t){t&&t.shimcssproperties?It=!1:It=Kt||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let vt;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(vt=window.ShadyCSS.cssBuild);const Dn=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?It=window.ShadyCSS.nativeCss:window.ShadyCSS?(yi(window.ShadyCSS),window.ShadyCSS=void 0):yi(window.WebComponents&&window.WebComponents.flags);const Vr=It;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class vi{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function In(t){return t=ra(t),Rn(ia(t),t)}function ra(t){return t.replace(me.comments,"").replace(me.port,"")}function ia(t){let e=new vi;e.start=0,e.end=t.length;let i=e;for(let n=0,r=t.length;n<r;n++)if(t[n]===Ln){i.rules||(i.rules=[]);let s=i,a=s.rules[s.rules.length-1]||null;i=new vi,i.start=n+1,i.parent=s,i.previous=a,s.rules.push(i)}else t[n]===Bn&&(i.end=n+1,i=i.parent||e);return e}function Rn(t,e){let i=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=i.trim(),t.parent){let r=t.previous?t.previous.end:t.parent.start;i=e.substring(r,t.start-1),i=na(i),i=i.replace(me.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let s=t.parsedSelector=t.selector=i.trim();t.atRule=s.indexOf(da)===0,t.atRule?s.indexOf(ca)===0?t.type=He.MEDIA_RULE:s.match(me.keyframesRule)&&(t.type=He.KEYFRAMES_RULE,t.keyframesName=t.selector.split(me.multipleSpaces).pop()):s.indexOf(Hn)===0?t.type=He.MIXIN_RULE:t.type=He.STYLE_RULE}let n=t.rules;if(n)for(let r=0,s=n.length,a;r<s&&(a=n[r]);r++)Rn(a,e);return t}function na(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],i=6-e.length;for(;i--;)e="0"+e;return"\\"+e})}function Mn(t,e,i=""){let n="";if(t.cssText||t.rules){let r=t.rules;if(r&&!sa(r))for(let s=0,a=r.length,o;s<a&&(o=r[s]);s++)n=Mn(o,e,n);else n=e?t.cssText:oa(t.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(t.selector&&(i+=t.selector+" "+Ln+`
`),i+=n,t.selector&&(i+=Bn+`

`)),i}function sa(t){let e=t[0];return!!e&&!!e.selector&&e.selector.indexOf(Hn)===0}function oa(t){return t=aa(t),la(t)}function aa(t){return t.replace(me.customProp,"").replace(me.mixinProp,"")}function la(t){return t.replace(me.mixinApply,"").replace(me.varApply,"")}const He={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Ln="{",Bn="}",me={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Hn="--",ca="@media",da="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const gr=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Rt=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const bi=new Set,ua="shady-unscoped";function ha(t){const e=t.textContent;if(!bi.has(e)){bi.add(e);const i=document.createElement("style");i.setAttribute("shady-unscoped",""),i.textContent=e,document.head.appendChild(i)}}function pa(t){return t.hasAttribute(ua)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function _r(t,e){return t?(typeof t=="string"&&(t=In(t)),Mn(t,Vr)):""}function xi(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=In(t.textContent)),t.__cssRules||null}function Ft(t,e,i,n){if(!t)return;let r=!1,s=t.type;s===He.STYLE_RULE?e(t):s===He.MIXIN_RULE&&(r=!0);let a=t.rules;if(a&&!r)for(let o=0,l=a.length,c;o<l&&(c=a[o]);o++)Ft(c,e)}function fa(t,e){let i=0;for(let n=e,r=t.length;n<r;n++)if(t[n]==="(")i++;else if(t[n]===")"&&--i===0)return n;return-1}function jn(t,e){let i=t.indexOf("var(");if(i===-1)return e(t,"","","");let n=fa(t,i+3),r=t.substring(i+4,n),s=t.substring(0,i),a=jn(t.substring(n+1),e),o=r.indexOf(",");if(o===-1)return e(s,r.trim(),"",a);let l=r.substring(0,o).trim(),c=r.substring(o+1).trim();return e(s,l,c,a)}window.ShadyDOM&&window.ShadyDOM.wrap;function ma(t){let e=t.localName,i="",n="";return e?e.indexOf("-")>-1?i=e:(n=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,n=t.extends),{is:i,typeExtension:n}}function ga(t){const e=[],i=t.querySelectorAll("style");for(let n=0;n<i.length;n++){const r=i[n];pa(r)?Kt||(ha(r),r.parentNode.removeChild(r)):(e.push(r.textContent),r.parentNode.removeChild(r))}return e.join("").trim()}const $n="css-build";function _a(t){if(vt!==void 0)return vt;if(t.__cssBuild===void 0){const e=t.getAttribute($n);if(e)t.__cssBuild=e;else{const i=ya(t);i!==""&&va(t),t.__cssBuild=i}}return t.__cssBuild||""}function wi(t){return _a(t)!==""}function ya(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;if(e instanceof Comment){const i=e.textContent.trim().split(":");if(i[0]===$n)return i[1]}return""}function va(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function yr(t,e){for(let i in e)i===null?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function Vn(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}function ba(t){const e=Rt.test(t)||gr.test(t);return Rt.lastIndex=0,gr.lastIndex=0,e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xa=/;\s*/m,wa=/^\s*(initial)|(inherit)\s*$/,Ci=/\s*!important/,vr="_-_";class Ca{constructor(){this._map={}}set(e,i){e=e.trim(),this._map[e]={properties:i,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Mt=null;class ie{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Ca}detectMixin(e){return ba(e)}gatherStyles(e){const i=ga(e.content);if(i){const n=document.createElement("style");return n.textContent=i,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,i){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,i):null}transformStyle(e,i=""){let n=xi(e);return this.transformRules(n,i),e.textContent=_r(n),n}transformCustomStyle(e){let i=xi(e);return Ft(i,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),e.textContent=_r(i),i}transformRules(e,i){this._currentElement=i,Ft(e,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===":root"&&(e.selector=":host > *")}transformCssText(e,i){return e=e.replace(gr,(n,r,s,a)=>this._produceCssProperties(n,r,s,a,i)),this._consumeCssProperties(e,i)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let i=e;for(;i.parent;)i=i.parent;const n={};let r=!1;return Ft(i,s=>{r=r||s===e,!r&&s.selector===e.selector&&Object.assign(n,this._cssTextToMap(s.parsedCssText))}),n}_consumeCssProperties(e,i){let n=null;for(;n=Rt.exec(e);){let r=n[0],s=n[1],a=n.index,o=a+r.indexOf("@apply"),l=a+r.length,c=e.slice(0,o),d=e.slice(l),h=i?this._fallbacksFromPreviousRules(i):{};Object.assign(h,this._cssTextToMap(c));let g=this._atApplyToCssProperties(s,h);e=`${c}${g}${d}`,Rt.lastIndex=a+g.length}return e}_atApplyToCssProperties(e,i){e=e.replace(xa,"");let n=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){this._currentElement&&(r.dependants[this._currentElement]=!0);let s,a,o;const l=r.properties;for(s in l)o=i&&i[s],a=[s,": var(",e,vr,s],o&&a.push(",",o.replace(Ci,"")),a.push(")"),Ci.test(l[s])&&a.push(" !important"),n.push(a.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,i){let n=wa.exec(i);return n&&(n[1]?i=this._getInitialValueForProperty(e):i="apply-shim-inherit"),i}_cssTextToMap(e,i=!1){let n=e.split(";"),r,s,a={};for(let o=0,l,c;o<n.length;o++)l=n[o],l&&(c=l.split(":"),c.length>1&&(r=c[0].trim(),s=c.slice(1).join(":"),i&&(s=this._replaceInitialOrInherit(r,s)),a[r]=s));return a}_invalidateMixinEntry(e){if(Mt)for(let i in e.dependants)i!==this._currentElement&&Mt(i)}_produceCssProperties(e,i,n,r,s){if(n&&jn(n,(f,m)=>{m&&this._map.get(m)&&(r=`@apply ${m};`)}),!r)return e;let a=this._consumeCssProperties(""+r,s),o=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(a,!0),c=l,d=this._map.get(i),h=d&&d.properties;h?c=Object.assign(Object.create(h),l):this._map.set(i,c);let g=[],u,p,y=!1;for(u in c)p=l[u],p===void 0&&(p="initial"),h&&!(u in h)&&(y=!0),g.push(`${i}${vr}${u}: ${p}`);return y&&this._invalidateMixinEntry(d),d&&(d.properties=c),n&&(o=`${e};${o}`),`${o}${g.join("; ")};`}}ie.prototype.detectMixin=ie.prototype.detectMixin;ie.prototype.transformStyle=ie.prototype.transformStyle;ie.prototype.transformCustomStyle=ie.prototype.transformCustomStyle;ie.prototype.transformRules=ie.prototype.transformRules;ie.prototype.transformRule=ie.prototype.transformRule;ie.prototype.transformTemplate=ie.prototype.transformTemplate;ie.prototype._separator=vr;Object.defineProperty(ie.prototype,"invalidCallback",{get(){return Mt},set(t){Mt=t}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const br={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Lt="_applyShimCurrentVersion",Ue="_applyShimNextVersion",Bt="_applyShimValidatingVersion",Sa=Promise.resolve();function Ea(t){let e=br[t];e&&ka(e)}function ka(t){t[Lt]=t[Lt]||0,t[Bt]=t[Bt]||0,t[Ue]=(t[Ue]||0)+1}function qn(t){return t[Lt]===t[Ue]}function Aa(t){return!qn(t)&&t[Bt]===t[Ue]}function Pa(t){t[Bt]=t[Ue],t._validating||(t._validating=!0,Sa.then(function(){t[Lt]=t[Ue],t._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let nr=null,Si=window.HTMLImports&&window.HTMLImports.whenReady||null,sr;function Ei(t){requestAnimationFrame(function(){Si?Si(t):(nr||(nr=new Promise(e=>{sr=e}),document.readyState==="complete"?sr():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&sr()})),nr.then(function(){t&&t()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ki="__seenByShadyCSS",At="__shadyCSSCachedStyle";let Ht=null,dt=null,ke=class{constructor(){this.customStyles=[],this.enqueued=!1,Ei(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!dt||(this.enqueued=!0,Ei(dt))}addCustomStyle(e){e[ki]||(e[ki]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[At])return e[At];let i;return e.getStyle?i=e.getStyle():i=e,i}processStyles(){const e=this.customStyles;for(let i=0;i<e.length;i++){const n=e[i];if(n[At])continue;const r=this.getStyleForCustomStyle(n);if(r){const s=r.__appliedElement||r;Ht&&Ht(s),n[At]=s}}return e}};ke.prototype.addCustomStyle=ke.prototype.addCustomStyle;ke.prototype.getStyleForCustomStyle=ke.prototype.getStyleForCustomStyle;ke.prototype.processStyles=ke.prototype.processStyles;Object.defineProperties(ke.prototype,{transformCallback:{get(){return Ht},set(t){Ht=t}},validateCallback:{get(){return dt},set(t){let e=!1;dt||(e=!0),dt=t,e&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ot=new ie;class Ta{constructor(){this.customStyleInterface=null,ot.invalidCallback=Ea}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{ot.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,i){if(this.ensure(),wi(e))return;br[i]=e;let n=ot.transformTemplate(e,i);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let i=0;i<e.length;i++){let n=e[i],r=this.customStyleInterface.getStyleForCustomStyle(n);r&&ot.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,i){if(this.ensure(),i&&yr(e,i),e.shadowRoot){this.styleElement(e);let n=e.shadowRoot.children||e.shadowRoot.childNodes;for(let r=0;r<n.length;r++)this.styleSubtree(n[r])}else{let n=e.children||e.childNodes;for(let r=0;r<n.length;r++)this.styleSubtree(n[r])}}styleElement(e){this.ensure();let{is:i}=ma(e),n=br[i];if(!(n&&wi(n))&&n&&!qn(n)){Aa(n)||(this.prepareTemplate(n,i),Pa(n));let r=e.shadowRoot;if(r){let s=r.querySelector("style");s&&(s.__cssRules=n._styleAst,s.textContent=_r(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new Ta;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(i,n,r){t.flushCustomStyles(),t.prepareTemplate(i,n)},prepareTemplateStyles(i,n,r){window.ShadyCSS.prepareTemplate(i,n,r)},prepareTemplateDom(i,n){},styleSubtree(i,n){t.flushCustomStyles(),t.styleSubtree(i,n)},styleElement(i){t.flushCustomStyles(),t.styleElement(i)},styleDocument(i){t.flushCustomStyles(),t.styleDocument(i)},getComputedStyleValue(i,n){return Vn(i,n)},flushCustomStyles(){t.flushCustomStyles()},nativeCss:Vr,nativeShadow:Kt,cssBuild:vt,disableRuntime:Dn},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=ot;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Ie{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,i){this._asyncModule=e,this._callback=i,this._timer=this._asyncModule.run(()=>{this._timer=null,bt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),bt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,i,n){return e instanceof Ie?e._cancelAsync():e=new Ie,e.setConfig(i,n),e}}let bt=new Set;const Un=function(t){bt.add(t)},Fa=function(){const t=!!bt.size;return bt.forEach(e=>{try{e.flush()}catch(i){setTimeout(()=>{throw i})}}),t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let qr=typeof document.head.style.touchAction=="string",jt="__polymerGestures",Nt="__polymerGesturesHandled",xr="__polymerGesturesTouchAction",Ai=25,Pi=5,Na=2,Oa=2500,Zn=["mousedown","mousemove","mouseup","click"],za=[0,1,4,2],Da=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function Ur(t){return Zn.indexOf(t)>-1}let Zr=!1;(function(){try{let t=Object.defineProperty({},"passive",{get(){Zr=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function Yn(t){if(!(Ur(t)||t==="touchend")&&qr&&Zr&&Rs)return{passive:!0}}let Wn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const wr=[],Ia={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Ra={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ma(t){return Ia[t.localName]||!1}function La(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = '${t.id}']`);for(let r=0;r<n.length;r++)e.push(n[r])}}catch{}}return e}let Ti=function(t){let e=t.sourceCapabilities;if(!(e&&!e.firesTouchEvents)&&(t[Nt]={skip:!0},t.type==="click")){let i=!1,n=Qt(t);for(let r=0;r<n.length;r++){if(n[r].nodeType===Node.ELEMENT_NODE){if(n[r].localName==="label")wr.push(n[r]);else if(Ma(n[r])){let s=La(n[r]);for(let a=0;a<s.length;a++)i=i||wr.indexOf(s[a])>-1}}if(n[r]===te.mouse.target)return}if(i)return;t.preventDefault(),t.stopPropagation()}};function Fi(t){let e=Wn?["click"]:Zn;for(let i=0,n;i<e.length;i++)n=e[i],t?(wr.length=0,document.addEventListener(n,Ti,!0)):document.removeEventListener(n,Ti,!0)}function Ba(t){te.mouse.mouseIgnoreJob||Fi(!0);let e=function(){Fi(),te.mouse.target=null,te.mouse.mouseIgnoreJob=null};te.mouse.target=Qt(t)[0],te.mouse.mouseIgnoreJob=Ie.debounce(te.mouse.mouseIgnoreJob,ct.after(Oa),e)}function De(t){let e=t.type;if(!Ur(e))return!1;if(e==="mousemove"){let i=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!Da&&(i=za[t.which]||0),!!(i&1)}else return(t.button===void 0?0:t.button)===0}function Ha(t){if(t.type==="click"){if(t.detail===0)return!0;let e=Se(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,r=t.pageY;return!(n>=i.left&&n<=i.right&&r>=i.top&&r<=i.bottom)}return!1}let te={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ja(t){let e="auto",i=Qt(t);for(let n=0,r;n<i.length;n++)if(r=i[n],r[xr]){e=r[xr];break}return e}function Jn(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function $e(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",Ba,Zr?{passive:!0}:!1);const Qt=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Ct={},ze=[];function $a(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let r=n;if(n=n.shadowRoot.elementFromPoint(t,e),r===n)break;n&&(i=n)}return i}function Se(t){const e=Qt(t);return e.length>0?e[0]:t.target}function Gn(t){let e,i=t.type,r=t.currentTarget[jt];if(!r)return;let s=r[i];if(s){if(!t[Nt]&&(t[Nt]={},i.slice(0,5)==="touch")){t=t;let a=t.changedTouches[0];if(i==="touchstart"&&t.touches.length===1&&(te.touch.id=a.identifier),te.touch.id!==a.identifier)return;qr||(i==="touchstart"||i==="touchmove")&&Va(t)}if(e=t[Nt],!e.skip){for(let a=0,o;a<ze.length;a++)o=ze[a],s[o.name]&&!e[o.name]&&o.flow&&o.flow.start.indexOf(t.type)>-1&&o.reset&&o.reset();for(let a=0,o;a<ze.length;a++)o=ze[a],s[o.name]&&!e[o.name]&&(e[o.name]=!0,o[i](t))}}}function Va(t){let e=t.changedTouches[0],i=t.type;if(i==="touchstart")te.touch.x=e.clientX,te.touch.y=e.clientY,te.touch.scrollDecided=!1;else if(i==="touchmove"){if(te.touch.scrollDecided)return;te.touch.scrollDecided=!0;let n=ja(t),r=!1,s=Math.abs(te.touch.x-e.clientX),a=Math.abs(te.touch.y-e.clientY);t.cancelable&&(n==="none"?r=!0:n==="pan-x"?r=a>s:n==="pan-y"&&(r=s>a)),r?t.preventDefault():$t("track")}}function qa(t,e,i){return Ct[e]?(Za(t,e,i),!0):!1}function Ua(t,e,i){return Ct[e]?(Ya(t,e,i),!0):!1}function Za(t,e,i){let n=Ct[e],r=n.deps,s=n.name,a=t[jt];a||(t[jt]=a={});for(let o=0,l,c;o<r.length;o++)l=r[o],!(Wn&&Ur(l)&&l!=="click")&&(c=a[l],c||(a[l]=c={_count:0}),c._count===0&&t.addEventListener(l,Gn,Yn(l)),c[s]=(c[s]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,i),n.touchAction&&Xn(t,n.touchAction)}function Ya(t,e,i){let n=Ct[e],r=n.deps,s=n.name,a=t[jt];if(a)for(let o=0,l,c;o<r.length;o++)l=r[o],c=a[l],c&&c[s]&&(c[s]=(c[s]||1)-1,c._count=(c._count||1)-1,c._count===0&&t.removeEventListener(l,Gn,Yn(l)));t.removeEventListener(e,i)}function Yr(t){ze.push(t);for(let e=0;e<t.emits.length;e++)Ct[t.emits[e]]=t}function Wa(t){for(let e=0,i;e<ze.length;e++){i=ze[e];for(let n=0,r;n<i.emits.length;n++)if(r=i.emits[n],r===t)return i}return null}function Xn(t,e){qr&&t instanceof HTMLElement&&Ce.run(()=>{t.style.touchAction=e}),t[xr]=e}function Wr(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,O(t).dispatchEvent(n),n.defaultPrevented){let r=i.preventer||i.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function $t(t){let e=Wa(t);e.info&&(e.info.prevent=!0)}Yr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){$e(this.info)},mousedown:function(t){if(!De(t))return;let e=Se(t),i=this,n=function(a){De(a)||(rt("up",e,a),$e(i.info))},r=function(a){De(a)&&rt("up",e,a),$e(i.info)};Jn(this.info,n,r),rt("down",e,t)},touchstart:function(t){rt("down",Se(t),t.changedTouches[0],t)},touchend:function(t){rt("up",Se(t),t.changedTouches[0],t)}});function rt(t,e,i,n){e&&Wr(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(r){return $t(r)}})}Yr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>Na&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,$e(this.info)},mousedown:function(t){if(!De(t))return;let e=Se(t),i=this,n=function(a){let o=a.clientX,l=a.clientY;Ni(i.info,o,l)&&(i.info.state=i.info.started?a.type==="mouseup"?"end":"track":"start",i.info.state==="start"&&$t("tap"),i.info.addMove({x:o,y:l}),De(a)||(i.info.state="end",$e(i.info)),e&&or(i.info,e,a),i.info.started=!0)},r=function(a){i.info.started&&n(a),$e(i.info)};Jn(this.info,n,r),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=Se(t),i=t.changedTouches[0],n=i.clientX,r=i.clientY;Ni(this.info,n,r)&&(this.info.state==="start"&&$t("tap"),this.info.addMove({x:n,y:r}),or(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=Se(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),or(this.info,e,i))}});function Ni(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),r=Math.abs(t.y-i);return n>=Pi||r>=Pi}function or(t,e,i){if(!e)return;let n=t.moves[t.moves.length-2],r=t.moves[t.moves.length-1],s=r.x-t.x,a=r.y-t.y,o,l=0;n&&(o=r.x-n.x,l=r.y-n.y),Wr(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:s,dy:a,ddx:o,ddy:l,sourceEvent:i,hover:function(){return $a(i.clientX,i.clientY)}})}Yr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){De(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){De(t)&&Oi(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Oi(this.info,t.changedTouches[0],t)}});function Oi(t,e,i){let n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),s=Se(i||e);!s||Ra[s.localName]&&s.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=Ai&&r<=Ai||Ha(e))&&(t.prevent||Wr(s,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Kn=ae(t=>{class e extends t{_addEventListenerToNode(n,r,s){qa(n,r,s)||super._addEventListenerToNode(n,r,s)}_removeEventListenerFromNode(n,r,s){Ua(n,r,s)||super._removeEventListenerFromNode(n,r,s)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Ja=/:host\(:dir\((ltr|rtl)\)\)/g,Ga=':host([dir="$1"])',Xa=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Ka=':host([dir="$2"]) $1',Qa=/:dir\((?:ltr|rtl)\)/,zi=!!(window.ShadyDOM&&window.ShadyDOM.inUse),ut=[];let ht=null,Jr="";function Qn(){Jr=document.documentElement.getAttribute("dir")}function es(t){t.__autoDirOptOut||t.setAttribute("dir",Jr)}function ts(){Qn(),Jr=document.documentElement.getAttribute("dir");for(let t=0;t<ut.length;t++)es(ut[t])}function el(){ht&&ht.takeRecords().length&&ts()}const tl=ae(t=>{zi||ht||(Qn(),ht=new MutationObserver(ts),ht.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Cn(t);class i extends e{static _processStyleText(r,s){return r=e._processStyleText.call(this,r,s),!zi&&Qa.test(r)&&(r=this._replaceDirInCssText(r),this.__activateDir=!0),r}static _replaceDirInCssText(r){let s=r;return s=s.replace(Ja,Ga),s=s.replace(Xa,Ka),s}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(el(),ut.push(this),es(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const r=ut.indexOf(this);r>-1&&ut.splice(r,1)}}}return i.__activateDir=!1,i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Di(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?Di():window.addEventListener("DOMContentLoaded",Di);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function it(t,e,i){return{index:t,removed:e,addedCount:i}}const rs=0,is=1,Cr=2,Sr=3;function rl(t,e,i,n,r,s){let a=s-r+1,o=i-e+1,l=new Array(a);for(let c=0;c<a;c++)l[c]=new Array(o),l[c][0]=c;for(let c=0;c<o;c++)l[0][c]=c;for(let c=1;c<a;c++)for(let d=1;d<o;d++)if(Gr(t[e+d-1],n[r+c-1]))l[c][d]=l[c-1][d-1];else{let h=l[c-1][d]+1,g=l[c][d-1]+1;l[c][d]=h<g?h:g}return l}function il(t){let e=t.length-1,i=t[0].length-1,n=t[e][i],r=[];for(;e>0||i>0;){if(e==0){r.push(Cr),i--;continue}if(i==0){r.push(Sr),e--;continue}let s=t[e-1][i-1],a=t[e-1][i],o=t[e][i-1],l;a<o?l=a<s?a:s:l=o<s?o:s,l==s?(s==n?r.push(rs):(r.push(is),n=s),e--,i--):l==a?(r.push(Sr),e--,n=a):(r.push(Cr),i--,n=o)}return r.reverse(),r}function nl(t,e,i,n,r,s){let a=0,o=0,l,c=Math.min(i-e,s-r);if(e==0&&r==0&&(a=sl(t,n,c)),i==t.length&&s==n.length&&(o=ol(t,n,c-a)),e+=a,r+=a,i-=o,s-=o,i-e==0&&s-r==0)return[];if(e==i){for(l=it(e,[],0);r<s;)l.removed.push(n[r++]);return[l]}else if(r==s)return[it(e,[],i-e)];let d=il(rl(t,e,i,n,r,s));l=void 0;let h=[],g=e,u=r;for(let p=0;p<d.length;p++)switch(d[p]){case rs:l&&(h.push(l),l=void 0),g++,u++;break;case is:l||(l=it(g,[],0)),l.addedCount++,g++,l.removed.push(n[u]),u++;break;case Cr:l||(l=it(g,[],0)),l.addedCount++,g++;break;case Sr:l||(l=it(g,[],0)),l.removed.push(n[u]),u++;break}return l&&h.push(l),h}function sl(t,e,i){for(let n=0;n<i;n++)if(!Gr(t[n],e[n]))return n;return i}function ol(t,e,i){let n=t.length,r=e.length,s=0;for(;s<i&&Gr(t[--n],e[--r]);)s++;return s}function ns(t,e){return nl(t,0,t.length,e,0,e.length)}function Gr(t,e){return t===e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Me(t){return t.localName==="slot"}let Ii=class{static getFlattenedNodes(t){const e=O(t);if(Me(t))return t=t,e.assignedNodes({flatten:!0});{const i=[];for(let n=0;n<e.childNodes.length;n++){const r=e.childNodes[n];if(Me(r)){const s=r;i.push(...O(s).assignedNodes({flatten:!0}))}else i.push(r)}return i}}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Me(this._target)?this._listenSlots([this._target]):O(this._target).children&&(this._listenSlots(O(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Me(this._target)?this._unlistenSlots([this._target]):O(this._target).children&&(this._unlistenSlots(O(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ce.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=ns(e,this._effectiveNodes);for(let r=0,s;r<i.length&&(s=i[r]);r++)for(let a=0,o;a<s.removed.length&&(o=s.removed[a]);a++)t.removedNodes.push(o);for(let r=0,s;r<i.length&&(s=i[r]);r++)for(let a=s.index;a<s.index+s.addedCount;a++)t.addedNodes.push(e[a]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Me(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Me(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ss=function(){let t,e;do t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Fa();while(t||e)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Le=Element.prototype,al=Le.matches||Le.matchesSelector||Le.mozMatchesSelector||Le.msMatchesSelector||Le.oMatchesSelector||Le.webkitMatchesSelector,os=function(t,e){return al.call(t,e)};class J{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Ii(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(O(this.node).contains(e))return!0;let i=e,n=e.ownerDocument;for(;i&&i!==n&&i!==this.node;)i=O(i).parentNode||O(i).host;return i===this.node}getOwnerRoot(){return O(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?O(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],i=O(this.node).assignedSlot;for(;i;)e.push(i),i=O(i).assignedSlot;return e}importNode(e,i){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return O(n).importNode(e,i)}getEffectiveChildNodes(){return Ii.getFlattenedNodes(this.node)}queryDistributedElements(e){let i=this.getEffectiveChildNodes(),n=[];for(let r=0,s=i.length,a;r<s&&(a=i[r]);r++)a.nodeType===Node.ELEMENT_NODE&&os(a,e)&&n.push(a);return n}get activeElement(){let e=this.node;return e._activeElement!==void 0?e._activeElement:e.activeElement}}function ll(t,e){for(let i=0;i<e.length;i++){let n=e[i];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}function Ri(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}function cl(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(r){this.node[n]=r},configurable:!0})}}class Er{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}J.prototype.cloneNode;J.prototype.appendChild;J.prototype.insertBefore;J.prototype.removeChild;J.prototype.replaceChild;J.prototype.setAttribute;J.prototype.removeAttribute;J.prototype.querySelector;J.prototype.querySelectorAll;J.prototype.parentNode;J.prototype.firstChild;J.prototype.lastChild;J.prototype.nextSibling;J.prototype.previousSibling;J.prototype.firstElementChild;J.prototype.lastElementChild;J.prototype.nextElementSibling;J.prototype.previousElementSibling;J.prototype.childNodes;J.prototype.children;J.prototype.classList;J.prototype.textContent;J.prototype.innerHTML;let kr=J;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(J.prototype).forEach(e=>{e!="activeElement"&&(t.prototype[e]=J.prototype[e])}),Ri(t.prototype,["classList"]),kr=t,Object.defineProperties(Er.prototype,{localTarget:{get(){const e=this.event.currentTarget,i=e&&ue(e).getOwnerRoot(),n=this.path;for(let r=0;r<n.length;r++){const s=n[r];if(ue(s).getOwnerRoot()===i)return s}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else ll(J.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),Ri(J.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),cl(J.prototype,["textContent","innerHTML","className"]);const ue=function(t){if(t=t||document,t instanceof kr||t instanceof Er)return t;let e=t.__domApi;return e||(t instanceof Event?e=new Er(t):e=new kr(t),t.__domApi=e),e};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ar=window.ShadyDOM,Mi=window.ShadyCSS;function Li(t,e){return O(t).getRootNode()===e}function dl(t,e=!1){if(!ar||!Mi||!ar.handlesDynamicScoping)return null;const i=Mi.ScopingShim;if(!i)return null;const n=i.scopeForNode(t),r=O(t).getRootNode(),s=a=>{if(!Li(a,r))return;const o=Array.from(ar.nativeMethods.querySelectorAll.call(a,"*"));o.push(a);for(let l=0;l<o.length;l++){const c=o[l];if(!Li(c,r))continue;const d=i.currentScopeForNode(c);d!==n&&(d!==""&&i.unscopeNode(c,d),i.scopeNode(c,n))}};if(s(t),e){const a=new MutationObserver(o=>{for(let l=0;l<o.length;l++){const c=o[l];for(let d=0;d<c.addedNodes.length;d++){const h=c.addedNodes[d];h.nodeType===Node.ELEMENT_NODE&&s(h)}}});return a.observe(t,{childList:!0,subtree:!0}),a}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const lr="disable-upgrade",as=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};ae(t=>{const e=Xt(t);let i=as(e);class n extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(lr)}_initializeProperties(){this.hasAttribute(lr)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(s){return super._canApplyPropertyDefault(s)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(s))}attributeChangedCallback(s,a,o,l){s==lr?this.__isUpgradeDisabled&&o==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,O(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(s,a,o,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pt="disable-upgrade";let ul=window.ShadyCSS;const ls=ae(t=>{const e=Kn(Xt(t)),i=mr?e:tl(e),n=as(i),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(o,l,c){(this.__dataAttributes&&this.__dataAttributes[o]||o===Pt)&&this.attributeChangedCallback(o,l,c,null)}setAttribute(o,l){if(Et&&!this._legacyForceObservedAttributes){const c=this.getAttribute(o);super.setAttribute(o,l),this.__attributeReaction(o,c,String(l))}else super.setAttribute(o,l)}removeAttribute(o){if(Et&&!this._legacyForceObservedAttributes){const l=this.getAttribute(o);super.removeAttribute(o),this.__attributeReaction(o,l,null)}else super.removeAttribute(o)}static get observedAttributes(){return Et&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat(Pt)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(o,l,c,d){l!==c&&(o==Pt?this.__isUpgradeDisabled&&c==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,O(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(o,l,c,d),this.attributeChanged(o,l,c)))}attributeChanged(o,l,c){}_initializeProperties(){if(pt&&this.hasAttribute(Pt))this.__isUpgradeDisabled=!0;else{let o=Object.getPrototypeOf(this);o.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",o))||(this._registered(),o.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Et&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const o=this.attributes;for(let l=0,c=o.length;l<c;l++){const d=o[l];this.__attributeReaction(d.name,null,d.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(o){return this._serializeValue(o)}deserialize(o,l){return this._deserializeValue(o,l)}reflectPropertyToAttribute(o,l,c){this._propertyToAttribute(o,l,c)}serializeValueToAttribute(o,l,c){this._valueToNodeAttribute(c||this,o,l)}extend(o,l){if(!(o&&l))return o||l;let c=Object.getOwnPropertyNames(l);for(let d=0,h;d<c.length&&(h=c[d]);d++){let g=Object.getOwnPropertyDescriptor(l,h);g&&Object.defineProperty(o,h,g)}return o}mixin(o,l){for(let c in l)o[c]=l[c];return o}chainObject(o,l){return o&&l&&o!==l&&(o.__proto__=l),o}instanceTemplate(o){let l=this.constructor._contentForTemplate(o);return document.importNode(l,!0)}fire(o,l,c){c=c||{},l=l??{};let d=new Event(o,{bubbles:c.bubbles===void 0?!0:c.bubbles,cancelable:!!c.cancelable,composed:c.composed===void 0?!0:c.composed});d.detail=l;let h=c.node||this;return O(h).dispatchEvent(d),d}listen(o,l,c){o=o||this;let d=this.__boundListeners||(this.__boundListeners=new WeakMap),h=d.get(o);h||(h={},d.set(o,h));let g=l+c;h[g]||(h[g]=this._addMethodEventListenerToNode(o,l,c,this))}unlisten(o,l,c){o=o||this;let d=this.__boundListeners&&this.__boundListeners.get(o),h=l+c,g=d&&d[h];g&&(this._removeEventListenerFromNode(o,l,g),d[h]=null)}setScrollDirection(o,l){Xn(l||this,r[o]||"auto")}$$(o){return this.root.querySelector(o)}get domHost(){let o=O(this).getRootNode();return o instanceof DocumentFragment?o.host:o}distributeContent(){const l=ue(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return ue(this).getEffectiveChildNodes()}queryDistributedElements(o){return ue(this).queryDistributedElements(o)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let o=this.getEffectiveChildNodes(),l=[];for(let c=0,d;d=o[c];c++)d.nodeType!==Node.COMMENT_NODE&&l.push(d.textContent);return l.join("")}queryEffectiveChildren(o){let l=this.queryDistributedElements(o);return l&&l[0]}queryAllEffectiveChildren(o){return this.queryDistributedElements(o)}getContentChildNodes(o){let l=this.root.querySelector(o||"slot");return l?ue(l).getDistributedNodes():[]}getContentChildren(o){return this.getContentChildNodes(o).filter(function(c){return c.nodeType===Node.ELEMENT_NODE})}isLightDescendant(o){const l=this;return l!==o&&O(l).contains(o)&&O(l).getRootNode()===O(o).getRootNode()}isLocalDescendant(o){return this.root===O(o).getRootNode()}scopeSubtree(o,l=!1){return dl(o,l)}getComputedStyleValue(o){return ul.getComputedStyleValue(this,o)}debounce(o,l,c){return this._debouncers=this._debouncers||{},this._debouncers[o]=Ie.debounce(this._debouncers[o],c>0?ct.after(c):Ce,l.bind(this))}isDebouncerActive(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];return!!(l&&l.isActive())}flushDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.flush()}cancelDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.cancel()}async(o,l){return l>0?ct.run(o.bind(this),l):~Ce.run(o.bind(this))}cancelAsync(o){o<0?Ce.cancel(~o):ct.cancel(o)}create(o,l){let c=document.createElement(o);if(l)if(c.setProperties)c.setProperties(l);else for(let d in l)c[d]=l[d];return c}elementMatches(o,l){return os(l||this,o)}toggleAttribute(o,l){let c=this;return arguments.length===3&&(c=arguments[2]),arguments.length==1&&(l=!c.hasAttribute(o)),l?(O(c).setAttribute(o,""),!0):(O(c).removeAttribute(o),!1)}toggleClass(o,l,c){c=c||this,arguments.length==1&&(l=!c.classList.contains(o)),l?c.classList.add(o):c.classList.remove(o)}transform(o,l){l=l||this,l.style.webkitTransform=o,l.style.transform=o}translate3d(o,l,c,d){d=d||this,this.transform("translate3d("+o+","+l+","+c+")",d)}arrayDelete(o,l){let c;if(Array.isArray(o)){if(c=o.indexOf(l),c>=0)return o.splice(c,1)}else if(c=re(this,o).indexOf(l),c>=0)return this.splice(o,c,1);return null}_logger(o,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),o){case"log":case"warn":case"error":console[o](...l)}}_log(...o){this._logger("log",o)}_warn(...o){this._logger("warn",o)}_error(...o){this._logger("error",o)}_logf(o,...l){return["[%s::%s]",this.is,o,...l]}}return s.prototype.is="",s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const hl={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},cs={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},pl=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},cs);function fl(t,e,i){const n=t._noAccessors,r=Object.getOwnPropertyNames(t);for(let s=0;s<r.length;s++){let a=r[s];if(!(a in i))if(n)e[a]=t[a];else{let o=Object.getOwnPropertyDescriptor(t,a);o&&(o.configurable=!0,Object.defineProperty(e,a,o))}}}function ml(t,e,i){for(let n=0;n<e.length;n++)ds(t,e[n],i,pl)}function ds(t,e,i,n){fl(e,t,n);for(let r in hl)e[r]&&(i[r]=i[r]||[],i[r].push(e[r]))}function us(t,e,i){e=e||[];for(let n=t.length-1;n>=0;n--){let r=t[n];r?Array.isArray(r)?us(r,e):e.indexOf(r)<0&&(!i||i.indexOf(r)<0)&&e.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return e}function Bi(t,e){for(const i in e){const n=t[i],r=e[i];!("value"in r)&&n&&"value"in n?t[i]=Object.assign({value:n.value},r):t[i]=r}}const Hi=ls(HTMLElement);function gl(t,e,i){let n;const r={};class s extends e{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))e._finalizeClass.call(this);else{if(n)for(let l=0,c;l<n.length;l++)c=n[l],c.properties&&this.createProperties(c.properties),c.observers&&this.createObservers(c.observers,c.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let c=0;c<n.length;c++)Bi(l,n[c].properties);return Bi(l,t.properties),l}static get observers(){let l=[];if(n)for(let c=0,d;c<n.length;c++)d=n[c],d.observers&&(l=l.concat(d.observers));return t.observers&&(l=l.concat(t.observers)),l}created(){super.created();const l=r.created;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}_registered(){const l=s.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),pt&&a(l);const c=Object.getPrototypeOf(this);let d=r.beforeRegister;if(d)for(let h=0;h<d.length;h++)d[h].call(c);if(d=r.registered,d)for(let h=0;h<d.length;h++)d[h].call(c)}}_applyListeners(){super._applyListeners();const l=r.listeners;if(l)for(let c=0;c<l.length;c++){const d=l[c];if(d)for(let h in d)this._addMethodEventListenerToNode(this,h,d[h])}}_ensureAttributes(){const l=r.hostAttributes;if(l)for(let c=l.length-1;c>=0;c--){const d=l[c];for(let h in d)this._ensureAttribute(h,d[h])}super._ensureAttributes()}ready(){super.ready();let l=r.ready;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attached(){super.attached();let l=r.attached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}detached(){super.detached();let l=r.detached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attributeChanged(l,c,d){super.attributeChanged();let h=r.attributeChanged;if(h)for(let g=0;g<h.length;g++)h[g].call(this,l,c,d)}}if(i){Array.isArray(i)||(i=[i]);let o=e.prototype.behaviors;n=us(i,null,o),s.prototype.behaviors=o?o.concat(i):n}const a=o=>{n&&ml(o,n,r),ds(o,t,r,cs)};return pt||a(s.prototype),s.generatedFrom=t,s}const _l=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(Hi):Hi;return i=gl(t,i,t.behaviors),i.is=i.prototype.is=t.is,i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Fe=function(t){let e;return typeof t=="function"?e=t:e=Fe.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};Fe.Class=_l;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Xr(t,e,i,n,r){let s;r&&(s=typeof i=="object"&&i!==null,s&&(n=t.__dataTemp[e]));let a=n!==i&&(n===n||i===i);return s&&a&&(t.__dataTemp[e]=i),a}const Kr=ae(t=>{class e extends t{_shouldPropertyChange(n,r,s){return Xr(this,n,r,s,!0)}}return e}),hs=ae(t=>{class e extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,r,s){return Xr(this,n,r,s,this.mutableData)}}return e});Kr._mutablePropertyChange=Xr;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ar=null;function Pr(){return Ar}Pr.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Pr,writable:!0}});const ps=Gt(Pr),yl=Kr(ps);function vl(t,e){Ar=t,Object.setPrototypeOf(t,e.prototype),new e,Ar=null}const bl=Gt(class{});function fs(t,e){for(let i=0;i<e.length;i++){let n=e[i];if(!!t!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),O(O(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const r=n.__polymerReplaced__;r&&O(O(r).parentNode).replaceChild(n,r)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}class Ne extends bl{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let i=[];this.children=i;for(let r=this.root.firstChild;r;r=r.nextSibling)i.push(r),r.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in e)this._setPendingProperty(n,e[n])}forwardHostProp(e,i){this._setPendingPropertyOrPath(e,i,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,i,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,i,r=>{r.model=this,n(r)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,i,n)}}_showHideChildren(e){fs(e,this.children)}_setUnmanagedPropertyToNode(e,i,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&i=="textContent"?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,i,n)}get parentModel(){let e=this.__parentModel;if(!e){let i;e=this;do e=e.__dataHost.__dataHost;while((i=e.__templatizeOptions)&&!i.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}Ne.prototype.__dataHost;Ne.prototype.__templatizeOptions;Ne.prototype._methodHost;Ne.prototype.__templatizeOwner;Ne.prototype.__hostProps;const xl=Kr(Ne);function ji(t){let e=t.__dataHost;return e&&e._methodHost||e}function wl(t,e,i){let n=i.mutableData?xl:Ne;Vt.mixin&&(n=Vt.mixin(n));let r=class extends n{};return r.prototype.__templatizeOptions=i,r.prototype._bindTemplate(t),El(r,t,e,i),r}function Cl(t,e,i,n){let r=i.forwardHostProp;if(r&&e.hasHostProps){const s=t.localName=="template";let a=e.templatizeTemplateClass;if(!a){if(s){let l=i.mutableData?yl:ps;class c extends l{}a=e.templatizeTemplateClass=c}else{const l=t.constructor;class c extends l{}a=e.templatizeTemplateClass=c}let o=e.hostProps;for(let l in o)a.prototype._addPropertyEffect("_host_"+l,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Sl(l,r)}),a.prototype._createNotifyingProperty("_host_"+l);fn&&n&&Pl(e,i,n)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),s)vl(t,a),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,a.prototype);const o=e.hostProps;for(let l in o)if(l="_host_"+l,l in t){const c=t[l];delete t[l],t.__data[l]=c}}}}function Sl(t,e){return function(n,r,s){e.call(n.__templatizeOwner,r.substring(6),s[r])}}function El(t,e,i,n){let r=i.hostProps||{};for(let s in n.instanceProps){delete r[s];let a=n.notifyInstanceProp;a&&t.prototype._addPropertyEffect(s,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:kl(s,a)})}if(n.forwardHostProp&&e.__dataHost)for(let s in r)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(s,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Al()})}function kl(t,e){return function(n,r,s){e.call(n.__templatizeOwner,n,r,s[r])}}function Al(){return function(e,i,n){e.__dataHost._setPendingPropertyOrPath("_host_"+i,n[i],!0,!0)}}function Vt(t,e,i){if(qe&&!ji(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let r=(e?e.constructor:Ne)._parseTemplate(t),s=r.templatizeInstanceClass;s||(s=wl(t,r,i),r.templatizeInstanceClass=s);const a=ji(t);Cl(t,r,i,a);let o=class extends s{};return o.prototype._methodHost=a,o.prototype.__dataHost=t,o.prototype.__templatizeOwner=e,o.prototype.__hostProps=r.hostProps,o=o,o}function Pl(t,e,i){const n=i.constructor._properties,{propertyEffects:r}=t,{instanceProps:s}=e;for(let a in r)if(!n[a]&&!(s&&s[a])){const o=r[a];for(let l=0;l<o.length;l++){const{part:c}=o[l].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${a}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Tl(t,e){let i;for(;e;)if(i=e.__dataHost?e:e.__templatizeInstance)if(i.__dataHost!=t)e=i.__dataHost;else return i;else e=O(e).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let $i=!1;function Qr(){if(pt&&!Rr){if(!$i){$i=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Fl=Kn(hs(Gt(HTMLElement)));class Nl extends Fl{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),qe)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,i,n,r){this.mutableData=!0}connectedCallback(){Qr()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){O(O(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let i=new MutationObserver(()=>{if(e=this.querySelector("template"),e)i.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});i.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let i=this.root.firstChild;i;i=i.nextSibling)this.__children[this.__children.length]=i;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",Nl);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ol=hs(ye);class Vi extends Ol{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!ur,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Qr()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=O(O(this).parentNode);for(let i=0;i<this.__instances.length;i++)this.__attachInstance(i,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let i=this.template=e._templateInfo?e:this.querySelector("template");if(!i){let r=new MutationObserver(()=>{if(this.querySelector("template"))r.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return r.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=Vt(i,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(r,s){let a=this.__instances;for(let o=0,l;o<a.length&&(l=a[o]);o++)l.forwardHostProp(r,s)},notifyInstanceProp:function(r,s,a){if(Ks(this.as,s)){let o=r[this.itemsIndexAs];s==this.as&&(this.items[o]=a);let l=gt(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,s);this.notifyPath(l,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e=="string"){let i=e,n=this.__getMethodHost();return function(){return n[i].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let i=this.__observePaths;for(let n=0;n<i.length;n++)e.indexOf(i[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,i=0){this.__renderDebouncer=Ie.debounce(this.__renderDebouncer,i>0?ct.after(i):Ce,e.bind(this)),Un(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ss()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const i=this.__sortAndFilterItems(e),n=this.__calculateLimit(i.length);this.__updateInstances(e,n,i),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!ur||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let i=new Array(e.length);for(let n=0;n<e.length;n++)i[n]=n;return this.__filterFn&&(i=i.filter((n,r,s)=>this.__filterFn(e[n],r,s))),this.__sortFn&&i.sort((n,r)=>this.__sortFn(e[n],e[r])),i}__calculateLimit(e){let i=e;const n=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(i=Math.min(e,this.initialCount),r=Math.max(i-n,0),this.__chunkCount=r||1):(r=Math.min(Math.max(e-n,0),this.__chunkCount),i=Math.min(n+r,e)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=i<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,i}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,i=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*i)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,i,n){const r=this.__itemsIdxToInstIdx={};let s;for(s=0;s<i;s++){let a=this.__instances[s],o=n[s],l=e[o];r[o]=s,a?(a._setPendingProperty(this.as,l),a._setPendingProperty(this.indexAs,s),a._setPendingProperty(this.itemsIndexAs,o),a._flushProperties()):this.__insertInstance(l,s,o)}for(let a=this.__instances.length-1;a>=s;a--)this.__detachAndRemoveInstance(a)}__detachInstance(e){let i=this.__instances[e];const n=O(i.root);for(let r=0;r<i.children.length;r++){let s=i.children[r];n.appendChild(s)}return i}__attachInstance(e,i){let n=this.__instances[e];i.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,i,n){let r={};return r[this.as]=e,r[this.indexAs]=i,r[this.itemsIndexAs]=n,new this.__ctor(r)}__insertInstance(e,i,n){const r=this.__stampInstance(e,i,n);let s=this.__instances[i+1],a=s?s.children[0]:this;return O(O(this).parentNode).insertBefore(r.root,a),this.__instances[i]=r,r}_showHideChildren(e){for(let i=0;i<this.__instances.length;i++)this.__instances[i]._showHideChildren(e)}__handleItemPath(e,i){let n=e.slice(6),r=n.indexOf("."),s=r<0?n:n.substring(0,r);if(s==parseInt(s,10)){let a=r<0?"":n.substring(r+1);this.__handleObservedPaths(a);let o=this.__itemsIdxToInstIdx[s],l=this.__instances[o];if(l){let c=this.as+(a?"."+a:"");l._setPendingPropertyOrPath(c,i,!1,!0),l._flushProperties()}return!0}}itemForElement(e){let i=this.modelForElement(e);return i&&i[this.as]}indexForElement(e){let i=this.modelForElement(e);return i&&i[this.indexAs]}modelForElement(e){return Tl(this.template,e)}}customElements.define(Vi.is,Vi);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ms extends ye{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Ie.debounce(this.__renderDebouncer,Ce,()=>this.__render()),Un(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=O(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!O(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Qr()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let i=e._templateInfo?e:O(e).querySelector("template");if(!i){let n=new MutationObserver(()=>{if(O(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=i}return!0}__ensureInstance(){let e=O(this).parentNode;if(this.__hasInstance()){let i=this.__getInstanceNodes();if(i&&i.length&&O(this).previousSibling!==i[i.length-1])for(let r=0,s;r<i.length&&(s=i[r]);r++)O(e).insertBefore(s,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){ss()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!ur||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class zl extends ms{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const i=this.__dataHost||this;if(qe&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=i._bindTemplate(this.__template,!0);n.runEffects=(r,s,a)=>{let o=this.__syncInfo;if(this.if)o&&(this.__syncInfo=null,this._showHideChildren(),s=Object.assign(o.changedProps,s)),r(s,a);else if(this.__instance)if(o||(o=this.__syncInfo={runEffects:r,changedProps:{}}),a)for(const l in s){const c=_e(l);o.changedProps[c]=this.__dataHost[c]}else Object.assign(o.changedProps,s)},this.__instance=i._stampTemplate(this.__template,n),O(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,fs(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}class Dl extends ms{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Vt(this.__template,this,{mutableData:!0,forwardHostProp:function(i,n){this.__instance&&(this.if?this.__instance.forwardHostProp(i,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[_e(i)]=!0))}})),this.__instance=new this.__ctor,O(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let i=O(e[0]).parentNode;if(i){i=O(i);for(let n=0,r;n<e.length&&(r=e[n]);n++)i.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let i in e)this.__instance._setPendingProperty(i,this.__dataHost[i]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}}const qi=mn?zl:Dl;customElements.define(qi.is,qi);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Il=ae(t=>{let e=Xt(t);class i extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(r,s){let a=s.path;if(a==JSCompiler_renameProperty("items",this)){let o=s.base||[],l=this.__lastItems,c=this.__lastMulti;if(r!==c&&this.clearSelection(),l){let d=ns(o,l);this.__applySplices(d)}this.__lastItems=o,this.__lastMulti=r}else if(s.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(s.value.indexSplices);else{let o=a.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(o,10);o.indexOf(".")<0&&o==l&&this.__deselectChangedIdx(l)}}__applySplices(r){let s=this.__selectedMap;for(let o=0;o<r.length;o++){let l=r[o];s.forEach((c,d)=>{c<l.index||(c>=l.index+l.removed.length?s.set(d,c+l.addedCount-l.removed.length):s.set(d,-1))});for(let c=0;c<l.addedCount;c++){let d=l.index+c;s.has(this.items[d])&&s.set(this.items[d],d)}}this.__updateLinks();let a=0;s.forEach((o,l)=>{o<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null,s.delete(l)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let r=0;this.__selectedMap.forEach(s=>{s>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${s}`,`${JSCompiler_renameProperty("selected",this)}.${r++}`)})}else this.__selectedMap.forEach(r=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${r}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${r}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(r){return this.__selectedMap.has(r)}isIndexSelected(r){return this.isSelected(this.items[r])}__deselectChangedIdx(r){let s=this.__selectedIndexForItemIndex(r);if(s>=0){let a=0;this.__selectedMap.forEach((o,l)=>{s==a++&&this.deselect(l)})}}__selectedIndexForItemIndex(r){let s=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${r}`];if(s)return parseInt(s.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(r){let s=this.__selectedMap.get(r);if(s>=0){this.__selectedMap.delete(r);let a;this.multi&&(a=this.__selectedIndexForItemIndex(s)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null}}deselectIndex(r){this.deselect(this.items[r])}select(r){this.selectIndex(this.items.indexOf(r))}selectIndex(r){let s=this.items[r];this.isSelected(s)?this.toggle&&this.deselectIndex(r):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(s,r),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),s):this.selected=this.selectedItem=s)}}return i}),Rl=Il(ye);class Ui extends Rl{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Ui.is,Ui);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ot=new ke;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){Ot.processStyles(),yr(t,e)},styleElement(t){Ot.processStyles()},styleDocument(t){Ot.processStyles(),yr(document.body,t)},getComputedStyleValue(t,e){return Vn(t,e)},flushCustomStyles(){},nativeCss:Vr,nativeShadow:Kt,cssBuild:vt,disableRuntime:Dn});window.ShadyCSS.CustomStyleInterface=Ot;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Zi="include",Ml=window.ShadyCSS.CustomStyleInterface;class Ll extends HTMLElement{constructor(){super(),this._style=null,Ml.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const i=e.getAttribute(Zi);return i&&(e.removeAttribute(Zi),e.textContent=Ws(i)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Ll);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ls(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Tt=new Set;const gs={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Tt.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)},this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&t._interestedResizables.indexOf(this)===-1&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){if(this._notifyingDescendant){t.stopPropagation();return}Rr||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=ue(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if(document.readyState==="loading"){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),t()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(Tt.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Tt.delete(this):Tt.add(this)}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class Bl{constructor(e){this.selection=[],this.selectCallback=e}get(){return this.multi?this.selection.slice():this.selection[0]}clear(e){this.selection.slice().forEach(function(i){(!e||e.indexOf(i)<0)&&this.setItemSelected(i,!1)},this)}isSelected(e){return this.selection.indexOf(e)>=0}setItemSelected(e,i){if(e!=null&&i!==this.isSelected(e)){if(i)this.selection.push(e);else{var n=this.selection.indexOf(e);n>=0&&this.selection.splice(n,1)}this.selectCallback&&this.selectCallback(e,i)}}select(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))}toggle(e){this.setItemSelected(e,!this.isSelected(e))}}/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Hl={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new Bl(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&ue(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(t){return this.items?this.items.indexOf(t):-1},select:function(t){this.selected=t},selectPrevious:function(){var t=this.items.length,e=t-1;this.selected!==void 0&&(e=(Number(this._valueToIndex(this.selected))-1+t)%t),this.selected=this._indexToValue(e)},selectNext:function(){var t=0;this.selected!==void 0&&(t=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(t)},selectIndex:function(t){this.select(this._indexToValue(t))},forceSynchronousItemUpdate:function(){this._observer&&typeof this._observer.flush=="function"?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return this.selected!=null},_checkFallback:function(){this._updateSelected()},_addListener:function(t){this.listen(this,t,"_activateHandler")},_removeListener:function(t){this.unlisten(this,t,"_activateHandler")},_activateEventChanged:function(t,e){this._removeListener(e),this._addListener(t)},_updateItems:function(){var t=ue(this).queryDistributedElements(this.selectable||"*");t=Array.prototype.filter.call(t,this._bindFilterItem),this._setItems(t)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(t){if(this.items){var e=this._valueToItem(this.selected);e?this._selection.select(e):this._selection.clear(),this.fallbackSelection&&this.items.length&&this._selection.get()===void 0&&(this.selected=this.fallbackSelection)}},_filterItem:function(t){return!this._excludedLocalNames[t.localName]},_valueToItem:function(t){return t==null?null:this.items[this._valueToIndex(t)]},_valueToIndex:function(t){if(this.attrForSelected){for(var e=0,i;i=this.items[e];e++)if(this._valueForItem(i)==t)return e}else return Number(t)},_indexToValue:function(t){if(this.attrForSelected){var e=this.items[t];if(e)return this._valueForItem(e)}else return t},_valueForItem:function(t){if(!t)return null;if(!this.attrForSelected){var e=this.indexOf(t);return e===-1?null:e}var i=t[jr(this.attrForSelected)];return i??t.getAttribute(this.attrForSelected)},_applySelection:function(t,e){this.selectedClass&&this.toggleClass(this.selectedClass,e,t),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,e,t),this._selectionChange(),this.fire("iron-"+(e?"select":"deselect"),{item:t})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(t){return ue(t).observeNodes(function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})})},_activateHandler:function(t){for(var e=t.target,i=this.items;e&&e!=this;){var n=i.indexOf(e);if(n>=0){var r=this._indexToValue(n);this._itemActivate(r,e);return}e=e.parentNode}},_itemActivate:function(t,e){this.fire("iron-activate",{selected:t,item:e},{cancelable:!0}).defaultPrevented||this.select(t)}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const _s={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var i in e)t[i]=e[i]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,i){if(this.animationConfig){if(this.animationConfig.value&&typeof this.animationConfig.value=="function"){this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));return}var n;if(t?n=this.animationConfig[t]:n=this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var r,s=0;r=n[s];s++)if(r.animatable)r.animatable._getAnimationConfigRecursive(r.type||t,e,i);else if(r.id){var a=e[r.id];a?(a.isClone||(e[r.id]=this._cloneConfig(a),a=e[r.id]),this._copyProperties(a,r)):e[r.id]=r}else i.push(r)}},getAnimationConfig:function(t){var e={},i=[];this._getAnimationConfigRecursive(t,e,i);for(var n in e)i.push(e[n]);return i}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const jl={_configureAnimations:function(t){var e=[],i=[];if(t.length>0)for(let r,s=0;r=t[s];s++){let a=document.createElement(r.name);if(a.isNeonAnimation){let o=null;a.configure||(a.configure=function(l){return null}),o=a.configure(r),i.push({result:o,config:r,neonAnimation:a})}else console.warn(this.is+":",r.name,"not found!")}for(var n=0;n<i.length;n++){let r=i[n].result,s=i[n].config,a=i[n].neonAnimation;try{typeof r.cancel!="function"&&(r=document.timeline.play(r))}catch(o){r=null,console.warn("Couldnt play","(",s.name,").",o)}r&&e.push({neonAnimation:a,config:s,animation:r})}return e},_shouldComplete:function(t){for(var e=!0,i=0;i<t.length;i++)if(t[i].animation.playState!="finished"){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(var e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var i=this.getAnimationConfig(t);if(i){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var n=this._configureAnimations(i);if(n.length==0){this.fire("neon-animation-finish",e,{bubbles:!1});return}this._active[t]=n;for(var r=0;r<n.length;r++)n[r].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var i in e)e[i].animation.cancel()}this._active={}}},$l=[_s,jl];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Fe({_template:Te`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host > ::slotted(*) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      :host > ::slotted(:not(.iron-selected):not(.neon-animating))
       {
        display: none !important;
      }

      :host > ::slotted(.neon-animating) {
        pointer-events: none;
      }
    </style>

    <slot id="content"></slot>
  `,is:"neon-animated-pages",behaviors:[gs,Hl,$l],properties:{activateEvent:{type:String,value:""},animateInitialSelection:{type:Boolean,value:!1}},listeners:{"iron-select":"_onIronSelect","neon-animation-finish":"_onNeonAnimationFinish"},_onIronSelect:function(t){var e=t.detail.item;if(!(this.items.indexOf(e)<0)){var i=this._valueToItem(this._prevSelected)||!1;if(this._prevSelected=this.selected,!i&&!this.animateInitialSelection){this._completeSelectedChanged();return}this.animationConfig=[],this.entryAnimation?this.animationConfig.push({name:this.entryAnimation,node:e}):e.getAnimationConfig&&this.animationConfig.push({animatable:e,type:"entry"}),i&&(i.classList.contains("neon-animating")&&(this._squelchNextFinishEvent=!0,this.cancelAnimation(),this._completeSelectedChanged(),this._squelchNextFinishEvent=!1),this.exitAnimation?this.animationConfig.push({name:this.exitAnimation,node:i}):i.getAnimationConfig&&this.animationConfig.push({animatable:i,type:"exit"}),i.classList.add("neon-animating")),e.classList.add("neon-animating"),this.animationConfig.length>=1?this.isAttached?this.playAnimation(void 0,{fromPage:i,toPage:e}):this.async(function(){this.playAnimation(void 0,{fromPage:null,toPage:e})}):this._completeSelectedChanged(i,e)}},_completeSelectedChanged:function(t,e){if(e&&e.classList.remove("neon-animating"),t&&t.classList.remove("neon-animating"),!e||!t)for(var i=ue(this.$.content).getDistributedNodes(),n,r=0;n=i[r];r++)n.classList&&n.classList.remove("neon-animating");this.async(this._notifyPageResize)},_onNeonAnimationFinish:function(t){if(this._squelchNextFinishEvent){this._squelchNextFinishEvent=!1;return}this._completeSelectedChanged(t.detail.fromPage,t.detail.toPage)},_notifyPageResize:function(){var t=this.selectedItem||this._valueToItem(this.selected);this.resizerShouldNotify=function(e){return e==t},this.notifyResize()}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Fe({_template:Te`
    <style>
      :host {
        display: block;
      }
    </style>

    <slot></slot>
  `,is:"neon-animatable",behaviors:[_s,gs]});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const er={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,i){for(var n={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]},r=n[e],s,a=0;s=r[a];a++)t.style[s]=i;t.style[e]=i},complete:function(t){}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Fe({is:"fade-in-animation",behaviors:[er],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"0"},{opacity:"1"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Fe({is:"fade-out-animation",behaviors:[er],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{opacity:"1"},{opacity:"0"}],this.timingFromConfig(t)),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Fe({is:"slide-from-right-animation",behaviors:[er],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"translateX(100%)"},{transform:"none"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","0 50%"),this._effect}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Fe({is:"slide-left-animation",behaviors:[er],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"none"},{transform:"translateX(-100%)"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","0 50%"),this._effect}});const Vl=[{id:"Matutino",label:"Matutino (09:00 - 14:00 hrs)",description:"Ideal para desayunos y recepciones matinales."},{id:"Vespertino",label:"Vespertino (15:00 - 20:00 hrs)",description:"Perfecto para comidas de gala y eventos familiares."},{id:"Nocturno",label:"Nocturno (21:00 - 03:00 hrs)",description:"La máxima distinción para cenas de gala y fiestas inolvidables."}];function Ve(t){return t==null||isNaN(t)?"$0.00 MXN":new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",minimumFractionDigits:2}).format(t)+" MXN"}class ql extends ye{static get template(){return Te`
      <style>
        :host {
          display: block;
          background: #FFFFFF;
          border-bottom: 2px solid var(--pz-gold-border, #E6D29A);
          box-shadow: 0 4px 15px rgba(122, 28, 48, 0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          cursor: pointer;
        }

        .brand-icon {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, var(--pz-gold-main, #D4AF37), var(--pz-wine-main, #7A1C30));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-family: var(--pz-font-serif, Georgia, serif);
          font-size: 1.5rem;
          font-weight: bold;
          box-shadow: 0 2px 6px rgba(122, 28, 48, 0.2);
        }

        .brand-titles {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--pz-font-serif, 'Playfair Display', Georgia, serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          letter-spacing: 0.03em;
          line-height: 1.1;
        }

        .brand-subtitle {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--pz-gold-dark, #B89325);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        nav.nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-btn {
          background: transparent;
          color: var(--pz-text-main, #2C2C2C);
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .nav-btn:hover {
          color: var(--pz-wine-main, #7A1C30);
          background: var(--pz-bg-subtle, #F7F3EB);
        }

        .nav-btn.active {
          color: var(--pz-wine-main, #7A1C30);
          border-bottom: 2px solid var(--pz-gold-main, #D4AF37);
          font-weight: 700;
        }

        .cta-btn {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.6rem 1.4rem;
          border-radius: 25px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          box-shadow: 0 3px 10px rgba(122, 28, 48, 0.2);
          transition: all 0.25s ease;
        }

        .cta-btn:hover {
          background: var(--pz-wine-hover, #5E1423);
          transform: translateY(-1px);
          box-shadow: 0 5px 14px rgba(122, 28, 48, 0.3);
        }

        .admin-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--pz-wine-soft, #F9ECEE);
          color: var(--pz-wine-main, #7A1C30);
          padding: 0.35rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
          border: 1px solid var(--pz-gold-border, #E6D29A);
        }

        @media (max-width: 768px) {
          .header-container {
            flex-direction: column;
            text-align: center;
          }
          nav.nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      </style>

      <header>
        <div class="header-container">
          <div class="brand-link" on-click="_navigateToLanding">
            <div class="brand-icon" style="font-size: 1.1rem; letter-spacing: 0.05em;">BH</div>
            <div class="brand-titles">
              <span class="brand-name">Banquetes Hub</span>
              <span class="brand-subtitle">Salones de Eventos</span>
            </div>
          </div>

          <nav class="nav-links">
            <button class$="nav-btn [[_computeActiveClass(currentPage, 'landing')]]" on-click="_navigateToLanding">
              Inicio & Salones
            </button>


            <template is="dom-if" if="[[!isAdminLoggedIn]]">
              <button class$="nav-btn [[_computeActiveClass(currentPage, 'login')]]" on-click="_navigateToLogin">
                Acceso Personal
              </button>
            </template>

            <template is="dom-if" if="[[isAdminLoggedIn]]">
              <button class$="nav-btn [[_computeActiveClass(currentPage, 'admin')]]" on-click="_navigateToAdmin">
                Panel Administrativo
              </button>
              <div class="admin-badge">Admin: [[adminUser]]</div>
              <button class="nav-btn" on-click="_handleLogout" style="color: #93263D;">
                Cerrar Sesión
              </button>
            </template>

            <button class="cta-btn" on-click="_navigateToBooking">
              Reservar Fecha
            </button>
          </nav>
        </div>
      </header>
    `}static get properties(){return{currentPage:{type:String,value:"landing"},isAdminLoggedIn:{type:Boolean,value:!1},adminUser:{type:String,value:""}}}_computeActiveClass(e,i){return e===i?"active":""}_navigateToLanding(){this.dispatchEvent(new CustomEvent("navigate",{bubbles:!0,composed:!0,detail:{page:"landing"}}))}_navigateToBooking(){this.dispatchEvent(new CustomEvent("navigate",{bubbles:!0,composed:!0,detail:{page:"booking"}}))}_navigateToLogin(){this.dispatchEvent(new CustomEvent("navigate",{bubbles:!0,composed:!0,detail:{page:"login"}}))}_navigateToAdmin(){this.dispatchEvent(new CustomEvent("navigate",{bubbles:!0,composed:!0,detail:{page:"admin"}}))}_handleLogout(){this.dispatchEvent(new CustomEvent("logout",{bubbles:!0,composed:!0}))}}customElements.define("partyzone-header",ql);class Ul extends ye{static get template(){return Te`
      <style>
        :host {
          display: block;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          background: linear-gradient(rgba(44, 44, 44, 0.55), rgba(122, 28, 48, 0.65)),
                      url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
          color: #FFFFFF;
          padding: 6rem 2rem 7rem;
          text-align: center;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(212, 175, 55, 0.25);
          border: 1px solid var(--pz-gold-main, #D4AF37);
          color: var(--pz-gold-light, #F3E5AB);
          padding: 0.4rem 1.2rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(4px);
        }

        .hero-title {
          font-size: 3.2rem;
          font-family: var(--pz-font-serif, 'Playfair Display', Georgia, serif);
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }

        .hero-subtitle {
          font-size: 1.15rem;
          font-family: var(--pz-font-sans, sans-serif);
          color: #FDFBF7;
          margin-bottom: 2.5rem;
          line-height: 1.6;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .btn-hero-primary {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-size: 1.05rem;
          font-weight: 600;
          padding: 0.9rem 2.2rem;
          border-radius: 30px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .btn-hero-primary:hover {
          background: var(--pz-wine-hover, #5E1423);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }

        .btn-hero-secondary {
          background: rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          font-size: 1.05rem;
          font-weight: 600;
          padding: 0.9rem 2.2rem;
          border-radius: 30px;
          border: 1px solid #FFFFFF;
          backdrop-filter: blur(6px);
          transition: all 0.3s ease;
        }

        .btn-hero-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        /* Features Bar */
        .features-bar {
          background: #FFFFFF;
          border-bottom: 1px solid var(--pz-border-color, #E8E2D5);
          padding: 2rem 1.5rem;
          box-shadow: 0 4px 15px rgba(122, 28, 48, 0.04);
        }

        .features-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          background: var(--pz-wine-soft, #F9ECEE);
          border: 1px solid var(--pz-gold-border, #E6D29A);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 1.3rem;
          font-weight: bold;
          flex-shrink: 0;
        }

        .feature-text h4 {
          font-family: var(--pz-font-sans, sans-serif);
          font-size: 0.95rem;
          color: var(--pz-text-main, #2C2C2C);
          font-weight: 700;
        }

        .feature-text p {
          font-size: 0.85rem;
          color: var(--pz-text-muted, #5E5E5E);
        }

        /* Branches Section */
        .branches-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 2rem 4rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-tag {
          color: var(--pz-gold-dark, #B89325);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          margin-bottom: 0.5rem;
          display: block;
        }

        .section-title {
          font-size: 2.4rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 1rem;
        }

        .section-desc {
          max-width: 650px;
          margin: 0 auto;
          color: var(--pz-text-muted, #5E5E5E);
          font-size: 1.05rem;
        }

        .branches-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.2rem;
        }

        .branch-card {
          background: #FFFFFF;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 6px 22px rgba(122, 28, 48, 0.08);
          border: 1px solid var(--pz-border-color, #E8E2D5);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .branch-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 35px rgba(122, 28, 48, 0.14);
          border-color: var(--pz-gold-main, #D4AF37);
        }

        .branch-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #EFE8DB;
        }

        .branch-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .branch-card:hover .branch-image {
          transform: scale(1.05);
        }

        .branch-capacity-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(44, 44, 44, 0.85);
          color: #FFFFFF;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.35rem 0.8rem;
          border-radius: 20px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          backdrop-filter: blur(4px);
        }

        .branch-body {
          padding: 1.8rem 1.6rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .branch-name {
          font-size: 1.4rem;
          color: var(--pz-text-main, #2C2C2C);
          margin-bottom: 0.4rem;
        }

        .branch-address {
          font-size: 0.85rem;
          color: var(--pz-text-muted, #5E5E5E);
          margin-bottom: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .branch-description {
          font-size: 0.92rem;
          color: var(--pz-text-main, #2C2C2C);
          line-height: 1.5;
          margin-bottom: 1.4rem;
          flex-grow: 1;
        }

        .branch-pricing-box {
          background: var(--pz-bg-subtle, #F7F3EB);
          border: 1px solid var(--pz-gold-border, #E6D29A);
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 1.4rem;
          text-align: center;
        }

        .pricing-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--pz-gold-dark, #B89325);
          font-weight: 700;
        }

        .pricing-amount {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-family: var(--pz-font-serif, Georgia, serif);
        }

        /* REGLA CRÍTICA: UN SOLO BOTÓN LIMPIO Y CENTRADO */
        .branch-action-container {
          text-align: center;
          margin-top: auto;
        }

        .btn-quote-branch {
          width: 100%;
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 0.85rem 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          transition: all 0.25s ease;
          box-shadow: 0 3px 10px rgba(122, 28, 48, 0.15);
        }

        .btn-quote-branch:hover {
          background: var(--pz-wine-hover, #5E1423);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(122, 28, 48, 0.25);
        }

        /* Services & Packages Section */
        .packages-section {
          background: var(--pz-bg-subtle, #F7F3EB);
          border-top: 1px solid var(--pz-border-color, #E8E2D5);
          padding: 5rem 2rem 6rem;
        }

        .packages-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.8rem;
        }

        .service-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 1.8rem;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 4px 15px rgba(122, 28, 48, 0.05);
          display: flex;
          flex-direction: column;
        }

        .service-category {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--pz-gold-dark, #B89325);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: var(--pz-bg-subtle, #F7F3EB);
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          margin-bottom: 0.7rem;
        }

        .service-name {
          font-size: 1.25rem;
          color: var(--pz-text-main, #2C2C2C);
          margin-bottom: 0.5rem;
        }

        .service-desc {
          font-size: 0.9rem;
          color: var(--pz-text-muted, #5E5E5E);
          line-height: 1.5;
          margin-bottom: 1.2rem;
          flex-grow: 1;
        }

        .service-price {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-family: var(--pz-font-serif, Georgia, serif);
          margin-bottom: 1rem;
        }

        .btn-choose-package {
          width: 100%;
          background: #FFFFFF;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.75rem 1.2rem;
          border-radius: 8px;
          border: 1.5px solid var(--pz-wine-main, #7A1C30);
          transition: all 0.25s ease;
        }

        .btn-choose-package:hover {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .hero-section {
            padding: 4rem 1.5rem;
          }
        }
      </style>

      <!-- Hero Banner -->
      <section class="hero-section">
        <div class="hero-content">
          <span class="hero-badge">Excelencia & Tradición en Eventos</span>
          <h1 class="hero-title">Momentos Inolvidables en el Salón Perfecto</h1>
          <p class="hero-subtitle">
            Descubre nuestras 4 exclusivas sucursales diseñadas para bodas de ensueño, XV años mágicos, aniversarios de gala y eventos corporativos con la más alta distinción.
          </p>
          <div class="hero-actions">
            <button class="btn-hero-primary" on-click="_scrollToBranches">
              Explorar Salones
            </button>
            <button class="btn-hero-secondary" on-click="_goToBooking">
              Cotizar en Línea
            </button>
          </div>
        </div>
      </section>

      <!-- Features Bar -->
      <section class="features-bar">
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">★</div>
            <div class="feature-text">
              <h4>Capacidad desde 200 a 500 Pax</h4>
              <p>Espacios versátiles y climatizados</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✓</div>
            <div class="feature-text">
              <h4>Garantía de Disponibilidad</h4>
              <p>Reserva en tiempo real con folio único</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">♦</div>
            <div class="feature-text">
              <h4>Banquetería & Show de Luces</h4>
              <p>Servicios integrales de primer nivel</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">♥</div>
            <div class="feature-text">
              <h4>Atención Personalizada</h4>
              <p>Asesoría experta para tu evento</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4 Branches Showcase -->
      <section id="branches" class="branches-section">
        <div class="section-header">
          <span class="section-tag">Nuestras Sedes Exclusivas</span>
          <h2 class="section-title">4 Sucursales Diseñadas para Celebrar</h2>
          <p class="section-desc">
            Cada salón ofrece un concepto arquitectónico único, estacionamiento privado, suite nupcial y la mejor acústica de la ciudad.
          </p>
        </div>

        <div class="branches-grid">
          <template is="dom-repeat" items="[[branches]]" as="branch">
            <div class="branch-card">
              <div class="branch-image-wrapper">
                <!-- TODO: Update media asset path for production -->
                <img class="branch-image" src$="[[branch.image_url]]" alt$="[[branch.name]]" loading="lazy" />
                <span class="branch-capacity-badge">Capacidad: [[branch.capacity]] Personas</span>
              </div>
              <div class="branch-body">
                <h3 class="branch-name">[[branch.name]]</h3>
                <div class="branch-address">
                  <span>📍 [[branch.address]]</span>
                </div>
                <p class="branch-description">[[branch.description]]</p>
                <div class="branch-pricing-box">
                  <div class="pricing-label">Precio Base Salón</div>
                  <div class="pricing-amount">[[_formatPrice(branch.base_price_mxn)]]</div>
                </div>
                <!-- UN SOLO BOTÓN LIMPIO Y CENTRADO -->
                <div class="branch-action-container">
                  <button class="btn-quote-branch" on-click="_selectBranchToQuote">
                    Cotizar Sucursal
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </section>

      <!-- Packages & Additional Services Section -->
      <section class="packages-section">
        <div class="packages-container">
          <div class="section-header">
            <span class="section-tag">Servicios Integrales</span>
            <h2 class="section-title">Complementa tu Fiesta de Ensueño</h2>
            <p class="section-desc">
              Agrega servicios prémium a tu paquete con transparencia de costos en Pesos Mexicanos.
            </p>
          </div>

          <div class="services-grid">
            <template is="dom-repeat" items="[[services]]" as="service">
              <div class="service-card">
                <span class="service-category">[[service.category]]</span>
                <h4 class="service-name">[[service.name]]</h4>
                <p class="service-desc">[[service.description]]</p>
                <div class="service-price">[[_formatPrice(service.price_mxn)]]</div>
                <!-- UN SOLO BOTÓN LIMPIO Y CENTRADO -->
                <button class="btn-choose-package" on-click="_goToBooking">
                  Elegir Paquete
                </button>
              </div>
            </template>
          </div>
        </div>
      </section>
    `}static get properties(){return{branches:{type:Array,value:()=>[]},services:{type:Array,value:()=>[]}}}_formatPrice(e){return Ve(e)}_scrollToBranches(){const e=this.shadowRoot.querySelector("#branches");e&&e.scrollIntoView({behavior:"smooth"})}_goToBooking(){this.dispatchEvent(new CustomEvent("navigate",{bubbles:!0,composed:!0,detail:{page:"booking"}}))}_selectBranchToQuote(e){const i=e.model.branch;this.dispatchEvent(new CustomEvent("navigate",{bubbles:!0,composed:!0,detail:{page:"booking",branchId:i.id}}))}}customElements.define("partyzone-landing",Ul);var W;(function(t){t.assertEqual=r=>{};function e(r){}t.assertIs=e;function i(r){throw new Error}t.assertNever=i,t.arrayToEnum=r=>{const s={};for(const a of r)s[a]=a;return s},t.getValidEnumValues=r=>{const s=t.objectKeys(r).filter(o=>typeof r[r[o]]!="number"),a={};for(const o of s)a[o]=r[o];return t.objectValues(a)},t.objectValues=r=>t.objectKeys(r).map(function(s){return r[s]}),t.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const s=[];for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&s.push(a);return s},t.find=(r,s)=>{for(const a of r)if(s(a))return a},t.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&Number.isFinite(r)&&Math.floor(r)===r;function n(r,s=" | "){return r.map(a=>typeof a=="string"?`'${a}'`:a).join(s)}t.joinValues=n,t.jsonStringifyReplacer=(r,s)=>typeof s=="bigint"?s.toString():s})(W||(W={}));var Yi;(function(t){t.mergeShapes=(e,i)=>({...e,...i})})(Yi||(Yi={}));const F=W.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),xe=t=>{switch(typeof t){case"undefined":return F.undefined;case"string":return F.string;case"number":return Number.isNaN(t)?F.nan:F.number;case"boolean":return F.boolean;case"function":return F.function;case"bigint":return F.bigint;case"symbol":return F.symbol;case"object":return Array.isArray(t)?F.array:t===null?F.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?F.promise:typeof Map<"u"&&t instanceof Map?F.map:typeof Set<"u"&&t instanceof Set?F.set:typeof Date<"u"&&t instanceof Date?F.date:F.object;default:return F.unknown}},k=W.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class ge extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const i=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,i):this.__proto__=i,this.name="ZodError",this.issues=e}format(e){const i=e||function(s){return s.message},n={_errors:[]},r=s=>{for(const a of s.issues)if(a.code==="invalid_union")a.unionErrors.map(r);else if(a.code==="invalid_return_type")r(a.returnTypeError);else if(a.code==="invalid_arguments")r(a.argumentsError);else if(a.path.length===0)n._errors.push(i(a));else{let o=n,l=0;for(;l<a.path.length;){const c=a.path[l];l===a.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(i(a))):o[c]=o[c]||{_errors:[]},o=o[c],l++}}};return r(this),n}static assert(e){if(!(e instanceof ge))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,W.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=i=>i.message){const i={},n=[];for(const r of this.issues)if(r.path.length>0){const s=r.path[0];i[s]=i[s]||[],i[s].push(e(r))}else n.push(e(r));return{formErrors:n,fieldErrors:i}}get formErrors(){return this.flatten()}}ge.create=t=>new ge(t);const Tr=(t,e)=>{let i;switch(t.code){case k.invalid_type:t.received===F.undefined?i="Required":i=`Expected ${t.expected}, received ${t.received}`;break;case k.invalid_literal:i=`Invalid literal value, expected ${JSON.stringify(t.expected,W.jsonStringifyReplacer)}`;break;case k.unrecognized_keys:i=`Unrecognized key(s) in object: ${W.joinValues(t.keys,", ")}`;break;case k.invalid_union:i="Invalid input";break;case k.invalid_union_discriminator:i=`Invalid discriminator value. Expected ${W.joinValues(t.options)}`;break;case k.invalid_enum_value:i=`Invalid enum value. Expected ${W.joinValues(t.options)}, received '${t.received}'`;break;case k.invalid_arguments:i="Invalid function arguments";break;case k.invalid_return_type:i="Invalid function return type";break;case k.invalid_date:i="Invalid date";break;case k.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(i=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(i=`${i} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?i=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?i=`Invalid input: must end with "${t.validation.endsWith}"`:W.assertNever(t.validation):t.validation!=="regex"?i=`Invalid ${t.validation}`:i="Invalid";break;case k.too_small:t.type==="array"?i=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?i=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?i=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="bigint"?i=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?i=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:i="Invalid input";break;case k.too_big:t.type==="array"?i=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?i=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?i=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?i=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?i=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:i="Invalid input";break;case k.custom:i="Invalid input";break;case k.invalid_intersection_types:i="Intersection results could not be merged";break;case k.not_multiple_of:i=`Number must be a multiple of ${t.multipleOf}`;break;case k.not_finite:i="Number must be finite";break;default:i=e.defaultError,W.assertNever(t)}return{message:i}};let Zl=Tr;function Yl(){return Zl}const Wl=t=>{const{data:e,path:i,errorMaps:n,issueData:r}=t,s=[...i,...r.path||[]],a={...r,path:s};if(r.message!==void 0)return{...r,path:s,message:r.message};let o="";const l=n.filter(c=>!!c).slice().reverse();for(const c of l)o=c(a,{data:e,defaultError:o}).message;return{...r,path:s,message:o}};function T(t,e){const i=Yl(),n=Wl({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,i,i===Tr?void 0:Tr].filter(r=>!!r)});t.common.issues.push(n)}class oe{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,i){const n=[];for(const r of i){if(r.status==="aborted")return B;r.status==="dirty"&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,i){const n=[];for(const r of i){const s=await r.key,a=await r.value;n.push({key:s,value:a})}return oe.mergeObjectSync(e,n)}static mergeObjectSync(e,i){const n={};for(const r of i){const{key:s,value:a}=r;if(s.status==="aborted"||a.status==="aborted")return B;s.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof a.value<"u"||r.alwaysSet)&&(n[s.value]=a.value)}return{status:e.value,value:n}}}const B=Object.freeze({status:"aborted"}),at=t=>({status:"dirty",value:t}),ce=t=>({status:"valid",value:t}),Wi=t=>t.status==="aborted",Ji=t=>t.status==="dirty",Ze=t=>t.status==="valid",qt=t=>typeof Promise<"u"&&t instanceof Promise;var N;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(N||(N={}));class Ae{constructor(e,i,n,r){this._cachedPath=[],this.parent=e,this.data=i,this._path=n,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Gi=(t,e)=>{if(Ze(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const i=new ge(t.common.issues);return this._error=i,this._error}}};function V(t){if(!t)return{};const{errorMap:e,invalid_type_error:i,required_error:n,description:r}=t;if(e&&(i||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(a,o)=>{const{message:l}=t;return a.code==="invalid_enum_value"?{message:l??o.defaultError}:typeof o.data>"u"?{message:l??n??o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:l??i??o.defaultError}},description:r}}class U{get description(){return this._def.description}_getType(e){return xe(e.data)}_getOrReturnCtx(e,i){return i||{common:e.parent.common,data:e.data,parsedType:xe(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new oe,ctx:{common:e.parent.common,data:e.data,parsedType:xe(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const i=this._parse(e);if(qt(i))throw new Error("Synchronous parse encountered promise.");return i}_parseAsync(e){const i=this._parse(e);return Promise.resolve(i)}parse(e,i){const n=this.safeParse(e,i);if(n.success)return n.data;throw n.error}safeParse(e,i){const n={common:{issues:[],async:i?.async??!1,contextualErrorMap:i?.errorMap},path:i?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:xe(e)},r=this._parseSync({data:e,path:n.path,parent:n});return Gi(n,r)}"~validate"(e){const i={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:xe(e)};if(!this["~standard"].async)try{const n=this._parseSync({data:e,path:[],parent:i});return Ze(n)?{value:n.value}:{issues:i.common.issues}}catch(n){n?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),i.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:i}).then(n=>Ze(n)?{value:n.value}:{issues:i.common.issues})}async parseAsync(e,i){const n=await this.safeParseAsync(e,i);if(n.success)return n.data;throw n.error}async safeParseAsync(e,i){const n={common:{issues:[],contextualErrorMap:i?.errorMap,async:!0},path:i?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:xe(e)},r=this._parse({data:e,path:n.path,parent:n}),s=await(qt(r)?r:Promise.resolve(r));return Gi(n,s)}refine(e,i){const n=r=>typeof i=="string"||typeof i>"u"?{message:i}:typeof i=="function"?i(r):i;return this._refinement((r,s)=>{const a=e(r),o=()=>s.addIssue({code:k.custom,...n(r)});return typeof Promise<"u"&&a instanceof Promise?a.then(l=>l?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,i){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof i=="function"?i(n,r):i),!1))}_refinement(e){return new Je({schema:this,typeName:H.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:i=>this["~validate"](i)}}optional(){return Ee.create(this,this._def)}nullable(){return Ge.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return pe.create(this)}promise(){return Wt.create(this,this._def)}or(e){return Zt.create([this,e],this._def)}and(e){return Yt.create(this,e,this._def)}transform(e){return new Je({...V(this._def),schema:this,typeName:H.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const i=typeof e=="function"?e:()=>e;return new Nr({...V(this._def),innerType:this,defaultValue:i,typeName:H.ZodDefault})}brand(){return new _c({typeName:H.ZodBranded,type:this,...V(this._def)})}catch(e){const i=typeof e=="function"?e:()=>e;return new Or({...V(this._def),innerType:this,catchValue:i,typeName:H.ZodCatch})}describe(e){const i=this.constructor;return new i({...this._def,description:e})}pipe(e){return ei.create(this,e)}readonly(){return zr.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Jl=/^c[^\s-]{8,}$/i,Gl=/^[0-9a-z]+$/,Xl=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Kl=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Ql=/^[a-z0-9_-]{21}$/i,ec=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,tc=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,rc=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,ic="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let cr;const nc=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,sc=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,oc=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,ac=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,lc=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,cc=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,ys="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",dc=new RegExp(`^${ys}$`);function vs(t){let e="[0-5]\\d";t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`);const i=t.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${i}`}function uc(t){return new RegExp(`^${vs(t)}$`)}function hc(t){let e=`${ys}T${vs(t)}`;const i=[];return i.push(t.local?"Z?":"Z"),t.offset&&i.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${i.join("|")})`,new RegExp(`^${e}$`)}function pc(t,e){return!!((e==="v4"||!e)&&nc.test(t)||(e==="v6"||!e)&&oc.test(t))}function fc(t,e){if(!ec.test(t))return!1;try{const[i]=t.split(".");if(!i)return!1;const n=i.replace(/-/g,"+").replace(/_/g,"/").padEnd(i.length+(4-i.length%4)%4,"="),r=JSON.parse(atob(n));return!(typeof r!="object"||r===null||"typ"in r&&r?.typ!=="JWT"||!r.alg||e&&r.alg!==e)}catch{return!1}}function mc(t,e){return!!((e==="v4"||!e)&&sc.test(t)||(e==="v6"||!e)&&ac.test(t))}class we extends U{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==F.string){const s=this._getOrReturnCtx(e);return T(s,{code:k.invalid_type,expected:F.string,received:s.parsedType}),B}const n=new oe;let r;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(r=this._getOrReturnCtx(e,r),T(r,{code:k.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),n.dirty());else if(s.kind==="max")e.data.length>s.value&&(r=this._getOrReturnCtx(e,r),T(r,{code:k.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),n.dirty());else if(s.kind==="length"){const a=e.data.length>s.value,o=e.data.length<s.value;(a||o)&&(r=this._getOrReturnCtx(e,r),a?T(r,{code:k.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):o&&T(r,{code:k.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),n.dirty())}else if(s.kind==="email")rc.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"email",code:k.invalid_string,message:s.message}),n.dirty());else if(s.kind==="emoji")cr||(cr=new RegExp(ic,"u")),cr.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"emoji",code:k.invalid_string,message:s.message}),n.dirty());else if(s.kind==="uuid")Kl.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"uuid",code:k.invalid_string,message:s.message}),n.dirty());else if(s.kind==="nanoid")Ql.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"nanoid",code:k.invalid_string,message:s.message}),n.dirty());else if(s.kind==="cuid")Jl.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"cuid",code:k.invalid_string,message:s.message}),n.dirty());else if(s.kind==="cuid2")Gl.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"cuid2",code:k.invalid_string,message:s.message}),n.dirty());else if(s.kind==="ulid")Xl.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"ulid",code:k.invalid_string,message:s.message}),n.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),T(r,{validation:"url",code:k.invalid_string,message:s.message}),n.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"regex",code:k.invalid_string,message:s.message}),n.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(r=this._getOrReturnCtx(e,r),T(r,{code:k.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),n.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(r=this._getOrReturnCtx(e,r),T(r,{code:k.invalid_string,validation:{startsWith:s.value},message:s.message}),n.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(r=this._getOrReturnCtx(e,r),T(r,{code:k.invalid_string,validation:{endsWith:s.value},message:s.message}),n.dirty()):s.kind==="datetime"?hc(s).test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{code:k.invalid_string,validation:"datetime",message:s.message}),n.dirty()):s.kind==="date"?dc.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{code:k.invalid_string,validation:"date",message:s.message}),n.dirty()):s.kind==="time"?uc(s).test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{code:k.invalid_string,validation:"time",message:s.message}),n.dirty()):s.kind==="duration"?tc.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"duration",code:k.invalid_string,message:s.message}),n.dirty()):s.kind==="ip"?pc(e.data,s.version)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"ip",code:k.invalid_string,message:s.message}),n.dirty()):s.kind==="jwt"?fc(e.data,s.alg)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"jwt",code:k.invalid_string,message:s.message}),n.dirty()):s.kind==="cidr"?mc(e.data,s.version)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"cidr",code:k.invalid_string,message:s.message}),n.dirty()):s.kind==="base64"?lc.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"base64",code:k.invalid_string,message:s.message}),n.dirty()):s.kind==="base64url"?cc.test(e.data)||(r=this._getOrReturnCtx(e,r),T(r,{validation:"base64url",code:k.invalid_string,message:s.message}),n.dirty()):W.assertNever(s);return{status:n.value,value:e.data}}_regex(e,i,n){return this.refinement(r=>e.test(r),{validation:i,code:k.invalid_string,...N.errToObj(n)})}_addCheck(e){return new we({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...N.errToObj(e)})}url(e){return this._addCheck({kind:"url",...N.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...N.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...N.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...N.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...N.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...N.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...N.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...N.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...N.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...N.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...N.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...N.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...N.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...N.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...N.errToObj(e)})}regex(e,i){return this._addCheck({kind:"regex",regex:e,...N.errToObj(i)})}includes(e,i){return this._addCheck({kind:"includes",value:e,position:i?.position,...N.errToObj(i?.message)})}startsWith(e,i){return this._addCheck({kind:"startsWith",value:e,...N.errToObj(i)})}endsWith(e,i){return this._addCheck({kind:"endsWith",value:e,...N.errToObj(i)})}min(e,i){return this._addCheck({kind:"min",value:e,...N.errToObj(i)})}max(e,i){return this._addCheck({kind:"max",value:e,...N.errToObj(i)})}length(e,i){return this._addCheck({kind:"length",value:e,...N.errToObj(i)})}nonempty(e){return this.min(1,N.errToObj(e))}trim(){return new we({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new we({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new we({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const i of this._def.checks)i.kind==="min"&&(e===null||i.value>e)&&(e=i.value);return e}get maxLength(){let e=null;for(const i of this._def.checks)i.kind==="max"&&(e===null||i.value<e)&&(e=i.value);return e}}we.create=t=>new we({checks:[],typeName:H.ZodString,coerce:t?.coerce??!1,...V(t)});function gc(t,e){const i=(t.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,r=i>n?i:n,s=Number.parseInt(t.toFixed(r).replace(".","")),a=Number.parseInt(e.toFixed(r).replace(".",""));return s%a/10**r}class Ye extends U{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==F.number){const s=this._getOrReturnCtx(e);return T(s,{code:k.invalid_type,expected:F.number,received:s.parsedType}),B}let n;const r=new oe;for(const s of this._def.checks)s.kind==="int"?W.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),T(n,{code:k.invalid_type,expected:"integer",received:"float",message:s.message}),r.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(n=this._getOrReturnCtx(e,n),T(n,{code:k.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(n=this._getOrReturnCtx(e,n),T(n,{code:k.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="multipleOf"?gc(e.data,s.value)!==0&&(n=this._getOrReturnCtx(e,n),T(n,{code:k.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),T(n,{code:k.not_finite,message:s.message}),r.dirty()):W.assertNever(s);return{status:r.value,value:e.data}}gte(e,i){return this.setLimit("min",e,!0,N.toString(i))}gt(e,i){return this.setLimit("min",e,!1,N.toString(i))}lte(e,i){return this.setLimit("max",e,!0,N.toString(i))}lt(e,i){return this.setLimit("max",e,!1,N.toString(i))}setLimit(e,i,n,r){return new Ye({...this._def,checks:[...this._def.checks,{kind:e,value:i,inclusive:n,message:N.toString(r)}]})}_addCheck(e){return new Ye({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:N.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:N.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:N.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:N.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:N.toString(e)})}multipleOf(e,i){return this._addCheck({kind:"multipleOf",value:e,message:N.toString(i)})}finite(e){return this._addCheck({kind:"finite",message:N.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:N.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:N.toString(e)})}get minValue(){let e=null;for(const i of this._def.checks)i.kind==="min"&&(e===null||i.value>e)&&(e=i.value);return e}get maxValue(){let e=null;for(const i of this._def.checks)i.kind==="max"&&(e===null||i.value<e)&&(e=i.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&W.isInteger(e.value))}get isFinite(){let e=null,i=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(i===null||n.value>i)&&(i=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(i)&&Number.isFinite(e)}}Ye.create=t=>new Ye({checks:[],typeName:H.ZodNumber,coerce:t?.coerce||!1,...V(t)});class xt extends U{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==F.bigint)return this._getInvalidInput(e);let n;const r=new oe;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(n=this._getOrReturnCtx(e,n),T(n,{code:k.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(n=this._getOrReturnCtx(e,n),T(n,{code:k.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),T(n,{code:k.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):W.assertNever(s);return{status:r.value,value:e.data}}_getInvalidInput(e){const i=this._getOrReturnCtx(e);return T(i,{code:k.invalid_type,expected:F.bigint,received:i.parsedType}),B}gte(e,i){return this.setLimit("min",e,!0,N.toString(i))}gt(e,i){return this.setLimit("min",e,!1,N.toString(i))}lte(e,i){return this.setLimit("max",e,!0,N.toString(i))}lt(e,i){return this.setLimit("max",e,!1,N.toString(i))}setLimit(e,i,n,r){return new xt({...this._def,checks:[...this._def.checks,{kind:e,value:i,inclusive:n,message:N.toString(r)}]})}_addCheck(e){return new xt({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:N.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:N.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:N.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:N.toString(e)})}multipleOf(e,i){return this._addCheck({kind:"multipleOf",value:e,message:N.toString(i)})}get minValue(){let e=null;for(const i of this._def.checks)i.kind==="min"&&(e===null||i.value>e)&&(e=i.value);return e}get maxValue(){let e=null;for(const i of this._def.checks)i.kind==="max"&&(e===null||i.value<e)&&(e=i.value);return e}}xt.create=t=>new xt({checks:[],typeName:H.ZodBigInt,coerce:t?.coerce??!1,...V(t)});class Xi extends U{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==F.boolean){const n=this._getOrReturnCtx(e);return T(n,{code:k.invalid_type,expected:F.boolean,received:n.parsedType}),B}return ce(e.data)}}Xi.create=t=>new Xi({typeName:H.ZodBoolean,coerce:t?.coerce||!1,...V(t)});class Ut extends U{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==F.date){const s=this._getOrReturnCtx(e);return T(s,{code:k.invalid_type,expected:F.date,received:s.parsedType}),B}if(Number.isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return T(s,{code:k.invalid_date}),B}const n=new oe;let r;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(r=this._getOrReturnCtx(e,r),T(r,{code:k.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),n.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(r=this._getOrReturnCtx(e,r),T(r,{code:k.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),n.dirty()):W.assertNever(s);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ut({...this._def,checks:[...this._def.checks,e]})}min(e,i){return this._addCheck({kind:"min",value:e.getTime(),message:N.toString(i)})}max(e,i){return this._addCheck({kind:"max",value:e.getTime(),message:N.toString(i)})}get minDate(){let e=null;for(const i of this._def.checks)i.kind==="min"&&(e===null||i.value>e)&&(e=i.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const i of this._def.checks)i.kind==="max"&&(e===null||i.value<e)&&(e=i.value);return e!=null?new Date(e):null}}Ut.create=t=>new Ut({checks:[],coerce:t?.coerce||!1,typeName:H.ZodDate,...V(t)});class Ki extends U{_parse(e){if(this._getType(e)!==F.symbol){const n=this._getOrReturnCtx(e);return T(n,{code:k.invalid_type,expected:F.symbol,received:n.parsedType}),B}return ce(e.data)}}Ki.create=t=>new Ki({typeName:H.ZodSymbol,...V(t)});class Qi extends U{_parse(e){if(this._getType(e)!==F.undefined){const n=this._getOrReturnCtx(e);return T(n,{code:k.invalid_type,expected:F.undefined,received:n.parsedType}),B}return ce(e.data)}}Qi.create=t=>new Qi({typeName:H.ZodUndefined,...V(t)});class en extends U{_parse(e){if(this._getType(e)!==F.null){const n=this._getOrReturnCtx(e);return T(n,{code:k.invalid_type,expected:F.null,received:n.parsedType}),B}return ce(e.data)}}en.create=t=>new en({typeName:H.ZodNull,...V(t)});class tn extends U{constructor(){super(...arguments),this._any=!0}_parse(e){return ce(e.data)}}tn.create=t=>new tn({typeName:H.ZodAny,...V(t)});class rn extends U{constructor(){super(...arguments),this._unknown=!0}_parse(e){return ce(e.data)}}rn.create=t=>new rn({typeName:H.ZodUnknown,...V(t)});class Pe extends U{_parse(e){const i=this._getOrReturnCtx(e);return T(i,{code:k.invalid_type,expected:F.never,received:i.parsedType}),B}}Pe.create=t=>new Pe({typeName:H.ZodNever,...V(t)});class nn extends U{_parse(e){if(this._getType(e)!==F.undefined){const n=this._getOrReturnCtx(e);return T(n,{code:k.invalid_type,expected:F.void,received:n.parsedType}),B}return ce(e.data)}}nn.create=t=>new nn({typeName:H.ZodVoid,...V(t)});class pe extends U{_parse(e){const{ctx:i,status:n}=this._processInputParams(e),r=this._def;if(i.parsedType!==F.array)return T(i,{code:k.invalid_type,expected:F.array,received:i.parsedType}),B;if(r.exactLength!==null){const a=i.data.length>r.exactLength.value,o=i.data.length<r.exactLength.value;(a||o)&&(T(i,{code:a?k.too_big:k.too_small,minimum:o?r.exactLength.value:void 0,maximum:a?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&i.data.length<r.minLength.value&&(T(i,{code:k.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&i.data.length>r.maxLength.value&&(T(i,{code:k.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),i.common.async)return Promise.all([...i.data].map((a,o)=>r.type._parseAsync(new Ae(i,a,i.path,o)))).then(a=>oe.mergeArray(n,a));const s=[...i.data].map((a,o)=>r.type._parseSync(new Ae(i,a,i.path,o)));return oe.mergeArray(n,s)}get element(){return this._def.type}min(e,i){return new pe({...this._def,minLength:{value:e,message:N.toString(i)}})}max(e,i){return new pe({...this._def,maxLength:{value:e,message:N.toString(i)}})}length(e,i){return new pe({...this._def,exactLength:{value:e,message:N.toString(i)}})}nonempty(e){return this.min(1,e)}}pe.create=(t,e)=>new pe({type:t,minLength:null,maxLength:null,exactLength:null,typeName:H.ZodArray,...V(e)});function Be(t){if(t instanceof X){const e={};for(const i in t.shape){const n=t.shape[i];e[i]=Ee.create(Be(n))}return new X({...t._def,shape:()=>e})}else return t instanceof pe?new pe({...t._def,type:Be(t.element)}):t instanceof Ee?Ee.create(Be(t.unwrap())):t instanceof Ge?Ge.create(Be(t.unwrap())):t instanceof Re?Re.create(t.items.map(e=>Be(e))):t}class X extends U{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),i=W.objectKeys(e);return this._cached={shape:e,keys:i},this._cached}_parse(e){if(this._getType(e)!==F.object){const c=this._getOrReturnCtx(e);return T(c,{code:k.invalid_type,expected:F.object,received:c.parsedType}),B}const{status:n,ctx:r}=this._processInputParams(e),{shape:s,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Pe&&this._def.unknownKeys==="strip"))for(const c in r.data)a.includes(c)||o.push(c);const l=[];for(const c of a){const d=s[c],h=r.data[c];l.push({key:{status:"valid",value:c},value:d._parse(new Ae(r,h,r.path,c)),alwaysSet:c in r.data})}if(this._def.catchall instanceof Pe){const c=this._def.unknownKeys;if(c==="passthrough")for(const d of o)l.push({key:{status:"valid",value:d},value:{status:"valid",value:r.data[d]}});else if(c==="strict")o.length>0&&(T(r,{code:k.unrecognized_keys,keys:o}),n.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const d of o){const h=r.data[d];l.push({key:{status:"valid",value:d},value:c._parse(new Ae(r,h,r.path,d)),alwaysSet:d in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const c=[];for(const d of l){const h=await d.key,g=await d.value;c.push({key:h,value:g,alwaysSet:d.alwaysSet})}return c}).then(c=>oe.mergeObjectSync(n,c)):oe.mergeObjectSync(n,l)}get shape(){return this._def.shape()}strict(e){return N.errToObj,new X({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(i,n)=>{const r=this._def.errorMap?.(i,n).message??n.defaultError;return i.code==="unrecognized_keys"?{message:N.errToObj(e).message??r}:{message:r}}}:{}})}strip(){return new X({...this._def,unknownKeys:"strip"})}passthrough(){return new X({...this._def,unknownKeys:"passthrough"})}extend(e){return new X({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new X({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:H.ZodObject})}setKey(e,i){return this.augment({[e]:i})}catchall(e){return new X({...this._def,catchall:e})}pick(e){const i={};for(const n of W.objectKeys(e))e[n]&&this.shape[n]&&(i[n]=this.shape[n]);return new X({...this._def,shape:()=>i})}omit(e){const i={};for(const n of W.objectKeys(this.shape))e[n]||(i[n]=this.shape[n]);return new X({...this._def,shape:()=>i})}deepPartial(){return Be(this)}partial(e){const i={};for(const n of W.objectKeys(this.shape)){const r=this.shape[n];e&&!e[n]?i[n]=r:i[n]=r.optional()}return new X({...this._def,shape:()=>i})}required(e){const i={};for(const n of W.objectKeys(this.shape))if(e&&!e[n])i[n]=this.shape[n];else{let s=this.shape[n];for(;s instanceof Ee;)s=s._def.innerType;i[n]=s}return new X({...this._def,shape:()=>i})}keyof(){return bs(W.objectKeys(this.shape))}}X.create=(t,e)=>new X({shape:()=>t,unknownKeys:"strip",catchall:Pe.create(),typeName:H.ZodObject,...V(e)});X.strictCreate=(t,e)=>new X({shape:()=>t,unknownKeys:"strict",catchall:Pe.create(),typeName:H.ZodObject,...V(e)});X.lazycreate=(t,e)=>new X({shape:t,unknownKeys:"strip",catchall:Pe.create(),typeName:H.ZodObject,...V(e)});class Zt extends U{_parse(e){const{ctx:i}=this._processInputParams(e),n=this._def.options;function r(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return i.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(o=>new ge(o.ctx.common.issues));return T(i,{code:k.invalid_union,unionErrors:a}),B}if(i.common.async)return Promise.all(n.map(async s=>{const a={...i,common:{...i.common,issues:[]},parent:null};return{result:await s._parseAsync({data:i.data,path:i.path,parent:a}),ctx:a}})).then(r);{let s;const a=[];for(const l of n){const c={...i,common:{...i.common,issues:[]},parent:null},d=l._parseSync({data:i.data,path:i.path,parent:c});if(d.status==="valid")return d;d.status==="dirty"&&!s&&(s={result:d,ctx:c}),c.common.issues.length&&a.push(c.common.issues)}if(s)return i.common.issues.push(...s.ctx.common.issues),s.result;const o=a.map(l=>new ge(l));return T(i,{code:k.invalid_union,unionErrors:o}),B}}get options(){return this._def.options}}Zt.create=(t,e)=>new Zt({options:t,typeName:H.ZodUnion,...V(e)});function Fr(t,e){const i=xe(t),n=xe(e);if(t===e)return{valid:!0,data:t};if(i===F.object&&n===F.object){const r=W.objectKeys(e),s=W.objectKeys(t).filter(o=>r.indexOf(o)!==-1),a={...t,...e};for(const o of s){const l=Fr(t[o],e[o]);if(!l.valid)return{valid:!1};a[o]=l.data}return{valid:!0,data:a}}else if(i===F.array&&n===F.array){if(t.length!==e.length)return{valid:!1};const r=[];for(let s=0;s<t.length;s++){const a=t[s],o=e[s],l=Fr(a,o);if(!l.valid)return{valid:!1};r.push(l.data)}return{valid:!0,data:r}}else return i===F.date&&n===F.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Yt extends U{_parse(e){const{status:i,ctx:n}=this._processInputParams(e),r=(s,a)=>{if(Wi(s)||Wi(a))return B;const o=Fr(s.value,a.value);return o.valid?((Ji(s)||Ji(a))&&i.dirty(),{status:i.value,value:o.data}):(T(n,{code:k.invalid_intersection_types}),B)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([s,a])=>r(s,a)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}Yt.create=(t,e,i)=>new Yt({left:t,right:e,typeName:H.ZodIntersection,...V(i)});class Re extends U{_parse(e){const{status:i,ctx:n}=this._processInputParams(e);if(n.parsedType!==F.array)return T(n,{code:k.invalid_type,expected:F.array,received:n.parsedType}),B;if(n.data.length<this._def.items.length)return T(n,{code:k.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),B;!this._def.rest&&n.data.length>this._def.items.length&&(T(n,{code:k.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),i.dirty());const s=[...n.data].map((a,o)=>{const l=this._def.items[o]||this._def.rest;return l?l._parse(new Ae(n,a,n.path,o)):null}).filter(a=>!!a);return n.common.async?Promise.all(s).then(a=>oe.mergeArray(i,a)):oe.mergeArray(i,s)}get items(){return this._def.items}rest(e){return new Re({...this._def,rest:e})}}Re.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Re({items:t,typeName:H.ZodTuple,rest:null,...V(e)})};class sn extends U{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:i,ctx:n}=this._processInputParams(e);if(n.parsedType!==F.map)return T(n,{code:k.invalid_type,expected:F.map,received:n.parsedType}),B;const r=this._def.keyType,s=this._def.valueType,a=[...n.data.entries()].map(([o,l],c)=>({key:r._parse(new Ae(n,o,n.path,[c,"key"])),value:s._parse(new Ae(n,l,n.path,[c,"value"]))}));if(n.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const l of a){const c=await l.key,d=await l.value;if(c.status==="aborted"||d.status==="aborted")return B;(c.status==="dirty"||d.status==="dirty")&&i.dirty(),o.set(c.value,d.value)}return{status:i.value,value:o}})}else{const o=new Map;for(const l of a){const c=l.key,d=l.value;if(c.status==="aborted"||d.status==="aborted")return B;(c.status==="dirty"||d.status==="dirty")&&i.dirty(),o.set(c.value,d.value)}return{status:i.value,value:o}}}}sn.create=(t,e,i)=>new sn({valueType:e,keyType:t,typeName:H.ZodMap,...V(i)});class wt extends U{_parse(e){const{status:i,ctx:n}=this._processInputParams(e);if(n.parsedType!==F.set)return T(n,{code:k.invalid_type,expected:F.set,received:n.parsedType}),B;const r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(T(n,{code:k.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),i.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(T(n,{code:k.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),i.dirty());const s=this._def.valueType;function a(l){const c=new Set;for(const d of l){if(d.status==="aborted")return B;d.status==="dirty"&&i.dirty(),c.add(d.value)}return{status:i.value,value:c}}const o=[...n.data.values()].map((l,c)=>s._parse(new Ae(n,l,n.path,c)));return n.common.async?Promise.all(o).then(l=>a(l)):a(o)}min(e,i){return new wt({...this._def,minSize:{value:e,message:N.toString(i)}})}max(e,i){return new wt({...this._def,maxSize:{value:e,message:N.toString(i)}})}size(e,i){return this.min(e,i).max(e,i)}nonempty(e){return this.min(1,e)}}wt.create=(t,e)=>new wt({valueType:t,minSize:null,maxSize:null,typeName:H.ZodSet,...V(e)});class on extends U{get schema(){return this._def.getter()}_parse(e){const{ctx:i}=this._processInputParams(e);return this._def.getter()._parse({data:i.data,path:i.path,parent:i})}}on.create=(t,e)=>new on({getter:t,typeName:H.ZodLazy,...V(e)});class an extends U{_parse(e){if(e.data!==this._def.value){const i=this._getOrReturnCtx(e);return T(i,{received:i.data,code:k.invalid_literal,expected:this._def.value}),B}return{status:"valid",value:e.data}}get value(){return this._def.value}}an.create=(t,e)=>new an({value:t,typeName:H.ZodLiteral,...V(e)});function bs(t,e){return new We({values:t,typeName:H.ZodEnum,...V(e)})}class We extends U{_parse(e){if(typeof e.data!="string"){const i=this._getOrReturnCtx(e),n=this._def.values;return T(i,{expected:W.joinValues(n),received:i.parsedType,code:k.invalid_type}),B}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const i=this._getOrReturnCtx(e),n=this._def.values;return T(i,{received:i.data,code:k.invalid_enum_value,options:n}),B}return ce(e.data)}get options(){return this._def.values}get enum(){const e={};for(const i of this._def.values)e[i]=i;return e}get Values(){const e={};for(const i of this._def.values)e[i]=i;return e}get Enum(){const e={};for(const i of this._def.values)e[i]=i;return e}extract(e,i=this._def){return We.create(e,{...this._def,...i})}exclude(e,i=this._def){return We.create(this.options.filter(n=>!e.includes(n)),{...this._def,...i})}}We.create=bs;class ln extends U{_parse(e){const i=W.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==F.string&&n.parsedType!==F.number){const r=W.objectValues(i);return T(n,{expected:W.joinValues(r),received:n.parsedType,code:k.invalid_type}),B}if(this._cache||(this._cache=new Set(W.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const r=W.objectValues(i);return T(n,{received:n.data,code:k.invalid_enum_value,options:r}),B}return ce(e.data)}get enum(){return this._def.values}}ln.create=(t,e)=>new ln({values:t,typeName:H.ZodNativeEnum,...V(e)});class Wt extends U{unwrap(){return this._def.type}_parse(e){const{ctx:i}=this._processInputParams(e);if(i.parsedType!==F.promise&&i.common.async===!1)return T(i,{code:k.invalid_type,expected:F.promise,received:i.parsedType}),B;const n=i.parsedType===F.promise?i.data:Promise.resolve(i.data);return ce(n.then(r=>this._def.type.parseAsync(r,{path:i.path,errorMap:i.common.contextualErrorMap})))}}Wt.create=(t,e)=>new Wt({type:t,typeName:H.ZodPromise,...V(e)});class Je extends U{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===H.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:i,ctx:n}=this._processInputParams(e),r=this._def.effect||null,s={addIssue:a=>{T(n,a),a.fatal?i.abort():i.dirty()},get path(){return n.path}};if(s.addIssue=s.addIssue.bind(s),r.type==="preprocess"){const a=r.transform(n.data,s);if(n.common.async)return Promise.resolve(a).then(async o=>{if(i.value==="aborted")return B;const l=await this._def.schema._parseAsync({data:o,path:n.path,parent:n});return l.status==="aborted"?B:l.status==="dirty"||i.value==="dirty"?at(l.value):l});{if(i.value==="aborted")return B;const o=this._def.schema._parseSync({data:a,path:n.path,parent:n});return o.status==="aborted"?B:o.status==="dirty"||i.value==="dirty"?at(o.value):o}}if(r.type==="refinement"){const a=o=>{const l=r.refinement(o,s);if(n.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?B:(o.status==="dirty"&&i.dirty(),a(o.value),{status:i.value,value:o.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>o.status==="aborted"?B:(o.status==="dirty"&&i.dirty(),a(o.value).then(()=>({status:i.value,value:o.value}))))}if(r.type==="transform")if(n.common.async===!1){const a=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!Ze(a))return B;const o=r.transform(a.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:i.value,value:o}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(a=>Ze(a)?Promise.resolve(r.transform(a.value,s)).then(o=>({status:i.value,value:o})):B);W.assertNever(r)}}Je.create=(t,e,i)=>new Je({schema:t,typeName:H.ZodEffects,effect:e,...V(i)});Je.createWithPreprocess=(t,e,i)=>new Je({schema:e,effect:{type:"preprocess",transform:t},typeName:H.ZodEffects,...V(i)});class Ee extends U{_parse(e){return this._getType(e)===F.undefined?ce(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ee.create=(t,e)=>new Ee({innerType:t,typeName:H.ZodOptional,...V(e)});class Ge extends U{_parse(e){return this._getType(e)===F.null?ce(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ge.create=(t,e)=>new Ge({innerType:t,typeName:H.ZodNullable,...V(e)});class Nr extends U{_parse(e){const{ctx:i}=this._processInputParams(e);let n=i.data;return i.parsedType===F.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:i.path,parent:i})}removeDefault(){return this._def.innerType}}Nr.create=(t,e)=>new Nr({innerType:t,typeName:H.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...V(e)});class Or extends U{_parse(e){const{ctx:i}=this._processInputParams(e),n={...i,common:{...i.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return qt(r)?r.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new ge(n.common.issues)},input:n.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new ge(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}Or.create=(t,e)=>new Or({innerType:t,typeName:H.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...V(e)});class cn extends U{_parse(e){if(this._getType(e)!==F.nan){const n=this._getOrReturnCtx(e);return T(n,{code:k.invalid_type,expected:F.nan,received:n.parsedType}),B}return{status:"valid",value:e.data}}}cn.create=t=>new cn({typeName:H.ZodNaN,...V(t)});class _c extends U{_parse(e){const{ctx:i}=this._processInputParams(e),n=i.data;return this._def.type._parse({data:n,path:i.path,parent:i})}unwrap(){return this._def.type}}class ei extends U{_parse(e){const{status:i,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?B:s.status==="dirty"?(i.dirty(),at(s.value)):this._def.out._parseAsync({data:s.value,path:n.path,parent:n})})();{const r=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return r.status==="aborted"?B:r.status==="dirty"?(i.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:n.path,parent:n})}}static create(e,i){return new ei({in:e,out:i,typeName:H.ZodPipeline})}}class zr extends U{_parse(e){const i=this._def.innerType._parse(e),n=r=>(Ze(r)&&(r.value=Object.freeze(r.value)),r);return qt(i)?i.then(r=>n(r)):n(i)}unwrap(){return this._def.innerType}}zr.create=(t,e)=>new zr({innerType:t,typeName:H.ZodReadonly,...V(e)});var H;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(H||(H={}));const he=we.create,dn=Ye.create;Pe.create;const yc=pe.create,xs=X.create;Zt.create;Yt.create;Re.create;const vc=We.create;Wt.create;Ee.create;Ge.create;const bc=xs({customer_name:he().min(3,"El nombre completo debe tener al menos 3 caracteres.").max(100,"El nombre no puede exceder 100 caracteres.").regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,"El nombre solo debe contener letras y espacios."),customer_email:he().email("Ingresa un correo electrónico válido (ej. usuario@dominio.com).").max(120,"El correo no puede exceder 120 caracteres."),customer_phone:he().min(10,"El teléfono debe tener 10 dígitos numéricos.").max(15,"El teléfono no puede exceder 15 dígitos.").regex(/^[0-9+\s()-]+$/,"El teléfono solo puede contener números y caracteres válidos."),branch_id:dn({required_error:"Debes seleccionar una sucursal.",invalid_type_error:"Identificador de sucursal inválido."}).positive("Selecciona una sucursal válida."),event_date:he().min(10,"Selecciona una fecha de evento válida.").refine(t=>{const e=new Date(t),i=new Date;return i.setHours(0,0,0,0),e>=i},"La fecha del evento debe ser hoy o una fecha futura."),time_slot:vc(["Matutino","Vespertino","Nocturno"],{errorMap:()=>({message:"Debes seleccionar un turno válido (Matutino, Vespertino o Nocturno)."})}),service_ids:yc(dn()).default([]),cardholder_name:he().min(3,"Nombre del titular requerido.").max(100,"Nombre del titular muy extenso."),card_number:he().transform(t=>t.replace(/\s+/g,"").replace(/-/g,"")).refine(t=>/^\d{15,16}$/.test(t),"El número de tarjeta debe tener 15 o 16 dígitos."),card_exp:he().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/,"Fecha de expiración inválida (formato MM/AA)."),card_cvc:he().regex(/^\d{3,4}$/,"El CVC debe contener 3 o 4 dígitos.")}),xc=xs({username:he().min(3,"El usuario debe tener al menos 3 caracteres.").max(50,"El usuario no puede exceder 50 caracteres."),password:he().min(4,"La contraseña debe tener al menos 4 caracteres.")}),ve="/api";async function ws(){const t=await fetch(`${ve}/branches`),e=await t.json();if(!t.ok)throw new Error(e.message||"Error al obtener sucursales");return e.data}async function Cs(){const t=await fetch(`${ve}/services`),e=await t.json();if(!t.ok)throw new Error(e.message||"Error al obtener servicios");return e.data}async function Ss(t,e,i){const n=new URLSearchParams({branch_id:t,event_date:e,time_slot:i});return await(await fetch(`${ve}/availability?${n.toString()}`)).json()}async function Es(t){const e=await fetch(`${ve}/bookings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),i=await e.json();if(!e.ok)throw new Error(i.message||"Error al procesar la reservación");return i}async function ks(t,e){const i=await fetch(`${ve}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})}),n=await i.json();if(!i.ok)throw new Error(n.message||"Credenciales incorrectas");return n}async function As(t=!0){const e=await fetch(`${ve}/admin/bookings?show_all=${t}`),i=await e.json();if(!e.ok)throw new Error(i.message||"Error al obtener bitácora");return i.data}async function Ps(t){const e=await fetch(`${ve}/admin/bookings/${t}/soft-delete`,{method:"PATCH"}),i=await e.json();if(!e.ok)throw new Error(i.message||"Error al dar de baja");return i}async function Ts(t){const e=await fetch(`${ve}/admin/bookings/${t}/restore`,{method:"PATCH"}),i=await e.json();if(!e.ok)throw new Error(i.message||"Error al restaurar");return i}async function wc(t,e){const i=await fetch(`${ve}/admin/bookings/${t}/status`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:e})}),n=await i.json();if(!i.ok)throw new Error(n.message||"Error al actualizar estado");return n}const un=Object.freeze(Object.defineProperty({__proto__:null,adminLogin:ks,checkAvailability:Ss,createBooking:Es,fetchAdminBookings:As,fetchBranches:ws,fetchServices:Cs,restoreBooking:Ts,softDeleteBooking:Ps,updateBookingStatus:wc},Symbol.toStringTag,{value:"Module"}));class Cc extends ye{static get template(){return Te`
      <style>
        :host {
          display: block;
          width: 100%;
          min-height: 80vh;
          position: relative;
          z-index: 1;
          background-color: var(--pz-bg-main, #FDFBF7);
          padding: 2.5rem 0 4rem;
        }

        .booking-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .booking-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .booking-tag {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--pz-gold-dark, #B89325);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .booking-title {
          font-size: 2.4rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-top: 0.3rem;
        }

        .booking-subtitle {
          color: var(--pz-text-muted, #5E5E5E);
          max-width: 600px;
          margin: 0.5rem auto 0;
          font-size: 1rem;
        }

        /* Layout Grid */
        .booking-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
          width: 100%;
          position: relative;
        }

        .booking-form-card {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 6px 25px rgba(122, 28, 48, 0.07);
          padding: 2.2rem 2.2rem 2.2rem 2.2rem;
          padding-right: 24px;
          box-sizing: border-box;
          position: relative;
        }

        .summary-card {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 6px 25px rgba(122, 28, 48, 0.07);
          padding: 2.2rem;
          position: sticky;
          top: 24px;
        }

        .confirmation-card {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 6px 25px rgba(122, 28, 48, 0.07);
          padding: 2.2rem;
        }

        .exp-input-group {
          display: flex;
          align-items: center;
          gap: 8px;
          width: auto;
        }

        .exp-input-group input {
          width: 60px;
          text-align: center;
          padding: 0.75rem 0.5rem;
          box-sizing: border-box;
        }

        .exp-divider {
          font-size: 1.2rem;
          font-weight: bold;
          color: var(--pz-text-muted, #5E5E5E);
        }

        .form-section-title {
          font-size: 1.25rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 1.2rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--pz-border-subtle, #F0EAE1);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .form-section-title .step-num {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-family: var(--pz-font-sans, sans-serif);
        }

        .form-group {
          margin-bottom: 1.4rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--pz-text-main, #2C2C2C);
          margin-bottom: 0.4rem;
        }

        .required-star {
          color: var(--pz-wine-main, #7A1C30);
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="date"],
        select {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          font-family: var(--pz-font-sans, sans-serif);
          font-size: 0.95rem;
          color: var(--pz-text-main, #2C2C2C);
          background: var(--pz-bg-main, #FDFBF7);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
          max-width: 100%;
        }

        input:focus, select:focus {
          outline: none;
          border-color: var(--pz-gold-main, #D4AF37);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
          background: #FFFFFF;
        }

        /* ── Fix de desborde estricto para inputs específicos ── */
        #eventDate,
        #cardHolder {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          display: block;
        }

        /* ── Datepicker premium: herencia tipográfica + theming Guinda/Dorado ── */
        input[type="date"] {
          font-family: inherit;
          cursor: pointer;
          position: relative;
        }

        /* Quitar el ícono nativo de calendario en Chrome/Edge y reemplazar visualmente */
        input[type="date"]::-webkit-calendar-picker-indicator {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237A1C30' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
          background-size: 16px 16px;
          background-repeat: no-repeat;
          background-position: center;
          width: 20px;
          height: 20px;
          opacity: 0.75;
          cursor: pointer;
          border-radius: 4px;
          padding: 2px;
          transition: opacity 0.2s ease, background-color 0.2s ease;
        }

        input[type="date"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
          background-color: rgba(122, 28, 48, 0.08);
        }

        input[type="date"]::-webkit-datetime-edit {
          font-family: inherit;
          color: var(--pz-text-main, #2C2C2C);
        }

        input[type="date"]::-webkit-datetime-edit-fields-wrapper {
          padding: 0;
        }

        input[type="date"]::-webkit-datetime-edit-month-field,
        input[type="date"]::-webkit-datetime-edit-day-field,
        input[type="date"]::-webkit-datetime-edit-year-field {
          font-family: inherit;
          color: var(--pz-text-main, #2C2C2C);
          border-radius: 3px;
          padding: 0 2px;
        }

        input[type="date"]::-webkit-datetime-edit-month-field:focus,
        input[type="date"]::-webkit-datetime-edit-day-field:focus,
        input[type="date"]::-webkit-datetime-edit-year-field:focus {
          background: rgba(122, 28, 48, 0.10);
          color: var(--pz-wine-main, #7A1C30);
          outline: none;
        }

        input[type="date"]::-webkit-datetime-edit-text {
          color: var(--pz-gold-main, #D4AF37);
          font-weight: 700;
          padding: 0 2px;
        }

        /* Branch Selector Cards */
        .branch-options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .branch-option-card {
          border: 2px solid var(--pz-border-color, #E8E2D5);
          border-radius: 10px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          background: var(--pz-bg-main, #FDFBF7);
        }

        .branch-option-card:hover {
          border-color: var(--pz-gold-main, #D4AF37);
          background: #FFFFFF;
        }

        .branch-option-card.selected {
          border-color: var(--pz-wine-main, #7A1C30);
          background: var(--pz-wine-soft, #F9ECEE);
        }

        .branch-option-name {
          font-weight: 700;
          color: var(--pz-text-main, #2C2C2C);
          font-size: 1rem;
        }

        .branch-option-price {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          margin-top: 0.3rem;
        }

        /* Slot Selector */
        .slot-options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.8rem;
        }

        .slot-option-card {
          border: 2px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          padding: 0.8rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
          background: var(--pz-bg-main, #FDFBF7);
        }

        .slot-option-card:hover {
          border-color: var(--pz-gold-main, #D4AF37);
        }

        .slot-option-card.selected {
          border-color: var(--pz-wine-main, #7A1C30);
          background: var(--pz-wine-soft, #F9ECEE);
          font-weight: 700;
        }

        /* Availability Banner */
        .availability-banner {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          margin-top: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .availability-banner.available {
          background: #EAF7ED;
          color: #1E6B2C;
          border: 1px solid #C3E6CB;
        }

        .availability-banner.unavailable {
          background: #FDF0ED;
          color: #8C1D18;
          border: 1px solid #F5C6CB;
        }

        /* Services Checkboxes */
        .services-selection-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .service-checkbox-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          background: var(--pz-bg-main, #FDFBF7);
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .service-checkbox-item:hover {
          background: #FFFFFF;
          border-color: var(--pz-gold-main, #D4AF37);
        }

        .service-checkbox-item.checked {
          background: var(--pz-wine-soft, #F9ECEE);
          border-color: var(--pz-wine-main, #7A1C30);
        }

        .service-checkbox-left {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .service-checkbox-left input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: var(--pz-wine-main, #7A1C30);
        }

        .service-checkbox-price {
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 0.95rem;
        }

        /* Summary Sidebar */
        .summary-title {
          font-size: 1.4rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 1.2rem;
          border-bottom: 2px solid var(--pz-gold-border, #E6D29A);
          padding-bottom: 0.5rem;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          color: var(--pz-text-main, #2C2C2C);
        }

        .summary-line.sub {
          font-size: 0.88rem;
          color: var(--pz-text-muted, #5E5E5E);
          padding-left: 0.5rem;
        }

        .summary-divider {
          border-top: 1px dashed var(--pz-border-color, #E8E2D5);
          margin: 1.2rem 0;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-family: var(--pz-font-serif, Georgia, serif);
        }

        .pci-notice {
          font-size: 0.78rem;
          color: var(--pz-text-muted, #5E5E5E);
          background: var(--pz-bg-subtle, #F7F3EB);
          padding: 0.6rem 0.8rem;
          border-radius: 6px;
          margin: 1.2rem 0;
          line-height: 1.4;
          border: 1px solid var(--pz-border-color, #E8E2D5);
        }

        .btn-submit-booking {
          width: 100%;
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-size: 1.05rem;
          font-weight: 700;
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          box-shadow: 0 4px 15px rgba(122, 28, 48, 0.25);
          transition: all 0.25s ease;
        }

        .btn-submit-booking:hover:not(:disabled) {
          background: var(--pz-wine-hover, #5E1423);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(122, 28, 48, 0.35);
        }

        .btn-submit-booking:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-message {
          color: #B22222;
          font-size: 0.85rem;
          margin-top: 0.3rem;
          font-weight: 500;
        }

        .alert-error-box {
          background: #FDF0ED;
          color: #8C1D18;
          border: 1px solid #F5C6CB;
          padding: 0.9rem 1.2rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.92rem;
        }

        /* Confirmation Screen */
        .confirmation-card {
          text-align: center;
          max-width: 750px;
          margin: 2rem auto;
          padding: 3.5rem 2.5rem;
        }

        .confirmation-icon {
          width: 76px;
          height: 76px;
          background: var(--pz-wine-soft, #F9ECEE);
          border: 2px solid var(--pz-gold-main, #D4AF37);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 2.2rem;
          font-weight: bold;
        }

        .confirmation-title {
          font-size: 2.2rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 1rem;
        }

        .folio-display-box {
          background: var(--pz-bg-subtle, #F7F3EB);
          border: 2px dashed var(--pz-gold-main, #D4AF37);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 2rem 0;
        }

        .folio-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--pz-gold-dark, #B89325);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .folio-code {
          font-family: monospace;
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--pz-wine-main, #7A1C30);
          letter-spacing: 0.08em;
          margin: 0.3rem 0;
        }

        .confirmation-copy-text {
          font-size: 1.15rem;
          color: var(--pz-text-main, #2C2C2C);
          line-height: 1.6;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .btn-return-home {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-size: 1rem;
          font-weight: 700;
          padding: 0.85rem 2rem;
          border-radius: 25px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          transition: all 0.2s ease;
        }

        .btn-return-home:hover {
          background: var(--pz-wine-hover, #5E1423);
        }

        @media (max-width: 900px) {
          .booking-layout {
            grid-template-columns: 1fr;
          }
          .slot-options-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        /* Rediseño de Selección de Turno */
        .slot-cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          margin-top: 0.5rem;
        }

        .slot-card {
          border: 2px solid var(--pz-border-color, #E8E2D5);
          border-radius: 10px;
          padding: 1.2rem 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          background: var(--pz-bg-main, #FDFBF7);
          text-align: center;
        }

        .slot-card:hover {
          border-color: var(--pz-gold-main, #D4AF37);
          background: #FFFFFF;
        }

        .slot-card.selected {
          border: 2px solid #800020;
          background: #FFF5F5;
        }

        .slot-card-title {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 0.3rem;
        }

        .slot-card-time {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--pz-gold-dark, #B89325);
          margin-bottom: 0.5rem;
        }

        .slot-card-desc {
          font-size: 0.8rem;
          color: var(--pz-text-muted, #5E5E5E);
          line-height: 1.4;
        }

        /* Paquete Todo Incluido Premium */
        .all-included-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem;
          background: linear-gradient(135deg, #FFF9E6, #FFF2CC);
          border: 2px dashed var(--pz-gold-main, #D4AF37);
          border-radius: 10px;
          cursor: pointer;
          margin-bottom: 1.2rem;
          transition: all 0.3s ease;
        }

        .all-included-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
        }

        .all-included-card.selected {
          background: linear-gradient(135deg, var(--pz-wine-soft, #F9ECEE), #FFF0F2);
          border: 2px solid var(--pz-wine-main, #7A1C30);
        }

        .all-included-left {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .all-included-left input[type="checkbox"] {
          width: 20px;
          height: 20px;
          accent-color: var(--pz-wine-main, #7A1C30);
        }

        .all-included-title {
          font-size: 1.05rem;
          color: var(--pz-wine-main, #7A1C30);
        }

        .all-included-subtitle {
          font-size: 0.82rem;
          color: var(--pz-text-muted, #5E5E5E);
          margin-top: 0.1rem;
        }

        .all-included-price {
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 0.95rem;
          background: #FFFFFF;
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          border: 1px solid var(--pz-gold-border, #E6D29A);
        }

        .services-collapse-container {
          max-height: 1200px;
          overflow: hidden;
          transition: max-height 0.4s ease-in-out, opacity 0.3s ease;
          opacity: 1;
        }

        .services-collapse-container.collapsed {
          max-height: 0;
          opacity: 0;
          pointer-events: none;
          margin-bottom: 0;
        }

        .all-included-summary-box {
          background: #F9ECEE;
          border: 1px solid var(--pz-wine-soft, #E8D5D8);
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1.2rem;
          animation: fadeIn 0.3s ease;
        }

        .summary-box-title {
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .summary-box-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 0.5rem;
        }

        .summary-box-item {
          font-size: 0.8rem;
          color: #2C2C2C;
          font-weight: 600;
        }

        /* Formulario Responsivo Datos Contratante */
        .contact-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          width: 100%;
          margin-bottom: 1.4rem;
          box-sizing: border-box;
        }

        .contact-grid .form-group {
          flex: 1 1 220px;
          min-width: 0;
          margin-bottom: 0;
        }

        .contact-grid .form-group input {
          width: 100%;
          box-sizing: border-box;
        }

        /* Nombre / Correo: max 320px; Teléfono: max 250px via inline -- controlled via flex-basis */
        .contact-grid .form-group.field-name,
        .contact-grid .form-group.field-email {
          flex-basis: 280px;
          max-width: 320px;
        }

        .contact-grid .form-group.field-phone {
          flex-basis: 200px;
          max-width: 250px;
        }

        /* Credit Card Mockup */
        .credit-card-mockup {
          width: 100%;
          max-width: 340px;
          height: 190px;
          background: linear-gradient(135deg, #4b5563, #1f2937); /* Default dark grey */
          border-radius: 12px;
          padding: 1.2rem;
          box-sizing: border-box;
          color: #FFFFFF;
          position: relative;
          margin: 1rem auto 1.5rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: background 0.5s ease, transform 0.3s ease;
          font-family: monospace;
          letter-spacing: 0.1em;
        }

        .credit-card-mockup:hover {
          transform: translateY(-3px) rotate(1deg);
        }

        .credit-card-mockup.visa {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6); /* Visa Blue */
        }

        .credit-card-mockup.mastercard {
          background: linear-gradient(135deg, #7c2d12, #ea580c); /* Mastercard Orange/Red */
        }

        .credit-card-mockup.amex {
          background: linear-gradient(135deg, #065f46, #10b981); /* Amex Emerald Green */
        }

        .card-chip {
          width: 40px;
          height: 30px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 6px;
          position: relative;
        }

        .card-logo {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          font-size: 1.15rem;
          font-weight: bold;
          font-style: italic;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .card-number-display {
          font-size: 1.15rem;
          margin-top: 1rem;
          letter-spacing: 0.12em;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
        }

        .card-info-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 0.5rem;
        }

        .card-label {
          font-size: 0.6rem;
          color: #d1d5db;
          margin-bottom: 0.15rem;
          text-transform: uppercase;
        }

        .card-value {
          font-size: 0.8rem;
          text-transform: uppercase;
          text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        }

        .input-card-franchise-indicator {
          position: absolute;
          right: 12px;
          bottom: 10px;
          font-size: 0.8rem;
          font-weight: bold;
          font-style: italic;
          color: var(--pz-wine-main, #7A1C30);
          pointer-events: none;
          background: #FFFFFF;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>

      <div class="booking-container">
        <template is="dom-if" if="[[!confirmedBooking]]">
          <div class="booking-header">
            <span class="booking-tag">Reservación en Línea 100% Segura</span>
            <h1 class="booking-title">Cotiza y Reserva tu Evento de Gala</h1>
            <p class="booking-subtitle">
              Selecciona tu salón favorito, fecha, turno y servicios adicionales. Recibirás tu folio único de seguimiento al instante.
            </p>
          </div>

          <template is="dom-if" if="[[generalError]]">
            <div class="alert-error-box">
              ⚠️ [[generalError]]
            </div>
          </template>

          <div class="booking-layout">
            <!-- Main Form Card -->
            <div class="booking-form-card">
              
              <!-- Paso 1: Salón y Fecha -->
              <div class="form-section-title">
                <span class="step-num">1</span>
                <span>Elige Sucursal, Fecha y Turno</span>
              </div>

              <div class="form-group">
                <label>Sucursal Banquetes Hub <span class="required-star">*</span></label>
              <div class="branch-options-grid">
                <template is="dom-repeat" items="[[branches]]" as="branch">
                  <div class$="branch-option-card [[_computeBranchSelectedClass(selectedBranchId, branch.id)]]"
                       on-click="_handleSelectBranch">
                    <div class="branch-option-name">[[branch.name]]</div>
                    <div style="font-size: 0.8rem; color: #5E5E5E;">Capacidad: [[branch.capacity]] personas</div>
                    <div class="branch-option-price">Base: [[_formatMXN(branch.base_price_mxn)]]</div>
                  </div>
                </template>
              </div>
            </div>

            <div class="form-group">
              <label for="eventDate">Fecha del Evento <span class="required-star">*</span></label>
              <input
                id="eventDate"
                type="date"
                value="{{eventDate::input}}"
                min$="[[minDate]]"
                max$="[[maxDate]]"
                on-change="_triggerAvailabilityCheck"
                on-click="_openDatePicker"
                on-keydown="_blockDateKeydown" />
            </div>

            <div class="form-group" style="margin-top: 1.5rem;">
              <label>Turno del Evento <span class="required-star">*</span></label>
              <div class="slot-cards-container">
                <template is="dom-repeat" items="[[timeSlots]]" as="slot">
                  <div class$="slot-card [[_computeSlotSelectedClass(timeSlot, slot.id)]]" on-click="_handleSelectSlot">
                    <div class="slot-card-title">[[slot.id]]</div>
                    <div class="slot-card-time">
                      <template is="dom-if" if="[[_isMatutino(slot.id)]]">09:00 - 14:00 hrs</template>
                      <template is="dom-if" if="[[_isVespertino(slot.id)]]">15:00 - 20:00 hrs</template>
                      <template is="dom-if" if="[[_isNocturno(slot.id)]]">21:00 - 03:00 hrs</template>
                    </div>
                    <div class="slot-card-desc">[[slot.description]]</div>
                  </div>
                </template>
              </div>
            </div>

            <!-- Availability Status Banner -->
            <template is="dom-if" if="[[availabilityChecked]]">
              <div class$="availability-banner [[_computeAvailabilityClass(isAvailable)]]">
                <span>[[availabilityMessage]]</span>
              </div>
            </template>

            <!-- Paso 2: Servicios & Banquetes Adicionales -->
            <div class="form-section-title" style="margin-top: 2rem;">
              <span class="step-num">2</span>
              <span>Servicios & Banquetes Adicionales</span>
            </div>

            <!-- Tarjeta destacada Paquete Todo Incluido -->
            <div class$="[[_computeAllIncludedClass(allIncludedSelected)]]" on-click="_toggleAllIncluded">
              <div class="all-included-left">
                <input type="checkbox" checked="[[allIncludedSelected]]" on-click="_stopEventPropagation" />
                <div>
                  <strong class="all-included-title">✨ Paquete Todo Incluido Premium</strong>
                  <div class="all-included-subtitle">Banquete, DJ, decoración, barra libre y todos los servicios con precio preferencial.</div>
                </div>
              </div>
              <div class="all-included-price">Ahorro Máximo</div>
            </div>

            <!-- Resumen compacto si el paquete está activo -->
            <template is="dom-if" if="[[allIncludedSelected]]">
              <div class="all-included-summary-box">
                <div class="summary-box-title">🎁 Servicios Incluidos en el Paquete:</div>
                <div class="summary-box-grid">
                  <template is="dom-repeat" items="[[services]]" as="svc">
                    <div class="summary-box-item">✓ [[svc.name]]</div>
                  </template>
                </div>
              </div>
            </template>

            <!-- Lista colapsable de servicios individuales -->
            <div class$="[[_computeCollapseClass(allIncludedSelected)]]">
              <div class="form-group">
                <div class="services-selection-list">
                  <template is="dom-repeat" items="[[services]]" as="svc">
                    <div class$="service-checkbox-item [[_computeServiceCheckedClass(selectedServiceIds, svc.id)]]"
                         on-click="_toggleService">
                      <div class="service-checkbox-left">
                        <input type="checkbox" checked="[[_isServiceChecked(selectedServiceIds, svc.id)]]" on-click="_stopEventPropagation" />
                        <div>
                          <strong style="font-size: 0.95rem; color: #2C2C2C;">[[svc.name]]</strong>
                          <div style="font-size: 0.8rem; color: #5E5E5E;">[[svc.category]] - [[svc.description]]</div>
                        </div>
                      </div>
                      <div class="service-checkbox-price">+ [[_formatMXN(svc.price_mxn)]]</div>
                    </div>
                  </template>
                </div>
              </div>
            </div>

            <!-- Paso 3: Datos del Contratante -->
            <div class="form-section-title" style="margin-top: 2rem;">
              <span class="step-num">3</span>
              <span>Datos del Contratante</span>
            </div>

            <div class="contact-grid">
              <div class="form-group field-name">
                <label for="custName">Nombre Completo del Cliente <span class="required-star">*</span></label>
                <input id="custName" type="text" placeholder="Ej. Lic. Mariana Torres" value="{{customerName::input}}" />
              </div>
              <div class="form-group field-email">
                <label for="custEmail">Correo Electrónico <span class="required-star">*</span></label>
                <input id="custEmail" type="email" placeholder="mariana.torres@ejemplo.com" value="{{customerEmail::input}}" />
              </div>
              <div class="form-group field-phone">
                <label for="custPhone">Teléfono Móvil (WhatsApp) <span class="required-star">*</span></label>
                <input id="custPhone" type="tel" placeholder="811 234 5678" value="{{customerPhone::input}}" />
              </div>
            </div>

            <!-- Paso 4: Procesamiento de Pago Seguro (Simulación PCI-DSS) -->
            <div class="form-section-title" style="margin-top: 2rem;">
              <span class="step-num">4</span>
              <span>Procesamiento de Pago Seguro (Simulación PCI-DSS)</span>
            </div>

            <!-- Mockup de Tarjeta de Crédito Premium -->
            <div class$="credit-card-mockup [[_computeCardNetworkClass(cardNumber)]]">
              <div class="card-chip"></div>
              <div class="card-logo">[[_computeCardNetworkLogoText(cardNumber)]]</div>
              <div class="card-number-display">[[_computeCardNumberDisplay(cardNumber)]]</div>
              <div class="card-info-row">
                <div class="card-holder-display">
                  <div class="card-label">TITULAR</div>
                  <div class="card-value">[[_computeCardHolderDisplay(cardHolderName)]]</div>
                </div>
                <div class="card-expiry-display">
                  <div class="card-label">VENCE</div>
                  <div class="card-value">[[_computeCardExpiryDisplay(cardExpMonth, cardExpYear)]]</div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="cardHolder">Nombre del Titular de la Tarjeta <span class="required-star">*</span></label>
              <input id="cardHolder" type="text" placeholder="Como aparece en el plástico" value="{{cardHolderName::input}}" />
            </div>

            <!-- Número de tarjeta: fila completa -->
            <div class="form-group" style="position: relative; width: 100%;">
              <label for="cardNum">Número de Tarjeta (16 dígitos) <span class="required-star">*</span></label>
              <input id="cardNum" type="text" maxlength="19" inputmode="numeric" placeholder="4152 3134 5678 9012" value="{{cardNumber::input}}" on-input="_handleCardNumberInput" style="width: 100%; max-width: 380px; box-sizing: border-box;" />
              <div class="input-card-franchise-indicator">[[_computeCardNetworkLogoText(cardNumber)]]</div>
            </div>

            <!-- Vencimiento + CVC: segunda fila -->
            <div style="display: flex; gap: 16px; align-items: flex-end; margin-top: 12px; flex-wrap: wrap;">
              <div class="form-group" style="margin-bottom: 0;">
                <label>Vencimiento <span class="required-star">*</span></label>
                <div class="exp-input-group">
                  <input id="cardExpMonth" type="text" maxlength="2" inputmode="numeric" placeholder="MM" value="{{cardExpMonth::input}}" on-input="_handleExpMonthInput" style="width: 65px; min-width: 65px; max-width: 65px; box-sizing: border-box;" />
                  <span class="exp-divider">/</span>
                  <input id="cardExpYear" type="text" maxlength="2" inputmode="numeric" placeholder="AA" value="{{cardExpYear::input}}" on-input="_handleExpYearInput" style="width: 65px; min-width: 65px; max-width: 65px; box-sizing: border-box;" />
                </div>
              </div>
              <div class="form-group" style="margin-bottom: 0;">
                <label for="cardCvc">CVC <span class="required-star">*</span></label>
                <input id="cardCvc" type="text" maxlength="4" inputmode="numeric" placeholder="123" value="{{cardCvc::input}}" on-input="_handleCvcInput" style="width: 90px; min-width: 90px; max-width: 90px; box-sizing: border-box;" />
              </div>
            </div>

          </div>

          <!-- Sidebar Resumen de Cotización -->
          <div class="summary-card">
            <h3 class="summary-title">Resumen de Cotización</h3>

            <div class="summary-line">
              <span><strong>Sucursal:</strong></span>
              <span>[[_computeSelectedBranchName(branches, selectedBranchId)]]</span>
            </div>

            <div class="summary-line">
              <span>Renta Base de Salón:</span>
              <span>[[_computeSelectedBranchPriceFormatted(branches, selectedBranchId)]]</span>
            </div>

            <div class="summary-line">
              <span><strong>Fecha:</strong></span>
              <span>[[_formatDate(eventDate)]]</span>
            </div>

            <div class="summary-line">
              <span><strong>Turno:</strong></span>
              <span>[[timeSlot]]</span>
            </div>

            <div class="summary-divider"></div>

            <div style="font-size: 0.9rem; font-weight: 700; color: #2C2C2C; margin-bottom: 0.5rem;">
              Servicios Seleccionados ([[selectedServiceIds.length]]):
            </div>

            <template is="dom-repeat" items="[[_computeSelectedServicesList(services, selectedServiceIds)]]" as="item">
              <div class="summary-line sub">
                <span>• [[item.name]]</span>
                <span>[[_formatMXN(item.price_mxn)]]</span>
              </div>
            </template>

            <template is="dom-if" if="[[!selectedServiceIds.length]]">
              <div style="font-size: 0.85rem; color: #8C8C8C; font-style: italic; margin-bottom: 0.5rem;">
                Ningún servicio adicional seleccionado.
              </div>
            </template>

            <div class="summary-divider"></div>

            <div class="summary-total">
              <span>Total Estimado:</span>
              <span>[[_computeCalculatedTotalFormatted(branches, selectedBranchId, services, selectedServiceIds)]]</span>
            </div>

            <div class="pci-notice">
              🛡️ <strong>Cumplimiento PCI:</strong> No almacenamos el número completo de tu tarjeta ni CVC en la base de datos. Solo guardamos los últimos 4 dígitos como referencia de pago.
            </div>

            <button class="btn-submit-booking" disabled$="[[isSubmitting]]" on-click="_handleSubmitBooking">
              <template is="dom-if" if="[[!isSubmitting]]">
                Confirmar y Generar Folio
              </template>
              <template is="dom-if" if="[[isSubmitting]]">
                Procesando Reservación...
              </template>
            </button>
          </div>
        </div>
      </template>

      <!-- Pantalla de Confirmación de Reserva -->
      <template is="dom-if" if="[[confirmedBooking]]">
        <div class="confirmation-card">
          <div class="confirmation-icon">✓</div>
          <h2 class="confirmation-title">¡Reservación Registrada con Éxito!</h2>
          
          <div class="folio-display-box">
            <div class="folio-label">Folio Oficial de Seguimiento</div>
            <div class="folio-code">[[confirmedBooking.booking_folio]]</div>
            <div style="font-size: 0.9rem; color: #7A1C30; font-weight: 600;">
              Sucursal: [[confirmedBooking.branch_name]] | Fecha: [[confirmedBooking.event_date]] ([[confirmedBooking.time_slot]])
            </div>
          </div>

          <!-- TEXTO OBLIGATORIO EXACTO -->
          <p class="confirmation-copy-text">
            Estamos confirmando tu reservación. Tu folio de seguimiento es <strong>[[confirmedBooking.booking_folio]]</strong>. Nos pondremos en contacto mediante correo
          </p>

          <div style="background: #FFFFFF; border: 1px solid #E8E2D5; border-radius: 8px; padding: 1rem; margin-bottom: 2rem; text-align: left; font-size: 0.95rem;">
            <div style="margin-bottom: 0.4rem;"><strong>Cliente:</strong> [[confirmedBooking.customer_name]]</div>
            <div style="margin-bottom: 0.4rem;"><strong>Correo registrado:</strong> [[confirmedBooking.customer_email]]</div>
            <div style="margin-bottom: 0.4rem;"><strong>Monto Total:</strong> [[_formatMXN(confirmedBooking.total_mxn)]]</div>
            <div><strong>Tarjeta de respaldo:</strong> **** **** **** [[confirmedBooking.card_last_four]]</div>
          </div>

            <button class="btn-return-home" on-click="_resetBookingFlow">
              Volver al Inicio
            </button>
          </div>
        </template>
      </div>
    `}static get properties(){return{branches:{type:Array,value:function(){return[]}},services:{type:Array,value:function(){return[]}},timeSlots:{type:Array,value:function(){return Vl}},selectedBranchId:{type:String,value:"1"},eventDate:{type:String,value:""},timeSlot:{type:String,value:"Nocturno"},selectedServiceIds:{type:Array,value:function(){return[]}},customerName:{type:String,value:""},customerEmail:{type:String,value:""},customerPhone:{type:String,value:""},cardHolderName:{type:String,value:""},cardNumber:{type:String,value:""},cardExpMonth:{type:String,value:""},cardExpYear:{type:String,value:""},cardCvc:{type:String,value:""},minDate:{type:String,value:function(){const e=new Date;return e.setDate(e.getDate()+3),e.toISOString().split("T")[0]}},maxDate:{type:String,value:"2030-12-31"},availabilityChecked:{type:Boolean,value:!1},isAvailable:{type:Boolean,value:!0},availabilityMessage:{type:String,value:""},generalError:{type:String,value:""},isSubmitting:{type:Boolean,value:!1},confirmedBooking:{type:Object,value:null},allIncludedSelected:{type:Boolean,value:!1}}}static get observers(){return["_updateDefaults(branches)"]}_updateDefaults(e){Array.isArray(e)&&e.length>0&&!this.selectedBranchId&&(this.selectedBranchId=String(e[0].id))}_computeSelectedBranch(e,i){return!Array.isArray(e)||e.length===0||!i?null:e.find(n=>String(n.id)===String(i))||null}_computeSelectedBranchName(e,i){const n=this._computeSelectedBranch(e,i);return n?n.name||"":"No seleccionada"}_computeSelectedBranchPrice(e,i){const n=this._computeSelectedBranch(e,i);return n?Number(n.base_price_mxn||0):0}_computeSelectedBranchPriceFormatted(e,i){return Ve(this._computeSelectedBranchPrice(e,i))}_computeSelectedServicesList(e,i){return!Array.isArray(e)||!Array.isArray(i)?[]:e.filter(n=>i.map(String).includes(String(n.id)))}_computeCalculatedTotal(e,i,n,r){const s=this._computeSelectedBranchPrice(e,i),o=this._computeSelectedServicesList(n,r).reduce((l,c)=>l+Number(c.price_mxn||0),0);return s+o}_computeCalculatedTotalFormatted(e,i,n,r){return Ve(this._computeCalculatedTotal(e,i,n,r))}_formatMXN(e){return Ve(e)}_formatDate(e){return e||"Fecha sin seleccionar"}_computeBranchSelectedClass(e,i){return Number(e)===Number(i)?"selected":""}_computeServiceCheckedClass(e,i){return e&&e.includes(i)?"checked":""}_isServiceChecked(e,i){return e&&e.includes(i)}_computeAvailabilityClass(e){return e?"available":"unavailable"}_stopEventPropagation(e){e.stopPropagation()}_handleSelectBranch(e){const i=e.model.branch;this.selectedBranchId=i.id,this._triggerAvailabilityCheck()}_toggleService(e){const i=e.model.svc,n=[...this.selectedServiceIds],r=n.indexOf(i.id);r>=0?n.splice(r,1):n.push(i.id),this.selectedServiceIds=n,Array.isArray(this.services)&&this.services.length>0?this.allIncludedSelected=n.length===this.services.length:this.allIncludedSelected=!1,this.notifyPath("selectedServiceIds")}_handleCardNumberInput(e){const i=(e.target.value||"").replace(/\D/g,"").slice(0,16),n=i.match(/.{1,4}/g)?.join(" ")||i;this.cardNumber=n,e.target.value=n}_handleExpMonthInput(e){let i=(e.target.value||"").replace(/\D/g,"").slice(0,2);if(i.length===2&&Number(i)>12&&(i="12"),this.cardExpMonth=i,e.target.value=i,i.length===2){const n=this.shadowRoot?.querySelector("#cardExpYear");n&&n.focus()}}_handleExpYearInput(e){const i=(e.target.value||"").replace(/\D/g,"").slice(0,2);if(this.cardExpYear=i,e.target.value=i,i.length===2){const n=this.shadowRoot?.querySelector("#cardCvc");n&&n.focus()}}_handleCvcInput(e){const i=(e.target.value||"").replace(/\D/g,"").slice(0,4);this.cardCvc=i,e.target.value=i}async _triggerAvailabilityCheck(){if(!this.selectedBranchId||!this.eventDate||!this.timeSlot){this.availabilityChecked=!1;return}try{const e=await Ss(this.selectedBranchId,this.eventDate,this.timeSlot);this.availabilityChecked=!0,this.isAvailable=e.available,this.availabilityMessage=e.message}catch(e){console.warn("Error al verificar disponibilidad:",e)}}async _handleSubmitBooking(){this.generalError="";const e=(this.cardExpMonth||"").padStart(2,"0"),i=this.cardExpYear||"",n=this.cardExpMonth&&this.cardExpYear?`${e}/${i}`:"",r={customer_name:(this.customerName||"").trim(),customer_email:(this.customerEmail||"").trim(),customer_phone:(this.customerPhone||"").trim(),branch_id:Number(this.selectedBranchId),event_date:this.eventDate,time_slot:this.timeSlot,service_ids:this.selectedServiceIds||[],cardholder_name:(this.cardHolderName||"").trim(),card_number:(this.cardNumber||"").trim(),card_exp:n,card_cvc:(this.cardCvc||"").trim()},s=bc.safeParse(r);if(!s.success){const a=s.error.errors[0];this.generalError=a?a.message:"Por favor completa todos los campos requeridos correctamente.",window.scrollTo({top:150,behavior:"smooth"});return}this.isSubmitting=!0;try{const a=await Es(r);this.confirmedBooking=a.booking,window.scrollTo({top:0,behavior:"smooth"})}catch(a){this.generalError=a.message||"Error al procesar la reservación. Inténtalo nuevamente.",window.scrollTo({top:150,behavior:"smooth"})}finally{this.isSubmitting=!1}}_resetBookingFlow(){this.confirmedBooking=null,this.customerName="",this.customerEmail="",this.customerPhone="",this.cardNumber="",this.cardExpMonth="",this.cardExpYear="",this.cardCvc="",this.cardHolderName="",this.selectedServiceIds=[],this.allIncludedSelected=!1,this.availabilityChecked=!1,this.dispatchEvent(new CustomEvent("navigate",{bubbles:!0,composed:!0,detail:{page:"landing"}}))}_handleSelectSlot(e){const i=e.model.slot;this.timeSlot=i.id,this._triggerAvailabilityCheck()}_toggleAllIncluded(){this.allIncludedSelected=!this.allIncludedSelected,this.allIncludedSelected?Array.isArray(this.services)&&(this.selectedServiceIds=this.services.map(e=>e.id)):this.selectedServiceIds=[],this.notifyPath("selectedServiceIds")}_computeSlotSelectedClass(e,i){return e===i?"selected":""}_isMatutino(e){return e==="Matutino"}_isVespertino(e){return e==="Vespertino"}_isNocturno(e){return e==="Nocturno"}_computeAllIncludedClass(e){return e?"all-included-card selected":"all-included-card"}_computeCollapseClass(e){return e?"services-collapse-container collapsed":"services-collapse-container"}_detectCardNetwork(e){if(!e)return"unknown";const i=String(e).replace(/\D/g,"");if(i.startsWith("4"))return"visa";const n=parseInt(i.substring(0,2),10),r=parseInt(i.substring(0,4),10);return n>=51&&n<=55||r>=2221&&r<=2720?"mastercard":n===34||n===37?"amex":"unknown"}_computeCardNetworkClass(e){const i=this._detectCardNetwork(e);return i==="unknown"?"":i}_computeCardNetworkLogoText(e){const i=this._detectCardNetwork(e);return i==="visa"?"VISA":i==="mastercard"?"Mastercard":i==="amex"?"AMEX":"CREDIT CARD"}_computeCardNumberDisplay(e){if(!e)return"•••• •••• •••• ••••";let i=e;if(i.length<19){const n=e.replace(/\s/g,"").length,r=16-n;let s="";for(let a=0;a<r;a++)(n+a)%4===0&&n+a>0&&(s+=" "),s+="•";i+=s}return i}_computeCardHolderDisplay(e){return e?e.trim():"TITULAR DE LA TARJETA"}_computeCardExpiryDisplay(e,i){const n=e?String(e).padStart(2,"0"):"MM",r=i?String(i).padStart(2,"0"):"AA";return`${n}/${r}`}_openDatePicker(e){const i=e.currentTarget;if(i&&typeof i.showPicker=="function")try{i.showPicker()}catch{}}_blockDateKeydown(e){e.preventDefault()}}customElements.define("partyzone-booking",Cc);class Sc extends ye{static get template(){return Te`
      <style>
        :host {
          display: block;
          max-width: 480px;
          margin: 4rem auto;
          padding: 0 1.5rem;
        }

        .login-card {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 8px 30px rgba(122, 28, 48, 0.08);
          padding: 2.8rem 2.2rem;
          text-align: center;
        }

        .login-icon {
          width: 58px;
          height: 58px;
          background: var(--pz-wine-soft, #F9ECEE);
          border: 1px solid var(--pz-gold-main, #D4AF37);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.2rem;
          color: var(--pz-wine-main, #7A1C30);
          font-size: 1.6rem;
        }

        .login-title {
          font-size: 1.8rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 0.4rem;
        }

        .login-subtitle {
          font-size: 0.9rem;
          color: var(--pz-text-muted, #5E5E5E);
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.4rem;
          text-align: left;
        }

        label {
          display: block;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--pz-text-main, #2C2C2C);
          margin-bottom: 0.4rem;
        }

        input[type="text"],
        input[type="password"] {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          font-family: var(--pz-font-sans, sans-serif);
          font-size: 0.95rem;
          color: var(--pz-text-main, #2C2C2C);
          background: var(--pz-bg-main, #FDFBF7);
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        input:focus {
          outline: none;
          border-color: var(--pz-gold-main, #D4AF37);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
          background: #FFFFFF;
        }

        .btn-login {
          width: 100%;
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          font-size: 1rem;
          font-weight: 700;
          padding: 0.85rem;
          border-radius: 8px;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          box-shadow: 0 4px 12px rgba(122, 28, 48, 0.2);
          transition: all 0.25s ease;
          margin-top: 1rem;
        }

        .btn-login:hover:not(:disabled) {
          background: var(--pz-wine-hover, #5E1423);
          transform: translateY(-1px);
        }

        .btn-login:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .alert-error {
          background: #FDF0ED;
          color: #8C1D18;
          border: 1px solid #F5C6CB;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          margin-bottom: 1.4rem;
          text-align: left;
        }

        .demo-credentials-box {
          margin-top: 1.8rem;
          padding: 0.8rem;
          background: var(--pz-bg-subtle, #F7F3EB);
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--pz-text-muted, #5E5E5E);
          border: 1px dashed var(--pz-border-color, #E8E2D5);
        }
      </style>

      <div class="login-card">
        <div class="login-icon">🔒</div>
        <h2 class="login-title">Acceso Administrativo</h2>
        <p class="login-subtitle">Gestión de Reservas y Bitácora PostgreSQL</p>

        <template is="dom-if" if="[[errorMessage]]">
          <div class="alert-error">
            [[errorMessage]]
          </div>
        </template>

        <form on-submit="_handleSubmit">
          <div class="form-group">
            <label for="username">Usuario</label>
            <input id="username" type="text" placeholder="admin" value="{{username::input}}" required />
          </div>

          <div class="form-group">
            <label for="password">Contraseña</label>
            <input id="password" type="password" placeholder="••••••••" value="{{password::input}}" required />
          </div>

          <button type="submit" class="btn-login" disabled$="[[loading]]">
            <template is="dom-if" if="[[!loading]]">
              Ingresar al Panel
            </template>
            <template is="dom-if" if="[[loading]]">
              Autenticando...
            </template>
          </button>
        </form>

        <div class="demo-credentials-box">
          Credenciales por defecto: <strong>admin</strong> / <strong>admin123</strong>
        </div>
      </div>
    `}static get properties(){return{username:{type:String,value:""},password:{type:String,value:""},loading:{type:Boolean,value:!1},errorMessage:{type:String,value:""}}}async _handleSubmit(e){e&&e.preventDefault(),this.errorMessage="";const i={username:(this.username||"").trim(),password:(this.password||"").trim()},n=xc.safeParse(i);if(!n.success){this.errorMessage=n.error.errors[0]?.message||"Verifica los campos ingresados.";return}this.loading=!0;try{const r=await ks(i.username,i.password);this.dispatchEvent(new CustomEvent("login-success",{bubbles:!0,composed:!0,detail:{token:r.token,user:r.user}}))}catch(r){this.errorMessage=r.message||"Error al iniciar sesión"}finally{this.loading=!1}}}customElements.define("partyzone-login",Sc);const Ec="modulepreload",kc=function(t){return"/"+t},hn={},pn=function(e,i,n){let r=Promise.resolve();if(i&&i.length>0){let a=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=a(i.map(c=>{if(c=kc(c),c in hn)return;hn[c]=!0;const d=c.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Ec,d||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),d)return new Promise((u,p)=>{g.addEventListener("load",u),g.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};class Ac extends ye{static get template(){return Te`
      <style>
        :host {
          display: block;
          max-width: 1300px;
          margin: 2.5rem auto 4rem;
          padding: 0 1.5rem;
        }

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .admin-title-group h1 {
          font-size: 2.2rem;
          color: var(--pz-wine-main, #7A1C30);
        }

        .admin-title-group p {
          color: var(--pz-text-muted, #5E5E5E);
          font-size: 0.95rem;
        }

        .admin-actions-bar {
          display: flex;
          gap: 0.8rem;
          align-items: center;
        }

        .btn-refresh {
          background: #FFFFFF;
          color: var(--pz-wine-main, #7A1C30);
          border: 1px solid var(--pz-wine-main, #7A1C30);
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .btn-refresh:hover {
          background: var(--pz-wine-soft, #F9ECEE);
        }

        /* Metric Cards */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .metric-card {
          background: #FFFFFF;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(122, 28, 48, 0.05);
        }

        .metric-label {
          font-size: 0.82rem;
          color: var(--pz-text-muted, #5E5E5E);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .metric-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--pz-wine-main, #7A1C30);
          font-family: var(--pz-font-serif, Georgia, serif);
          margin-top: 0.4rem;
        }

        /* Filter Controls */
        .controls-card {
          background: #FFFFFF;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 12px;
          padding: 1.2rem 1.5rem;
          margin-bottom: 1.8rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .search-input-box {
          flex-grow: 1;
          max-width: 400px;
        }

        .search-input-box input {
          width: 100%;
          padding: 0.65rem 1rem;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          font-size: 0.9rem;
          background: var(--pz-bg-main, #FDFBF7);
          box-sizing: border-box;
        }

        .filter-toggle-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--pz-text-main, #2C2C2C);
        }

        /* ── iOS Toggle Switch ── */
        .toggle-label {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--pz-text-main, #2C2C2C);
          user-select: none;
        }

        .toggle-input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-track {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
          background: #D1D5DB;
          border-radius: 999px;
          transition: background 0.25s ease;
          flex-shrink: 0;
        }

        .toggle-input:checked + .toggle-track {
          background: var(--pz-wine-main, #7A1C30);
        }

        .toggle-track::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 18px;
          height: 18px;
          background: #FFFFFF;
          border-radius: 50%;
          box-shadow: 0 1px 3px rgba(0,0,0,0.25);
          transition: transform 0.25s ease;
        }

        .toggle-input:checked + .toggle-track::after {
          transform: translateX(20px);
        }

        /* ── Status Select en Tabla ── */
        .status-select {
          border: 1px solid var(--pz-border-color, #E8E2D5);
          border-radius: 8px;
          padding: 0.3rem 0.5rem;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          background: #FDFBF7;
          color: var(--pz-text-main, #2C2C2C);
          transition: border-color 0.2s ease;
          max-width: 150px;
        }

        .status-select:focus {
          outline: none;
          border-color: var(--pz-wine-main, #7A1C30);
          box-shadow: 0 0 0 2px rgba(122, 28, 48, 0.12);
        }

        /* ── Status Badges (extended) ── */
        .status-paid {
          background: #E6F7EE;
          color: #0A5C36;
          border: 1px solid #6FCF97;
        }

        .status-concluded {
          background: #F5F5F0;
          color: #5A5A4A;
          border: 1px solid #D4AF37;
        }

        .status-pending {
          background: #FFFBE6;
          color: #D46B08;
          border: 1px solid #FFE58F;
        }

        /* ── Modern Close Button ── */
        .btn-close-modal {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #F3F4F6;
          color: #4B5563;
          font-size: 1rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 1px solid #E5E7EB;
          transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
          flex-shrink: 0;
        }

        .btn-close-modal:hover {
          background: var(--pz-wine-soft, #F9ECEE);
          color: var(--pz-wine-main, #7A1C30);
          border-color: var(--pz-wine-main, #7A1C30);
          transform: rotate(90deg) scale(1.05);
        }

        /* ── Modal Status Badge Row ── */
        .modal-status-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .modal-status-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--pz-text-muted, #5E5E5E);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Table Card */
        .table-card {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-border-color, #E8E2D5);
          box-shadow: 0 6px 25px rgba(122, 28, 48, 0.06);
          overflow: hidden;
        }

        .table-responsive {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.9rem;
        }

        th {
          background: var(--pz-bg-subtle, #F7F3EB);
          color: var(--pz-wine-main, #7A1C30);
          font-weight: 700;
          padding: 1rem 1.2rem;
          border-bottom: 2px solid var(--pz-gold-border, #E6D29A);
          white-space: nowrap;
        }

        td {
          padding: 1rem 1.2rem;
          border-bottom: 1px solid var(--pz-border-subtle, #F0EAE1);
          color: var(--pz-text-main, #2C2C2C);
          vertical-align: middle;
        }

        tr:hover {
          background: #FDFAF5;
        }

        tr.row-inactive {
          background: #FAF8F6;
          opacity: 0.75;
        }

        .folio-tag {
          font-family: monospace;
          font-weight: 800;
          color: var(--pz-wine-main, #7A1C30);
          background: var(--pz-wine-soft, #F9ECEE);
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          border: 1px solid var(--pz-gold-border, #E6D29A);
          display: inline-block;
        }

        .status-badge {
          display: inline-block;
          padding: 0.25rem 0.65rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .status-active {
          background: #EAF7ED;
          color: #1E6B2C;
          border: 1px solid #C3E6CB;
        }

        .status-inactive {
          background: #FDF0ED;
          color: #8C1D18;
          border: 1px solid #F5C6CB;
        }

        .action-btns {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .btn-view-services {
          background: var(--pz-gold-main, #D4AF37);
          color: #FFFFFF;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          transition: background 0.2s ease;
        }

        .btn-view-services:hover {
          background: var(--pz-gold-dark, #B89325);
        }

        .btn-soft-delete {
          background: #FFF1F0;
          color: #CF1322;
          border: 1px solid #FFA39E;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .btn-soft-delete:hover {
          background: #CF1322;
          color: #FFFFFF;
        }

        .btn-restore {
          background: #F6FFED;
          color: #389E0D;
          border: 1px solid #B7EB8F;
          padding: 0.4rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .btn-restore:hover {
          background: #389E0D;
          color: #FFFFFF;
        }

        /* Modal Desglose de Servicios */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(44, 44, 44, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
          box-sizing: border-box;
        }

        .modal-box {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid var(--pz-gold-border, #E6D29A);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          max-width: 600px;
          width: 100%;
          padding: 2.2rem;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid var(--pz-gold-border, #E6D29A);
          padding-bottom: 0.8rem;
        }

        .modal-title {
          font-size: 1.5rem;
          color: var(--pz-wine-main, #7A1C30);
        }

        .btn-close-modal {
          background: transparent;
          font-size: 1.4rem;
          color: var(--pz-text-muted, #5E5E5E);
          cursor: pointer;
        }

        .service-item-row {
          display: flex;
          justify-content: space-between;
          padding: 0.8rem 0;
          border-bottom: 1px solid var(--pz-border-subtle, #F0EAE1);
          font-size: 0.95rem;
        }

        .notice-empty {
          text-align: center;
          padding: 3rem;
          color: var(--pz-text-muted, #5E5E5E);
        }

        .status-concluded {
          background: #E6F7FF;
          color: #0050B3;
          border: 1px solid #91D5FF;
        }

        .status-pending {
          background: #FFFBE6;
          color: #D46B08;
          border: 1px solid #FFE58F;
        }

        /* Modal de Confirmacion Centrado Absoluto */
        .confirm-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(4px);
        }

        .confirm-box {
          background: #FFFFFF;
          width: 90%;
          max-width: 480px;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          text-align: center;
          margin: auto;
          box-sizing: border-box;
        }

        .confirm-title {
          font-size: 1.4rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-top: 0;
          margin-bottom: 1rem;
          font-family: var(--pz-font-serif, Georgia, serif);
        }

        .confirm-message {
          font-size: 1rem;
          color: var(--pz-text-main, #2C2C2C);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .confirm-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 1.5rem;
        }

        .btn-confirm-action {
          background: var(--pz-wine-main, #7A1C30);
          color: #FFFFFF;
          border: 1px solid var(--pz-gold-main, #D4AF37);
          padding: 0.65rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-confirm-action:hover:not(:disabled) {
          background: var(--pz-wine-hover, #5E1423);
          box-shadow: 0 4px 10px rgba(122, 28, 48, 0.2);
        }

        .btn-cancel-action {
          background: #E8E2D5;
          color: var(--pz-text-main, #2C2C2C);
          border: 1px solid var(--pz-border-color, #DCD4C4);
          padding: 0.65rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-cancel-action:hover:not(:disabled) {
          background: #DCD4C4;
        }

        .btn-confirm-action:disabled,
        .btn-cancel-action:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      </style>

      <div class="admin-header">
        <div class="admin-title-group">
          <h1>Panel de Control & Bitácora</h1>
          <p>Gestión de reservas en tiempo real registradas en PostgreSQL (Soporte de Baja Lógica).</p>
        </div>

        <div class="admin-actions-bar">
          <button class="btn-refresh" on-click="_loadBookings">
            🔄 Actualizar Bitácora
          </button>
        </div>
      </div>

      <!-- Resumen de Métricas -->
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-label">Total de Reservas</div>
          <div class="metric-value">[[_computeBookingsTotalCount(bookings)]]</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Reservas Activas</div>
          <div class="metric-value">[[_computeActiveBookingsCount(bookings)]]</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Ingresos Totales Registrados</div>
          <div class="metric-value">[[_computeTotalRevenueFormatted(bookings)]]</div>
        </div>
      </div>

      <!-- Controles y Filtros -->
      <div class="controls-card">
        <div class="search-input-box">
          <input type="text" placeholder="Buscar por Folio, Cliente o Sucursal..." value="{{searchTerm::input}}" />
        </div>

        <div class="filter-toggle-box">
          <label class="toggle-label">
            <input class="toggle-input" type="checkbox" checked="{{showAll::change}}" />
            <span class="toggle-track"></span>
            Mostrar reservas canceladas / inactivas
          </label>
          <label class="toggle-label" style="margin-left: 1.5rem;">
            <input class="toggle-input" type="checkbox" checked="{{showConcluded::change}}" />
            <span class="toggle-track"></span>
            Mostrar eventos concluidos
          </label>
        </div>
      </div>

      <!-- Tabla de Gestión de Reservas -->
      <div class="table-card">
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Folio</th>
                <th>Cliente</th>
                <th>Contacto</th>
                <th>Sucursal</th>
                <th>Fecha & Turno</th>
                <th>Total MXN</th>
                <th>Tarjeta</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <template is="dom-repeat" items="[[_computeFilteredBookings(bookings, searchTerm, showAll, showConcluded)]]" as="b">
                <tr class$="[[_computeRowClass(b.is_active)]]">
                  <td>
                    <span class="folio-tag">[[b.booking_folio]]</span>
                  </td>
                  <td>
                    <strong>[[b.customer_name]]</strong>
                  </td>
                  <td>
                    <div style="font-size: 0.85rem;">[[b.customer_email]]</div>
                    <div style="font-size: 0.8rem; color: #5E5E5E;">📞 [[b.customer_phone]]</div>
                  </td>
                  <td>[[b.branch_name]]</td>
                  <td>
                    <div><strong>[[b.event_date]]</strong></div>
                    <div style="font-size: 0.8rem; color: #7A1C30;">[[b.time_slot]]</div>
                  </td>
                  <td>
                    <strong style="color: #7A1C30;">[[_formatMXN(b.total_mxn)]]</strong>
                  </td>
                  <td>
                    <span style="font-family: monospace; font-size: 0.85rem;">**** [[b.card_last_four]]</span>
                  </td>
                  <td>
                    <select class="status-select" value="[[_computeBusinessStatusValue(b.status, b.event_date, b.is_active)]]" on-change="_handleStatusChange" data-booking-id$="[[b.id]]">
                      <option value="CONFIRMADA">✅ Confirmada</option>
                      <option value="COBRADA">💳 Cobrada / Pagada</option>
                      <option value="CONCLUIDA">🏁 Concluida</option>
                      <option value="CANCELADA">❌ Cancelada</option>
                    </select>
                  </td>
                  <td>
                    <div class="action-btns">
                      <button class="btn-view-services" on-click="_openServicesModal">
                        Servicios ([[b.services.length]])
                      </button>

                      <template is="dom-if" if="[[b.is_active]]">
                        <button class="btn-soft-delete" title="Cancelar evento sin eliminar de PostgreSQL" on-click="_handleSoftDelete">
                          Cancelar Evento
                        </button>
                      </template>

                      <template is="dom-if" if="[[!b.is_active]]">
                        <button class="btn-restore" title="Reactivar reserva" on-click="_handleRestore">
                          Reactivar Evento
                        </button>
                      </template>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

        <template is="dom-if" if="[[!filteredBookings.length]]">
          <div class="notice-empty">
            No se encontraron reservas registradas que coincidan con la búsqueda.
          </div>
        </template>
      </div>

      <!-- Modal de Desglose de Servicios Contratados -->
      <template is="dom-if" if="[[selectedBookingForModal]]">
        <div class="modal-backdrop" on-click="_closeModalBackdrop">
          <div class="modal-box" on-click="_stopEventPropagation">
            <div class="modal-header">
              <div class="modal-title">Desglose de Servicios</div>
              <button class="btn-close-modal" on-click="_closeModal" title="Cerrar">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>

            <div style="margin-bottom: 0.6rem; font-size: 0.95rem; line-height: 1.7;">
              <div><strong>Folio:</strong> <span class="folio-tag">[[selectedBookingForModal.booking_folio]]</span></div>
              <div><strong>Cliente:</strong> [[selectedBookingForModal.customer_name]]</div>
              <div><strong>Sucursal:</strong> [[selectedBookingForModal.branch_name]]</div>
              <div><strong>Pago con Tarjeta terminada en:</strong>
                <span style="font-family: monospace; letter-spacing: 0.05em;">**** [[selectedBookingForModal.card_last_four]]</span>
              </div>
            </div>

            <!-- Badge + selector de estado dentro del modal -->
            <div class="modal-status-row">
              <span class="modal-status-label">Estado de la Reserva:</span>
              <span class$="status-badge [[_computeModalStatusBadgeClass(selectedBookingForModal.status, selectedBookingForModal.event_date, selectedBookingForModal.is_active)]]">
                [[_computeBusinessStatusText(selectedBookingForModal.status, selectedBookingForModal.event_date, selectedBookingForModal.is_active)]]
              </span>
              <select class="status-select" on-change="_handleModalStatusChange" data-booking-id$="[[selectedBookingForModal.id]]" style="margin-left: auto;" value$="[[_computeBusinessStatusValue(selectedBookingForModal.status, selectedBookingForModal.event_date, selectedBookingForModal.is_active)]]">
                <option value="CONFIRMADA">✅ Confirmada</option>
                <option value="COBRADA">💳 Cobrada / Pagada</option>
                <option value="CONCLUIDA">🏁 Concluida</option>
                <option value="CANCELADA">❌ Cancelada</option>
              </select>
            </div>

            <h4 style="font-size: 1.1rem; color: #7A1C30; margin-bottom: 0.8rem; border-bottom: 1px solid #E8E2D5; padding-bottom: 0.3rem;">
              Servicios Adicionales Contratados
            </h4>

            <template is="dom-repeat" items="[[selectedBookingForModal.services]]" as="svc">
              <div class="service-item-row">
                <div>
                  <strong>[[svc.service_name]]</strong>
                  <div style="font-size: 0.8rem; color: #5E5E5E;">Categoría: [[svc.category]]</div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.6rem;">
                  <span class="status-badge status-active" style="font-size: 0.7rem;">Activo</span>
                  <strong>[[_formatMXN(svc.unit_price_mxn)]]</strong>
                </div>
              </div>
            </template>

            <template is="dom-if" if="[[!selectedBookingForModal.services.length]]">
              <div style="padding: 1rem 0; color: #8C8C8C; font-style: italic;">
                Esta reservación no incluyó servicios adicionales contratados.
              </div>
            </template>

            <div style="margin-top: 1.5rem; text-align: right; font-size: 1.15rem; font-weight: 700; color: #7A1C30;">
              Total de Reserva: [[_formatMXN(selectedBookingForModal.total_mxn)]]
            </div>
          </div>
        </div>
      </template>

      <!-- Modal de Confirmación Estilizado -->
      <template is="dom-if" if="[[showConfirmModal]]">
        <div class="confirm-backdrop" on-click="_closeConfirmModal">
          <div class="confirm-box" on-click="_stopEventPropagation">
            <h3 class="confirm-title">[[confirmModalTitle]]</h3>
            <p class="confirm-message">[[confirmModalMessage]]</p>
            
            <template is="dom-if" if="[[confirmModalError]]">
              <div class="alert-error-box" style="margin-top: 1rem; text-align: left;">
                ⚠️ [[confirmModalError]]
              </div>
            </template>
            
            <div class="confirm-actions">
              <button class="btn-confirm-action" on-click="_executeConfirmAction" disabled$="[[confirmModalSubmitting]]">
                <template is="dom-if" if="[[!confirmModalSubmitting]]">
                  Confirmar Acción
                </template>
                <template is="dom-if" if="[[confirmModalSubmitting]]">
                  Procesando...
                </template>
              </button>
              <button class="btn-cancel-action" on-click="_closeConfirmModal" disabled$="[[confirmModalSubmitting]]">
                Volver / Cancelar
              </button>
            </div>
          </div>
        </div>
      </template>
    `}static get properties(){return{bookings:{type:Array,value:function(){return[]}},showAll:{type:Boolean,value:!0},showConcluded:{type:Boolean,value:!1},searchTerm:{type:String,value:""},selectedBookingForModal:{type:Object,value:null},showConfirmModal:{type:Boolean,value:!1},confirmModalTitle:{type:String,value:""},confirmModalMessage:{type:String,value:""},confirmModalActionType:{type:String,value:""},confirmModalBooking:{type:Object,value:null},confirmModalSubmitting:{type:Boolean,value:!1},confirmModalError:{type:String,value:""}}}static get observers(){return["_observeFilters(showAll, showConcluded)"]}ready(){super.ready(),this._loadBookings()}_observeFilters(){this._loadBookings()}async _loadBookings(){try{const e=await As(!0);this.bookings=Array.isArray(e)?e:[]}catch(e){console.error("Error al cargar reservas:",e),this.bookings=[]}}_isConcluded(e){if(!e)return!1;if(e.status==="CONCLUIDA")return!0;if(e.event_date)try{const i=new Date;if(i.setHours(0,0,0,0),new Date(e.event_date+"T00:00:00")<i&&e.is_active&&e.status!=="CANCELADA"&&e.status!=="COBRADA")return!0}catch{}return!1}_isCancelled(e){return e?!e.is_active||e.status==="CANCELADA":!1}_computeBookingsTotalCount(e){return Array.isArray(e)?e.length:0}_computeActiveBookingsCount(e){return!Array.isArray(e)||e.length===0?0:e.filter(i=>i&&i.is_active!==!1).length}_computeTotalRevenue(e){return!Array.isArray(e)||e.length===0?0:e.filter(i=>i&&i.is_active!==!1).reduce((i,n)=>i+Number(n.total_mxn||0),0)}_computeTotalRevenueFormatted(e){return Ve(this._computeTotalRevenue(e))}_computeFilteredBookings(e,i,n,r){if(!Array.isArray(e))return[];let s=e.filter(o=>{if(!o)return!1;const l=this._isCancelled(o),c=this._isConcluded(o);return!(l&&!n||c&&!r)});if(!i)return s;const a=String(i).toLowerCase().trim();return s.filter(o=>o.booking_folio&&o.booking_folio.toLowerCase().includes(a)||o.customer_name&&o.customer_name.toLowerCase().includes(a)||o.branch_name&&o.branch_name.toLowerCase().includes(a)||o.customer_email&&o.customer_email.toLowerCase().includes(a))}_formatMXN(e){return Ve(e)}_computeRowClass(e){return e?"":"row-inactive"}_stopEventPropagation(e){e.stopPropagation()}_openServicesModal(e){this.selectedBookingForModal=e.model.b,requestAnimationFrame(()=>this._syncModalSelect())}_syncModalSelect(){const e=this.selectedBookingForModal;if(!e)return;const i=this._computeBusinessStatusValue(e.status,e.event_date,e.is_active),n=this.shadowRoot&&this.shadowRoot.querySelector(".modal-status-row .status-select");n&&(n.value=i)}_closeModal(){this.selectedBookingForModal=null}_closeModalBackdrop(){this.selectedBookingForModal=null}_handleSoftDelete(e){const i=e.model.b;this._openConfirmModal("Cancelar Evento","¿Está seguro que desea cancelar este servicio? El estado pasará a Cancelada.","soft-delete",i)}_handleRestore(e){const i=e.model.b;this._openConfirmModal("Reactivar Evento","¿Desea cambiar el estatus de este servicio? El estado pasará a Confirmada.","restore",i)}_openConfirmModal(e,i,n,r){this.confirmModalTitle=e,this.confirmModalMessage=i,this.confirmModalActionType=n,this.confirmModalBooking=r,this.confirmModalError="",this.confirmModalSubmitting=!1,this.showConfirmModal=!0}_closeConfirmModal(){this.confirmModalSubmitting||(this.showConfirmModal=!1,this.confirmModalBooking=null,this.confirmModalActionType="",this.confirmModalError="")}async _executeConfirmAction(){if(!(!this.confirmModalBooking||!this.confirmModalActionType)){this.confirmModalSubmitting=!0,this.confirmModalError="";try{this.confirmModalActionType==="soft-delete"?await Ps(this.confirmModalBooking.id):this.confirmModalActionType==="restore"&&await Ts(this.confirmModalBooking.id),this.showConfirmModal=!1,this.confirmModalBooking=null,this.confirmModalActionType="",this._loadBookings()}catch(e){this.confirmModalError=e.message||"Error al procesar la acción"}finally{this.confirmModalSubmitting=!1}}}_computeBusinessStatusText(e,i,n){if(!n||e==="CANCELADA")return"Cancelada";if(e==="COBRADA")return"Cobrada / Pagada";if(i)try{const r=new Date;r.setHours(0,0,0,0);const s=new Date(i+"T00:00:00");if(s<r&&e==="CONCLUIDA"||s<r&&e!=="COBRADA")return"Concluida"}catch{}return e==="CONFIRMADA"?"Confirmada":e==="CONCLUIDA"?"Concluida":e==="PENDIENTE"?"Pendiente":"Confirmada"}_computeBusinessStatusValue(e,i,n){return!n||e==="CANCELADA"?"CANCELADA":e==="COBRADA"?"COBRADA":e==="CONCLUIDA"?"CONCLUIDA":"CONFIRMADA"}_computeBusinessStatusClass(e,i,n){const r=this._computeBusinessStatusText(e,i,n);return r==="Cancelada"?"status-badge status-inactive":r==="Cobrada / Pagada"?"status-badge status-paid":r==="Concluida"?"status-badge status-concluded":r==="Pendiente"?"status-badge status-pending":"status-badge status-active"}_computeModalStatusBadgeClass(e,i,n){return this._computeBusinessStatusClass(e,i,n)}async _handleStatusChange(e){const i=e.target.value,n=e.target.dataset.bookingId;if(!(!n||!i))try{const{updateBookingStatus:r}=await pn(async()=>{const{updateBookingStatus:s}=await Promise.resolve().then(()=>un);return{updateBookingStatus:s}},void 0);await r(n,i),await this._loadBookings()}catch(r){console.error("Error al actualizar estado:",r)}}async _handleModalStatusChange(e){const i=e.target.value,n=e.target.dataset.bookingId;if(!(!n||!i))try{const{updateBookingStatus:r}=await pn(async()=>{const{updateBookingStatus:s}=await Promise.resolve().then(()=>un);return{updateBookingStatus:s}},void 0);if(await r(n,i),await this._loadBookings(),this.selectedBookingForModal){const s=(this.bookings||[]).find(a=>String(a.id)===String(n));s&&(this.selectedBookingForModal={...s},requestAnimationFrame(()=>this._syncModalSelect()))}}catch(r){console.error("Error al actualizar estado en modal:",r)}}}customElements.define("partyzone-admin",Ac);typeof document<"u"&&(document.timeline||(document.timeline={currentTime:0}),typeof document.timeline.play!="function"&&(document.timeline.play=function(t){try{if(t&&typeof t.play=="function")return t.play()}catch(e){console.warn("Animación neon omitida:",e)}return null}));class Pc extends ye{static get template(){return Te`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: var(--pz-bg-main, #FDFBF7);
        }

        main {
          flex: 1 0 auto;
          display: block;
          position: relative;
          width: 100%;
          min-height: 70vh;
        }

        neon-animated-pages {
          display: block;
          position: relative;
          width: 100%;
          min-height: 70vh;
        }

        neon-animatable {
          display: block !important;
          position: relative !important;
          width: 100%;
          min-height: 70vh;
        }

        neon-animatable:not(.iron-selected) {
          display: none !important;
        }

        footer {
          background: #FFFFFF;
          border-top: 1px solid var(--pz-border-color, #E8E2D5);
          padding: 3rem 2rem 2rem;
          color: var(--pz-text-muted, #5E5E5E);
          margin-top: auto;
          position: relative;
          z-index: 10;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2.5rem;
          margin-bottom: 2rem;
        }

        .footer-brand h3 {
          font-size: 1.5rem;
          color: var(--pz-wine-main, #7A1C30);
          margin-bottom: 0.5rem;
        }

        .footer-brand p {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .footer-col h4 {
          font-size: 1rem;
          color: var(--pz-text-main, #2C2C2C);
          margin-bottom: 0.8rem;
          font-family: var(--pz-font-sans, sans-serif);
        }

        .footer-col ul {
          list-style: none;
          font-size: 0.88rem;
        }

        .footer-col ul li {
          margin-bottom: 0.5rem;
        }

        .footer-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--pz-border-subtle, #F0EAE1);
          text-align: center;
          font-size: 0.85rem;
        }
      </style>

      <partyzone-header 
        current-page="[[currentPage]]"
        is-admin-logged-in="[[isAdminLoggedIn]]"
        admin-user="[[adminUser]]"
        on-navigate="_onNavigate"
        on-logout="_onLogout">
      </partyzone-header>

      <main>
        <neon-animated-pages 
          selected="[[currentPageIndex]]" 
          entry-animation="fade-in-animation" 
          exit-animation="fade-out-animation">

          <!-- Página 0: Landing -->
          <neon-animatable>
            <partyzone-landing 
              branches="[[branches]]" 
              services="[[services]]"
              on-navigate="_onNavigate">
            </partyzone-landing>
          </neon-animatable>

          <!-- Página 1: Booking -->
          <neon-animatable>
            <partyzone-booking 
              id="bookingComponent"
              branches="[[branches]]" 
              services="[[services]]"
              on-navigate="_onNavigate">
            </partyzone-booking>
          </neon-animatable>

          <!-- Página 2: Login -->
          <neon-animatable>
            <partyzone-login 
              on-login-success="_onLoginSuccess">
            </partyzone-login>
          </neon-animatable>

          <!-- Página 3: Admin -->
          <neon-animatable>
            <partyzone-admin 
              id="adminComponent">
            </partyzone-admin>
          </neon-animatable>

        </neon-animated-pages>
      </main>

      <footer>
        <div class="footer-container">
          <div class="footer-brand">
            <h3>Banquetes Hub</h3>
            <p>La cadena de salones de banquetes y eventos más distinguida, con cobertura en Cumbres, San Jerónimo, Valle Real y Linda Vista.</p>
          </div>
          <div class="footer-col">
            <h4>Nuestras Sucursales</h4>
            <ul>
              <li>• Banquetes Hub Cumbres</li>
              <li>• Banquetes Hub San Jerónimo</li>
              <li>• Banquetes Hub Valle Real</li>
              <li>• Banquetes Hub Linda Vista</li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Servicios & Banquetes</h4>
            <ul>
              <li>• Banquetes Gourmet 3 Tiempos</li>
              <li>• Audio & DJ Profesional</li>
              <li>• Barra Libre Premium</li>
              <li>• Cabinas 360° & Fotografía</li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Atención & Soporte</h4>
            <ul>
              <li>• Horario: Lun - Dom 09:00 a 20:00 hrs</li>
              <li>• Tel: (81) 8000-BANQUETES</li>
              <li>• Correo: contacto@banqueteshub.mx</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2026 Banquetes Hub | Salones de Eventos & Banquetes de Gala. Todos los derechos reservados.
        </div>
      </footer>
    `}static get properties(){return{currentPage:{type:String,value:"landing"},currentPageIndex:{type:Number,computed:"_computePageIndex(currentPage)"},branches:{type:Array,value:function(){return[]}},services:{type:Array,value:function(){return[]}},isAdminLoggedIn:{type:Boolean,value:!1},adminUser:{type:String,value:""}}}ready(){super.ready(),this._loadInitialData()}async _loadInitialData(){try{const[e,i]=await Promise.all([ws(),Cs()]);this.branches=Array.isArray(e)?e:[],this.services=Array.isArray(i)?i:[]}catch(e){console.error("Error al cargar catálogo inicial:",e),this.branches=[],this.services=[]}}_computePageIndex(e){switch(e){case"landing":return 0;case"booking":return 1;case"login":return 2;case"admin":return 3;default:return 0}}_onNavigate(e){try{const i=e.detail?.page||"landing";if(this.currentPage=i,i==="booking"&&e.detail?.branchId){const n=this.$.bookingComponent;n&&(n.selectedBranchId=Number(e.detail.branchId))}i==="admin"&&!this.isAdminLoggedIn&&(this.currentPage="login"),window.scrollTo({top:0,behavior:"smooth"})}catch(i){console.warn("Fallback visual activado (Animación omitida de forma segura):",i)}}_onLoginSuccess(e){try{this.isAdminLoggedIn=!0,this.adminUser=e.detail?.user?.username||"Administrador",this.currentPage="admin";const i=this.$.adminComponent;i&&typeof i._loadBookings=="function"&&i._loadBookings(),window.scrollTo({top:0,behavior:"smooth"})}catch(i){console.warn("Fallback visual en login activado:",i)}}_onLogout(){try{this.isAdminLoggedIn=!1,this.adminUser="",this.currentPage="landing",window.scrollTo({top:0,behavior:"smooth"})}catch(e){console.warn("Fallback visual en logout activado:",e)}}}customElements.define("partyzone-app",Pc);
