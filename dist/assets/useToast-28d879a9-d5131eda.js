import{m as a,Y as c,Z as l,$ as r,a0 as n,a1 as i}from"./index-5b43dc1c.js";const u=()=>a(()=>{var e,o;return((e=c())==null?void 0:e._context)||((o=l())==null?void 0:o.appContext)}),x=()=>{const e=u(),o=[];return{init:t=>{const s=r(t,e.value);return s&&o.push(s),s},close:t=>n(t),closeAll:(t=!1)=>i(t?void 0:e.value),closeAllCreatedInThisHook:()=>{o.forEach(t=>n(t))}}};export{x as u};