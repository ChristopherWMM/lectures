import{f as _,a4 as u,e as a,g as t,t as o,a1 as c,F as f,ak as h,z as g,o as s,ae as v,d as x,j as b}from"../modules/vue-BeG8mkn0.js";import{a as k,u as y}from"../index-DahL5ihU.js";import{a as m}from"../monaco/bundled-types-BoRlewPp.js";import{_ as N}from"./NoteDisplay.vue_vue_type_style_index_0_lang-BRdG2dXb.js";import"../modules/shiki-d3XL0viM.js";import"../modules/file-saver-C8QSpN-3.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},j={class:"opacity-50"},z={key:0,class:"border-main mb-8"},W=_({__name:"print",setup(C){const{slides:d,total:p}=k();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const i=g(()=>d.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==""));return(e,n)=>(s(),a("div",w,[t("div",L,[t("div",T,[t("h1",V,o(c(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(s(!0),a(f,null,h(i.value,(l,r)=>(s(),a("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",j,o(l?.no)+"/"+o(c(p)),1),v(" "+o(l?.title)+" ",1),n[0]||(n[0]=t("div",{class:"flex-auto"},null,-1))])]),x(N,{"note-html":l.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(s(),a("hr",z)):b("v-if",!0)]))),128))])]))}});export{W as default};
