import{aD as b,z as c,o as n,b as u,e,ab as o,x as v,i as l,f as s,aE as g,p as w,a as y}from"./modules/vue-D9x9Io0K.js";import{u as T}from"./slidev/context-HKCduSr9.js";import{c as k,a as _}from"./layoutHelper-BN7rjZLy.js";import{_ as S}from"./index-N93yai-p.js";const i=a=>(w("data-v-2f8bd0d7"),a=a(),y(),a),I={key:0,class:"slidev-layout default error"},$=i(()=>e("span",{class:"ns-c-warning"},[e("b",null,"Error"),o(": invalid layout params.")],-1)),q=i(()=>e("hr",null,null,-1)),x=i(()=>e("code",null,"color",-1)),C=i(()=>e("code",null,"columns",-1)),V=i(()=>e("code",null,"align",-1)),z=g("<p data-v-2f8bd0d7>The &quot;slots&quot; of the page are default and <code data-v-2f8bd0d7>:: content ::</code></p><p data-v-2f8bd0d7> Options for <code data-v-2f8bd0d7>titlewidth</code> are divided into 12 column units. So with <code data-v-2f8bd0d7>titlewidth: is-1-11</code> the left column is 1/12 wide and the the right columns is 11/12 wide. The component admits a short had of only specifying the left column (<code data-v-2f8bd0d7>titlewidth: is-1</code> does the same thing). In addition there are short hands like <code data-v-2f8bd0d7>titlewidth: is-one-quarter</code> which resolves to <code data-v-2f8bd0d7>is-3-9</code>, etc... </p><p data-v-2f8bd0d7> Here are a bunch of examples: <code data-v-2f8bd0d7> is-1, is-2, is-3, is-3-9, is-4-8, is-5-7, is-one-quarter, is-one-third, is-one-half, is-two-thirds, is-three-quarters </code></p><p data-v-2f8bd0d7> The <code data-v-2f8bd0d7>align</code> parameter determines how the columns look. The notation is for example <code data-v-2f8bd0d7>align: cm-cm</code>. The first part for the left column, and the third part is for the right column. The first letter is (<code data-v-2f8bd0d7>c</code> for center, <code data-v-2f8bd0d7>l</code> for left, <code data-v-2f8bd0d7>r</code> for right). This applies to all three second. For the columns the second letter is vertical alignment (<code data-v-2f8bd0d7>t</code> for top, <code data-v-2f8bd0d7>m</code> for middle, <code data-v-2f8bd0d7>b</code> for bottom). </p><p data-v-2f8bd0d7>The <code data-v-2f8bd0d7>color</code> parameter determines color of the title.</p>",5),B={key:1,class:"h-full"},E={key:0,class:"flex h-full w-full"},N={class:"column-content"},D={key:1,class:"flex h-full w-full"},j={class:"column-content"},F={__name:"side-title",props:{side:{default:"l"},color:{default:"light"},titlewidth:{default:"is-one-third"},align:{default:"auto"}},setup(a){b(d=>({c0839b92:f.value.l,c0839b86:f.value.r})),T();const t=a,p=c(()=>t.side==="left"||t.side==="l"?"left":t.side==="right"||t.side==="r"?"right":"error"),f=c(()=>k(t.titlewidth)),r=c(()=>{let d="";t.align=="auto"&&(t.side==="l"||t.side==="left")?d="rm-lt":t.align=="auto"&&(t.side==="r"||t.side==="right")?d="lt-lm":d=t.align;const h=d.split("-");return{l:_(h[0]),r:_(h[1])}}),m=c(()=>`neversink-${t.color}-scheme`);return(d,h)=>p.value=="error"||f.value=="error"?(n(),u("div",I,[$,q,e("p",null,[o(" There are three parameters: "),x,o(", "),C,o(" and "),V,o(". Currently: "),e("code",null,"color: "+v(t.color),1),o(", "),e("code",null,"columns: "+v(t.titlewidth),1),o(" and "),e("code",null,"align: "+v(t.align),1),o(". ")]),z])):(n(),u("div",B,[p.value==="left"?(n(),u("div",E,[e("div",{class:l(["slidecolor column-title",m.value])},[e("div",{class:l(["slidev-layout sidetitle w-full p-6",r.value.l])},[s(d.$slots,"title",{},void 0,!0)],2)],2),e("div",N,[e("div",{class:l(["slidev-layout h-fit w-full",r.value.r])},[s(d.$slots,"content",{},void 0,!0),s(d.$slots,"default",{},void 0,!0)],2)])])):(n(),u("div",D,[e("div",j,[e("div",{class:l(["slidev-layout h-fit w-full",r.value.l])},[s(d.$slots,"content",{},void 0,!0),s(d.$slots,"default",{},void 0,!0)],2)]),e("div",{class:l(["slidecolor column-title",m.value])},[e("div",{class:l(["slidev-layout sidetitle w-full p-6",r.value.r])},[s(d.$slots,"title",{},void 0,!0)],2)],2)]))]))}},G=S(F,[["__scopeId","data-v-2f8bd0d7"]]);export{G as I};
