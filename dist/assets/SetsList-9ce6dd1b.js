import{z as N,d as o,e,f as t,F as c,k as d,C as j,w as _,i as a,h as l,m as B,t as V,n as v,K as b}from"./index-9b6dcbe1.js";const w={class:"grid grid-cols-12 gap-6"},z={class:"absolute inset-0 flex justify-center items-center z-10"},$={class:"col-span-2 flex justify-center items-center"},F=l("div",{class:"col-span-8"},null,-1),D={class:"col-span-2 flex justify-center items-center"},K=N({props:{sets:null},setup(f){const r=(p,m)=>`${p.prefix}-${m}`;return(p,m)=>{const h=o("va-button"),i=o("va-icon"),g=o("router-link"),y=o("va-card");return e(),t("div",w,[(e(!0),t(c,null,d(f.sets,(n,k)=>(e(),j(y,{key:k,class:"va-card-wrapper relative lg:col-span-6 col-span-12 py-3"},{default:_(()=>[a(g,{class:"text-[inherit]",to:{path:`icons/${n.href}`},append:""},{default:_(()=>[l("div",z,[a(h,null,{default:_(()=>[B(V(n.name.toUpperCase()),1)]),_:2},1024)]),(e(!0),t(c,null,d(n.filteredLists,(s,u)=>(e(),t(c,null,[s.length!==2?(e(),t("div",{key:u,class:"py-3 grid grid-cols-6"},[(e(!0),t(c,null,d(s,(x,C)=>(e(),t("div",{key:C,class:"col-span-1 flex justify-center items-center"},[a(i,{name:r(n,x)},null,8,["name"])]))),128))])):v("",!0),s.length===2?(e(),t("div",{key:u,class:b(["py-12 grid grid-cols-12",{"sets-list__set__content--middle":u===1}])},[l("div",$,[a(i,{name:r(n,s[0])},null,8,["name"])]),F,l("div",D,[a(i,{name:r(n,s[1])},null,8,["name"])])],2)):v("",!0)],64))),256))]),_:2},1032,["to"])]),_:2},1024))),128))])}}});export{K as default};