import{d as m,R as f,z as h,r as x,o as n,b as v,e,aa as a,x as r,I as g,c as p,k as d,g as i,p as k,a as S}from"../modules/vue-BWpDFgbh.js";import{a as I,_ as N}from"../index-CZKQQGlR.js";import"../monaco/bundled-types-8JGFrJsO.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-CYlLUlRT.js";const R=o=>(k("data-v-53098de1"),o=o(),S(),o),w={class:"grid justify-center text-center pt-15% gap-5"},y=R(()=>e("h1",{class:"text-9xl font-light"}," 404 ",-1)),B={class:"text-2xl"},C={class:"op-60"},V={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},G=m({__name:"404",setup(o){const{currentRoute:l}=f(),{total:u}=I(),s=h(()=>{const c=l.value.path.match(/\d+/);if(c){const t=+c[0];if(t>0&&t<=u.value)return t}return null});return(_,c)=>{const t=x("RouterLink");return n(),v("div",w,[e("div",null,[y,e("p",B,[a(" Page "),e("code",C,r(g(l).path),1),a(" not found ")])]),e("div",V,[s.value!==1?(n(),p(t,{key:0,to:"/",class:"page-link"},{default:d(()=>[a(" Go Home ")]),_:1})):i("v-if",!0),s.value?(n(),p(t,{key:1,to:`/${s.value}`,class:"page-link"},{default:d(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):i("v-if",!0)])])}}}),E=N(G,[["__scopeId","data-v-53098de1"]]);export{E as default};
