import{g as T,h as E,i as U,j as D}from"../modules/unplugin-icons-CEVVtt1k.js";import{d as H,t as b,B as I,z as u,E as L,o as p,b as V,e as o,h as y,I as l,l as s,k as _,c as C,x as z,F as j}from"../modules/vue-CT7_GqGF.js";import{u as M,a as P,s as t,b as R,f as q}from"../index-QE498Oqk.js";import{b as A}from"../monaco/bundled-types-Dmg8P91O.js";import{_ as G,C as J}from"./ClicksSlider-CYxWqdO7.js";import{_ as d}from"./IconButton.vue_vue_type_script_setup_true_lang-CI2ZSPcB.js";import"../modules/shiki-m1y2Idvz.js";import"../modules/file-saver-igGfcqei.js";const K={class:"h-full pt-2 flex flex-col"},O={class:"flex-none border-t border-main",px3:"",py2:""},Q={class:"flex-none border-t border-main"},W={class:"flex gap-1 items-center px-6 py-3"},X={class:"p2 text-center"},ce=H({__name:"notes",setup(Y){M({title:`Notes - ${A}`});const{slides:w,total:m}=P(),{isFullscreen:f,toggle:S}=q,v=b(),n=I("slidev-notes-font-size",18),a=u(()=>{var e;return((e=t.lastUpdate)==null?void 0:e.type)==="viewer"?t.viewerPage:t.page}),x=u(()=>w.value.find(e=>e.no===a.value));L(a,()=>{var e;(e=v.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function $(){n.value=n.value+1}function B(){n.value=n.value-1}const k=u(()=>{var i,r;const e=((i=t.lastUpdate)==null?void 0:i.type)==="viewer"?t.viewerClicks:t.clicks,c=((r=t.lastUpdate)==null?void 0:r.type)==="viewer"?t.viewerClicksTotal:t.clicksTotal;return R(b(e),void 0,c)});return(e,c)=>{var h,g;const i=U,r=D,F=T,N=E;return p(),V(j,null,[o("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:y({width:`${(a.value-1)/(l(m)-1)*100+1}%`})},null,4),o("div",K,[o("div",{ref_key:"scroller",ref:v,class:"px-5 flex-auto h-full overflow-auto",style:y({fontSize:`${l(n)}px`})},[s(G,{note:(h=x.value)==null?void 0:h.meta.slide.note,"note-html":(g=x.value)==null?void 0:g.meta.slide.noteHTML,placeholder:`No notes for Slide ${a.value}.`,"clicks-context":k.value,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),o("div",O,[s(J,{"clicks-context":k.value,readonly:""},null,8,["clicks-context"])]),o("div",Q,[o("div",W,[s(d,{title:l(f)?"Close fullscreen":"Enter fullscreen",onClick:l(S)},{default:_(()=>[l(f)?(p(),C(i,{key:0})):(p(),C(r,{key:1}))]),_:1},8,["title","onClick"]),s(d,{title:"Increase font size",onClick:$},{default:_(()=>[s(F)]),_:1}),s(d,{title:"Decrease font size",onClick:B},{default:_(()=>[s(N)]),_:1}),c[0]||(c[0]=o("div",{class:"flex-auto"},null,-1)),o("div",X,z(a.value)+" / "+z(l(m)),1)])])])],64)}}});export{ce as default};
