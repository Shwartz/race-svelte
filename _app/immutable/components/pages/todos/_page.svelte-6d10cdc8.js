import{R as Q,S as ct,i as dt,s as ft,k as y,a as M,q as ht,P as _t,l as E,h as k,c as N,m as I,r as pt,n as l,F as d,b as x,T as X,U as mt,d as vt,f as gt,t as bt,E as nt,V as yt,W as Et,X as wt,Y as Tt,Z as lt,O as kt,g as At,_ as Ot,A as Ut}from"../../../chunks/index-2de73f54.js";import{d as R}from"../../../chunks/singletons-d1dc2669.js";function it(f){const t=f-1;return t*t*t+1}R.disable_scroll_handling;R.goto;R.invalidate;const ut=R.invalidateAll;R.prefetch;R.prefetch_routes;R.before_navigate;R.after_navigate;const Mt=R.apply_action;function Y(f,t=()=>{}){const e=async({action:s,result:_})=>{_.type==="success"&&await ut(),(location.origin+location.pathname===s.origin+s.pathname||_.type==="redirect"||_.type==="error")&&Mt(_)};async function a(s){var T,h,g,O,r;s.preventDefault();const _=new URL((T=s.submitter)!=null&&T.hasAttribute("formaction")?s.submitter.formAction:f.action),m=new FormData(f),i=(h=s.submitter)==null?void 0:h.getAttribute("name");i&&m.append(i,(O=(g=s.submitter)==null?void 0:g.getAttribute("value"))!=null?O:"");const u=new AbortController;let p=!1;const w=(r=t({action:_,cancel:()=>p=!0,controller:u,data:m,form:f}))!=null?r:e;if(p)return;let b;try{b=await(await fetch(_,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},body:m,signal:u.signal})).json()}catch(n){if((n==null?void 0:n.name)==="AbortError")return;b={type:"error",error:n}}w({action:_,data:m,form:f,result:b,get type(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")},get location(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")},get error(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")}})}return f.addEventListener("submit",a),{destroy(){f.removeEventListener("submit",a)}}}function ot(f,{delay:t=0,duration:e=400,easing:a=it,start:s=0,opacity:_=0}={}){const m=getComputedStyle(f),i=+m.opacity,u=m.transform==="none"?"":m.transform,p=1-s,o=i*(1-_);return{delay:t,duration:e,easing:a,css:(w,b)=>`
			transform: ${u} scale(${1-p*b});
			opacity: ${i-o*b}
		`}}function Nt(f,{from:t,to:e},a={}){const s=getComputedStyle(f),_=s.transform==="none"?"":s.transform,[m,i]=s.transformOrigin.split(" ").map(parseFloat),u=t.left+t.width*m/e.width-(e.left+m),p=t.top+t.height*i/e.height-(e.top+i),{delay:o=0,duration:w=T=>Math.sqrt(T)*120,easing:b=it}=a;return{delay:o,duration:Q(w)?w(Math.sqrt(u*u+p*p)):w,easing:b,css:(T,h)=>{const g=h*u,O=h*p,r=T+h*t.width/e.width,n=T+h*t.height/e.height;return`transform: ${_} translate(${g}px, ${O}px) scale(${r}, ${n});`}}}function st(f,t,e){const a=f.slice();return a[5]=t[e],a[6]=t,a[7]=e,a}function rt(f,t){let e,a,s,_,m,i,u,p,o,w,b,T,h,g,O,r,n,c,B,F,D,P,S,j,Z,q,$,H,z,C,G,J=Ut,U,K,tt;function et(...A){return t[3](t[5],t[6],t[7],...A)}function at(){return t[4](t[5],t[6],t[7])}return{key:f,first:null,c(){e=y("div"),a=y("form"),s=y("input"),m=M(),i=y("input"),p=M(),o=y("button"),T=M(),h=y("form"),g=y("input"),r=M(),n=y("input"),B=M(),F=y("button"),D=M(),P=y("form"),S=y("input"),Z=M(),q=y("button"),z=M(),this.h()},l(A){e=E(A,"DIV",{class:!0});var v=I(e);a=E(v,"FORM",{action:!0,method:!0});var L=I(a);s=E(L,"INPUT",{type:!0,name:!0,class:!0}),m=N(L),i=E(L,"INPUT",{type:!0,name:!0,class:!0}),p=N(L),o=E(L,"BUTTON",{class:!0,"aria-label":!0}),I(o).forEach(k),L.forEach(k),T=N(v),h=E(v,"FORM",{class:!0,action:!0,method:!0});var V=I(h);g=E(V,"INPUT",{type:!0,name:!0,class:!0}),r=N(V),n=E(V,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),B=N(V),F=E(V,"BUTTON",{class:!0,"aria-label":!0}),I(F).forEach(k),V.forEach(k),D=N(v),P=E(v,"FORM",{action:!0,method:!0});var W=I(P);S=E(W,"INPUT",{type:!0,name:!0,class:!0}),Z=N(W),q=E(W,"BUTTON",{class:!0,"aria-label":!0}),I(q).forEach(k),W.forEach(k),z=N(v),v.forEach(k),this.h()},h(){l(s,"type","hidden"),l(s,"name","uid"),s.value=_=t[5].uid,l(s,"class","svelte-16nsat"),l(i,"type","hidden"),l(i,"name","done"),i.value=u=t[5].done?"":"true",l(i,"class","svelte-16nsat"),l(o,"class","toggle svelte-16nsat"),l(o,"aria-label",w="Mark todo as "+(t[5].done?"not done":"done")),l(a,"action","/todos?/toggle"),l(a,"method","post"),l(g,"type","hidden"),l(g,"name","uid"),g.value=O=t[5].uid,l(g,"class","svelte-16nsat"),l(n,"aria-label","Edit todo"),l(n,"type","text"),l(n,"name","text"),n.value=c=t[5].text,l(n,"class","svelte-16nsat"),l(F,"class","save svelte-16nsat"),l(F,"aria-label","Save todo"),l(h,"class","text svelte-16nsat"),l(h,"action","/todos?/edit"),l(h,"method","post"),l(S,"type","hidden"),l(S,"name","uid"),S.value=j=t[5].uid,l(S,"class","svelte-16nsat"),l(q,"class","delete svelte-16nsat"),l(q,"aria-label","Delete todo"),q.disabled=$=t[5].pending_delete,l(P,"action","/todos?/delete"),l(P,"method","post"),l(e,"class","todo svelte-16nsat"),nt(e,"done",t[5].done),this.first=e},m(A,v){x(A,e,v),d(e,a),d(a,s),d(a,m),d(a,i),d(a,p),d(a,o),d(e,T),d(e,h),d(h,g),d(h,r),d(h,n),d(h,B),d(h,F),d(e,D),d(e,P),d(P,S),d(P,Z),d(P,q),d(e,z),U=!0,K||(tt=[X(b=Y.call(null,a,et)),X(Y.call(null,h)),X(H=Y.call(null,P,at))],K=!0)},p(A,v){t=A,(!U||v&1&&_!==(_=t[5].uid))&&(s.value=_),(!U||v&1&&u!==(u=t[5].done?"":"true"))&&(i.value=u),(!U||v&1&&w!==(w="Mark todo as "+(t[5].done?"not done":"done")))&&l(o,"aria-label",w),b&&Q(b.update)&&v&1&&b.update.call(null,et),(!U||v&1&&O!==(O=t[5].uid))&&(g.value=O),(!U||v&1&&c!==(c=t[5].text)&&n.value!==c)&&(n.value=c),(!U||v&1&&j!==(j=t[5].uid))&&(S.value=j),(!U||v&1&&$!==($=t[5].pending_delete))&&(q.disabled=$),H&&Q(H.update)&&v&1&&H.update.call(null,at),(!U||v&1)&&nt(e,"done",t[5].done)},r(){G=e.getBoundingClientRect()},f(){yt(e),J(),Et(e,G)},a(){J(),J=wt(e,G,Nt,{duration:200})},i(A){U||(A&&Tt(()=>{C||(C=lt(e,ot,{start:.7},!0)),C.run(1)}),U=!0)},o(A){A&&(C||(C=lt(e,ot,{start:.7},!1)),C.run(0)),U=!1},d(A){A&&k(e),A&&C&&C.end(),K=!1,kt(tt)}}}function Pt(f){let t,e,a,s,_,m,i,u,p,o=[],w=new Map,b,T,h,g=f[0];const O=r=>r[5].uid;for(let r=0;r<g.length;r+=1){let n=st(f,g,r),c=O(n);w.set(c,o[r]=rt(c,n))}return{c(){t=y("meta"),e=M(),a=y("div"),s=y("h1"),_=ht("Todos"),m=M(),i=y("form"),u=y("input"),p=M();for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){const n=_t('[data-svelte="svelte-aw2gey"]',document.head);t=E(n,"META",{name:!0,content:!0}),n.forEach(k),e=N(r),a=E(r,"DIV",{class:!0});var c=I(a);s=E(c,"H1",{});var B=I(s);_=pt(B,"Todos"),B.forEach(k),m=N(c),i=E(c,"FORM",{class:!0,action:!0,method:!0});var F=I(i);u=E(F,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),F.forEach(k),p=N(c);for(let D=0;D<o.length;D+=1)o[D].l(c);c.forEach(k),this.h()},h(){document.title="Todos",l(t,"name","description"),l(t,"content","A todo list app"),l(u,"name","text"),l(u,"aria-label","Add todo"),l(u,"placeholder","+ tap to add a todo"),l(u,"class","svelte-16nsat"),l(i,"class","new svelte-16nsat"),l(i,"action","/todos?/add"),l(i,"method","post"),l(a,"class","todos svelte-16nsat")},m(r,n){d(document.head,t),x(r,e,n),x(r,a,n),d(a,s),d(s,_),d(a,m),d(a,i),d(i,u),d(a,p);for(let c=0;c<o.length;c+=1)o[c].m(a,null);b=!0,T||(h=X(Y.call(null,i,f[2])),T=!0)},p(r,[n]){if(n&1){g=r[0],At();for(let c=0;c<o.length;c+=1)o[c].r();o=mt(o,n,O,1,r,g,w,a,Ot,rt,null,st);for(let c=0;c<o.length;c+=1)o[c].a();vt()}},i(r){if(!b){for(let n=0;n<g.length;n+=1)gt(o[n]);b=!0}},o(r){for(let n=0;n<o.length;n+=1)bt(o[n]);b=!1},d(r){k(t),r&&k(e),r&&k(a);for(let n=0;n<o.length;n+=1)o[n].d();T=!1,h()}}}function It(f,t,e){let a,{data:s}=t;const _=()=>({form:u,result:p})=>{p.type==="success"&&(u.reset(),ut())},m=(u,p,o,{data:w})=>{e(0,p[o].done=!!w.get("done"),a)},i=(u,p,o)=>{e(0,p[o].pending_delete=!0,a)};return f.$$set=u=>{"data"in u&&e(1,s=u.data)},f.$$.update=()=>{f.$$.dirty&2&&e(0,a=s.todos)},[a,s,_,m,i]}class St extends ct{constructor(t){super(),dt(this,t,It,Pt,ft,{data:1})}}export{St as default};