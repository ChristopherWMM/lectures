import{d as m,R as f,z as _,r as x,o as n,b as v,e as o,ab as a,x as r,I as g,c as u,k as i,g as c}from"../modules/vue-CT7_GqGF.js";import{a as k,_ as h}from"../index-QE498Oqk.js";import"../monaco/bundled-types-Dmg8P91O.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-m1y2Idvz.js";const N={class:"grid justify-center text-center pt-15% gap-5"},R={class:"text-2xl"},y={class:"op-60"},B={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},C=m({__name:"404",setup(b){const{currentRoute:l}=f(),{total:p}=k(),s=_(()=>{const t=l.value.path.match(/\d+/);if(t){const e=+t[0];if(e>0&&e<=p.value)return e}return null});return(d,t)=>{const e=x("RouterLink");return n(),v("div",N,[o("div",null,[t[2]||(t[2]=o("h1",{class:"text-9xl font-light"}," 404 ",-1)),o("p",R,[t[0]||(t[0]=a(" Page ")),o("code",y,r(g(l).path),1),t[1]||(t[1]=a(" not found "))])]),o("div",B,[s.value!==1?(n(),u(e,{key:0,to:"/",class:"page-link"},{default:i(()=>t[3]||(t[3]=[a(" Go Home ")])),_:1})):c("v-if",!0),s.value?(n(),u(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:i(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):c("v-if",!0)])])}}}),L=h(C,[["__scopeId","data-v-bed71a35"]]);export{L as default};
