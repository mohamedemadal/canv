import{x as p,y as d,r as o,a as r,o as _,c as f,d as n,p as l,b as v,w as b,f as h,t as x,Q as y,u as V}from"./index-8a781faa.js";const g=["onSubmit"],w={class:"flex justify-center mt-4"},N=p({setup(B){const{t}=d(),e=o(""),s=o([]);function u(){e.value?V().push("/"):s.value=["Email is required"]}return(C,a)=>{const i=r("va-input"),m=r("va-button");return _(),f("form",{class:"login",onSubmit:y(u,["prevent"])},[n(i,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),class:"mb-4",type:"email",label:l(t)("auth.email"),error:!!s.value.length,"error-messages":s.value},null,8,["modelValue","label","error","error-messages"]),v("div",w,[n(m,{type:"submit",class:"my-0"},{default:b(()=>[h(x(l(t)("auth.reset_password")),1)]),_:1})])],40,g)}}});export{N as default};