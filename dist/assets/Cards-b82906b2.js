import{O as b,P as k,r as v,a as r,b as _,c as f,e as x,F as T,g as I,d as t,w as a,i as n,t as e,m as l}from"./index-3b1c90d2.js";const B={class:"cards"},N={class:"cards-container grid grid-cols-12 items-start gap-6 wrap"},z=b({setup(O){const{t:s}=k(),m=v(1),i=v(!1);function w(){i.value=!0,setTimeout(()=>{i.value=!1,++m.value},1e3)}return(S,g)=>{const d=r("va-card-title"),o=r("va-card-content"),c=r("va-card"),L=r("va-spacer"),u=r("va-button"),y=r("va-icon"),p=r("va-image"),C=r("va-inner-loading");return _(),f("div",B,[x("div",N,[(_(!0),f(T,null,I(m.value,h=>(_(),f(T,{key:h+"-0"},[t(c,{class:"col-span-12 sm:col-span-6"},{default:a(()=>[t(d,null,{default:a(()=>[n(e(l(s)("cards.title.default")),1)]),_:1}),t(o,null,{default:a(()=>[n(e(l(s)("cards.contentTextLong")),1)]),_:1})]),_:1}),t(c,{class:"col-span-12 sm:col-span-6"},{default:a(()=>[t(d,null,{default:a(()=>[n(e(l(s)("cards.title.withControls"))+" ",1),t(L),t(u,{class:"mr-1",size:"small",icon:"refresh"}),t(u,{size:"small",icon:"gear"})]),_:1}),t(o,null,{default:a(()=>[n(e(l(s)("cards.contentTextLong")),1)]),_:1})]),_:1}),t(c,{class:"col-span-12 sm:col-span-6"},{default:a(()=>[t(d,null,{default:a(()=>[t(y,{class:"mr-4",name:"cogs"}),n(" "+e(l(s)("cards.title.customHeader")),1)]),_:1}),t(o,null,{default:a(()=>[n(e(l(s)("cards.contentTextLong")),1)]),_:1})]),_:1}),t(c,{class:"col-span-12 sm:col-span-6"},{default:a(()=>[t(o,null,{default:a(()=>[x("p",null,e(l(s)("cards.title.withoutHeader")),1),n(" "+e(l(s)("cards.contentTextLong")),1)]),_:1})]),_:1}),t(c,{class:"col-span-12 sm:col-span-6 md:col-span-3"},{default:a(()=>[t(p,{src:"https://picsum.photos/300/200/?image=1043",style:{height:"200px"}}),t(d,null,{default:a(()=>[n(e(l(s)("cards.title.withImage")),1)]),_:1}),t(o,null,{default:a(()=>[n(e(l(s)("cards.contentText")),1)]),_:1})]),_:1}),t(c,{class:"col-span-12 sm:col-span-6 md:col-span-3"},{default:a(()=>[t(p,{src:"https://picsum.photos/300/200/?image=898",style:{height:"200px"}},{default:a(()=>[t(d,{"text-color":"#fff"},{default:a(()=>[n(e(l(s)("cards.title.withTitleOnImage")),1)]),_:1})]),_:1}),t(o,null,{default:a(()=>[n(e(l(s)("cards.contentText")),1)]),_:1})]),_:1}),t(c,{class:"w-full col-span-12 sm:col-span-6 md:col-span-3"},{default:a(()=>[t(p,{src:"https://picsum.photos/300/200/?image=898",style:{height:"200px"}},{default:a(()=>[t(u,{class:"m-0"},{default:a(()=>[n(e(l(s)("cards.button.readMore")),1)]),_:1})]),_:1})]),_:1}),t(c,{class:"col-span-12 sm:col-span-6 md:col-span-3",stripe:"","stripe-color":"danger"},{default:a(()=>[t(d,null,{default:a(()=>[n(e(l(s)("cards.title.withStripe")),1)]),_:1}),t(o,null,{default:a(()=>[n(e(l(s)("cards.contentTextLong")),1)]),_:1})]),_:1}),t(c,{class:"col-span-12 sm:col-span-6 md:col-span-3",color:"success"},{default:a(()=>[t(o,null,{default:a(()=>[n(e(l(s)("cards.contentTextLong")),1)]),_:1})]),_:1}),t(c,{class:"col-span-12 sm:col-span-6 md:col-span-3",color:"danger"},{default:a(()=>[t(o,null,{default:a(()=>[n(e(l(s)("cards.contentTextLong")),1)]),_:1})]),_:1}),t(c,{class:"col-span-12 sm:col-span-6 md:col-span-3",stripe:"","stripe-color":"info"},{default:a(()=>[t(d,null,{default:a(()=>[n(e(l(s)("cards.title.withStripe")),1)]),_:1}),t(o,null,{default:a(()=>[n(e(l(s)("cards.contentTextLong")),1)]),_:1})]),_:1}),t(c,{class:"col-span-12 sm:col-span-6 md:col-span-3"},{default:a(()=>[t(p,{class:"h-[200px]",src:"https://picsum.photos/300/200/?image=1067"},{default:a(()=>[t(d,{"text-color":"#fff"},{default:a(()=>[n(e(l(s)("cards.title.withTitleOnImage")),1)]),_:1})]),_:1}),t(o,null,{default:a(()=>[n(e(l(s)("cards.contentText")),1)]),_:1})]),_:1})],64))),128))]),t(C,{class:"w-full py-4 justify-center",loading:i.value},{default:a(()=>[t(u,{onClick:g[0]||(g[0]=h=>w())},{default:a(()=>[n(e(l(s)("cards.button.showMore")),1)]),_:1})]),_:1},8,["loading"])])}}});export{z as default};