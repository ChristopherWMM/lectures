import{_ as w}from"./VClick-DanBJHO6.js";import{d as y,t as L,S as B,G as E,U as P,v as d,av as K,o as O,c as M,k as r,l as N,aa as m,q as F,s as G,I as x,e as _}from"../modules/vue-BWpDFgbh.js";import{t as U}from"../modules/shiki-CYlLUlRT.js";import{u as b,f as j}from"./context-C7dtzxpO.js";import{Z as z,C as D,$ as q,a0 as X,a1 as Y,a2 as Z,a3 as H,M as T}from"../index-Cqg3N0e3.js";import{_ as J}from"./iframe-right.vue_vue_type_script_setup_true_lang-31CixELs.js";import"../monaco/bundled-types-8JGFrJsO.js";import"../modules/file-saver-igGfcqei.js";const Q=y({props:{at:{type:[Number,String],default:"+1"},unmount:{type:Boolean,default:!1},transition:{type:[Object,String,Boolean],default:!1},tag:{type:String,default:"div"},childTag:{type:String,default:"div"}},setup({at:v,unmount:C,transition:f,tag:l,childTag:S},{slots:h}){const g=Object.entries(h).sort((t,e)=>-t[0].split("-")[0]+ +e[0].split("-")[0]),n=[];let c;for(const[t,e]of g){const o=L();if(Number.isFinite(+t))n.push([+t,c??+t+1,e,o]),c=+t;else{const[a,i]=t.split("-").map(Number);if(!Number.isFinite(a)||!Number.isFinite(i))throw new Error(`Invalid range for v-switch: ${t}`);n.push([a,i,e,o]),c=a}}const k=Math.max(...n.map(t=>t[1]))-1,u=z(),s=L(0),{$clicksContext:p,$nav:A}=b();B(()=>{const t=p.calculateSince(v,k);if(!t){s.value=D;return}p.register(u,t),E(()=>{s.value=t.currentOffset.value+1})}),P(()=>{p.unregister(u)});function R(){T.value=!0,U()}const $=f&&{...q(f,A.value.navDirection<0),tag:l,onAfterLeave:R};return()=>{const t=[];for(let e=n.length-1;e>=0;e--){const[o,a,i,V]=n[e],I=o<=s.value&&s.value<a;C&&!I||t.push(d(S,{key:e,ref:V,class:[X,s.value===o&&Y,s.value>=a&&Z,!I&&H].filter(Boolean),"data-slidev-clicks-start":o,"data-slidev-clicks-end":a},i==null?void 0:i()))}return $?d(K,T.value?{}:$,()=>t):d(l,t)}}}),W=_("h1",null,"Slidev is fun! 😄",-1),tt=_("h1",null,[m("Slidev is "),_("em",null,"not"),m(" fun! 😡")],-1),et=_("h1",null,"Slidev is fun! 😅",-1),st={__name:"slides.md__slidev_3",setup(v){const{$slidev:C,$nav:f,$clicksContext:l,$clicks:S,$page:h,$renderContext:g,$frontmatter:n}=b();return l.setup(),(c,k)=>{const u=Q,s=w;return O(),M(J,F(G(x(j)(x(n),2))),{default:r(()=>[N(u,null,{1:r(()=>[W]),2:r(()=>[tt]),3:r(()=>[et]),_:1}),N(s,null,{default:r(()=>[m("🐤")]),_:1})]),_:1},16)}}},_t=st;export{_t as default};
