(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[952],{1165:()=>{var t=function(){function t(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}return t}();function e(t){return t=r(t),s(n(t),t)}function r(t){return t.replace(c.comments,"").replace(c.port,"")}function n(e){var r=new t;r["start"]=0,r["end"]=e.length;for(var n=r,s=0,i=e.length;s<i;s++)if(e[s]===a){n["rules"]||(n["rules"]=[]);var o=n,c=o["rules"][o["rules"].length-1]||null;n=new t,n["start"]=s+1,n["parent"]=o,n["previous"]=c,o["rules"].push(n)}else e[s]===u&&(n["end"]=s+1,n=n["parent"]||r);return r}function s(t,e){var r=e.substring(t["start"],t["end"]-1);if(t["parsedCssText"]=t["cssText"]=r.trim(),t.parent){var n=t.previous?t.previous["end"]:t.parent["start"];r=e.substring(n,t["start"]-1),r=i(r),r=r.replace(c.multipleSpaces," "),r=r.substring(r.lastIndexOf(";")+1);var a=t["parsedSelector"]=t["selector"]=r.trim();t["atRule"]=0===a.indexOf(f),t["atRule"]?0===a.indexOf(p)?t["type"]=o.MEDIA_RULE:a.match(c.keyframesRule)&&(t["type"]=o.KEYFRAMES_RULE,t["keyframesName"]=t["selector"].split(c.multipleSpaces).pop()):0===a.indexOf(l)?t["type"]=o.MIXIN_RULE:t["type"]=o.STYLE_RULE}var u=t["rules"];if(u)for(var h=0,v=u.length,m=void 0;h<v&&(m=u[h]);h++)s(m,e);return t}function i(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){var t=arguments[1],e=6-t.length;while(e--)t="0"+t;return"\\"+t}))}var o={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},a="{",u="}",c={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},l="--",p="@media",f="@";function h(t,e,r){t["lastIndex"]=0;var n=e.substring(r).match(t);if(n){var s=r+n["index"];return{start:s,end:s+n[0].length}}return null}var v=/\bvar\(/,m=/\B--[\w-]+\s*:/,d=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,g=/^[\t ]+\n/gm;function y(t,e,r){return t[e]?t[e]:r?w(r,t):""}function S(t,e){for(var r=0,n=e;n<t.length;n++){var s=t[n];if("("===s)r++;else if(")"===s&&(r--,r<=0))return n+1}return n}function b(t,e){var r=h(v,t,e);if(!r)return null;var n=S(t,r.start),s=t.substring(r.end,n-1),i=s.split(","),o=i[0],a=i.slice(1);return{start:r.start,end:n,propName:o.trim(),fallback:a.length>0?a.join(",").trim():void 0}}function E(t,e,r){var n=b(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,i=null!=n.fallback?k(n.fallback):void 0;return e.push(t.substring(r,n.start),(function(t){return y(t,s,i)})),n.end}function w(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"===typeof s?s:s(e)}return r}function x(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var i=t[s];if(r)n&&'"'===i&&(r=!1),n||"'"!==i||(r=!1);else if('"'===i)r=!0,n=!0;else if("'"===i)r=!0,n=!1;else{if(";"===i)return s+1;if("}"===i)return s}}return s}function M(t){var e="",r=0;while(1){var n=h(m,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=x(t,s)}return e}function k(t){var e=0;t=t.replace(d,""),t=M(t).replace(g,"");var r=[];while(e<t.length)e=E(t,r,e);return r}function C(t){var e={};t.forEach((function(t){t.declarations.forEach((function(t){e[t.prop]=t.value}))}));for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach((function(t){var n=t[0],s=t[1],i=w(s,r);i!==r[n]&&(r[n]=i,e=!0)})),!e)return"break"},i=0;i<10;i++){var o=s();if("break"===o)break}return r}function I(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter((function(t){return t.type===o.STYLE_RULE})).forEach((function(t){var n=_(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach((function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:R(),nu:e})})),e++})),r}function R(t){return 1}var A="!important",L=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function _(t){var e,r=[];while(e=L.exec(t.trim())){var n=O(e[2]),s=n.value,i=n.important;r.push({prop:e[1].trim(),value:k(s),important:i})}return r}function O(t){var e=/\s+/gim;t=t.replace(e," ").trim();var r=t.endsWith(A);return r&&(t=t.substr(0,t.length-A.length).trim()),{value:t,important:r}}function T(t,e,r){var n=[],s=U(e,t);r.forEach((function(t){return n.push(t)})),s.forEach((function(t){return n.push(t)}));var i=N(n),o=i.filter((function(e){return $(t,e.selector)}));return j(o)}function U(t,e){var r=[];while(e){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}function N(t){var e=[];return t.forEach((function(t){e.push.apply(e,t.selectors)})),e}function j(t){return t.sort((function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity})),t}function $(t,e){return":root"===e||"html"===e||t.matches(e)}function G(t){var r=e(t),n=k(t),s=I(r);return{original:t,template:n,selectors:s,usesCssVars:n.length>1}}function H(t,e){if(t.some((function(t){return t.styleEl===e})))return!1;var r=G(e.textContent);return r.styleEl=e,t.push(r),!0}function P(t){var e=N(t),r=C(e);t.forEach((function(t){t.usesCssVars&&(t.styleEl.textContent=w(t.template,r))}))}function V(t,e){var r=t.template.map((function(r){return"string"===typeof r?Y(r,t.scopeId,e):r})),n=t.selectors.map((function(r){return Object.assign(Object.assign({},r),{selector:Y(r.selector,t.scopeId,e)})}));return Object.assign(Object.assign({},t),{template:r,selectors:n,scopeId:e})}function Y(t,e,r){return t=q(t,"\\."+e,"."+r),t}function q(t,e,r){return t.replace(new RegExp(e,"g"),r)}function F(t,e){return D(t,e),W(t,e).then((function(){P(e)}))}function B(t,e){var r=new MutationObserver((function(){D(t,e)&&P(e)}));r.observe(document.head,{childList:!0})}function W(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),s=0;s<n.length;s++)r.push(K(t,e,n[s]));return Promise.all(r)}function D(t,e){var r=Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])"));return r.map((function(t){return H(e,t)})).some(Boolean)}function K(t,e,r){var n=r.href;return fetch(n).then((function(t){return t.text()})).then((function(s){if(z(s)&&r.parentNode){J(s)&&(s=Q(s,n));var i=t.createElement("style");i.setAttribute("data-styles",""),i.textContent=s,H(e,i),r.parentNode.insertBefore(i,r),r.remove()}})).catch((function(t){console.error(t)}))}var X=/[\s;{]--[-a-zA-Z0-9]+\s*:/m;function z(t){return t.indexOf("var(")>-1||X.test(t)}var Z=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;function J(t){return Z.lastIndex=0,Z.test(t)}function Q(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(Z,(function(t,e){var n=r+e;return t.replace(e,n)}))}var tt=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return t.prototype.i=function(){var t=this;return this.didInit||!this.win.requestAnimationFrame?Promise.resolve():(this.didInit=!0,new Promise((function(e){t.win.requestAnimationFrame((function(){B(t.doc,t.globalScopes),F(t.doc,t.globalScopes).then((function(){return e()}))}))})))},t.prototype.addLink=function(t){var e=this;return K(this.doc,this.globalScopes,t).then((function(){e.updateGlobal()}))},t.prototype.addGlobalStyle=function(t){H(this.globalScopes,t)&&this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var s=this.registerHostTemplate(r,e,n),i=this.doc.createElement("style");return i.setAttribute("data-no-shim",""),s.usesCssVars?n?(i["s-sc"]=e=s.scopeId+"-"+this.count,i.textContent="/*needs update*/",this.hostStyleMap.set(t,i),this.hostScopeMap.set(t,V(s,e)),this.count++):(s.styleEl=i,s.usesCssVars||(i.textContent=w(s.template,{})),this.globalScopes.push(s),this.updateGlobal(),this.hostScopeMap.set(t,s)):i.textContent=r,i},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=T(t,this.hostScopeMap,this.globalScopes),s=C(n);r.textContent=w(e.template,s)}}},t.prototype.updateGlobal=function(){P(this.globalScopes)},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||(n=G(t),n.scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}();(function(t){!t||t.__cssshim||t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")||(t.__cssshim=new tt(t,t.document))})("undefined"!==typeof window&&window)}}]);
//# sourceMappingURL=stencil-polyfills-css-shim.80226915.js.map