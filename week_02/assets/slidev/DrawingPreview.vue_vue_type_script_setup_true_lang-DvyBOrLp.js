import{t as $,z as b,I as F,d as pt,ax as Ut,ay as Vt,az as A,o as Z,b as gt,e as Gt,f as xt,h as ht,ac as Ht,l as _t,c as qt,au as Xt,i as Yt,X as Zt,B as ot,aA as Qt,O as Jt,y as Wt,n as te,E as ee,g as se}from"../modules/vue-BWpDFgbh.js";import{J as re,a as At,E as wt,K as ne,N as ie,_ as Ft,O as oe,P as ae,Q as le,R as he,S as ue,T as ce,U as de,V as at,W as St,X as fe,D as pe}from"../index-CSQFaWpZ.js";import{e as bt,h as Pt,j as Et,c as ut}from"../monaco/bundled-types-8JGFrJsO.js";function ge(t){var e;return{info:$(((e=re(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const lt={};function rs(t){function e(s){return lt[s]??(lt[s]=ge(s))}return{info:b({get(){return e(F(t)).info.value},set(s){e(F(t)).info.value=s}}),update:async(s,r)=>{const n=e(r??F(t)),i=await n.update(s);return i&&(n.info.value=i),i}}}const me=["id"],ve=["id"],ye=pt({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{isPrintMode:s}=At(),r=$(null),n=Ut(r),i=$(null),a=b(()=>e.width??n.width.value),o=b(()=>e.width?e.width/bt.value:n.height.value),l=b(()=>wt.value&&!s.value?+wt.value:Math.min(a.value/Pt.value,o.value/Et.value)),p=b(()=>({height:`${Et.value}px`,width:`${Pt.value}px`,transform:`translate(-50%, -50%) scale(${l.value})`,"--slidev-slide-scale":l.value})),y=b(()=>e.width?{width:`${e.width}px`,height:`${e.width/bt.value}px`}:{});return e.isMain&&Vt(b(()=>`:root { --slidev-slide-scale: ${l.value}; }`)),A(ne,l),A(ie,i),(v,S)=>(Z(),gt("div",{id:t.isMain?"slide-container":void 0,ref_key:"container",ref:r,class:"slidev-slide-container",style:ht(y.value)},[Gt("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:i,class:"slidev-slide-content",style:ht(p.value)},[xt(v.$slots,"default",{},void 0,!0)],12,ve),xt(v.$slots,"controls",{},void 0,!0)],12,me))}}),ns=Ft(ye,[["__scopeId","data-v-132039ff"]]),is={render:()=>[]},os={render:()=>[]},xe={render:()=>[]},_e={render:()=>[]},we=["data-slidev-no"],Se=pt({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,s=b(()=>{var i,a;return((a=(i=e.route.meta)==null?void 0:i.slide)==null?void 0:a.frontmatter.zoom)??1});A(oe,e.route),A(ae,e.route.meta.slide.frontmatter),A(le,$(e.route.no)),A(he,$(e.renderContext)),A(ue,Ht(e,"clicksContext")),A(ce,s);const r=b(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),n=b(()=>({...r.value,"user-select":ut.selectable?void 0:"none"}));return(i,a)=>(Z(),gt("div",{"data-slidev-no":e.route.no,class:Yt(F(de)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:ht(n.value)},[_t(F(_e)),(Z(),qt(Xt(e.route.component))),_t(F(xe))],14,we))}}),as=Ft(Se,[["__scopeId","data-v-f65fa52c"]]);var be=Object.defineProperty,Mt=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,Lt=(t,e,s)=>e in t?be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,ct=(t,e)=>{for(var s in e||(e={}))Pe.call(e,s)&&Lt(t,s,e[s]);if(Mt)for(var s of Mt(e))Ee.call(e,s)&&Lt(t,s,e[s]);return t},Me=()=>({emit(t,...e){for(let s=0,r=this.events[t]||[],n=r.length;s<n;s++)r[s](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var r;this.events[t]=(r=this.events[t])==null?void 0:r.filter(n=>e!==n)}}});function $t(t,e,s,r=n=>n){return t*r(.5-e*(.5-s))}function Le(t){return[-t[0],-t[1]]}function L(t,e){return[t[0]+e[0],t[1]+e[1]]}function P(t,e){return[t[0]-e[0],t[1]-e[1]]}function M(t,e){return[t[0]*e,t[1]*e]}function $e(t,e){return[t[0]/e,t[1]/e]}function V(t){return[t[1],-t[0]]}function Ct(t,e){return t[0]*e[0]+t[1]*e[1]}function Ce(t,e){return t[0]===e[0]&&t[1]===e[1]}function ke(t){return Math.hypot(t[0],t[1])}function De(t){return t[0]*t[0]+t[1]*t[1]}function kt(t,e){return De(P(t,e))}function Tt(t){return $e(t,ke(t))}function Ie(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function G(t,e,s){let r=Math.sin(s),n=Math.cos(s),i=t[0]-e[0],a=t[1]-e[1],o=i*n-a*r,l=i*r+a*n;return[o+e[0],l+e[1]]}function dt(t,e,s){return L(t,M(P(e,t),s))}function Dt(t,e,s){return L(t,M(e,s))}var{min:j,PI:Ne}=Math,It=.275,H=Ne+1e-4;function Ae(t,e={}){let{size:s=16,smoothing:r=.5,thinning:n=.5,simulatePressure:i=!0,easing:a=u=>u,start:o={},end:l={},last:p=!1}=e,{cap:y=!0,easing:v=u=>u*(2-u)}=o,{cap:S=!0,easing:f=u=>--u*u*u+1}=l;if(t.length===0||s<=0)return[];let d=t[t.length-1].runningLength,c=o.taper===!1?0:o.taper===!0?Math.max(s,d):o.taper,E=l.taper===!1?0:l.taper===!0?Math.max(s,d):l.taper,R=Math.pow(s*r,2),k=[],h=[],x=t.slice(0,10).reduce((u,w)=>{let g=w.pressure;if(i){let m=j(1,w.distance/s),rt=j(1,1-m);g=j(1,u+(rt-u)*(m*It))}return(u+g)/2},t[0].pressure),_=$t(s,n,t[t.length-1].pressure,a),W,tt=t[0].vector,B=t[0].point,q=B,T=B,K=q,et=!1;for(let u=0;u<t.length;u++){let{pressure:w}=t[u],{point:g,vector:m,distance:rt,runningLength:U}=t[u];if(u<t.length-1&&d-U<3)continue;if(n){if(i){let N=j(1,rt/s),it=j(1,1-N);w=j(1,x+(it-x)*(N*It))}_=$t(s,n,w,a)}else _=s/2;W===void 0&&(W=_);let jt=U<c?v(U/c):1,Ot=d-U<E?f((d-U)/E):1;_=Math.max(.01,_*Math.min(jt,Ot));let mt=(u<t.length-1?t[u+1]:t[u]).vector,nt=u<t.length-1?Ct(m,mt):1,Bt=Ct(m,tt)<0&&!et,vt=nt!==null&&nt<0;if(Bt||vt){let N=M(V(tt),_);for(let it=1/13,Y=0;Y<=1;Y+=it)T=G(P(g,N),g,H*Y),k.push(T),K=G(L(g,N),g,H*-Y),h.push(K);B=T,q=K,vt&&(et=!0);continue}if(et=!1,u===t.length-1){let N=M(V(m),_);k.push(P(g,N)),h.push(L(g,N));continue}let yt=M(V(dt(mt,m,nt)),_);T=P(g,yt),(u<=1||kt(B,T)>R)&&(k.push(T),B=T),K=L(g,yt),(u<=1||kt(q,K)>R)&&(h.push(K),q=K),x=w,tt=m}let D=t[0].point.slice(0,2),I=t.length>1?t[t.length-1].point.slice(0,2):L(t[0].point,[1,1]),st=[],X=[];if(t.length===1){if(!(c||E)||p){let u=Dt(D,Tt(V(P(D,I))),-(W||_)),w=[];for(let g=1/13,m=g;m<=1;m+=g)w.push(G(u,D,H*2*m));return w}}else{if(!(c||E&&t.length===1))if(y)for(let w=1/13,g=w;g<=1;g+=w){let m=G(h[0],D,H*g);st.push(m)}else{let w=P(k[0],h[0]),g=M(w,.5),m=M(w,.51);st.push(P(D,g),P(D,m),L(D,m),L(D,g))}let u=V(Le(t[t.length-1].vector));if(E||c&&t.length===1)X.push(I);else if(S){let w=Dt(I,u,_);for(let g=1/29,m=g;m<1;m+=g)X.push(G(w,I,H*3*m))}else X.push(L(I,M(u,_)),L(I,M(u,_*.99)),P(I,M(u,_*.99)),P(I,M(u,_)))}return k.concat(X,h.reverse(),st)}function Fe(t,e={}){var s;let{streamline:r=.5,size:n=16,last:i=!1}=e;if(t.length===0)return[];let a=.15+(1-r)*.85,o=Array.isArray(t[0])?t:t.map(({x:f,y:d,pressure:c=.5})=>[f,d,c]);if(o.length===2){let f=o[1];o=o.slice(0,-1);for(let d=1;d<5;d++)o.push(dt(o[0],f,d/4))}o.length===1&&(o=[...o,[...L(o[0],[1,1]),...o[0].slice(2)]]);let l=[{point:[o[0][0],o[0][1]],pressure:o[0][2]>=0?o[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,y=0,v=l[0],S=o.length-1;for(let f=1;f<o.length;f++){let d=i&&f===S?o[f].slice(0,2):dt(v.point,o[f],a);if(Ce(v.point,d))continue;let c=Ie(d,v.point);if(y+=c,f<S&&!p){if(y<n)continue;p=!0}v={point:d,pressure:o[f][2]>=0?o[f][2]:.5,vector:Tt(P(v.point,d)),distance:c,runningLength:y},l.push(v)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function Te(t,e={}){return Ae(Fe(t,e),e)}function Q(t,e){return t-e}function Ke(t){return t<0?-1:1}function J(t){return[Math.abs(t),Ke(t)]}function Kt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var ze=2,C=ze,O=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,r;const n=this.drauu.el,i=(e=this.drauu.options.coordinateScale)!=null?e:1,a=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-o.left+a.x)*i,y:(t.pageY-o.top+a.y)*i,pressure:t.pressure}}else{const o=this.drauu.svgPoint;o.x=t.clientX+a.x,o.y=t.clientY+a.y;const l=o.matrixTransform((r=n.getScreenCTM())==null?void 0:r.inverse());return{x:l.x*i,y:l.y*i,pressure:t.pressure}}}createElement(t,e){var s;const r=document.createElementNS("http://www.w3.org/2000/svg",t),n=e?ct(ct({},this.brush),e):this.brush;return r.setAttribute("fill",(s=n.fill)!=null?s:"transparent"),r.setAttribute("stroke",n.color),r.setAttribute("stroke-width",n.size.toString()),r.setAttribute("stroke-linecap","round"),n.dasharray&&r.setAttribute("stroke-dasharray",n.dasharray),r}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(C))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Re=class zt extends O{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return zt.getSvgData(e,this.brush)}static getSvgData(e,s){const r=Te(e,ct({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!r.length)return"";const n=r.reduce((i,[a,o],l,p)=>{const[y,v]=p[(l+1)%p.length];return i.push(a,o,(a+y)/2,(o+v)/2),i},["M",...r[0],"Q"]);return n.push("Z"),n.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}},je=class extends O{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=J(t.x-this.start.x),[r,n]=J(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,r);e=i,r=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",r);else{const[i,a]=[this.start.x,this.start.x+e*s].sort(Q),[o,l]=[this.start.y,this.start.y+r*n].sort(Q);this.attr("cx",(i+a)/2),this.attr("cy",(o+l)/2),this.attr("rx",(a-i)/2),this.attr("ry",(l-o)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Rt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("fill",e),r.setAttribute("id",t),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),n.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(n),s.appendChild(r),s}var Oe=class extends O{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Kt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Rt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const r=t.x-this.start.x,n=t.y-this.start.y;if(n!==0){let i=r/n;i=Math.round(i),Math.abs(i)<=1?(e=this.start.x+n*i,s=this.start.y+n):(e=this.start.x+r,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},Be=class extends O{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=J(t.x-this.start.x),[r,n]=J(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,r);e=i,r=i}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-r),this.attr("width",e*2),this.attr("height",r*2);else{const[i,a]=[this.start.x,this.start.x+e*s].sort(Q),[o,l]=[this.start.y,this.start.y+r*n].sort(Q);this.attr("x",i),this.attr("y",o),this.attr("width",a-i),this.attr("height",l-o)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ue(t,e){const s=t.x-e.x,r=t.y-e.y;return s*s+r*r}function Ve(t,e,s){let r=e.x,n=e.y,i=s.x-r,a=s.y-n;if(i!==0||a!==0){const o=((t.x-r)*i+(t.y-n)*a)/(i*i+a*a);o>1?(r=s.x,n=s.y):o>0&&(r+=i*o,n+=a*o)}return i=t.x-r,a=t.y-n,i*i+a*a}function Ge(t,e){let s=t[0];const r=[s];let n;for(let i=1,a=t.length;i<a;i++)n=t[i],Ue(n,s)>e&&(r.push(n),s=n);return s!==n&&n&&r.push(n),r}function ft(t,e,s,r,n){let i=r,a=0;for(let o=e+1;o<s;o++){const l=Ve(t[o],t[e],t[s]);l>i&&(a=o,i=l)}i>r&&(a-e>1&&ft(t,e,a,r,n),n.push(t[a]),s-a>1&&ft(t,a,s,r,n))}function He(t,e){const s=t.length-1,r=[t[0]];return ft(t,0,s,e,r),r.push(t[s]),r}function Nt(t,e,s=!1){if(t.length<=2)return t;const r=e*e;return t=s?t:Ge(t,r),t=He(t,r),t}var qe=class z extends O{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Kt();const s=Rt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Nt(this.points,1,!0),this.count=0),this.attr("d",z.toSvgData(this.points)),!0}onEnd(){const e=this.el;if(this.el=null,!e)return!1;if(e.setAttribute("d",z.toSvgData(Nt(this.points,1,!0))),!e.getTotalLength()){const{x:s,y:r}=this.points[0],n=this.brush.size/2;e.setAttribute("d",`M ${s-n} ${r} a ${n},${n} 0 1,0 ${n*2},0 a ${n},${n} 0 1,0 ${-n*2},0`),e.setAttribute("fill",this.brush.color),e.setAttribute("stroke-width","0")}return!0}static line(e,s){const r=s.x-e.x,n=s.y-e.y;return{length:Math.sqrt(r**2+n**2),angle:Math.atan2(n,r)}}static controlPoint(e,s,r,n){const i=s||e,a=r||e,o=.2,l=z.line(i,a),p=l.angle+(n?Math.PI:0),y=l.length*o,v=e.x+Math.cos(p)*y,S=e.y+Math.sin(p)*y;return{x:v,y:S}}static bezierCommand(e,s,r){const n=z.controlPoint(r[s-1],r[s-2],e),i=z.controlPoint(e,r[s-1],r[s+1],!0);return`C ${n.x.toFixed(C)},${n.y.toFixed(C)} ${i.x.toFixed(C)},${i.y.toFixed(C)} ${e.x.toFixed(C)},${e.y.toFixed(C)}`}static toSvgData(e){return e.reduce((s,r,n,i)=>n===0?`M ${r.x.toFixed(C)},${r.y.toFixed(C)}`:`${s} ${z.bezierCommand(r,n,i)}`,"")}},Xe=class extends O{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,r)=>{if(s&&s.length)for(let n=0;n<s.length;n++){const i=s[n];if(i.getTotalLength){const a=i.getTotalLength();for(let o=0;o<this.pathSubFactor;o++){const l=i.getPointAtLength(a*o/this.pathSubFactor),p=i.getPointAtLength(a*(o+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:p.x,y1:l.y,y2:p.y,segment:o,element:r||i})}}else i.children&&e(i.children,i)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,r=t.x2,n=e.x1,i=e.x2,a=t.y1,o=t.y2,l=e.y1,p=e.y2,y=(s-r)*(l-p)-(a-o)*(n-i),v=(s*o-a*r)*(n-i)-(s-r)*(n*p-l*i),S=(s*o-a*r)*(l-p)-(a-o)*(n*p-l*i),f=(d,c,E)=>d>=c&&d<=E?!0:d>=E&&d<=c;if(y===0)return!1;{const d={x:v/y,y:S/y};return f(d.x,s,r)&&f(d.y,a,o)&&f(d.x,n,i)&&f(d.y,l,p)}}};function Ye(t){return{draw:new qe(t),stylus:new Re(t),line:new Oe(t),rectangle:new Be(t),ellipse:new je(t),eraseLine:new Xe(t)}}var Ze=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Me(),this._originalPointerId=null,this._models=Ye(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const r=this.resolveSelector(e)||this.el,n=this.eventStart.bind(this),i=this.eventMove.bind(this),a=this.eventEnd.bind(this),o=this.eventKeyboard.bind(this);r.addEventListener("pointerdown",n,{passive:!1}),s.addEventListener("pointermove",i,{passive:!1}),s.addEventListener("pointerup",a,{passive:!1}),s.addEventListener("pointercancel",a,{passive:!1}),s.addEventListener("keydown",o,!1),s.addEventListener("keyup",o,!1),this._disposables.push(()=>{r.removeEventListener("pointerdown",n),s.removeEventListener("pointermove",i),s.removeEventListener("pointerup",a),s.removeEventListener("pointercancel",a),s.removeEventListener("keydown",o,!1),s.removeEventListener("keyup",o,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)})}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this._elements=[],this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const r=this._elements[s];if(r){r.after(t);return}}this.el.prepend(t)}};function Qe(t){return new Ze(t)}const Je=Zt(()=>{const{currentSlideNo:t,isPresenter:e}=At(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],r=ot("slidev-drawing-enabled",!1),n=ot("slidev-drawing-pinned",!1),i=Qt(ot("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),a=$(!1),o=$(!1),l=$(!1),p=$(!1),y=$("stylus"),v=b(()=>ut.drawings.syncAll||e.value);let S=!1;const f=b({get(){return y.value},set(h){y.value=h,h==="arrow"?(c.mode="line",i.arrowEnd=!0):(c.mode=h,i.arrowEnd=!1)}}),d=Jt({brush:i,acceptsInputTypes:b(()=>r.value&&(!ut.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=Wt(Qe(d));function E(){c.clear(),v.value&&St(t.value,"")}function R(){var h;l.value=c.canRedo(),o.value=c.canUndo(),p.value=!!((h=c.el)!=null&&h.children.length)}function k(h){S=!0;const x=at[h||t.value];x!=null?c.load(x):c.clear(),R(),S=!1}return c.on("changed",()=>{if(R(),!S){const h=c.dump(),x=t.value;(at[x]||"")!==h&&v.value&&St(x,c.dump())}}),fe(h=>{S=!0,h[t.value]!=null&&c.load(h[t.value]||""),S=!1,R()}),te(()=>{ee(t,()=>{c.mounted&&k()},{immediate:!0})}),c.on("start",()=>a.value=!0),c.on("end",()=>a.value=!1),window.addEventListener("keydown",h=>{if(!r.value||pe.value)return;const x=!h.ctrlKey&&!h.altKey&&!h.shiftKey&&!h.metaKey;let _=!0;h.code==="KeyZ"&&(h.ctrlKey||h.metaKey)?h.shiftKey?c.redo():c.undo():h.code==="Escape"?r.value=!1:h.code==="KeyL"&&x?f.value="line":h.code==="KeyA"&&x?f.value="arrow":h.code==="KeyS"&&x?f.value="stylus":h.code==="KeyR"&&x?f.value="rectangle":h.code==="KeyE"&&x?f.value="ellipse":h.code==="KeyC"&&x?E():h.code.startsWith("Digit")&&x&&+h.code[5]<=s.length?i.color=s[+h.code[5]-1]:_=!1,_&&(h.preventDefault(),h.stopPropagation())},!1),{brush:i,brushColors:s,canClear:p,canRedo:l,canUndo:o,clear:E,drauu:c,drauuOptions:d,drawingEnabled:r,drawingMode:f,drawingPinned:n,drawingState:at,isDrawing:a,loadCanvas:k}}),We=["innerHTML"],ls=pt({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=Je();return(s,r)=>F(e)[s.page]?(Z(),gt("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:F(e)[s.page]},null,8,We)):se("v-if",!0)}});export{os as G,as as S,ls as _,ns as a,ge as b,Je as c,is as d,rs as u};
