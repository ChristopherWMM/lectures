const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/shiki-CQm_CfDj.js","assets/monaco/bundled-types-DOf4xZXd.js","assets/modules/vue-BafvNJID.js","assets/modules/file-saver-igGfcqei.js","assets/monaco/bundled-types-DFxcR7mW.css","assets/modules/shiki-YyFYuzwV.js","assets/modules/shiki-BPvBenZD.css"])))=>i.map(i=>d[i]);
import{M as L}from"../modules/unplugin-icons-BTNyu130.js";import{t as w,d as T,G as P,o,b as a,ab as D,z,V as F,S as H,aE as J,U,E as q,ae as G,aw as K,e as W,x as $,I as x,F as k,ag as M,c as Y,i as Q,g as R,aF as X,h as Z,l as V,k as ee}from"../modules/vue-BafvNJID.js";import{l as te,_ as I,k as ne,n as j}from"../monaco/bundled-types-DOf4xZXd.js";import{u as se}from"./context-DtqwvHWR.js";import{a as re,Y as oe}from"../index-BvAZI8go.js";import{_ as ie}from"./IconButton.vue_vue_type_script_setup_true_lang-D6j84NjY.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-YyFYuzwV.js";const B={},ae=[],le=te(async()=>{const i={javascript:C,js:C,typescript:C,ts:C},{getHighlighter:t}=await I(async()=>{const{getHighlighter:r}=await import("./shiki-CQm_CfDj.js");return{getHighlighter:r}},__vite__mapDeps([0,1,2,3,4,5,6])),s=await t(),f=async(r,p,l)=>{try{const d=i[p];if(!d)throw new Error(`Runner for language "${p}" not found`);return await d(r,{options:l,highlight:s,run:async(e,n)=>await f(e,n,l)})}catch(d){return console.error(d),{error:`${d}`}}};for(const r of ae){const p=await r(i);Object.assign(i,p)}return{highlight:s,run:f}});function ce(i){const t=w([]),s=e=>t.value.push({error:String(e)}),f=(...e)=>t.value.push(e.map(p)),r=Object.assign({},console);r.info=r.log=r.debug=r.warn=r.error=f,r.clear=()=>t.value.length=0;try{const e=`return async (console, __slidev_import, __slidev_on_error) => {
      try {
        ${d(i)}
      } catch (e) {
        __slidev_on_error(e)
      }
    }`;new Function(e)()(r,n=>{const u=B[n];if(!u)throw new Error(`Module not found: ${n}.
Available modules: ${Object.keys(B).join(", ")}. Please refer to https://sli.dev/custom/config-code-runners#additional-runner-dependencies`);return u},s)}catch(e){s(e)}function p(e){return typeof e=="string"?{text:e}:{text:l(e),highlightLang:"javascript"}}function l(e){var u;let n="";if(e instanceof Error)n=`Error: ${JSON.stringify(e.message)}`;else if(e==null||typeof e=="symbol")n=String(e);else if(Array.isArray(e))n=`[${e.map(l).join(", ")}]`;else if(e instanceof Set){const c=[...e];n=`Set (${e.size}) {${c.map(l).join(", ")}}`}else if(e instanceof Map){const c=[...e.entries()];n=`Map (${e.size}) {${c.map(([m,h])=>`${l(m)} => ${l(h)}`).join(", ")}}`}else if(e instanceof RegExp)n=e.toString();else if(typeof e=="string")n=JSON.stringify(e);else if(typeof e=="object"){const c=((u=e.constructor)==null?void 0:u.name)??"",m=c&&c==="Object"?"":c;n=(m?`${m}: `:"")+JSON.stringify(e,(g,_)=>_===void 0?"__undefined__":_,2).replace(/"__undefined__"/g,"undefined"),n=String(n)}else n=String(e);return n}function d(e){return e=e.replace('import "reflect-metadata"',"").replace('require("reflect-metadata")',""),e=e.replace("export {};",""),e}return t}let E;async function C(i){E??(E=await I(()=>import("../monaco/bundled-types-DOf4xZXd.js").then(s=>s.t),__vite__mapDeps([1,2,3,4]))),i=E.transpileModule(i,{compilerOptions:{module:E.ModuleKind.ESNext,target:E.ScriptTarget.ES2022},transformers:{after:[ue]}}).outputText;const t=/import\s*\((.+)\)/g;return i=i.replace(t,(s,f)=>`__slidev_import(${f})`),ce(i)}function ue(i){const{factory:t}=i,{isImportDeclaration:s,isNamedImports:f,NodeFlags:r}=E;return p=>{var d,e;const l=[...p.statements];for(let n=0;n<l.length;n++){const u=l[n];if(!s(u))continue;let c;const m=(d=u.importClause)==null?void 0:d.namedBindings,h=[];if((e=u.importClause)!=null&&e.name&&h.push(t.createBindingElement(void 0,t.createIdentifier("default"),u.importClause.name)),m)if(f(m)){for(const _ of m.elements)h.push(t.createBindingElement(void 0,_.propertyName,_.name));c=t.createObjectBindingPattern(h)}else c=t.createIdentifier(m.name.text);else c=t.createObjectBindingPattern(h);const g=t.createVariableStatement(void 0,t.createVariableDeclarationList([t.createVariableDeclaration(c,void 0,void 0,t.createAwaitExpression(t.createCallExpression(t.createIdentifier("import"),void 0,[u.moduleSpecifier])))],r.Const));l[n]=g}return t.updateSourceFile(p,l)}}const de=T({__name:"DomElement",props:{element:{}},setup(i){const t=i,s=w();return P(()=>{s.value&&s.value.appendChild(t.element)}),(f,r)=>(o(),a("div",{ref_key:"container",ref:s},null,512))}}),pe={key:0,class:"text-sm text-center opacity-50"},me={key:1,class:"text-sm text-center opacity-50"},fe={key:2,class:"text-sm text-center opacity-50"},he=["innerHTML"],_e={key:1,class:"text-red-500"},ve={key:3,class:"output-line"},ge=["innerHTML"],ye={key:2,class:"separator"},xe={key:0,class:"absolute right-1 top-1 max-h-full flex gap-1"},je=T({__name:"CodeRunner",props:{modelValue:{},lang:{},autorun:{type:[Boolean,String]},height:{},showOutputAt:{type:[null,Boolean,String,Number,Array]},highlightOutput:{type:Boolean},runnerOptions:{}},emits:["update:modelValue"],setup(i,{emit:t}){const s=i,f=t,{isPrintMode:r}=re(),p=D(s,"modelValue",f),{$renderContext:l,$clicksContext:d}=se(),e=z(()=>!["slide","presenter"].includes(l.value)),n=r.value?"once":s.autorun,u=w(n),c=F(),m=w(0),h=w(),g=w(s.showOutputAt);if(s.showOutputAt){const b=oe();H(()=>{const y=d.calculate(s.showOutputAt);y?(d.register(b,y),J(()=>{g.value=!y.isActive.value})):g.value=!1}),U(()=>d.unregister(b))}const _=ne(200,async()=>{if(e.value)return;const{highlight:b,run:y}=await le();h.value=b;const O=setTimeout(()=>{u.value=!0},500);c.value=await y(p.value,s.lang,s.runnerOptions??{}),m.value+=1,u.value=!1,clearTimeout(O)});return n==="once"?_():n&&q(p,_,{immediate:!0}),(b,y)=>{const O=L;return o(),a(k,null,[G(W("div",{class:"relative flex flex-col rounded-b border-t border-main",style:Z({height:s.height}),"data-waitfor":".slidev-runner-output"},[e.value?(o(),a("div",pe,' Code is disabled in the "'+$(x(l))+'" mode ',1)):u.value?(o(),a("div",me," Running... ")):c.value?(o(),a("div",{key:`run-${m.value}`,class:"slidev-runner-output"},[(o(!0),a(k,null,M(x(j)(X(c.value)),(v,N)=>(o(),a(k,{key:N},["html"in v?(o(),a("div",{key:0,innerHTML:v.html},null,8,he)):"error"in v?(o(),a("div",_e,$(v.error),1)):"element"in v?(o(),Y(de,{key:2,element:v.element},null,8,["element"])):(o(),a("div",ve,[(o(!0),a(k,null,M(x(j)(v),(S,A)=>(o(),a(k,{key:A},[S.highlightLang&&h.value?(o(),a("span",{key:0,class:"highlighted",innerHTML:h.value(S.text,S.highlightLang)},null,8,ge)):(o(),a("span",{key:1,class:Q(S.class)},$(S.text),3)),A<x(j)(v).length-1?(o(),a("span",ye,",")):R("v-if",!0)],64))),128))]))],64))),128))])):(o(),a("div",fe," Click the play button to run the code "))],4),[[K,!g.value]]),x(p).trim()?(o(),a("div",xe,[V(ie,{class:"w-8 h-8 max-h-full flex justify-center items-center",title:"Run code",onClick:x(_)},{default:ee(()=>[V(O)]),_:1},8,["onClick"])])):R("v-if",!0)],64)}}});export{je as default};
