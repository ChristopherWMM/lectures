import{d as P,aF as E,t as b,S as j,o as i,b as p,g as S,i as m,F as B,aD as F,z as x,e,ab as n,x as y,f as _,aE as I,p as L,a as V,c as M,k as $,l as N,q,s as z,I as C}from"./modules/vue-Bx6xSt6e.js";import{u as T,f as A}from"./slidev/context-BDLpvHZo.js";import{c as D,a as k}from"./layoutHelper-BN7rjZLy.js";import{_ as H}from"./index-B8kjsi1k.js";import"./monaco/bundled-types-BNlAL2EU.js";import"./modules/file-saver-igGfcqei.js";import"./modules/shiki-BeZKuXrB.js";const J={key:0},O=["innerHTML"],R=P({__name:"Excalidraw",props:{drawFilePath:{},darkMode:{type:Boolean,default:!1},background:{type:Boolean,default:!1}},setup(r){T(),E();const a=b(!1),c=b(null),o=r;j(()=>{a.value=!0,g(["https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js","https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js","https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw/dist/excalidraw.production.min.js"]).then(()=>{v(o)}).finally(()=>{a.value=!1})});const v=async({drawFilePath:l,darkMode:d=!1,background:u=!1})=>{try{const s=new URL(l,window.location.origin+"/lectures/week_01/test1").href,h=await(await fetch(s)).json(),w=await ExcalidrawLib.exportToSvg({...h,appState:{...h.appState,exportWithDarkMode:d,exportBackground:u}});w.style.maxWidth="100%",w.style.height="auto",c.value=w.outerHTML}catch(s){console.error("Failed to load JSON or export to SVG",s)}};function t(l){return new Promise((d,u)=>{if(document.querySelector(`script[src="${l}"]`)){d("success");return}const s=document.createElement("script");s.src=l,s.onload=d,s.onerror=u,document.head.appendChild(s)})}function g(l){const d=l.map(u=>t(u));return Promise.all(d)}return(l,d)=>(i(),p(B,null,[a.value?(i(),p("p",J,"Loading Excalidraw...")):S("v-if",!0),c.value?(i(),p("div",{key:1,class:m(l.$attrs.class),innerHTML:c.value},null,10,O)):S("v-if",!0)],64))}}),f=r=>(L("data-v-3310aa71"),r=r(),V(),r),W={key:0,class:"slidev-layout default error"},G=f(()=>e("span",{class:"ns-c-warning"},[e("b",null,"Error"),n(": invalid layout params.")],-1)),U=f(()=>e("hr",null,null,-1)),K=f(()=>e("code",null,"columns",-1)),Q=f(()=>e("code",null,"align",-1)),X=f(()=>e("code",null,"color",-1)),Y=I("<p data-v-3310aa71> The &quot;slots&quot; of the page are default <code data-v-3310aa71>:: title ::</code>, <code data-v-3310aa71>:: left ::</code>, and <code data-v-3310aa71>:: right ::</code></p><p data-v-3310aa71> Options for <code data-v-3310aa71>columns</code> are divided into 12 column units. So with <code data-v-3310aa71>columns: is-1-11</code> the left column is 1/12 wide and the the right columns is 11/12 wide. The component admits a short had of only specifying the left column (<code data-v-3310aa71>columns: is-1</code> does the same thing). In addition there are short hands like <code data-v-3310aa71>columns: is-one-quarter</code> which resolves to <code data-v-3310aa71>is-3-9</code>, etc... </p><p data-v-3310aa71> The <code data-v-3310aa71>align</code> parameter determines how the columns look. The notation is for example <code data-v-3310aa71>align: c-cm-cm</code>. The first part is for the title, the second for the left column, and the third part is for the right column. The first letter is (<code data-v-3310aa71>c</code> for center, <code data-v-3310aa71>l</code> for left, <code data-v-3310aa71>r</code> for right). This applies to all three second. For the columns the second letter is vertical alignment (<code data-v-3310aa71>t</code> for top, <code data-v-3310aa71>m</code> for middle, <code data-v-3310aa71>b</code> for bottom). </p><p data-v-3310aa71>The <code data-v-3310aa71>color</code> parameter determines color of the title.</p>",4),Z={key:1},ee={class:"flex flex-col h-full w-full"},te={class:"slidev-layout toptitle content w-full"},ae={class:"flex flex-row h-full w-full"},oe={key:0,class:"h-fit w-full"},le={__name:"top-title-two-cols",props:{columns:{default:"is-one-half"},align:{default:"l-lt-lt"},color:{default:"light"}},setup(r){F(t=>({"76f4b01a":c.value.l,"76f4b00e":c.value.r})),T();const a=r,c=x(()=>D(a.columns)),o=x(()=>{const t=a.align.split("-");return{t:k(t[0]),l:k(t[1]),r:k(t[2])}}),v=x(()=>`neversink-${a.color}-scheme`);return(t,g)=>c.value=="error"||o.value.t=="error"||o.value.l=="error"||o.value.r=="error"?(i(),p("div",W,[G,U,e("p",null,[n(" There are three parameters: "),K,n(", "),Q,n(", and "),X,n(". Currently: "),e("code",null,"columns: "+y(a.columns),1),n(", "),e("code",null,"align: "+y(a.align),1),n(", and "),e("code",null,"color: "+y(a.color),1),n(". ")]),Y])):(i(),p("div",Z,[e("div",ee,[e("div",{class:m(["w-full h-fit min-h-13 pt-2 pb-2 slidecolor",v.value])},[e("div",{class:m(["slidev-layout toptitle title p-0 ml-6 mr-6 mt-auto mb-auto",o.value.t])},[_(t.$slots,"title",{},void 0,!0)],2)],2),e("div",te,[e("div",ae,[e("div",{class:m(["col-left",o.value.l])},[_(t.$slots,"left",{},void 0,!0)],2),e("div",{class:m(["col-right",o.value.r])},[_(t.$slots,"right",{},void 0,!0)],2)])]),t.$slots.default?(i(),p("div",oe,[_(t.$slots,"default",{},void 0,!0)])):S("v-if",!0)])]))}},se=H(le,[["__scopeId","data-v-3310aa71"]]),ne=e("h1",null,"This has a list of things and a drawing",-1),re=e("ul",null,[e("li",null,[n("A "),e("ul",null,[e("li",null,"a"),e("li",null,"aa")])]),e("li",null,"B"),e("li",null,"C")],-1),ce={__name:"slides.md__slidev_4",setup(r){const{$slidev:a,$nav:c,$clicksContext:o,$clicks:v,$page:t,$renderContext:g,$frontmatter:l}=T();return o.setup(),(d,u)=>{const s=R;return i(),M(se,q(z(C(A)(C(l),3))),{title:$(h=>[ne]),left:$(h=>[re]),right:$(h=>[N(s,{drawFilePath:"./test.excalidraw"})]),_:1},16)}}},ve=ce;export{ve as default};
