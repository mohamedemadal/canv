import{_ as y,i as o}from"./header-03a37d9b.js";import{P as B,N as A,A as k,S as E,a as C}from"./autoplay-7701afd3.js";import"./pagination-25b2bd0b.js";import{r as l,a as P,o as V,b as I,c as n,d as r,e as i,f as e,w as u,u as s,F as d,g as N,h as R,i as F}from"./index-e48b6af3.js";const j="/assets/about-ba7b0c45.png";const z={class:"w-full md:h-[40vh] h-[60vh] lg:h-full isolate bg-[#060B15]"},L={class:"text-center relative text-4xl bg-teal-100 rounded-3xl w-full h-[60vh] md:h-[40vh] lg:h-full"},M=e("div",{class:"absolute inset-0 flex flex-col items-start lg:px-[5%] justify-center p-[1%] z-50"},[e("h1",{class:"font-bold text-4xl lg:text-8xl w-full lg:w-[60%] text-white text-right"},"كن شريك"),e("h2",{class:"font-medium text-xl lg:text-3xl w-full lg:w-[60%] text-right text-white",style:{"line-height":"initial"}}," لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال . ")],-1),O=e("div",{class:"absolute w-full h-full bg-slate-700 opacity-20"},null,-1),T={class:"bg-white w-full h-full m-auto"},$=["src"],q=e("div",{class:"swiper-button-next"},null,-1),D=e("div",{class:"swiper-button-prev"},null,-1),G={class:"bg-white"},H={class:"py-[3%] m-auto max-w-screen-xl"},J=e("div",{class:""},[e("h3",{class:"text-center text-5xl pb-[5%]"},"عن كانف")],-1),K={class:"grid grid-cols-1 gap-8 lg:grid-cols-2 p-4"},Q=e("div",null,[e("img",{src:j,class:"w-full h-full"})],-1),U={class:"p-4"},W=e("h4",{class:"text-4xl font-bold"},"لماذا تختار كانف ؟",-1),X=e("p",{style:{"line-height":"initial"},class:"text-2xl font-medium text-[#AEAEAE]"},"تأسست الفوزان العقارية، في سنة 1991 ميلادي، والتي تعتبر الأن من الشركات العقارية، الرائده في منطقة القصيم وذلك في محاولة منا لتطوير وتحسين تجربة العملاء الباحثين عن خدمات عقارية و بقيم سامية",-1),oe={setup(Y){const a=l({count1:""}),h=450,_=2,c=l(null),g=l([{img:o},{img:o},{img:o}]),f=l(null);P({currentSlide:0,totalSlides:0});const p={nextEl:".swiper-button-next",prevEl:".swiper-button-prev"};function m(){setInterval(()=>{a.value.count1<h&&a.value.count1++},_)}function v(t){t[0].isIntersecting&&m()}const x=()=>{N.post("get_auctions",{auctions_filter:"all"}).then(t=>{})};return V(()=>{x();const t=new IntersectionObserver(v,{threshold:.1});c.value&&t.observe(c.value)}),(t,Z)=>{const w=I("Button");return n(),r(d,null,[i(y),e("div",z,[i(s(E),{ref_key:"swiperRef",ref:f,modules:[s(B),s(A),s(k)],onSlideChange:t.onSlideChange,onSwiper:t.onSwiper,navigation:p,pagination:{clickable:!0},scrollbar:{draggable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:10},480:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:1,spaceBetween:10}}},{default:u(()=>[(n(!0),r(d,null,R(g.value,(b,S)=>(n(),F(s(C),{key:S},{default:u(()=>[e("div",L,[M,O,e("div",T,[e("img",{src:b.img,class:"m-auto w-full h-full"},null,8,$)])])]),_:2},1024))),128)),q,D]),_:1},8,["modules","onSlideChange","onSwiper"])]),e("div",G,[e("div",H,[J,e("div",K,[Q,e("div",U,[W,X,i(w,{style:{"background-color":"#AA1E22 !important"},label:"إقرأ المزيد",class:"mt-3 w-36 bg focus:ring-0 text-[#AA1E22]"})])])])])],64)}}};export{oe as default};