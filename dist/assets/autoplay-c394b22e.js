import{d as ne,S as ie,e as le,c as se,a as re,b as V,f as oe,g as q}from"./navigation-63fefc96.js";import{r as A,H as K,I as X,G as de,J as ue,o as Y,K as J,L as M,M as pe,C as fe}from"./index-f55811cb.js";const Z=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function R(a){return typeof a=="object"&&a!==null&&a.constructor&&Object.prototype.toString.call(a).slice(8,-1)==="Object"}function j(a,e){const c=["__proto__","constructor","prototype"];Object.keys(e).filter(l=>c.indexOf(l)<0).forEach(l=>{typeof a[l]>"u"?a[l]=e[l]:R(e[l])&&R(a[l])&&Object.keys(e[l]).length>0?e[l].__swiper__?a[l]=e[l]:j(a[l],e[l]):a[l]=e[l]})}function Q(a){return a===void 0&&(a={}),a.navigation&&typeof a.navigation.nextEl>"u"&&typeof a.navigation.prevEl>"u"}function k(a){return a===void 0&&(a={}),a.pagination&&typeof a.pagination.el>"u"}function ee(a){return a===void 0&&(a={}),a.scrollbar&&typeof a.scrollbar.el>"u"}function te(a){a===void 0&&(a="");const e=a.split(" ").map(l=>l.trim()).filter(l=>!!l),c=[];return e.forEach(l=>{c.indexOf(l)<0&&c.push(l)}),c.join(" ")}function ce(a){return a===void 0&&(a=""),a?a.includes("swiper-wrapper")?a:`swiper-wrapper ${a}`:"swiper-wrapper"}function ge(a){let{swiper:e,slides:c,passedParams:l,changedParams:r,nextEl:d,prevEl:u,scrollbarEl:p,paginationEl:i}=a;const b=r.filter(s=>s!=="children"&&s!=="direction"&&s!=="wrapperClass"),{params:o,pagination:v,navigation:E,scrollbar:C,virtual:L,thumbs:g}=e;let m,y,t,n,f,h,w,T;r.includes("thumbs")&&l.thumbs&&l.thumbs.swiper&&o.thumbs&&!o.thumbs.swiper&&(m=!0),r.includes("controller")&&l.controller&&l.controller.control&&o.controller&&!o.controller.control&&(y=!0),r.includes("pagination")&&l.pagination&&(l.pagination.el||i)&&(o.pagination||o.pagination===!1)&&v&&!v.el&&(t=!0),r.includes("scrollbar")&&l.scrollbar&&(l.scrollbar.el||p)&&(o.scrollbar||o.scrollbar===!1)&&C&&!C.el&&(n=!0),r.includes("navigation")&&l.navigation&&(l.navigation.prevEl||u)&&(l.navigation.nextEl||d)&&(o.navigation||o.navigation===!1)&&E&&!E.prevEl&&!E.nextEl&&(f=!0);const S=s=>{e[s]&&(e[s].destroy(),s==="navigation"?(e.isElement&&(e[s].prevEl.remove(),e[s].nextEl.remove()),o[s].prevEl=void 0,o[s].nextEl=void 0,e[s].prevEl=void 0,e[s].nextEl=void 0):(e.isElement&&e[s].el.remove(),o[s].el=void 0,e[s].el=void 0))};r.includes("loop")&&e.isElement&&(o.loop&&!l.loop?h=!0:!o.loop&&l.loop?w=!0:T=!0),b.forEach(s=>{if(R(o[s])&&R(l[s]))j(o[s],l[s]),(s==="navigation"||s==="pagination"||s==="scrollbar")&&"enabled"in l[s]&&!l[s].enabled&&S(s);else{const B=l[s];(B===!0||B===!1)&&(s==="navigation"||s==="pagination"||s==="scrollbar")?B===!1&&S(s):o[s]=l[s]}}),b.includes("controller")&&!y&&e.controller&&e.controller.control&&o.controller&&o.controller.control&&(e.controller.control=o.controller.control),r.includes("children")&&c&&L&&o.virtual.enabled&&(L.slides=c,L.update(!0)),r.includes("children")&&c&&o.loop&&(T=!0),m&&g.init()&&g.update(!0),y&&(e.controller.control=o.controller.control),t&&(e.isElement&&(!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-pagination"),i.part.add("pagination"),e.el.appendChild(i)),i&&(o.pagination.el=i),v.init(),v.render(),v.update()),n&&(e.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-scrollbar"),p.part.add("scrollbar"),e.el.appendChild(p)),p&&(o.scrollbar.el=p),C.init(),C.updateSize(),C.setTranslate()),f&&(e.isElement&&((!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-button-next"),d.innerHTML=e.hostEl.constructor.nextButtonSvg,d.part.add("button-next"),e.el.appendChild(d)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),u.innerHTML=e.hostEl.constructor.prevButtonSvg,u.part.add("button-prev"),e.el.appendChild(u))),d&&(o.navigation.nextEl=d),u&&(o.navigation.prevEl=u),E.init(),E.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=l.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=l.allowSlidePrev),r.includes("direction")&&e.changeDirection(l.direction,!1),(h||T)&&e.loopDestroy(),(w||T)&&e.loopCreate(),e.update()}function W(a,e){a===void 0&&(a={}),e===void 0&&(e=!0);const c={on:{}},l={},r={};j(c,ne),c._emitClasses=!0,c.init=!1;const d={},u=Z.map(i=>i.replace(/_/,"")),p=Object.assign({},a);return Object.keys(p).forEach(i=>{typeof a[i]>"u"||(u.indexOf(i)>=0?R(a[i])?(c[i]={},r[i]={},j(c[i],a[i]),j(r[i],a[i])):(c[i]=a[i],r[i]=a[i]):i.search(/on[A-Z]/)===0&&typeof a[i]=="function"?e?l[`${i[2].toLowerCase()}${i.substr(3)}`]=a[i]:c.on[`${i[2].toLowerCase()}${i.substr(3)}`]=a[i]:d[i]=a[i])}),["navigation","pagination","scrollbar"].forEach(i=>{c[i]===!0&&(c[i]={}),c[i]===!1&&delete c[i]}),{params:c,passedParams:r,rest:d,events:l}}function ve(a,e){let{el:c,nextEl:l,prevEl:r,paginationEl:d,scrollbarEl:u,swiper:p}=a;Q(e)&&l&&r&&(p.params.navigation.nextEl=l,p.originalParams.navigation.nextEl=l,p.params.navigation.prevEl=r,p.originalParams.navigation.prevEl=r),k(e)&&d&&(p.params.pagination.el=d,p.originalParams.pagination.el=d),ee(e)&&u&&(p.params.scrollbar.el=u,p.originalParams.scrollbar.el=u),p.init(c)}function me(a,e,c,l,r){const d=[];if(!e)return d;const u=i=>{d.indexOf(i)<0&&d.push(i)};if(c&&l){const i=l.map(r),b=c.map(r);i.join("")!==b.join("")&&u("children"),l.length!==c.length&&u("children")}return Z.filter(i=>i[0]==="_").map(i=>i.replace(/_/,"")).forEach(i=>{if(i in a&&i in e)if(R(a[i])&&R(e[i])){const b=Object.keys(a[i]),o=Object.keys(e[i]);b.length!==o.length?u(i):(b.forEach(v=>{a[i][v]!==e[i][v]&&u(i)}),o.forEach(v=>{a[i][v]!==e[i][v]&&u(i)}))}else a[i]!==e[i]&&u(i)}),d}const ye=a=>{!a||a.destroyed||!a.params.virtual||a.params.virtual&&!a.params.virtual.enabled||(a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.parallax&&a.params.parallax&&a.params.parallax.enabled&&a.parallax.setTranslate())};function G(a,e,c){a===void 0&&(a={});const l=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},d=(u,p)=>{Array.isArray(u)&&u.forEach(i=>{const b=typeof i.type=="symbol";p==="default"&&(p="container-end"),b&&i.children?d(i.children,p):i.type&&(i.type.name==="SwiperSlide"||i.type.name==="AsyncComponentWrapper")?l.push(i):r[p]&&r[p].push(i)})};return Object.keys(a).forEach(u=>{if(typeof a[u]!="function")return;const p=a[u]();d(p,u)}),c.value=e.value,e.value=l,{slides:l,slots:r}}function he(a,e,c){if(!c)return null;const l=o=>{let v=o;return o<0?v=e.length+o:v>=e.length&&(v=v-e.length),v},r=a.value.isHorizontal()?{[a.value.rtlTranslate?"right":"left"]:`${c.offset}px`}:{top:`${c.offset}px`},{from:d,to:u}=c,p=a.value.params.loop?-e.length:0,i=a.value.params.loop?e.length*2:e.length,b=[];for(let o=p;o<i;o+=1)o>=d&&o<=u&&b.push(e[l(o)]);return b.map(o=>(o.props||(o.props={}),o.props.style||(o.props.style={}),o.props.swiperRef=a,o.props.style=r,M(o.type,{...o.props},o.children)))}const Ce={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(a,e){let{slots:c,emit:l}=e;const{tag:r,wrapperTag:d}=a,u=A("swiper"),p=A(null),i=A(!1),b=A(!1),o=A(null),v=A(null),E=A(null),C={value:[]},L={value:[]},g=A(null),m=A(null),y=A(null),t=A(null),{params:n,passedParams:f}=W(a,!1);G(c,C,L),E.value=f,L.value=C.value;const h=()=>{G(c,C,L),i.value=!0};n.onAny=function(S){for(var s=arguments.length,B=new Array(s>1?s-1:0),O=1;O<s;O++)B[O-1]=arguments[O];l(S,...B)},Object.assign(n.on,{_beforeBreakpoint:h,_containerClasses(S,s){u.value=s}});const w={...n};if(delete w.wrapperClass,v.value=new ie(w),v.value.virtual&&v.value.params.virtual.enabled){v.value.virtual.slides=C.value;const S={cache:!1,slides:C.value,renderExternal:s=>{p.value=s},renderExternalUpdate:!1};j(v.value.params.virtual,S),j(v.value.originalParams.virtual,S)}K(()=>{!b.value&&v.value&&(v.value.emitSlidesClasses(),b.value=!0);const{passedParams:S}=W(a,!1),s=me(S,E.value,C.value,L.value,B=>B.props&&B.props.key);E.value=S,(s.length||i.value)&&v.value&&!v.value.destroyed&&ge({swiper:v.value,slides:C.value,passedParams:S,changedParams:s,nextEl:g.value,prevEl:m.value,scrollbarEl:t.value,paginationEl:y.value}),i.value=!1}),X("swiper",v),de(p,()=>{ue(()=>{ye(v.value)})}),Y(()=>{o.value&&(ve({el:o.value,nextEl:g.value,prevEl:m.value,paginationEl:y.value,scrollbarEl:t.value,swiper:v.value},n),l("swiper",v.value))}),J(()=>{v.value&&!v.value.destroyed&&v.value.destroy(!0,!1)});function T(S){return n.virtual?he(v,S,p.value):(S.forEach((s,B)=>{s.props||(s.props={}),s.props.swiperRef=v,s.props.swiperSlideIndex=B}),S)}return()=>{const{slides:S,slots:s}=G(c,C,L);return M(r,{ref:o,class:te(u.value)},[s["container-start"],M(d,{class:ce(n.wrapperClass)},[s["wrapper-start"],T(S),s["wrapper-end"]]),Q(a)&&[M("div",{ref:m,class:"swiper-button-prev"}),M("div",{ref:g,class:"swiper-button-next"})],ee(a)&&M("div",{ref:t,class:"swiper-scrollbar"}),k(a)&&M("div",{ref:y,class:"swiper-pagination"}),s["container-end"]])}}},Ee={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(a,e){let{slots:c}=e,l=!1;const{swiperRef:r}=a,d=A(null),u=A("swiper-slide"),p=A(!1);function i(v,E,C){E===d.value&&(u.value=C)}Y(()=>{!r||!r.value||(r.value.on("_slideClass",i),l=!0)}),pe(()=>{l||!r||!r.value||(r.value.on("_slideClass",i),l=!0)}),K(()=>{!d.value||!r||!r.value||(typeof a.swiperSlideIndex<"u"&&(d.value.swiperSlideIndex=a.swiperSlideIndex),r.value.destroyed&&u.value!=="swiper-slide"&&(u.value="swiper-slide"))}),J(()=>{!r||!r.value||r.value.off("_slideClass",i)});const b=fe(()=>({isActive:u.value.indexOf("swiper-slide-active")>=0,isVisible:u.value.indexOf("swiper-slide-visible")>=0,isPrev:u.value.indexOf("swiper-slide-prev")>=0,isNext:u.value.indexOf("swiper-slide-next")>=0}));X("swiperSlide",b);const o=()=>{p.value=!0};return()=>M(a.tag,{class:te(`${u.value}`),ref:d,"data-swiper-slide-index":typeof a.virtualIndex>"u"&&r&&r.value&&r.value.params.loop?a.swiperSlideIndex:a.virtualIndex,onLoadCapture:o},a.zoom?M("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof a.zoom=="number"?a.zoom:void 0},[c.default&&c.default(b.value),a.lazy&&!p.value&&M("div",{class:"swiper-lazy-preloader"})]):[c.default&&c.default(b.value),a.lazy&&!p.value&&M("div",{class:"swiper-lazy-preloader"})])}};function ae(a,e,c,l){return a.params.createElements&&Object.keys(l).forEach(r=>{if(!c[r]&&c.auto===!0){let d=le(a.el,`.${l[r]}`)[0];d||(d=se("div",l[r]),d.className=l[r],a.el.append(d)),c[r]=d,e[r]=d}}),c}function we(a){let{swiper:e,extendParams:c,on:l,emit:r}=a;c({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const d=g=>(Array.isArray(g)?g:[g]).filter(m=>!!m);function u(g){let m;return g&&typeof g=="string"&&e.isElement&&(m=e.el.querySelector(g),m)?m:(g&&(typeof g=="string"&&(m=[...document.querySelectorAll(g)]),e.params.uniqueNavElements&&typeof g=="string"&&m.length>1&&e.el.querySelectorAll(g).length===1&&(m=e.el.querySelector(g))),g&&!m?g:m)}function p(g,m){const y=e.params.navigation;g=d(g),g.forEach(t=>{t&&(t.classList[m?"add":"remove"](...y.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=m),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](y.lockClass))})}function i(){const{nextEl:g,prevEl:m}=e.navigation;if(e.params.loop){p(m,!1),p(g,!1);return}p(m,e.isBeginning&&!e.params.rewind),p(g,e.isEnd&&!e.params.rewind)}function b(g){g.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function o(g){g.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function v(){const g=e.params.navigation;if(e.params.navigation=ae(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let m=u(g.nextEl),y=u(g.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:y}),m=d(m),y=d(y);const t=(n,f)=>{n&&n.addEventListener("click",f==="next"?o:b),!e.enabled&&n&&n.classList.add(...g.lockClass.split(" "))};m.forEach(n=>t(n,"next")),y.forEach(n=>t(n,"prev"))}function E(){let{nextEl:g,prevEl:m}=e.navigation;g=d(g),m=d(m);const y=(t,n)=>{t.removeEventListener("click",n==="next"?o:b),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};g.forEach(t=>y(t,"next")),m.forEach(t=>y(t,"prev"))}l("init",()=>{e.params.navigation.enabled===!1?L():(v(),i())}),l("toEdge fromEdge lock unlock",()=>{i()}),l("destroy",()=>{E()}),l("enable disable",()=>{let{nextEl:g,prevEl:m}=e.navigation;g=d(g),m=d(m),[...g,...m].filter(y=>!!y).forEach(y=>y.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass))}),l("click",(g,m)=>{let{nextEl:y,prevEl:t}=e.navigation;y=d(y),t=d(t);const n=m.target;if(e.params.navigation.hideOnClick&&!t.includes(n)&&!y.includes(n)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===n||e.pagination.el.contains(n)))return;let f;y.length?f=y[0].classList.contains(e.params.navigation.hiddenClass):t.length&&(f=t[0].classList.contains(e.params.navigation.hiddenClass)),r(f===!0?"navigationShow":"navigationHide"),[...y,...t].filter(h=>!!h).forEach(h=>h.classList.toggle(e.params.navigation.hiddenClass))}});const C=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),v(),i()},L=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),E()};Object.assign(e.navigation,{enable:C,disable:L,update:i,init:v,destroy:E})}function H(a){return a===void 0&&(a=""),`.${a.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function xe(a){let{swiper:e,extendParams:c,on:l,emit:r}=a;const d="swiper-pagination";c({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),e.pagination={el:null,bullets:[]};let u,p=0;const i=t=>(Array.isArray(t)?t:[t]).filter(n=>!!n);function b(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function o(t,n){const{bulletActiveClass:f}=e.params.pagination;t&&(t=t[`${n==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${f}-${n}`),t=t[`${n==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${f}-${n}-${n}`)))}function v(t){const n=t.target.closest(H(e.params.pagination.bulletClass));if(!n)return;t.preventDefault();const f=V(n)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===f)return;const h=e.realIndex,w=e.getSlideIndexByData(f),T=e.getSlideIndexByData(e.realIndex);if(w>e.slides.length-e.loopedSlides){const S=e.activeIndex;e.loopFix({direction:w>T?"next":"prev",activeSlideIndex:w,slideTo:!1});const s=e.activeIndex;S===s&&e.slideToLoop(h,0,!1,!0)}e.slideToLoop(f)}else e.slideTo(f)}function E(){const t=e.rtl,n=e.params.pagination;if(b())return;let f=e.pagination.el;f=i(f);let h,w;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,S=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(w=e.previousRealIndex||0,h=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(h=e.snapIndex,w=e.previousSnapIndex):(w=e.previousIndex||0,h=e.activeIndex||0),n.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const s=e.pagination.bullets;let B,O,$;if(n.dynamicBullets&&(u=re(s[0],e.isHorizontal()?"width":"height",!0),f.forEach(P=>{P.style[e.isHorizontal()?"width":"height"]=`${u*(n.dynamicMainBullets+4)}px`}),n.dynamicMainBullets>1&&w!==void 0&&(p+=h-(w||0),p>n.dynamicMainBullets-1?p=n.dynamicMainBullets-1:p<0&&(p=0)),B=Math.max(h-p,0),O=B+(Math.min(s.length,n.dynamicMainBullets)-1),$=(O+B)/2),s.forEach(P=>{const I=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(_=>`${n.bulletActiveClass}${_}`)].map(_=>typeof _=="string"&&_.includes(" ")?_.split(" "):_).flat();P.classList.remove(...I)}),f.length>1)s.forEach(P=>{const I=V(P);I===h?P.classList.add(...n.bulletActiveClass.split(" ")):e.isElement&&P.setAttribute("part","bullet"),n.dynamicBullets&&(I>=B&&I<=O&&P.classList.add(...`${n.bulletActiveClass}-main`.split(" ")),I===B&&o(P,"prev"),I===O&&o(P,"next"))});else{const P=s[h];if(P&&P.classList.add(...n.bulletActiveClass.split(" ")),e.isElement&&s.forEach((I,_)=>{I.setAttribute("part",_===h?"bullet-active":"bullet")}),n.dynamicBullets){const I=s[B],_=s[O];for(let N=B;N<=O;N+=1)s[N]&&s[N].classList.add(...`${n.bulletActiveClass}-main`.split(" "));o(I,"prev"),o(_,"next")}}if(n.dynamicBullets){const P=Math.min(s.length,n.dynamicMainBullets+4),I=(u*P-u)/2-$*u,_=t?"right":"left";s.forEach(N=>{N.style[e.isHorizontal()?_:"top"]=`${I}px`})}}f.forEach((s,B)=>{if(n.type==="fraction"&&(s.querySelectorAll(H(n.currentClass)).forEach(O=>{O.textContent=n.formatFractionCurrent(h+1)}),s.querySelectorAll(H(n.totalClass)).forEach(O=>{O.textContent=n.formatFractionTotal(S)})),n.type==="progressbar"){let O;n.progressbarOpposite?O=e.isHorizontal()?"vertical":"horizontal":O=e.isHorizontal()?"horizontal":"vertical";const $=(h+1)/S;let P=1,I=1;O==="horizontal"?P=$:I=$,s.querySelectorAll(H(n.progressbarFillClass)).forEach(_=>{_.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${I})`,_.style.transitionDuration=`${e.params.speed}ms`})}n.type==="custom"&&n.renderCustom?(s.innerHTML=n.renderCustom(e,h+1,S),B===0&&r("paginationRender",s)):(B===0&&r("paginationRender",s),r("paginationUpdate",s)),e.params.watchOverflow&&e.enabled&&s.classList[e.isLocked?"add":"remove"](n.lockClass)})}function C(){const t=e.params.pagination;if(b())return;const n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let f=e.pagination.el;f=i(f);let h="";if(t.type==="bullets"){let w=e.params.loop?Math.ceil(n/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&w>n&&(w=n);for(let T=0;T<w;T+=1)t.renderBullet?h+=t.renderBullet.call(e,T,t.bulletClass):h+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?h=t.renderFraction.call(e,t.currentClass,t.totalClass):h=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?h=t.renderProgressbar.call(e,t.progressbarFillClass):h=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],f.forEach(w=>{t.type!=="custom"&&(w.innerHTML=h||""),t.type==="bullets"&&e.pagination.bullets.push(...w.querySelectorAll(H(t.bulletClass)))}),t.type!=="custom"&&r("paginationRender",f[0])}function L(){e.params.pagination=ae(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let n;typeof t.el=="string"&&e.isElement&&(n=e.el.querySelector(t.el)),!n&&typeof t.el=="string"&&(n=[...document.querySelectorAll(t.el)]),n||(n=t.el),!(!n||n.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(n)&&n.length>1&&(n=[...e.el.querySelectorAll(t.el)],n.length>1&&(n=n.filter(f=>oe(f,".swiper")[0]===e.el)[0])),Array.isArray(n)&&n.length===1&&(n=n[0]),Object.assign(e.pagination,{el:n}),n=i(n),n.forEach(f=>{t.type==="bullets"&&t.clickable&&f.classList.add(...(t.clickableClass||"").split(" ")),f.classList.add(t.modifierClass+t.type),f.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(f.classList.add(`${t.modifierClass}${t.type}-dynamic`),p=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&f.classList.add(t.progressbarOppositeClass),t.clickable&&f.addEventListener("click",v),e.enabled||f.classList.add(t.lockClass)}))}function g(){const t=e.params.pagination;if(b())return;let n=e.pagination.el;n&&(n=i(n),n.forEach(f=>{f.classList.remove(t.hiddenClass),f.classList.remove(t.modifierClass+t.type),f.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(f.classList.remove(...(t.clickableClass||"").split(" ")),f.removeEventListener("click",v))})),e.pagination.bullets&&e.pagination.bullets.forEach(f=>f.classList.remove(...t.bulletActiveClass.split(" ")))}l("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:n}=e.pagination;n=i(n),n.forEach(f=>{f.classList.remove(t.horizontalClass,t.verticalClass),f.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),l("init",()=>{e.params.pagination.enabled===!1?y():(L(),C(),E())}),l("activeIndexChange",()=>{typeof e.snapIndex>"u"&&E()}),l("snapIndexChange",()=>{E()}),l("snapGridLengthChange",()=>{C(),E()}),l("destroy",()=>{g()}),l("enable disable",()=>{let{el:t}=e.pagination;t&&(t=i(t),t.forEach(n=>n.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),l("lock unlock",()=>{E()}),l("click",(t,n)=>{const f=n.target,h=i(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&h&&h.length>0&&!f.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&f===e.navigation.nextEl||e.navigation.prevEl&&f===e.navigation.prevEl))return;const w=h[0].classList.contains(e.params.pagination.hiddenClass);r(w===!0?"paginationShow":"paginationHide"),h.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const m=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=i(t),t.forEach(n=>n.classList.remove(e.params.pagination.paginationDisabledClass))),L(),C(),E()},y=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=i(t),t.forEach(n=>n.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:m,disable:y,render:C,update:E,init:L,destroy:g})}function Be(a){let{swiper:e,extendParams:c,on:l,emit:r,params:d}=a;e.autoplay={running:!1,paused:!1,timeLeft:0},c({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,p,i=d&&d.autoplay?d.autoplay.delay:3e3,b=d&&d.autoplay?d.autoplay.delay:3e3,o,v=new Date().getTime,E,C,L,g,m,y;function t(x){!e||e.destroyed||!e.wrapperEl||x.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",t),s())}const n=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?E=!0:E&&(b=o,E=!1);const x=e.autoplay.paused?o:v+b-new Date().getTime();e.autoplay.timeLeft=x,r("autoplayTimeLeft",x,x/i),p=requestAnimationFrame(()=>{n()})},f=()=>{let x;return e.virtual&&e.params.virtual.enabled?x=e.slides.filter(z=>z.classList.contains("swiper-slide-active"))[0]:x=e.slides[e.activeIndex],x?parseInt(x.getAttribute("data-swiper-autoplay"),10):void 0},h=x=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(p),n();let D=typeof x>"u"?e.params.autoplay.delay:x;i=e.params.autoplay.delay,b=e.params.autoplay.delay;const z=f();!Number.isNaN(z)&&z>0&&typeof x>"u"&&(D=z,i=z,b=z),o=D;const F=e.params.speed,U=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(F,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,F,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(F,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,F,!0,!0),r("autoplay")),e.params.cssMode&&(v=new Date().getTime(),requestAnimationFrame(()=>{h()})))};return D>0?(clearTimeout(u),u=setTimeout(()=>{U()},D)):requestAnimationFrame(()=>{U()}),D},w=()=>{e.autoplay.running=!0,h(),r("autoplayStart")},T=()=>{e.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(p),r("autoplayStop")},S=(x,D)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(u),x||(y=!0);const z=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",t):s()};if(e.autoplay.paused=!0,D){m&&(o=e.params.autoplay.delay),m=!1,z();return}o=(o||e.params.autoplay.delay)-(new Date().getTime()-v),!(e.isEnd&&o<0&&!e.params.loop)&&(o<0&&(o=0),z())},s=()=>{e.isEnd&&o<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(v=new Date().getTime(),y?(y=!1,h(o)):h(),e.autoplay.paused=!1,r("autoplayResume"))},B=()=>{if(e.destroyed||!e.autoplay.running)return;const x=q();x.visibilityState==="hidden"&&(y=!0,S(!0)),x.visibilityState==="visible"&&s()},O=x=>{x.pointerType==="mouse"&&(y=!0,!(e.animating||e.autoplay.paused)&&S(!0))},$=x=>{x.pointerType==="mouse"&&e.autoplay.paused&&s()},P=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",O),e.el.addEventListener("pointerleave",$))},I=()=>{e.el.removeEventListener("pointerenter",O),e.el.removeEventListener("pointerleave",$)},_=()=>{q().addEventListener("visibilitychange",B)},N=()=>{q().removeEventListener("visibilitychange",B)};l("init",()=>{e.params.autoplay.enabled&&(P(),_(),v=new Date().getTime(),w())}),l("destroy",()=>{I(),N(),e.autoplay.running&&T()}),l("beforeTransitionStart",(x,D,z)=>{e.destroyed||!e.autoplay.running||(z||!e.params.autoplay.disableOnInteraction?S(!0,!0):T())}),l("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){T();return}C=!0,L=!1,y=!1,g=setTimeout(()=>{y=!0,L=!0,S(!0)},200)}}),l("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!C)){if(clearTimeout(g),clearTimeout(u),e.params.autoplay.disableOnInteraction){L=!1,C=!1;return}L&&e.params.cssMode&&s(),L=!1,C=!1}}),l("slideChange",()=>{e.destroyed||!e.autoplay.running||(m=!0)}),Object.assign(e.autoplay,{start:w,stop:T,pause:S,resume:s})}export{Be as A,we as N,xe as P,Ee as S,Ce as a};