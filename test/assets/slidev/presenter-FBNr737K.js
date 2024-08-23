import{g as j,h as G,k as H,l as q}from"../modules/unplugin-icons-DLmkOyLZ.js";import{d as E,o,c,i as M,B as e,t as z,z as C,E as N,R as K,O,K as A,ah as J,a5 as Q,b as k,e as t,l as s,k as b,h as F,g as U,x as X,F as Y,p as Z,a as ee}from"../modules/vue-B03c_Ivc.js";import{a as te,u as se,h as oe,c as ne,d as ae,j as re,s as ie,k as le,l as ce,m as ue,n as de,o as _e,_ as pe}from"../index-D1sfVxA4.js";import{r as me,u as fe,a as xe,S as ve,_ as he,G as ke,b as be,c as ge,o as ye}from"./useWakeLock-D5Oc9WWE.js";import{b as Ce,c as Se,a as B,S as we}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-BgRERyem.js";import{_ as $e,C as ze}from"./ClicksSlider-Fhj6muzO.js";import{_ as Ne}from"./DrawingControls.vue_vue_type_style_index_0_lang-BErypq0Z.js";import{_ as I}from"./IconButton.vue_vue_type_script_setup_true_lang-ClhDPtQg.js";import"../modules/shiki-D6VyeOrD.js";import"./context-CNOhy2vY.js";const Fe=E({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(i){const l=i,{info:r}=Ce(l.no);return(u,m)=>{var f,x;return o(),c($e,{class:M(l.class),note:(f=e(r))==null?void 0:f.note,"note-html":(x=e(r))==null?void 0:x.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),g=i=>(Z("data-v-aba0fb80"),i=i(),ee(),i),Be={class:"bg-main h-full slidev-presenter"},Ie=g(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),Ee={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Me={key:1,class:"h-full flex justify-center items-center"},Pe=g(()=>t("div",{class:"text-gray-500"}," End of the presentation ",-1)),Re=[Pe],De=g(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Te={key:0,class:"grid-section note of-auto"},Le={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ve={class:"border-t border-main py-1 px-2 text-sm"},We={class:"grid-section bottom flex"},je=g(()=>t("div",{"flex-auto":""},null,-1)),Ge={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He={class:"progress-bar"},qe=E({__name:"presenter",setup(i){const l=z();me(),fe(l),xe();const{clicksContext:r,currentSlideNo:u,currentSlideRoute:m,hasNext:f,nextRoute:x,slides:P,getPrimaryClicks:R,total:D}=te(),{isDrawing:T}=Se();se({title:`Presenter - ${ie}`}),z(!1);const{timer:L,resetTimer:S}=oe(),V=C(()=>P.value.map(h=>ne(h))),n=C(()=>r.value.current<r.value.total?[m.value,r.value.current+1]:f.value?[x.value,0]:null),v=C(()=>n.value&&V.value[n.value[0].no-1]);N(n,()=>{v.value&&n.value&&(v.value.current=n.value[1])},{immediate:!0});const w=K();return O(()=>{const h=l.value.querySelector("#slide-content"),d=A(J()),y=Q();N(()=>{if(!y.value||T.value||!re.value)return;const a=h.getBoundingClientRect(),_=(d.x-a.left)/a.width*100,p=(d.y-a.top)/a.height*100;if(!(_<0||_>100||p<0||p>100))return{x:_,y:p}},a=>{ae.cursor=a})}),(h,d)=>{var $;const y=j,a=G,_=H,p=q;return o(),k(Y,null,[t("div",Be,[t("div",{class:M(["grid-container",`layout${e(le)}`])},[t("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col"},[s(B,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(ye)},{default:b(()=>[s(ve,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(o(),c(ze,{key:($=e(m))==null?void 0:$.no,"clicks-context":e(R)(e(m)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Ie],512),t("div",Ee,[n.value&&v.value?(o(),c(B,{key:"next"},{default:b(()=>[(o(),c(we,{key:n.value[0].no,"clicks-context":v.value,route:n.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(o(),k("div",Me,Re)),De]),w.value&&e(ce)?(o(),k("div",Te,[s(e(w))])):(o(),k("div",Le,[(o(),c(Fe,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:F({fontSize:`${e(ue)}em`}),"clicks-context":e(r)},null,8,["no","style","clicks-context"])),t("div",Ve,[s(I,{title:"Increase font size",onClick:e(de)},{default:b(()=>[s(y)]),_:1},8,["onClick"]),s(I,{title:"Decrease font size",onClick:e(_e)},{default:b(()=>[s(a)]),_:1},8,["onClick"]),U("",!0)])])),t("div",We,[s(he,{persist:!0}),je,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:d[2]||(d[2]=(...W)=>e(S)&&e(S)(...W))},[s(_,{class:"absolute"}),s(p,{class:"absolute opacity-0"})]),t("div",Ge,X(e(L)),1)]),(o(),c(Ne,{key:2}))],2),t("div",He,[t("div",{class:"progress h-3px bg-primary transition-all",style:F({width:`${(e(u)-1)/(e(D)-1)*100+1}%`})},null,4)])]),s(ke),s(be),s(ge)],64)}}}),tt=pe(qe,[["__scopeId","data-v-aba0fb80"]]);export{tt as default};
