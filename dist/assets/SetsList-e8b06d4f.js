import{O as j,a as o,b as e,c as t,F as c,g as d,k as N,w as _,d as a,e as l,i as b,t as B,j as v,E as V}from"./index-f55811cb.js";const w={class:"grid grid-cols-12 gap-6"},$={class:"absolute inset-0 flex justify-center items-center z-10"},z={class:"col-span-2 flex justify-center items-center"},E=l("div",{class:"col-span-8"},null,-1),F={class:"col-span-2 flex justify-center items-center"},O=j({props:{sets:null},setup(f){const r=(p,m)=>`${p.prefix}-${m}`;return(p,m)=>{const g=o("va-button"),i=o("va-icon"),h=o("router-link"),y=o("va-card");return e(),t("div",w,[(e(!0),t(c,null,d(f.sets,(n,k)=>(e(),N(y,{key:k,class:"va-card-wrapper relative lg:col-span-6 col-span-12 py-3"},{default:_(()=>[a(h,{class:"text-[inherit]",to:{path:`icons/${n.href}`},append:""},{default:_(()=>[l("div",$,[a(g,null,{default:_(()=>[b(B(n.name.toUpperCase()),1)]),_:2},1024)]),(e(!0),t(c,null,d(n.filteredLists,(s,u)=>(e(),t(c,null,[s.length!==2?(e(),t("div",{key:u,class:"py-3 grid grid-cols-6"},[(e(!0),t(c,null,d(s,(x,C)=>(e(),t("div",{key:C,class:"col-span-1 flex justify-center items-center"},[a(i,{name:r(n,x)},null,8,["name"])]))),128))])):v("",!0),s.length===2?(e(),t("div",{key:u,class:V(["py-12 grid grid-cols-12",{"sets-list__set__content--middle":u===1}])},[l("div",z,[a(i,{name:r(n,s[0])},null,8,["name"])]),E,l("div",F,[a(i,{name:r(n,s[1])},null,8,["name"])])],2)):v("",!0)],64))),256))]),_:2},1032,["to"])]),_:2},1024))),128))])}}});export{O as default};