(()=>{"use strict";var e,t={482:()=>{const e=(e,t)=>e?.classList.add(t),t=(e,t)=>e?.classList.remove(t);let r;const o=(o,n)=>{const a=o.querySelectorAll(".tabMenu > li"),c=o.querySelectorAll(".wp-block-tcb-tab");window.clearTimeout(r),a.forEach((e=>{t(e,"active")})),c.forEach((e=>{t(e,"active"),t(e,"activeContent")})),e(n,"active");const l=c[(i=n,Array.from(i?.parentElement?.children||[])?.indexOf(i))];var i;e(l,"active"),r=setTimeout((()=>{e(l,"activeContent")}),50)};document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".wp-block-tcb-tabs").forEach((e=>{const t=e.querySelector(".tabMenu"),r=e.querySelectorAll(".tabMenu li");o(e,t.children[0]),r.forEach((t=>{t.addEventListener("click",(function(){o(e,t)}))})),e?.removeAttribute("data-attributes")}))}))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,r,n,a)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){for(var[r,n,a]=e[u],l=!0,i=0;i<r.length;i++)(!1&a||c>=a)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(l=!1,a<c&&(c=a));if(l){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={997:0,177:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[c,l,i]=r,s=0;if(c.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(i)var u=i(o)}for(t&&t(r);s<c.length;s++)a=c[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=globalThis.webpackChunktabbed_contents=globalThis.webpackChunktabbed_contents||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[177],(()=>o(482)));n=o.O(n)})();