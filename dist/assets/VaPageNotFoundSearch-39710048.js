import{_ as b}from"./VaPageNotFound.vue_vue_type_style_index_0_lang-b282c423.js";import{O as v,r,C as y,a as l,b as a,k as C,w as u,d,e as p,c as s,g as c,t as N,F as k,i as x,m as M}from"./index-f6266149.js";const V=[{categoryName:"Dashboard",items:[{itemName:"Dashboard",itemLink:"/admin/dashboard"}]},{categoryName:"Statistics",items:[{itemName:"Charts",itemLink:"/admin/statistics/charts"},{itemName:"Progress bars",itemLink:"/admin/statistics/progress-bars"}]},{categoryName:"Forms",items:[{itemName:"Form Elements",itemLink:"/admin/forms/form-elements"},{itemName:"Medium Editor",itemLink:"/admin/forms/medium-editor"}]},{categoryName:"Tables",items:[{itemName:"Markup Tables",itemLink:"/admin/tables/markup"}]},{categoryName:"UI Elements",items:[{itemName:"Typography",itemLink:"/admin/ui/typography"},{itemName:"Buttons",itemLink:"/admin/ui/buttons"},{itemName:"Cards",itemLink:"/admin/ui/cards"},{itemName:"Chat",itemLink:"/admin/ui/chat"},{itemName:"Chips",itemLink:"/admin/ui/chips"},{itemName:"Collapses",itemLink:"/admin/ui/collapses"},{itemName:"Colors",itemLink:"/admin/ui/colors"},{itemName:"Icons",itemLink:"/admin/ui/icons"},{itemName:"Lists",itemLink:"/admin/ui/lists"},{itemName:"Modals",itemLink:"/admin/ui/modals"},{itemName:"Notifications",itemLink:"/admin/ui/notifications"},{itemName:"Popovers",itemLink:"/admin/ui/popovers"},{itemName:"Rating",itemLink:"/admin/ui/rating"},{itemName:"Tabs",itemLink:"/admin/ui/tabs"},{itemName:"Tree View",itemLink:"/admin/ui/tree-view"}]},{categoryName:"Maps",items:[{itemName:"MapLibre Maps",itemLink:"/admin/maps/maplibre-maps"},{itemName:"Yandex Maps",itemLink:"/admin/maps/yandex-maps"},{itemName:"Leaflet Maps",itemLink:"/admin/maps/leaflet-maps"},{itemName:"Bubble Maps",itemLink:"/admin/maps/bubble-maps"},{itemName:"Line Maps",itemLink:"/admin/maps/line-maps"}]}],w={class:"grid grid-cols-12 va-page-not-found-search__links"},B={class:"mb-2"},S=v({setup(T){const n=r(V),i=r(""),_=y(()=>i.value.length>=1?n.value.map(e=>({categoryName:e.categoryName,items:e.items.filter(t=>t.itemName.toUpperCase().search(i.value.toUpperCase())!==-1)})).filter(e=>e.items.length>=1):n.value);return(e,t)=>{const g=l("va-input"),L=l("router-link");return a(),C(b,{"without-button":"",class:"va-page-not-found-search"},{default:u(()=>[d(g,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=m=>i.value=m),placeholder:"Search on the menu",style:{"align-items":"flex-start"},class:"va-page-not-found-search__input mb-8",clearable:""},null,8,["modelValue"]),p("div",w,[(a(!0),s(k,null,c(M(_),(m,f)=>(a(),s("ul",{key:f,class:"va-page-not-found-search__list flex flex-col xs:col-span-6 md:col-span-3 lg:col-span-1 mb-2"},[p("li",B,N(m.categoryName),1),(a(!0),s(k,null,c(m.items,(o,h)=>(a(),s("li",{key:h,class:"va-page-not-found-search__list-element"},[d(L,{to:{path:o.itemLink},class:"va-link whitespace-nowrap"},{default:u(()=>[x(N(o.itemName),1)]),_:2},1032,["to"])]))),128))]))),128))])]),_:1})}}});export{S as default};