import{d as te,e as ne,_ as oe,f as le}from"../modules/unplugin-icons-BHSvTxmO.js";import{d as J,ab as ie,ac as ae,t as T,ad as se,E as U,G as ce,a4 as re,n as Q,I as c,o as i,c as g,i as S,h as K,ae as ue,af as de,b,j as me,O as pe,z as O,V as fe,S as ve,e as s,F as j,ag as q,k as N,x as y,g as B,l as w}from"../modules/vue-BWpDFgbh.js";import{u as he,a as ge,c as ke,C as G,g as X}from"../index-BMPHPW9a.js";import{b as _e,i as be,f as W,g as xe,p as ye}from"../monaco/bundled-types-8JGFrJsO.js";import{u as we,S as Ce,_ as $e,a as De}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-qMc1siLd.js";import{_ as z}from"./IconButton.vue_vue_type_script_setup_true_lang-NYWox3s0.js";import{_ as Se,C as Ee}from"./ClicksSlider-aU2abTse.js";import"../modules/shiki-CYlLUlRT.js";import"../modules/file-saver-igGfcqei.js";const Me=["placeholder"],He=J({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},highlight:{default:!0},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(C,{emit:A}){const o=C,x=A,r=ie(o,"editing",x,{passive:!0}),{info:v,update:$}=we(ae(o,"no")),p=T("");let E;const{ignoreUpdates:k}=se(p,a=>{if(!r.value)return;const m=o.no;clearTimeout(E),E=setTimeout(()=>{$({note:a},m)},500)});U(()=>{var a;return(a=v.value)==null?void 0:a.note},(a="")=>{r.value||(clearTimeout(E),k(()=>{p.value=a}))},{immediate:!0,flush:"sync"});const d=T(),_=T();ce(()=>{var a;r.value&&((a=d.value)==null||a.focus())}),re(d,()=>{r.value=!1});function I(){!o.autoHeight||!d.value||!r.value||d.value.scrollHeight>d.value.clientHeight&&(d.value.style.height=`${d.value.scrollHeight}px`)}function L(a){r.value&&a.metaKey&&a.key==="s"&&(a.preventDefault(),$({note:p.value},o.no))}return U([p,r],()=>{Q(()=>{I()})},{flush:"post",immediate:!0}),(a,m)=>{var M;return c(r)?ue((i(),b("textarea",{key:1,ref_key:"inputEl",ref:d,"onUpdate:modelValue":m[2]||(m[2]=h=>p.value=h),class:S(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",o.class]),style:K([{"line-height":"1.75"},[o.style,_.value!=null?{height:`${_.value}px`}:{}]]),placeholder:C.placeholder,onKeydown:[m[3]||(m[3]=me(h=>r.value=!1,["esc"])),L]},null,46,Me)),[[de,p.value]]):(i(),g(Se,{key:0,class:S(["border-transparent border-2",[o.class,p.value?"":"opacity-25 italic select-none"]]),style:K(o.style),note:p.value||C.placeholder,"note-html":(M=c(v))==null?void 0:M.noteHTML,"clicks-context":C.clicksContext,"auto-scroll":!C.autoHeight,highlight:o.highlight,onMarkerClick:m[0]||(m[0]=(h,H)=>x("markerClick",h,H)),onMarkerDblclick:m[1]||(m[1]=(h,H)=>x("markerDblclick",h,H))},null,8,["class","style","note","note-html","clicks-context","auto-scroll","highlight"]))}}}),Ne={class:"h-screen w-screen of-hidden flex"},Te={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},Ie={class:"relative"},Ve={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},Be=["onClick"],We={p2:"",border:"t main"},ze={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},Ke={class:"text-3xl op20 mb2"},Le=["onDblclick"],Oe={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},Re={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},Ae={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},Fe={class:"text-xs op50"},R=450,et=J({__name:"overview",setup(C){he({title:`Overview - ${_e}`});const{openInEditor:A,slides:o}=ge(),x=pe(new Map),r=T([]),v=T(null),$=O(()=>o.value.map(t=>{var e,l;return a(((l=(e=t.meta)==null?void 0:e.slide)==null?void 0:l.note)||"")})),p=O(()=>$.value.reduce((t,e)=>t+e,0)),E=O(()=>o.value.map(t=>I(t)).reduce((t,e)=>t+e,0)),k=fe(),d=new WeakMap;function _(t){return d.has(t)||d.set(t,ke(t,G)),d.get(t)}function I(t){var e,l;return((e=t.meta)==null?void 0:e.clicks)||((l=_(t))==null?void 0:l.total)}function L(t){k.value===t?k.value=void 0:k.value=t}function a(t){var e;return((e=t.match(/[\w`'\-]+/g))==null?void 0:e.length)||0}function m(t){const e=t.getBoundingClientRect(),l=20;return e.top>=0-l&&e.left>=0-l&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+l&&e.right<=(window.innerWidth||document.documentElement.clientWidth)+l}function M(){const t=[];Array.from(x.entries()).forEach(([e,l])=>{m(l)&&t.push(e)}),r.value=t}function h(t){const e=document.createElement("a");e.target="_blank",e.href=ye+t.slice(1),e.click()}function H(t){const e=x.get(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function Y(t,e,l){const D=_(l);D.current===e?D.current=G:D.current=e,t.preventDefault()}return ve(()=>{Q(()=>{M()})}),(t,e)=>{const l=te,D=ne,Z=oe,ee=le;return i(),b("div",Ne,[s("nav",Te,[s("div",Ie,[s("div",Ve,[(i(!0),b(j,null,q(c(o),(n,f)=>{var u,V,F,P;return i(),b("div",{key:n.no,class:"relative",style:{direction:"ltr"}},[s("button",{class:S(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",r.value.includes(f)?"op100 text-primary bg-gray:5":"op20"]),onClick:Pe=>H(f)},[s("div",null,y(f+1),1)],10,Be),(V=(u=n.meta)==null?void 0:u.slide)!=null&&V.title?(i(),b("div",{key:0,class:S(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",r.value.includes(f)?"text-primary":"text-main important-text-op-50"])},y((P=(F=n.meta)==null?void 0:F.slide)==null?void 0:P.title),3)):B("v-if",!0)])}),128))])]),s("div",We,[c(be)?(i(),g(z,{key:1,title:c(W)?"Dark mode":"Light mode","pointer-events-none":"",op50:""},{default:N(()=>[c(W)?(i(),g(l,{key:0})):(i(),g(D,{key:1}))]),_:1},8,["title"])):(i(),g(z,{key:0,title:c(W)?"Switch to light mode theme":"Switch to dark mode theme",onClick:e[0]||(e[0]=n=>c(xe)())},{default:N(()=>[c(W)?(i(),g(l,{key:0})):(i(),g(D,{key:1}))]),_:1},8,["title"]))])]),s("main",{class:"flex-1 h-full of-auto",style:K(`grid-template-columns: repeat(auto-fit,minmax(${R}px,1fr))`),onScroll:M},[(i(!0),b(j,null,q(c(o),(n,f)=>(i(),b("div",{key:n.no,ref_for:!0,ref:u=>x.set(f,u),class:S(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",f===0?"pt5":""])},[s("div",ze,[s("div",Ke,y(f+1),1),w(z,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:u=>h(c(X)(n,!1))},{default:N(()=>[w(Z)]),_:2},1032,["onClick"]),B("v-if",!0)]),s("div",{class:"flex flex-col gap-2 my5",style:K({width:`${R}px`})},[s("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:u=>h(c(X)(n,!1))},[(i(),g(De,{key:n.no,width:R,class:"pointer-events-none important:[&_*]:select-none"},{default:N(()=>[w(Ce,{"clicks-context":_(n),route:n,"render-context":"overview"},null,8,["clicks-context","route"]),w($e,{page:n.no},null,8,["page"])]),_:2},1024))],40,Le),I(n)?(i(),g(Ee,{key:0,active:k.value===n,"clicks-context":_(n),class:"w-full mt-2",onDblclick:u=>L(n),onClick:u=>k.value=n},null,8,["active","clicks-context","onDblclick","onClick"])):B("v-if",!0)],4),s("div",Oe,[w(z,{title:"Edit Note",class:S(["rounded-full w-9 h-9 text-sm",v.value===n.no?"important:op0":""]),onClick:u=>v.value=n.no},{default:N(()=>[w(ee)]),_:2},1032,["class","onClick"])]),w(He,{no:n.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,highlight:k.value===n,editing:v.value===n.no,"clicks-context":_(n),onDblclick:u=>v.value!==n.no?v.value=n.no:null,"onUpdate:editing":e[1]||(e[1]=u=>v.value=null),onMarkerClick:(u,V)=>Y(u,V,n)},null,8,["no","highlight","editing","clicks-context","onDblclick","onMarkerClick"]),$.value[f]>0?(i(),b("div",Re,y($.value[f])+" words ",1)):B("v-if",!0)],2))),128))],36),s("div",Ae,[s("div",Fe,y(c(o).length)+" slides · "+y(E.value+c(o).length-1)+" clicks · "+y(p.value)+" words ",1)])])}}});export{et as default};
