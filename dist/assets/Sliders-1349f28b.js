import{x as y,y as _,z as U,r as f,a as m,o as w,c as k,d as n,w as p,q as g,t,m as l,b as o,n as c}from"./index-c2d77b22.js";const I={class:"sliders grid grid-cols-12 gap-6"},C={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},P={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},B={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},M={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},N={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},z={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},A={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},S={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},q={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},D={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},E={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},T={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},j={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},F={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},G={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},H={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},J={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},K={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},L={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},O={class:"flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2"},X=y({setup(Q){const{t:s}=_(),{colors:u}=U(),i=f(90),d=f([20,60]);return(R,e)=>{const b=m("va-card-title"),r=m("va-slider"),v=m("va-input"),V=m("va-card-content"),x=m("va-card");return w(),k("div",I,[n(x,{class:"col-span-12"},{default:p(()=>[n(b,null,{default:p(()=>[g(t(l(s)("sliders.slider")),1)]),_:1}),n(V,{class:"grid grid-cols-12 gap-6"},{default:p(()=>[o("div",C,[o("div",{class:"title mb-4",style:c({color:l(u).primary})},t(l(s)("sliders.simple")),5),n(r,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=a=>i.value=a)},null,8,["modelValue"])]),o("div",P,[o("div",{class:"title mb-4",style:c({color:l(u).danger})},t(l(s)("sliders.value")),5),n(r,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=a=>i.value=a),color:"danger","track-label-visible":""},null,8,["modelValue"])]),o("div",B,[o("div",{class:"title mb-4",style:c({color:l(u).info})},t(l(s)("sliders.label")),5),n(r,{modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=a=>i.value=a),label:l(s)("sliders.label"),color:"info","track-label-visible":""},null,8,["modelValue","label"])]),o("div",M,[o("div",{class:"title mb-4",style:c({color:l(u).warning})},t(l(s)("sliders.label")),5),n(r,{modelValue:i.value,"onUpdate:modelValue":e[3]||(e[3]=a=>i.value=a),label:l(s)("sliders.label"),"invert-label":"",color:"warning","track-label-visible":""},null,8,["modelValue","label"])]),o("div",N,[o("div",{class:"title mb-4",style:c({color:l(u).primary})},t(l(s)("sliders.labelPlusIcon")),5),n(r,{modelValue:i.value,"onUpdate:modelValue":e[4]||(e[4]=a=>i.value=a),label:l(s)("sliders.label"),"icon-append":"music"},null,8,["modelValue","label"])]),o("div",z,[o("div",{class:"title mb-4",style:c({color:l(u).danger})},t(l(s)("sliders.labelPlusIcon")),5),n(r,{modelValue:i.value,"onUpdate:modelValue":e[5]||(e[5]=a=>i.value=a),color:"danger",label:l(s)("sliders.label"),"invert-label":"","icon-prepend":"music","track-label-visible":""},null,8,["modelValue","label"])]),o("div",A,[o("div",{class:"title mb-4",style:c({color:l(u).primary})},t(l(s)("sliders.pins")),5),n(r,{modelValue:i.value,"onUpdate:modelValue":e[6]||(e[6]=a=>i.value=a),pins:"",step:20},null,8,["modelValue"])]),o("div",S,[o("div",{class:"title title--warning mb-4",style:c({color:l(u).warning})},t(l(s)("sliders.pinsAndValue")),5),n(r,{modelValue:i.value,"onUpdate:modelValue":e[7]||(e[7]=a=>i.value=a),pins:"",step:10,color:"warning","track-label-visible":""},null,8,["modelValue"])]),o("div",q,[o("div",{class:"title mb-4",style:c({color:l(u).primary})},t(l(s)("sliders.withInput")),5),n(r,{modelValue:i.value,"onUpdate:modelValue":e[9]||(e[9]=a=>i.value=a),"track-label-visible":""},{prepend:p(()=>[n(v,{modelValue:i.value,"onUpdate:modelValue":e[8]||(e[8]=a=>i.value=a),modelModifiers:{number:!0},style:{width:"70px"},type:"number"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),o("div",D,[o("div",{class:"title mb-4",style:c({color:l(u).info})},t(l(s)("sliders.withIcons")),5),n(r,{modelValue:i.value,"onUpdate:modelValue":e[10]||(e[10]=a=>i.value=a),color:"info","icon-prepend":"volume_off","icon-append":"volume_up","track-label-visible":""},null,8,["modelValue"])])]),_:1})]),_:1}),n(x,{class:"col-span-12"},{default:p(()=>[n(b,null,{default:p(()=>[g(t(l(s)("sliders.range")),1)]),_:1}),n(V,{class:"grid grid-cols-12 gap-6"},{default:p(()=>[o("div",E,[o("div",{class:"title mb-4",style:c({color:l(u).primary})},t(l(s)("sliders.simple")),5),n(r,{modelValue:d.value,"onUpdate:modelValue":e[11]||(e[11]=a=>d.value=a),range:""},null,8,["modelValue"])]),o("div",T,[o("div",{class:"title mb-4",style:c({color:l(u).danger})},t(l(s)("sliders.value")),5),n(r,{modelValue:d.value,"onUpdate:modelValue":e[12]||(e[12]=a=>d.value=a),range:"",color:"danger","track-label-visible":""},null,8,["modelValue"])]),o("div",j,[o("div",{class:"title mb-4",style:c({color:l(u).info})},t(l(s)("sliders.label")),5),n(r,{modelValue:d.value,"onUpdate:modelValue":e[13]||(e[13]=a=>d.value=a),range:"",label:l(s)("sliders.label"),color:"info","track-label-visible":""},null,8,["modelValue","label"])]),o("div",F,[o("div",{class:"title mb-4",style:c({color:l(u).warning})},t(l(s)("sliders.label")),5),n(r,{modelValue:d.value,"onUpdate:modelValue":e[14]||(e[14]=a=>d.value=a),range:"",label:l(s)("sliders.label"),"invert-label":"",color:"warning","track-label-visible":""},null,8,["modelValue","label"])]),o("div",G,[o("div",{class:"title mb-4",style:c({color:l(u).primary})},t(l(s)("sliders.labelPlusIcon")),5),n(r,{modelValue:d.value,"onUpdate:modelValue":e[15]||(e[15]=a=>d.value=a),range:"",label:l(s)("sliders.label"),"icon-append":"music"},null,8,["modelValue","label"])]),o("div",H,[o("div",{class:"title mb-4",style:c({color:l(u).danger})},t(l(s)("sliders.labelPlusIcon")),5),n(r,{modelValue:d.value,"onUpdate:modelValue":e[16]||(e[16]=a=>d.value=a),range:"",color:"danger",label:l(s)("sliders.label"),"icon-prepend":"music","invert-label":"","track-label-visible":""},null,8,["modelValue","label"])]),o("div",J,[o("div",{class:"title mb-4",style:c({color:l(u).primary})},t(l(s)("sliders.pins")),5),n(r,{modelValue:d.value,"onUpdate:modelValue":e[17]||(e[17]=a=>d.value=a),range:"",pins:"",step:20},null,8,["modelValue"])]),o("div",K,[o("div",{class:"title title--warning mb-4",style:c({color:l(u).warning})},t(l(s)("sliders.pinsAndValue")),5),n(r,{modelValue:d.value,"onUpdate:modelValue":e[18]||(e[18]=a=>d.value=a),range:"",pins:"",step:10,color:"warning","track-label-visible":""},null,8,["modelValue"])]),o("div",L,[o("div",{class:"title mb-4",style:c({color:l(u).primary})},t(l(s)("sliders.withInput")),5),n(r,{modelValue:d.value,"onUpdate:modelValue":e[21]||(e[21]=a=>d.value=a),range:"","track-label-visible":""},{prepend:p(()=>[n(v,{modelValue:d.value[0],"onUpdate:modelValue":e[19]||(e[19]=a=>d.value[0]=a),modelModifiers:{number:!0},style:{width:"70px"},type:"number"},null,8,["modelValue"])]),append:p(()=>[n(v,{modelValue:d.value[1],"onUpdate:modelValue":e[20]||(e[20]=a=>d.value[1]=a),modelModifiers:{number:!0},style:{width:"70px"},type:"number"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),o("div",O,[o("div",{class:"title mb-4",style:c({color:l(u).info})},t(l(s)("sliders.withIcons")),5),n(r,{modelValue:d.value,"onUpdate:modelValue":e[22]||(e[22]=a=>d.value=a),range:"",color:"info","icon-prepend":"volume_off","icon-append":"volume_up","track-label-visible":""},null,8,["modelValue"])])]),_:1})]),_:1})])}}});export{X as default};