const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/shiki-Cu2W6zs2.js","assets/monaco/bundled-types-8JGFrJsO.js","assets/modules/vue-BWpDFgbh.js","assets/modules/file-saver-igGfcqei.js","assets/monaco/bundled-types-BqaZHLx9.css","assets/modules/shiki-CYlLUlRT.js","assets/modules/shiki-BPvBenZD.css"])))=>i.map(i=>d[i]);
import{M as I}from"../modules/unplugin-icons-BHSvTxmO.js";import{t as w,d as N,G as L,o as a,b as c,ab as D,z as J,V as F,S as z,aI as H,U,E as q,ae as G,aw as K,e as W,x as j,I as x,F as k,ag as T,c as Y,i as Q,g as A,aJ as X,h as Z,l as B,k as ee}from"../modules/vue-BWpDFgbh.js";import{n as te,_ as P,l as ne,k as E}from"../monaco/bundled-types-8JGFrJsO.js";import{u as re}from"./context-BIYKWirP.js";import{a as se,Y as oe}from"../index-CSQFaWpZ.js";import{_ as ie}from"./IconButton.vue_vue_type_script_setup_true_lang-NYWox3s0.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-CYlLUlRT.js";const M={};function ae(s){return s}var ce=ae;const le=ce(()=>({async python(s){return await ue(s)}}));async function ue(s){try{const n=await fetch("https://godbolt.org/api/compiler/python312/compile",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({source:s,options:{compilerOptions:{executorRequest:!0},executeParameters:{}}})});if(!n.ok)return{error:`Bad response: ${n.statusText}`};const d=await n.json(),o=d.stdout.map(i=>({text:i.text.replace(/\s/g,"‎ ").replace(/\t/g,"‎    ")})),l=d.stderr.map(i=>({text:i.text.replace(/\s/g,"‎ ").replace(/\t/g,"‎    "),class:"text-red-500"}));return l.length!==0?l:o.length!==0?o:{text:"No output received"}}catch(t){return console.error("Failed to execute Python code:",t),{error:`Failed to execute Python code: ${t.message}`}}}const pe=[le],de=te(async()=>{const s={javascript:C,js:C,typescript:C,ts:C},{getHighlighter:t}=await P(async()=>{const{getHighlighter:o}=await import("./shiki-Cu2W6zs2.js");return{getHighlighter:o}},__vite__mapDeps([0,1,2,3,4,5,6])),n=await t(),d=async(o,l,i)=>{try{const m=s[l];if(!m)throw new Error(`Runner for language "${l}" not found`);return await m(o,{options:i,highlight:n,run:async(e,r)=>await d(e,r,i)})}catch(m){return console.error(m),{error:`${m}`}}};for(const o of pe){const l=await o(s);Object.assign(s,l)}return{highlight:n,run:d}});function me(s){const t=w([]),n=e=>t.value.push({error:String(e)}),d=(...e)=>t.value.push(e.map(l)),o=Object.assign({},console);o.info=o.log=o.debug=o.warn=o.error=d,o.clear=()=>t.value.length=0;try{const e=`return async (console, __slidev_import, __slidev_on_error) => {
      try {
        ${m(s)}
      } catch (e) {
        __slidev_on_error(e)
      }
    }`;new Function(e)()(o,r=>{const p=M[r];if(!p)throw new Error(`Module not found: ${r}.
Available modules: ${Object.keys(M).join(", ")}. Please refer to https://sli.dev/custom/config-code-runners#additional-runner-dependencies`);return p},n)}catch(e){n(e)}function l(e){return typeof e=="string"?{text:e}:{text:i(e),highlightLang:"javascript"}}function i(e){var p;let r="";if(e instanceof Error)r=`Error: ${JSON.stringify(e.message)}`;else if(e==null||typeof e=="symbol")r=String(e);else if(Array.isArray(e))r=`[${e.map(i).join(", ")}]`;else if(e instanceof Set){const u=[...e];r=`Set (${e.size}) {${u.map(i).join(", ")}}`}else if(e instanceof Map){const u=[...e.entries()];r=`Map (${e.size}) {${u.map(([f,h])=>`${i(f)} => ${i(h)}`).join(", ")}}`}else if(e instanceof RegExp)r=e.toString();else if(typeof e=="string")r=JSON.stringify(e);else if(typeof e=="object"){const u=((p=e.constructor)==null?void 0:p.name)??"",f=u&&u==="Object"?"":u;r=(f?`${f}: `:"")+JSON.stringify(e,(v,_)=>_===void 0?"__undefined__":_,2).replace(/"__undefined__"/g,"undefined"),r=String(r)}else r=String(e);return r}function m(e){return e=e.replace('import "reflect-metadata"',"").replace('require("reflect-metadata")',""),e=e.replace("export {};",""),e}return t}let O;async function C(s){O??(O=await P(()=>import("../monaco/bundled-types-8JGFrJsO.js").then(n=>n.t),__vite__mapDeps([1,2,3,4]))),s=O.transpileModule(s,{compilerOptions:{module:O.ModuleKind.ESNext,target:O.ScriptTarget.ES2022},transformers:{after:[fe]}}).outputText;const t=/import\s*\((.+)\)/g;return s=s.replace(t,(n,d)=>`__slidev_import(${d})`),me(s)}function fe(s){const{factory:t}=s,{isImportDeclaration:n,isNamedImports:d,NodeFlags:o}=O;return l=>{var m,e;const i=[...l.statements];for(let r=0;r<i.length;r++){const p=i[r];if(!n(p))continue;let u;const f=(m=p.importClause)==null?void 0:m.namedBindings,h=[];if((e=p.importClause)!=null&&e.name&&h.push(t.createBindingElement(void 0,t.createIdentifier("default"),p.importClause.name)),f)if(d(f)){for(const _ of f.elements)h.push(t.createBindingElement(void 0,_.propertyName,_.name));u=t.createObjectBindingPattern(h)}else u=t.createIdentifier(f.name.text);else u=t.createObjectBindingPattern(h);const v=t.createVariableStatement(void 0,t.createVariableDeclarationList([t.createVariableDeclaration(u,void 0,void 0,t.createAwaitExpression(t.createCallExpression(t.createIdentifier("import"),void 0,[p.moduleSpecifier])))],o.Const));i[r]=v}return t.updateSourceFile(l,i)}}const he=N({__name:"DomElement",props:{element:{}},setup(s){const t=s,n=w();return L(()=>{n.value&&n.value.appendChild(t.element)}),(d,o)=>(a(),c("div",{ref_key:"container",ref:n},null,512))}}),_e={key:0,class:"text-sm text-center opacity-50"},ge={key:1,class:"text-sm text-center opacity-50"},ve={key:2,class:"text-sm text-center opacity-50"},ye=["innerHTML"],xe={key:1,class:"text-red-500"},we={key:3,class:"output-line"},Se=["innerHTML"],be={key:2,class:"separator"},ke={key:0,class:"absolute right-1 top-1 max-h-full flex gap-1"},Be=N({__name:"CodeRunner",props:{modelValue:{},lang:{},autorun:{type:[Boolean,String]},height:{},showOutputAt:{type:[null,Boolean,String,Number,Array]},highlightOutput:{type:Boolean},runnerOptions:{}},emits:["update:modelValue"],setup(s,{emit:t}){const n=s,d=t,{isPrintMode:o}=se(),l=D(n,"modelValue",d),{$renderContext:i,$clicksContext:m}=re(),e=J(()=>!["slide","presenter"].includes(i.value)),r=o.value?"once":n.autorun,p=w(r),u=F(),f=w(0),h=w(),v=w(n.showOutputAt);if(n.showOutputAt){const S=oe();z(()=>{const y=m.calculate(n.showOutputAt);y?(m.register(S,y),H(()=>{v.value=!y.isActive.value})):v.value=!1}),U(()=>m.unregister(S))}const _=ne(200,async()=>{if(e.value)return;const{highlight:S,run:y}=await de();h.value=S;const $=setTimeout(()=>{p.value=!0},500);u.value=await y(l.value,n.lang,n.runnerOptions??{}),f.value+=1,p.value=!1,clearTimeout($)});return r==="once"?_():r&&q(l,_,{immediate:!0}),(S,y)=>{const $=I;return a(),c(k,null,[G(W("div",{class:"relative flex flex-col rounded-b border-t border-main",style:Z({height:n.height}),"data-waitfor":".slidev-runner-output"},[e.value?(a(),c("div",_e,' Code is disabled in the "'+j(x(i))+'" mode ',1)):p.value?(a(),c("div",ge," Running... ")):u.value?(a(),c("div",{key:`run-${f.value}`,class:"slidev-runner-output"},[(a(!0),c(k,null,T(x(E)(X(u.value)),(g,V)=>(a(),c(k,{key:V},["html"in g?(a(),c("div",{key:0,innerHTML:g.html},null,8,ye)):"error"in g?(a(),c("div",xe,j(g.error),1)):"element"in g?(a(),Y(he,{key:2,element:g.element},null,8,["element"])):(a(),c("div",we,[(a(!0),c(k,null,T(x(E)(g),(b,R)=>(a(),c(k,{key:R},[b.highlightLang&&h.value?(a(),c("span",{key:0,class:"highlighted",innerHTML:h.value(b.text,b.highlightLang)},null,8,Se)):(a(),c("span",{key:1,class:Q(b.class)},j(b.text),3)),R<x(E)(g).length-1?(a(),c("span",be,",")):A("v-if",!0)],64))),128))]))],64))),128))])):(a(),c("div",ve," Click the play button to run the code "))],4),[[K,!v.value]]),x(l).trim()?(a(),c("div",ke,[B(ie,{class:"w-8 h-8 max-h-full flex justify-center items-center",title:"Run code",onClick:x(_)},{default:ee(()=>[B($)]),_:1},8,["onClick"])])):A("v-if",!0)],64)}}});export{Be as default};
