const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/CodeRunner-4PtUq3D1.js","assets/modules/unplugin-icons-hQGhC-4O.js","assets/modules/vue-ili5zS5B.js","assets/monaco/bundled-types-D38EX5Mw.js","assets/modules/file-saver-igGfcqei.js","assets/monaco/bundled-types-ZmSvKqDd.css","assets/slidev/context-BLfhSwS_.js","assets/index-D4dyZXyh.js","assets/modules/shiki-CKj17wTN.js","assets/modules/shiki-BPvBenZD.css","assets/index-DL6fomBw.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-DE2jkamO.js","assets/CodeRunner-YBfxSSx9.css"])))=>i.map(i=>d[i]);
import{_ as L,k as V}from"./monaco/bundled-types-D38EX5Mw.js";import{d as Y,t as M,z as R,aE as I,S as q,n as k,o as W,b as F,e as $,h as G,c as J,I as H,g as Q,W as X}from"./modules/vue-ili5zS5B.js";import{a as P}from"./modules/file-saver-igGfcqei.js";import{a as ee,Y as N}from"./index-D4dyZXyh.js";import{u as te}from"./slidev/context-BLfhSwS_.js";var j={exports:{}};j.exports;(function(z){var c=function(){var x=String.fromCharCode,A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",O="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",C={};function E(t,n){if(!C[t]){C[t]={};for(var s=0;s<t.length;s++)C[t][t.charAt(s)]=s}return C[t][n]}var v={compressToBase64:function(t){if(t==null)return"";var n=v._compress(t,6,function(s){return A.charAt(s)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(t){return t==null?"":t==""?null:v._decompress(t.length,32,function(n){return E(A,t.charAt(n))})},compressToUTF16:function(t){return t==null?"":v._compress(t,15,function(n){return x(n+32)})+" "},decompressFromUTF16:function(t){return t==null?"":t==""?null:v._decompress(t.length,16384,function(n){return t.charCodeAt(n)-32})},compressToUint8Array:function(t){for(var n=v.compress(t),s=new Uint8Array(n.length*2),i=0,r=n.length;i<r;i++){var d=n.charCodeAt(i);s[i*2]=d>>>8,s[i*2+1]=d%256}return s},decompressFromUint8Array:function(t){if(t==null)return v.decompress(t);for(var n=new Array(t.length/2),s=0,i=n.length;s<i;s++)n[s]=t[s*2]*256+t[s*2+1];var r=[];return n.forEach(function(d){r.push(x(d))}),v.decompress(r.join(""))},compressToEncodedURIComponent:function(t){return t==null?"":v._compress(t,6,function(n){return O.charAt(n)})},decompressFromEncodedURIComponent:function(t){return t==null?"":t==""?null:(t=t.replace(/ /g,"+"),v._decompress(t.length,32,function(n){return E(O,t.charAt(n))}))},compress:function(t){return v._compress(t,16,function(n){return x(n)})},_compress:function(t,n,s){if(t==null)return"";var i,r,d={},y={},m="",_="",f="",h=2,p=3,l=2,u=[],e=0,a=0,o;for(o=0;o<t.length;o+=1)if(m=t.charAt(o),Object.prototype.hasOwnProperty.call(d,m)||(d[m]=p++,y[m]=!0),_=f+m,Object.prototype.hasOwnProperty.call(d,_))f=_;else{if(Object.prototype.hasOwnProperty.call(y,f)){if(f.charCodeAt(0)<256){for(i=0;i<l;i++)e=e<<1,a==n-1?(a=0,u.push(s(e)),e=0):a++;for(r=f.charCodeAt(0),i=0;i<8;i++)e=e<<1|r&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,r=r>>1}else{for(r=1,i=0;i<l;i++)e=e<<1|r,a==n-1?(a=0,u.push(s(e)),e=0):a++,r=0;for(r=f.charCodeAt(0),i=0;i<16;i++)e=e<<1|r&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,r=r>>1}h--,h==0&&(h=Math.pow(2,l),l++),delete y[f]}else for(r=d[f],i=0;i<l;i++)e=e<<1|r&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,r=r>>1;h--,h==0&&(h=Math.pow(2,l),l++),d[_]=p++,f=String(m)}if(f!==""){if(Object.prototype.hasOwnProperty.call(y,f)){if(f.charCodeAt(0)<256){for(i=0;i<l;i++)e=e<<1,a==n-1?(a=0,u.push(s(e)),e=0):a++;for(r=f.charCodeAt(0),i=0;i<8;i++)e=e<<1|r&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,r=r>>1}else{for(r=1,i=0;i<l;i++)e=e<<1|r,a==n-1?(a=0,u.push(s(e)),e=0):a++,r=0;for(r=f.charCodeAt(0),i=0;i<16;i++)e=e<<1|r&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,r=r>>1}h--,h==0&&(h=Math.pow(2,l),l++),delete y[f]}else for(r=d[f],i=0;i<l;i++)e=e<<1|r&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,r=r>>1;h--,h==0&&(h=Math.pow(2,l),l++)}for(r=2,i=0;i<l;i++)e=e<<1|r&1,a==n-1?(a=0,u.push(s(e)),e=0):a++,r=r>>1;for(;;)if(e=e<<1,a==n-1){u.push(s(e));break}else a++;return u.join("")},decompress:function(t){return t==null?"":t==""?null:v._decompress(t.length,32768,function(n){return t.charCodeAt(n)})},_decompress:function(t,n,s){var i=[],r=4,d=4,y=3,m="",_=[],f,h,p,l,u,e,a,o={val:s(0),position:n,index:1};for(f=0;f<3;f+=1)i[f]=f;for(p=0,u=Math.pow(2,2),e=1;e!=u;)l=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=s(o.index++)),p|=(l>0?1:0)*e,e<<=1;switch(p){case 0:for(p=0,u=Math.pow(2,8),e=1;e!=u;)l=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=s(o.index++)),p|=(l>0?1:0)*e,e<<=1;a=x(p);break;case 1:for(p=0,u=Math.pow(2,16),e=1;e!=u;)l=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=s(o.index++)),p|=(l>0?1:0)*e,e<<=1;a=x(p);break;case 2:return""}for(i[3]=a,h=a,_.push(a);;){if(o.index>t)return"";for(p=0,u=Math.pow(2,y),e=1;e!=u;)l=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=s(o.index++)),p|=(l>0?1:0)*e,e<<=1;switch(a=p){case 0:for(p=0,u=Math.pow(2,8),e=1;e!=u;)l=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=s(o.index++)),p|=(l>0?1:0)*e,e<<=1;i[d++]=x(p),a=d-1,r--;break;case 1:for(p=0,u=Math.pow(2,16),e=1;e!=u;)l=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=s(o.index++)),p|=(l>0?1:0)*e,e<<=1;i[d++]=x(p),a=d-1,r--;break;case 2:return _.join("")}if(r==0&&(r=Math.pow(2,y),y++),i[a])m=i[a];else if(a===d)m=h+h.charAt(0);else return null;_.push(m),i[d++]=h+m.charAt(0),r--,h=m,r==0&&(r=Math.pow(2,y),y++)}}};return v}();z!=null?z.exports=c:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return c})})(j);var oe=j.exports;const Z=P(oe),ne={class:"relative slidev-monaco-container"},ue=Y({__name:"Monaco",props:{codeLz:{default:""},diffLz:{},lang:{default:"typescript"},readonly:{type:Boolean,default:!1},lineNumbers:{default:"off"},height:{default:"initial"},editorOptions:{},ata:{type:Boolean,default:!0},runnable:{type:Boolean,default:!1},writable:{},autorun:{type:[Boolean,String],default:!0},showOutputAt:{type:[null,Boolean,String,Number,Array]},outputHeight:{},highlightOutput:{type:Boolean,default:!0},runnerOptions:{}},setup(z){const c=z,x=X(()=>L(()=>import("./slidev/CodeRunner-4PtUq3D1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(l=>l.default)),A=M(Z.decompressFromBase64(c.codeLz).trimEnd()),O=c.diffLz&&M(Z.decompressFromBase64(c.diffLz).trimEnd()),C=R(()=>c.writable&&!c.readonly&&!1),v={ts:"typescript",js:"javascript"}[c.lang]??c.lang,n={typescript:"mts",javascript:"mjs",ts:"mts",js:"mjs"}[c.lang]??c.lang,s=M(),i=M(),r=M(0),d=M(),y=R(()=>c.height==="auto"?`${r.value}px`:c.height==="initial"?`${d.value}px`:c.height),m=M(),{$page:_,$renderContext:f}=te(),{currentSlideNo:h}=ee(),p=I(()=>Math.abs(_.value-h.value)<=1&&m.value,l=>{["slide","presenter"].includes(f.value)?l():setTimeout(l,5e3)});return q(async()=>{const{default:l}=await L(async()=>{const{default:g}=await import("./monaco/bundled-types-D38EX5Mw.js").then(S=>S.u);return{default:g}},__vite__mapDeps([3,2,4,5])),{ata:u,monaco:e,editorOptions:a}=await l(),o=e.editor.createModel(A.value,v,e.Uri.parse(`file:///${N()}.${n}`));o.onDidChangeContent(()=>A.value=o.getValue());const D={automaticLayout:!0,readOnly:c.readonly,lineNumbers:c.lineNumbers,minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:10,bottom:10},lineNumbersMinChars:3,bracketPairColorization:{enabled:!1},tabSize:2,fontSize:11.5,fontFamily:"var(--slidev-code-font-family)",scrollBeyondLastLine:!1,useInlineViewWhenSpaceIsLimited:!1,...a,...c.editorOptions};let w;if(O){const g=e.editor.createModel(O.value,v,e.Uri.parse(`file:///${N()}.${n}`));g.onDidChangeContent(()=>A.value=o.getValue());const S=e.editor.createDiffEditor(i.value,{renderOverviewRuler:!1,...D});S.setModel({original:o,modified:g});const b=S.getOriginalEditor(),B=S.getModifiedEditor(),T=()=>{const U=Math.max(b.getContentHeight(),B.getContentHeight())+4;d.value??(d.value=U),r.value=U,k(()=>S.layout())};b.onDidContentSizeChange(T),B.onDidContentSizeChange(T),w=B}else{const g=e.editor.create(i.value,{model:o,lineDecorationsWidth:0,...D});g.onDidContentSizeChange(S=>{const b=S.contentHeight+4;d.value??(d.value=b),r.value=b,k(()=>w.layout())}),w=g}m.value=()=>{p(),L(()=>import("./monaco/bundled-types-D38EX5Mw.js").then(g=>g.v),__vite__mapDeps([3,2,4,5])),c.ata&&(u(w.getValue()),w.onDidChangeModelContent(V(1e3,()=>{u(w.getValue())})))};const K=w.layoutContentWidget.bind(w);w.layoutContentWidget=g=>{K(g),g.getId()==="editor.contrib.resizableContentHoverWidget"&&(g._resizableNode.domNode.style.transform=g._positionPreference===1?"translateY(calc(100% * (var(--slidev-slide-scale) - 1)))":"")},w.addAction({id:"slidev-save",label:"Save",keybindings:[e.KeyMod.CtrlCmd|e.KeyCode.KeyS],run:()=>{C.value,console.warn("[Slidev] this monaco editor is not writable, save action is ignored.")}}),k(()=>e.editor.remeasureFonts())}),(l,u)=>(W(),F("div",ne,[$("div",{ref_key:"outer",ref:s,class:"relative slidev-monaco-container-inner",style:G({height:y.value})},[$("div",{ref_key:"container",ref:i,class:"absolute inset-0.5"},null,512)],4),c.runnable?(W(),J(H(x),{key:0,modelValue:A.value,"onUpdate:modelValue":u[0]||(u[0]=e=>A.value=e),lang:H(v),autorun:c.autorun,"show-output-at":c.showOutputAt,height:c.outputHeight,"highlight-output":c.highlightOutput,"runner-options":c.runnerOptions},null,8,["modelValue","lang","autorun","show-output-at","height","highlight-output","runner-options"])):Q("v-if",!0)]))}});export{ue as _};
