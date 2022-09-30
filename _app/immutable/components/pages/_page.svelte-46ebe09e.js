import{L as F,M as ee,S as X,i as Y,s as Z,k as v,B as q,a as $,q as A,l as g,m as _,C as L,h as f,c as P,r as G,n as o,p as W,b as U,F as r,N as z,u as J,A as H,O as te,G as se,v as re,P as ae,w as oe,D as ne,x as le,f as ie,t as ce,y as de}from"../../chunks/index-2de73f54.js";import{w as ue}from"../../chunks/index-f3e07b20.js";function Q(e){return Object.prototype.toString.call(e)==="[object Date]"}function V(e,s,t,a){if(typeof t=="number"||Q(t)){const n=a-t,l=(t-s)/(e.dt||1/60),c=e.opts.stiffness*n,i=e.opts.damping*l,h=(c-i)*e.inv_mass,u=(l+h)*e.dt;return Math.abs(u)<e.opts.precision&&Math.abs(n)<e.opts.precision?a:(e.settled=!1,Q(t)?new Date(t.getTime()+u):t+u)}else{if(Array.isArray(t))return t.map((n,l)=>V(e,s[l],t[l],a[l]));if(typeof t=="object"){const n={};for(const l in t)n[l]=V(e,s[l],t[l],a[l]);return n}else throw new Error(`Cannot spring ${typeof t} values`)}}function fe(e,s={}){const t=ue(e),{stiffness:a=.15,damping:n=.8,precision:l=.01}=s;let c,i,h,u=e,k=e,T=1,S=0,E=!1;function O(m,p={}){k=m;const x=h={};if(e==null||p.hard||y.stiffness>=1&&y.damping>=1)return E=!0,c=F(),u=m,t.set(e=k),Promise.resolve();if(p.soft){const w=p.soft===!0?.5:+p.soft;S=1/(w*60),T=0}return i||(c=F(),E=!1,i=ee(w=>{if(E)return E=!1,i=null,!1;T=Math.min(T+S,1);const M={inv_mass:T,opts:y,settled:!0,dt:(w-c)*60/1e3},b=V(M,u,e,k);return c=w,u=e,t.set(e=b),M.settled&&(i=null),!M.settled})),new Promise(w=>{i.promise.then(()=>{x===h&&w()})})}const y={set:O,update:(m,p)=>O(m(k,e),p),subscribe:t.subscribe,stiffness:a,damping:n,precision:l};return y}function pe(e){let s,t,a,n,l,c,i,h,u=Math.floor(e[1]+1)+"",k,T,S,E=Math.floor(e[1])+"",O,y,m,p,x,w,M;return{c(){s=v("div"),t=v("button"),a=q("svg"),n=q("path"),l=$(),c=v("div"),i=v("div"),h=v("strong"),k=A(u),T=$(),S=v("strong"),O=A(E),y=$(),m=v("button"),p=q("svg"),x=q("path"),this.h()},l(b){s=g(b,"DIV",{class:!0});var d=_(s);t=g(d,"BUTTON",{"aria-label":!0,class:!0});var C=_(t);a=L(C,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var B=_(a);n=L(B,"path",{d:!0,class:!0}),_(n).forEach(f),B.forEach(f),C.forEach(f),l=P(d),c=g(d,"DIV",{class:!0});var N=_(c);i=g(N,"DIV",{class:!0,style:!0});var D=_(i);h=g(D,"STRONG",{class:!0,"aria-hidden":!0});var I=_(h);k=G(I,u),I.forEach(f),T=P(D),S=g(D,"STRONG",{class:!0});var R=_(S);O=G(R,E),R.forEach(f),D.forEach(f),N.forEach(f),y=P(d),m=g(d,"BUTTON",{"aria-label":!0,class:!0});var j=_(m);p=L(j,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var K=_(p);x=L(K,"path",{d:!0,class:!0}),_(x).forEach(f),K.forEach(f),j.forEach(f),d.forEach(f),this.h()},h(){o(n,"d","M0,0.5 L1,0.5"),o(n,"class","svelte-sx9eo4"),o(a,"aria-hidden","true"),o(a,"viewBox","0 0 1 1"),o(a,"class","svelte-sx9eo4"),o(t,"aria-label","Decrease the counter by one"),o(t,"class","svelte-sx9eo4"),o(h,"class","hidden svelte-sx9eo4"),o(h,"aria-hidden","true"),o(S,"class","svelte-sx9eo4"),o(i,"class","counter-digits svelte-sx9eo4"),W(i,"transform","translate(0, "+100*e[2]+"%)"),o(c,"class","counter-viewport svelte-sx9eo4"),o(x,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),o(x,"class","svelte-sx9eo4"),o(p,"aria-hidden","true"),o(p,"viewBox","0 0 1 1"),o(p,"class","svelte-sx9eo4"),o(m,"aria-label","Increase the counter by one"),o(m,"class","svelte-sx9eo4"),o(s,"class","counter svelte-sx9eo4")},m(b,d){U(b,s,d),r(s,t),r(t,a),r(a,n),r(s,l),r(s,c),r(c,i),r(i,h),r(h,k),r(i,T),r(i,S),r(S,O),r(s,y),r(s,m),r(m,p),r(p,x),w||(M=[z(t,"click",e[4]),z(m,"click",e[5])],w=!0)},p(b,[d]){d&2&&u!==(u=Math.floor(b[1]+1)+"")&&J(k,u),d&2&&E!==(E=Math.floor(b[1])+"")&&J(O,E),d&4&&W(i,"transform","translate(0, "+100*b[2]+"%)")},i:H,o:H,d(b){b&&f(s),w=!1,te(M)}}}function he(e,s){return(e%s+s)%s}function me(e,s,t){let a,n,l=0;const c=fe();se(e,c,u=>t(1,n=u));const i=()=>t(0,l-=1),h=()=>t(0,l+=1);return e.$$.update=()=>{e.$$.dirty&1&&c.set(l),e.$$.dirty&2&&t(2,a=he(n,1))},[l,n,a,c,i,h]}class _e extends X{constructor(s){super(),Y(this,s,me,pe,Z,{})}}function ve(e){let s,t,a,n,l,c,i,h,u,k,T,S,E,O,y,m,p,x,w,M,b;return M=new _e({}),{c(){s=v("meta"),t=$(),a=v("section"),n=v("h1"),l=v("span"),c=v("picture"),i=v("source"),h=$(),u=v("img"),T=A(`

		to your new`),S=v("br"),E=A("SvelteKit app"),O=$(),y=v("h2"),m=A("try editing "),p=v("strong"),x=A("src/routes/+page.svelte"),w=$(),re(M.$$.fragment),this.h()},l(d){const C=ae('[data-svelte="svelte-t32ptj"]',document.head);s=g(C,"META",{name:!0,content:!0}),C.forEach(f),t=P(d),a=g(d,"SECTION",{class:!0});var B=_(a);n=g(B,"H1",{class:!0});var N=_(n);l=g(N,"SPAN",{class:!0});var D=_(l);c=g(D,"PICTURE",{});var I=_(c);i=g(I,"SOURCE",{srcset:!0,type:!0}),h=P(I),u=g(I,"IMG",{src:!0,alt:!0,class:!0}),I.forEach(f),D.forEach(f),T=G(N,`

		to your new`),S=g(N,"BR",{}),E=G(N,"SvelteKit app"),N.forEach(f),O=P(B),y=g(B,"H2",{});var R=_(y);m=G(R,"try editing "),p=g(R,"STRONG",{});var j=_(p);x=G(j,"src/routes/+page.svelte"),j.forEach(f),R.forEach(f),w=P(B),oe(M.$$.fragment,B),B.forEach(f),this.h()},h(){document.title="Home",o(s,"name","description"),o(s,"content","Svelte demo app"),o(i,"srcset","svelte-welcome.webp"),o(i,"type","image/webp"),ne(u.src,k="svelte-welcome.png")||o(u,"src",k),o(u,"alt","Welcome"),o(u,"class","svelte-1egtvge"),o(l,"class","welcome svelte-1egtvge"),o(n,"class","svelte-1egtvge"),o(a,"class","svelte-1egtvge")},m(d,C){r(document.head,s),U(d,t,C),U(d,a,C),r(a,n),r(n,l),r(l,c),r(c,i),r(c,h),r(c,u),r(n,T),r(n,S),r(n,E),r(a,O),r(a,y),r(y,m),r(y,p),r(p,x),r(a,w),le(M,a,null),b=!0},p:H,i(d){b||(ie(M.$$.fragment,d),b=!0)},o(d){ce(M.$$.fragment,d),b=!1},d(d){f(s),d&&f(t),d&&f(a),de(M)}}}class ye extends X{constructor(s){super(),Y(this,s,null,ve,Z,{})}}export{ye as default};
