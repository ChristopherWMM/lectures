const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-DQLsnakz.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-DFMghSpC.js","assets/modules/unplugin-icons-DLmkOyLZ.js","assets/modules/vue-B03c_Ivc.js","assets/modules/shiki-D6VyeOrD.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-BXWHGZTn.js","assets/index-Cw6woU2B.js","assets/index-CfcUbi7S.css","assets/DrawingPreview-Cu20KZhX.css","assets/slidev/useWakeLock-Dz4P1mDE.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-ClhDPtQg.js","assets/slidev/context-CAcN18hL.js","assets/useWakeLock-Dgwxzjge.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as v,ab as z,o as s,c as u,B as e,b as f,e as n,f as N,i as C,g as r,ai as R,z as E,k as h,aj as $,aa as B,R as y,l as m,F as M,x as D,v as W,h as A,t as H}from"../modules/vue-B03c_Ivc.js";import{v as k,a as P,w as I,x as b,y as w,z as L,A as T,d as V,B as O,l as S,D as U,E as j}from"../index-Cw6woU2B.js";import{b as F,G,c as K,u as X,r as Y,a as q,S as J,_ as Q,o as Z}from"./useWakeLock-Dz4P1mDE.js";import{c as ee,a as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-BXWHGZTn.js";import{n as se}from"../modules/unplugin-icons-DLmkOyLZ.js";import"../modules/shiki-D6VyeOrD.js";import"./IconButton.vue_vue_type_script_setup_true_lang-ClhDPtQg.js";import"./context-CAcN18hL.js";const oe="/lectures/test/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:i}){const a=p,l=z(a,"modelValue",i);function d(){l.value=!1}return(_,o)=>(s(),u(R,null,[e(l)?(s(),f("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=c=>d())}),n("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[N(_.$slots,"default")],2)])):r("",!0)],1024))}}),ne={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},re=["innerHTML"],ie=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:oe,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),B("dev ")])])],-1),ue=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:i}){const l=z(p,"modelValue",i),d=E(()=>typeof k.info=="string");return(_,o)=>(s(),u(le,{modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=c=>$(l)?l.value=c:null),class:"px-6 py-4"},{default:h(()=>[n("div",ne,[d.value?(s(),f("div",{key:0,class:"mb-4",innerHTML:e(k).info},null,8,re)):r("",!0),ie])]),_:1},8,["modelValue"]))}}),de=v({__name:"Controls",setup(p){const{isEmbedded:i}=P(),a=!k.drawings.presenterOnly&&!i.value,t=y();a&&I(()=>import("./DrawingControls-DQLsnakz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(_=>t.value=_.default);const l=y(),d=y();return(_,o)=>(s(),f(M,null,[e(a)&&t.value?(s(),u(e(t),{key:0})):r("",!0),m(F),m(G),l.value?(s(),u(e(l),{key:1})):r("",!0),d.value?(s(),u(e(d),{key:2,modelValue:e(b),"onUpdate:modelValue":o[0]||(o[0]=c=>$(b)?b.value=c:null)},null,8,["modelValue"])):r("",!0),e(k).info?(s(),u(ue,{key:3,modelValue:e(w),"onUpdate:modelValue":o[1]||(o[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):r("",!0),m(K)],64))}}),ce=v({__name:"PrintStyle",setup(p){function i(a,{slots:t}){if(t.default)return W("style",t.default())}return(a,t)=>(s(),u(i,null,{default:h(()=>[B(" @page { size: "+D(e(L))+"px "+D(e(T))+"px; margin: 0px; } ",1)]),_:1}))}}),me={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},pe=v({__name:"PresenterMouse",setup(p){return(i,a)=>{const t=se;return e(V).cursor?(s(),f("div",me,[m(t,{class:"absolute stroke-white dark:stroke-black",style:A({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):r("",!0)}}}),_e=n("div",{id:"twoslash-container"},null,-1),we=v({__name:"play",setup(p){const{next:i,prev:a,isPrintMode:t}=P(),{isDrawing:l}=ee(),d=H();function _(g){var x;S.value||g.button===0&&((x=g.target)==null?void 0:x.id)==="slide-container"&&(g.pageX/window.innerWidth>.5?i():a())}X(d),Y(),q();const o=E(()=>O.value||S.value),c=y();return(g,x)=>(s(),f(M,null,[e(t)?(s(),u(ce,{key:0})):r("",!0),n("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(U).width.value:void 0,"is-main":"",onPointerdown:_,onContextmenu:e(Z)},{default:h(()=>[m(J,{"render-context":"slide"}),m(pe)]),controls:h(()=>[e(t)?r("",!0):(s(),f("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[m(Q,{persist:o.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(s(),u(e(c),{key:0,resize:!0})):r("",!0)],2),e(t)?r("",!0):(s(),u(de,{key:1})),_e],64))}});export{we as default};
