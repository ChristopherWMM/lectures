const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/CodeRunner-DTq9ttQa.js","assets/modules/unplugin-icons-Df4Q5vbX.js","assets/modules/vue-DO_L9d89.js","assets/monaco/bundled-types-CNJVCUhw.js","assets/modules/file-saver-igGfcqei.js","assets/monaco/bundled-types-DFxcR7mW.css","assets/slidev/context-DpGaL14y.js","assets/index-aGt5SvG0.js","assets/modules/shiki-GLijunHq.js","assets/modules/shiki-BPvBenZD.css","assets/index-CELAM1eS.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-Co9YxRd0.js","assets/CodeRunner-YBfxSSx9.css"])))=>i.map(i=>d[i]);
import{_ as j,k as I}from"./monaco/bundled-types-CNJVCUhw.js";import{d as Z,t as M,z as H,aB as J,S as F,n as D,o as E,b as K,e as z,h as G,c as Y,I as $,g as X,W as ee,x as te,k as oe,l as Q,m as ne,q as re,s as ie}from"./modules/vue-DO_L9d89.js";import{a as ae}from"./modules/file-saver-igGfcqei.js";import{a as se,Y as P}from"./index-aGt5SvG0.js";import{u as T,f as le}from"./slidev/context-DpGaL14y.js";import{_ as ue}from"./slidev/intro-CB18SI-7.js";import"./modules/shiki-GLijunHq.js";var U={exports:{}};U.exports;(function(O){var c=function(){var g=String.fromCharCode,w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",S={};function B(t,n){if(!S[t]){S[t]={};for(var s=0;s<t.length;s++)S[t][t.charAt(s)]=s}return S[t][n]}var m={compressToBase64:function(t){if(t==null)return"";var n=m._compress(t,6,function(s){return w.charAt(s)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(t){return t==null?"":t==""?null:m._decompress(t.length,32,function(n){return B(w,t.charAt(n))})},compressToUTF16:function(t){return t==null?"":m._compress(t,15,function(n){return g(n+32)})+" "},decompressFromUTF16:function(t){return t==null?"":t==""?null:m._decompress(t.length,16384,function(n){return t.charCodeAt(n)-32})},compressToUint8Array:function(t){for(var n=m.compress(t),s=new Uint8Array(n.length*2),o=0,i=n.length;o<i;o++){var d=n.charCodeAt(o);s[o*2]=d>>>8,s[o*2+1]=d%256}return s},decompressFromUint8Array:function(t){if(t==null)return m.decompress(t);for(var n=new Array(t.length/2),s=0,o=n.length;s<o;s++)n[s]=t[s*2]*256+t[s*2+1];var i=[];return n.forEach(function(d){i.push(g(d))}),m.decompress(i.join(""))},compressToEncodedURIComponent:function(t){return t==null?"":m._compress(t,6,function(n){return x.charAt(n)})},decompressFromEncodedURIComponent:function(t){return t==null?"":t==""?null:(t=t.replace(/ /g,"+"),m._decompress(t.length,32,function(n){return B(x,t.charAt(n))}))},compress:function(t){return m._compress(t,16,function(n){return g(n)})},_compress:function(t,n,s){if(t==null)return"";var o,i,d={},y={},v="",C="",f="",h=2,p=3,l=2,u=[],e=0,a=0,r;for(r=0;r<t.length;r+=1)if(v=t.charAt(r),Object.prototype.hasOwnProperty.call(d,v)||(d[v]=p++,y[v]=!0),C=f+v,Object.prototype.hasOwnProperty.call(d,C))f=C;else{if(Object.prototype.hasOwnProperty.call(y,f)){if(f.charCodeAt(0)<256){for(o=0;o<l;o++)e=e<<1,a==n-1?(a=0,u.push(s(e)),e=0):a++;for(i=f.charCodeAt(0),o=0;o<8;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1}else{for(i=1,o=0;o<l;o++)e=e<<1|i,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=0;for(i=f.charCodeAt(0),o=0;o<16;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1}h--,h==0&&(h=Math.pow(2,l),l++),delete y[f]}else for(i=d[f],o=0;o<l;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1;h--,h==0&&(h=Math.pow(2,l),l++),d[C]=p++,f=String(v)}if(f!==""){if(Object.prototype.hasOwnProperty.call(y,f)){if(f.charCodeAt(0)<256){for(o=0;o<l;o++)e=e<<1,a==n-1?(a=0,u.push(s(e)),e=0):a++;for(i=f.charCodeAt(0),o=0;o<8;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1}else{for(i=1,o=0;o<l;o++)e=e<<1|i,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=0;for(i=f.charCodeAt(0),o=0;o<16;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1}h--,h==0&&(h=Math.pow(2,l),l++),delete y[f]}else for(i=d[f],o=0;o<l;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1;h--,h==0&&(h=Math.pow(2,l),l++)}for(i=2,o=0;o<l;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1;for(;;)if(e=e<<1,a==n-1){u.push(s(e));break}else a++;return u.join("")},decompress:function(t){return t==null?"":t==""?null:m._decompress(t.length,32768,function(n){return t.charCodeAt(n)})},_decompress:function(t,n,s){var o=[],i=4,d=4,y=3,v="",C=[],f,h,p,l,u,e,a,r={val:s(0),position:n,index:1};for(f=0;f<3;f+=1)o[f]=f;for(p=0,u=Math.pow(2,2),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;switch(p){case 0:for(p=0,u=Math.pow(2,8),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;a=g(p);break;case 1:for(p=0,u=Math.pow(2,16),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;a=g(p);break;case 2:return""}for(o[3]=a,h=a,C.push(a);;){if(r.index>t)return"";for(p=0,u=Math.pow(2,y),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;switch(a=p){case 0:for(p=0,u=Math.pow(2,8),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;o[d++]=g(p),a=d-1,i--;break;case 1:for(p=0,u=Math.pow(2,16),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;o[d++]=g(p),a=d-1,i--;break;case 2:return C.join("")}if(i==0&&(i=Math.pow(2,y),y++),o[a])v=o[a];else if(a===d)v=h+h.charAt(0);else return null;C.push(v),o[d++]=h+v.charAt(0),i--,h=v,i==0&&(i=Math.pow(2,y),y++)}}};return m}();O!=null?O.exports=c:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return c})})(U);var ce=U.exports;const V=ae(ce),de={class:"relative slidev-monaco-container"},fe=Z({__name:"Monaco",props:{codeLz:{default:""},diffLz:{},lang:{default:"typescript"},readonly:{type:Boolean,default:!1},lineNumbers:{default:"off"},height:{default:"initial"},editorOptions:{},ata:{type:Boolean,default:!0},runnable:{type:Boolean,default:!1},writable:{},autorun:{type:[Boolean,String],default:!0},showOutputAt:{type:[null,Boolean,String,Number,Array]},outputHeight:{},highlightOutput:{type:Boolean,default:!0},runnerOptions:{}},setup(O){const c=O,g=ee(()=>j(()=>import("./slidev/CodeRunner-DTq9ttQa.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(l=>l.default)),w=M(V.decompressFromBase64(c.codeLz).trimEnd()),x=c.diffLz&&M(V.decompressFromBase64(c.diffLz).trimEnd()),S=H(()=>c.writable&&!c.readonly&&!1),m={ts:"typescript",js:"javascript"}[c.lang]??c.lang,n={typescript:"mts",javascript:"mjs",ts:"mts",js:"mjs"}[c.lang]??c.lang,s=M(),o=M(),i=M(0),d=M(),y=H(()=>c.height==="auto"?`${i.value}px`:c.height==="initial"?`${d.value}px`:c.height),v=M(),{$page:C,$renderContext:f}=T(),{currentSlideNo:h}=se(),p=J(()=>Math.abs(C.value-h.value)<=1&&v.value,l=>{["slide","presenter"].includes(f.value)?l():setTimeout(l,5e3)});return F(async()=>{const{default:l}=await j(async()=>{const{default:_}=await import("./monaco/bundled-types-CNJVCUhw.js").then(b=>b.u);return{default:_}},__vite__mapDeps([3,2,4,5])),{ata:u,monaco:e,editorOptions:a}=await l(),r=e.editor.createModel(w.value,m,e.Uri.parse(`file:///${P()}.${n}`));r.onDidChangeContent(()=>w.value=r.getValue());const R={automaticLayout:!0,readOnly:c.readonly,lineNumbers:c.lineNumbers,minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:10,bottom:10},lineNumbersMinChars:3,bracketPairColorization:{enabled:!1},tabSize:2,fontSize:11.5,fontFamily:"var(--slidev-code-font-family)",scrollBeyondLastLine:!1,useInlineViewWhenSpaceIsLimited:!1,...a,...c.editorOptions};let A;if(x){const _=e.editor.createModel(x.value,m,e.Uri.parse(`file:///${P()}.${n}`));_.onDidChangeContent(()=>w.value=r.getValue());const b=e.editor.createDiffEditor(o.value,{renderOverviewRuler:!1,...R});b.setModel({original:r,modified:_});const k=b.getOriginalEditor(),L=b.getModifiedEditor(),W=()=>{const N=Math.max(k.getContentHeight(),L.getContentHeight())+4;d.value??(d.value=N),i.value=N,D(()=>b.layout())};k.onDidContentSizeChange(W),L.onDidContentSizeChange(W),A=L}else{const _=e.editor.create(o.value,{model:r,lineDecorationsWidth:0,...R});_.onDidContentSizeChange(b=>{const k=b.contentHeight+4;d.value??(d.value=k),i.value=k,D(()=>A.layout())}),A=_}v.value=()=>{p(),j(()=>import("./monaco/bundled-types-CNJVCUhw.js").then(_=>_.v),__vite__mapDeps([3,2,4,5])),c.ata&&(u(A.getValue()),A.onDidChangeModelContent(I(1e3,()=>{u(A.getValue())})))};const q=A.layoutContentWidget.bind(A);A.layoutContentWidget=_=>{q(_),_.getId()==="editor.contrib.resizableContentHoverWidget"&&(_._resizableNode.domNode.style.transform=_._positionPreference===1?"translateY(calc(100% * (var(--slidev-slide-scale) - 1)))":"")},A.addAction({id:"slidev-save",label:"Save",keybindings:[e.KeyMod.CtrlCmd|e.KeyCode.KeyS],run:()=>{S.value,console.warn("[Slidev] this monaco editor is not writable, save action is ignored.")}}),D(()=>e.editor.remeasureFonts())}),(l,u)=>(E(),K("div",de,[z("div",{ref_key:"outer",ref:s,class:"relative slidev-monaco-container-inner",style:G({height:y.value})},[z("div",{ref_key:"container",ref:o,class:"absolute inset-0.5"},null,512)],4),c.runnable?(E(),Y($(g),{key:0,modelValue:w.value,"onUpdate:modelValue":u[0]||(u[0]=e=>w.value=e),lang:$(m),autorun:c.autorun,"show-output-at":c.showOutputAt,height:c.outputHeight,"highlight-output":c.highlightOutput,"runner-options":c.runnerOptions},null,8,["modelValue","lang","autorun","show-output-at","height","highlight-output","runner-options"])):X("v-if",!0)]))}}),pe={flex:"~",w:"min",border:"~ main rounded-md"},he={m:"auto",p:"2"},me=Z({__name:"Counter",props:{count:{default:0}},setup(O){T();const g=M(O.count);return(w,x)=>(E(),K("div",pe,[z("button",{border:"r main",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:x[0]||(x[0]=S=>g.value-=1)}," - "),z("span",he,te(g.value),1),z("button",{border:"l main",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:x[1]||(x[1]=S=>g.value+=1)}," + ")]))}}),ve=z("h1",null,"Welcome to Slidev",-1),ge=z("p",null,"Presentation slides for developers",-1),_e={__name:"slides.md__slidev_1",setup(O){const{$slidev:c,$nav:g,$clicksContext:w,$clicks:x,$page:S,$renderContext:B,$frontmatter:m}=T();return w.setup(),(t,n)=>{const s=me,o=fe;return E(),Y(ue,re(ie($(le)($(m),0))),{default:oe(()=>[ve,ge,Q(s,{count:10,m:"t-4"}),Q(o,ne({runnable:"","code-lz":"MYewdgziA2CmB00QHMAUAiAEraSAEA7iAE7QAmAhOgJQBQQA",lang:"ts"},{autorun:!0,editorOptions:{lineNumbers:"on"}}),null,16)]),_:1},16)}}},Me=_e;export{Me as default};
