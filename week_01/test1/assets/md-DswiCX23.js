const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/CodeRunner-Bkl2YGGR.js","assets/modules/unplugin-icons-X2fwIq8q.js","assets/modules/vue-D9x9Io0K.js","assets/monaco/bundled-types-RT6HjJ-W.js","assets/modules/file-saver-igGfcqei.js","assets/monaco/bundled-types-GI7L-5Qk.css","assets/slidev/context-HKCduSr9.js","assets/index-N93yai-p.js","assets/modules/shiki-DhNoelFZ.js","assets/modules/shiki-BPvBenZD.css","assets/index-B8G1NqV2.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-zJ7jwz7n.js","assets/CodeRunner-YBfxSSx9.css"])))=>i.map(i=>d[i]);
import{_ as $,k as Y}from"./monaco/bundled-types-RT6HjJ-W.js";import{d as q,t as S,z as N,aC as J,S as F,n as j,o as T,b as G,e as E,h as X,c as Z,I as k,g as ee,W as te,k as H,l as oe,m as ne,q as re,s as ie,ab as P}from"./modules/vue-D9x9Io0K.js";import{a as ae}from"./modules/file-saver-igGfcqei.js";import{a as se,Y as Q}from"./index-N93yai-p.js";import{u as I,f as le}from"./slidev/context-HKCduSr9.js";import{I as ue}from"./side-title-Ct4Bo0mL.js";import"./modules/shiki-DhNoelFZ.js";import"./layoutHelper-BN7rjZLy.js";var D={exports:{}};D.exports;(function(O){var c=function(){var w=String.fromCharCode,A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",M={};function B(t,n){if(!M[t]){M[t]={};for(var s=0;s<t.length;s++)M[t][t.charAt(s)]=s}return M[t][n]}var v={compressToBase64:function(t){if(t==null)return"";var n=v._compress(t,6,function(s){return A.charAt(s)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(t){return t==null?"":t==""?null:v._decompress(t.length,32,function(n){return B(A,t.charAt(n))})},compressToUTF16:function(t){return t==null?"":v._compress(t,15,function(n){return w(n+32)})+" "},decompressFromUTF16:function(t){return t==null?"":t==""?null:v._decompress(t.length,16384,function(n){return t.charCodeAt(n)-32})},compressToUint8Array:function(t){for(var n=v.compress(t),s=new Uint8Array(n.length*2),o=0,i=n.length;o<i;o++){var d=n.charCodeAt(o);s[o*2]=d>>>8,s[o*2+1]=d%256}return s},decompressFromUint8Array:function(t){if(t==null)return v.decompress(t);for(var n=new Array(t.length/2),s=0,o=n.length;s<o;s++)n[s]=t[s*2]*256+t[s*2+1];var i=[];return n.forEach(function(d){i.push(w(d))}),v.decompress(i.join(""))},compressToEncodedURIComponent:function(t){return t==null?"":v._compress(t,6,function(n){return b.charAt(n)})},decompressFromEncodedURIComponent:function(t){return t==null?"":t==""?null:(t=t.replace(/ /g,"+"),v._decompress(t.length,32,function(n){return B(b,t.charAt(n))}))},compress:function(t){return v._compress(t,16,function(n){return w(n)})},_compress:function(t,n,s){if(t==null)return"";var o,i,d={},_={},m="",x="",f="",h=2,p=3,l=2,u=[],e=0,a=0,r;for(r=0;r<t.length;r+=1)if(m=t.charAt(r),Object.prototype.hasOwnProperty.call(d,m)||(d[m]=p++,_[m]=!0),x=f+m,Object.prototype.hasOwnProperty.call(d,x))f=x;else{if(Object.prototype.hasOwnProperty.call(_,f)){if(f.charCodeAt(0)<256){for(o=0;o<l;o++)e=e<<1,a==n-1?(a=0,u.push(s(e)),e=0):a++;for(i=f.charCodeAt(0),o=0;o<8;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1}else{for(i=1,o=0;o<l;o++)e=e<<1|i,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=0;for(i=f.charCodeAt(0),o=0;o<16;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1}h--,h==0&&(h=Math.pow(2,l),l++),delete _[f]}else for(i=d[f],o=0;o<l;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1;h--,h==0&&(h=Math.pow(2,l),l++),d[x]=p++,f=String(m)}if(f!==""){if(Object.prototype.hasOwnProperty.call(_,f)){if(f.charCodeAt(0)<256){for(o=0;o<l;o++)e=e<<1,a==n-1?(a=0,u.push(s(e)),e=0):a++;for(i=f.charCodeAt(0),o=0;o<8;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1}else{for(i=1,o=0;o<l;o++)e=e<<1|i,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=0;for(i=f.charCodeAt(0),o=0;o<16;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1}h--,h==0&&(h=Math.pow(2,l),l++),delete _[f]}else for(i=d[f],o=0;o<l;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1;h--,h==0&&(h=Math.pow(2,l),l++)}for(i=2,o=0;o<l;o++)e=e<<1|i&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,i=i>>1;for(;;)if(e=e<<1,a==n-1){u.push(s(e));break}else a++;return u.join("")},decompress:function(t){return t==null?"":t==""?null:v._decompress(t.length,32768,function(n){return t.charCodeAt(n)})},_decompress:function(t,n,s){var o=[],i=4,d=4,_=3,m="",x=[],f,h,p,l,u,e,a,r={val:s(0),position:n,index:1};for(f=0;f<3;f+=1)o[f]=f;for(p=0,u=Math.pow(2,2),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;switch(p){case 0:for(p=0,u=Math.pow(2,8),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;a=w(p);break;case 1:for(p=0,u=Math.pow(2,16),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;a=w(p);break;case 2:return""}for(o[3]=a,h=a,x.push(a);;){if(r.index>t)return"";for(p=0,u=Math.pow(2,_),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;switch(a=p){case 0:for(p=0,u=Math.pow(2,8),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;o[d++]=w(p),a=d-1,i--;break;case 1:for(p=0,u=Math.pow(2,16),e=1;e!=u;)l=r.val&r.position,r.position>>=1,r.position==0&&(r.position=n,r.val=s(r.index++)),p|=(l>0?1:0)*e,e<<=1;o[d++]=w(p),a=d-1,i--;break;case 2:return x.join("")}if(i==0&&(i=Math.pow(2,_),_++),o[a])m=o[a];else if(a===d)m=h+h.charAt(0);else return null;x.push(m),o[d++]=h+m.charAt(0),i--,h=m,i==0&&(i=Math.pow(2,_),_++)}}};return v}();O!=null?O.exports=c:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return c})})(D);var ce=D.exports;const V=ae(ce),de={class:"relative slidev-monaco-container"},fe=q({__name:"Monaco",props:{codeLz:{default:""},diffLz:{},lang:{default:"typescript"},readonly:{type:Boolean,default:!1},lineNumbers:{default:"off"},height:{default:"initial"},editorOptions:{},ata:{type:Boolean,default:!0},runnable:{type:Boolean,default:!1},writable:{},autorun:{type:[Boolean,String],default:!0},showOutputAt:{type:[null,Boolean,String,Number,Array]},outputHeight:{},highlightOutput:{type:Boolean,default:!0},runnerOptions:{}},setup(O){const c=O,w=te(()=>$(()=>import("./slidev/CodeRunner-Bkl2YGGR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(l=>l.default)),A=S(V.decompressFromBase64(c.codeLz).trimEnd()),b=c.diffLz&&S(V.decompressFromBase64(c.diffLz).trimEnd()),M=N(()=>c.writable&&!c.readonly&&!1),v={ts:"typescript",js:"javascript"}[c.lang]??c.lang,n={typescript:"mts",javascript:"mjs",ts:"mts",js:"mjs"}[c.lang]??c.lang,s=S(),o=S(),i=S(0),d=S(),_=N(()=>c.height==="auto"?`${i.value}px`:c.height==="initial"?`${d.value}px`:c.height),m=S(),{$page:x,$renderContext:f}=I(),{currentSlideNo:h}=se(),p=J(()=>Math.abs(x.value-h.value)<=1&&m.value,l=>{["slide","presenter"].includes(f.value)?l():setTimeout(l,5e3)});return F(async()=>{const{default:l}=await $(async()=>{const{default:g}=await import("./monaco/bundled-types-RT6HjJ-W.js").then(C=>C.u);return{default:g}},__vite__mapDeps([3,2,4,5])),{ata:u,monaco:e,editorOptions:a}=await l(),r=e.editor.createModel(A.value,v,e.Uri.parse(`file:///${Q()}.${n}`));r.onDidChangeContent(()=>A.value=r.getValue());const U={automaticLayout:!0,readOnly:c.readonly,lineNumbers:c.lineNumbers,minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:10,bottom:10},lineNumbersMinChars:3,bracketPairColorization:{enabled:!1},tabSize:2,fontSize:11.5,fontFamily:"var(--slidev-code-font-family)",scrollBeyondLastLine:!1,useInlineViewWhenSpaceIsLimited:!1,...a,...c.editorOptions};let y;if(b){const g=e.editor.createModel(b.value,v,e.Uri.parse(`file:///${Q()}.${n}`));g.onDidChangeContent(()=>A.value=r.getValue());const C=e.editor.createDiffEditor(o.value,{renderOverviewRuler:!1,...U});C.setModel({original:r,modified:g});const z=C.getOriginalEditor(),L=C.getModifiedEditor(),R=()=>{const W=Math.max(z.getContentHeight(),L.getContentHeight())+4;d.value??(d.value=W),i.value=W,j(()=>C.layout())};z.onDidContentSizeChange(R),L.onDidContentSizeChange(R),y=L}else{const g=e.editor.create(o.value,{model:r,lineDecorationsWidth:0,...U});g.onDidContentSizeChange(C=>{const z=C.contentHeight+4;d.value??(d.value=z),i.value=z,j(()=>y.layout())}),y=g}m.value=()=>{p(),$(()=>import("./monaco/bundled-types-RT6HjJ-W.js").then(g=>g.v),__vite__mapDeps([3,2,4,5])),c.ata&&(u(y.getValue()),y.onDidChangeModelContent(Y(1e3,()=>{u(y.getValue())})))};const K=y.layoutContentWidget.bind(y);y.layoutContentWidget=g=>{K(g),g.getId()==="editor.contrib.resizableContentHoverWidget"&&(g._resizableNode.domNode.style.transform=g._positionPreference===1?"translateY(calc(100% * (var(--slidev-slide-scale) - 1)))":"")},y.addAction({id:"slidev-save",label:"Save",keybindings:[e.KeyMod.CtrlCmd|e.KeyCode.KeyS],run:()=>{M.value,console.warn("[Slidev] this monaco editor is not writable, save action is ignored.")}}),j(()=>e.editor.remeasureFonts())}),(l,u)=>(T(),G("div",de,[E("div",{ref_key:"outer",ref:s,class:"relative slidev-monaco-container-inner",style:X({height:_.value})},[E("div",{ref_key:"container",ref:o,class:"absolute inset-0.5"},null,512)],4),c.runnable?(T(),Z(k(w),{key:0,modelValue:A.value,"onUpdate:modelValue":u[0]||(u[0]=e=>A.value=e),lang:k(v),autorun:c.autorun,"show-output-at":c.showOutputAt,height:c.outputHeight,"highlight-output":c.highlightOutput,"runner-options":c.runnerOptions},null,8,["modelValue","lang","autorun","show-output-at","height","highlight-output","runner-options"])):ee("v-if",!0)]))}}),pe=E("h1",null,"Code!",-1),he=E("h2",null,[P("We can execute some "),E("code",null,"code"),P("!")],-1),ve={__name:"slides.md__slidev_3",setup(O){const{$slidev:c,$nav:w,$clicksContext:A,$clicks:b,$page:M,$renderContext:B,$frontmatter:v}=I();return A.setup(),(t,n)=>{const s=fe;return T(),Z(ue,re(ie(k(le)(k(v),2))),{title:H(o=>[pe]),content:H(o=>[he,oe(s,ne({runnable:"","code-lz":"MYewdgziA2CmB00QHMAUAiAEraSAEA7iAE7QAmAhOgJQBQQA",lang:"ts"},{autorun:!0,editorOptions:{lineNumbers:"on"}}),null,16)]),_:1},16)}}},Me=ve;export{Me as default};
