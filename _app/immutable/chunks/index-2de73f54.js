function E(){}const Y=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function U(){return Object.create(null)}function k(t){t.forEach(Z)}function J(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function Gt(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(gt(e,n))}function Kt(t,e,n,s){if(t){const r=tt(t,e,n,s);return t[0](r)}}function tt(t,e,n,s){return t[1]&&s?pt(n.ctx.slice(),t[1](s(e))):n.ctx}function Qt(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],i=Math.max(e.dirty.length,r.length);for(let l=0;l<i;l+=1)c[l]=e.dirty[l]|r[l];return c}return e.dirty|r}return e.dirty}function Ut(t,e,n,s,r,c){if(r){const i=tt(e,n,s,c);t.p(i,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Xt(t){return t&&J(t.destroy)?t.destroy:E}const et=typeof window<"u";let nt=et?()=>window.performance.now():()=>Date.now(),K=et?t=>requestAnimationFrame(t):E;const S=new Set;function it(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&K(it)}function rt(t){let e;return S.size===0&&K(it),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let z=!1;function xt(){z=!0}function bt(){z=!1}function wt(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,d=(r>0&&e[n[r]].claim_order<=u?r+1:wt(1,r,a=>e[n[a]].claim_order,u))-1;s[o]=n[d]+1;const f=d+1;n[f]=o,r=Math.max(f,r)}const c=[],i=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=s[o-1]){for(c.push(e[o-1]);l>=o;l--)i.push(e[l]);l--}for(;l>=0;l--)i.push(e[l]);c.reverse(),i.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<i.length;o++){for(;u<c.length&&i[o].claim_order>=c[u].claim_order;)u++;const d=u<c.length?c[u]:null;t.insertBefore(i[o],d)}}function vt(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=lt("style");return St(st(t),e),e.sheet}function St(t,e){return vt(t.head||t,e),e.sheet}function kt(t,e){if(z){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){z&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function lt(t){return document.createElement(t)}function Ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function te(){return Q(" ")}function ee(){return Q("")}function ne(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function ie(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,s,r=!1){At(t);const c=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const l=t[i];if(e(l)){const o=n(l);return o===void 0?t.splice(i,1):t[i]=o,r||(t.claim_info.last_index=i),l}}for(let i=t.claim_info.last_index-1;i>=0;i--){const l=t[i];if(e(l)){const o=n(l);return o===void 0?t.splice(i,1):t[i]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,l}}return s()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ut(t,e,n,s){return ct(t,r=>r.nodeName===e,r=>{const c=[];for(let i=0;i<r.attributes.length;i++){const l=r.attributes[i];n[l.name]||c.push(l.name)}c.forEach(i=>r.removeAttribute(i))},()=>s(e))}function re(t,e,n){return ut(t,e,n,lt)}function se(t,e,n){return ut(t,e,n,Ct)}function Mt(t,e){return ct(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>Q(e),!0)}function oe(t){return Mt(t," ")}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function ae(t,e=document.body){return Array.from(e.querySelectorAll(t))}const D=new Map;let L=0;function Rt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:Et(e),rules:{}};return D.set(t,n),n}function W(t,e,n,s,r,c,i,l=0){const o=16.666/s;let u=`{
`;for(let p=0;p<=1;p+=o){const y=e+(n-e)*c(p);u+=p*100+`%{${i(y,1-y)}}
`}const d=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Rt(d)}_${l}`,a=st(t),{stylesheet:_,rules:h}=D.get(a)||qt(a,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${s}ms linear ${r}ms 1 both`,L+=1,f}function at(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),L-=r,L||Bt())}function Bt(){K(()=>{L||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ot(e)}),D.clear())})}function fe(t,e,n,s){if(!e)return E;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return E;const{delay:c=0,duration:i=300,easing:l=Y,start:o=nt()+c,end:u=o+i,tick:d=E,css:f}=n(t,{from:e,to:r},s);let a=!0,_=!1,h;function g(){f&&(h=W(t,0,1,i,c,l,f)),c||(_=!0)}function p(){f&&at(t,h),a=!1}return rt(y=>{if(!_&&y>=o&&(_=!0),_&&y>=u&&(d(1,0),p()),!a)return!1;if(_){const $=y-o,x=0+1*l($/i);d(x,1-x)}return!0}),g(),d(0,1),p}function _e(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,Ot(t,r)}}function Ot(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),r=s.transform==="none"?"":s.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let M;function A(t){M=t}function ft(){if(!M)throw new Error("Function called outside component initialization");return M}function de(t){ft().$$.on_mount.push(t)}function he(t){ft().$$.after_update.push(t)}const N=[],V=[],O=[],X=[],_t=Promise.resolve();let G=!1;function dt(){G||(G=!0,_t.then(ht))}function me(){return dt(),_t}function T(t){O.push(t)}const H=new Set;let B=0;function ht(){const t=M;do{for(;B<N.length;){const e=N[B];B++,A(e),Pt(e.$$)}for(A(null),N.length=0,B=0;V.length;)V.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];H.has(n)||(H.add(n),n())}O.length=0}while(N.length);for(;X.length;)X.pop()();G=!1,H.clear(),A(t)}function Pt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let C;function Dt(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function I(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const P=new Set;let v;function pe(){v={r:0,c:[],p:v}}function ye(){v.r||k(v.c),v=v.p}function mt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function Lt(t,e,n,s){if(t&&t.o){if(P.has(t))return;P.add(t),v.c.push(()=>{P.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Tt={duration:0};function ge(t,e,n,s){let r=e(t,n),c=s?0:1,i=null,l=null,o=null;function u(){o&&at(t,o)}function d(a,_){const h=a.b-c;return _*=Math.abs(h),{a:c,b:a.b,d:h,duration:_,start:a.start,end:a.start+_,group:a.group}}function f(a){const{delay:_=0,duration:h=300,easing:g=Y,tick:p=E,css:y}=r||Tt,$={start:nt()+_,b:a};a||($.group=v,v.r+=1),i||l?l=$:(y&&(u(),o=W(t,c,a,h,_,g,y)),a&&p(0,1),i=d($,h),T(()=>I(t,a,"start")),rt(x=>{if(l&&x>l.start&&(i=d(l,h),l=null,I(t,i.b,"start"),y&&(u(),o=W(t,c,i.b,i.duration,0,g,r.css))),i){if(x>=i.end)p(c=i.b,1-c),I(t,i.b,"end"),l||(i.b?u():--i.group.r||k(i.group.c)),i=null;else if(x>=i.start){const j=x-i.start;c=i.a+i.d*g(j/i.duration),p(c,1-c)}}return!!(i||l)}))}return{run(a){J(r)?Dt().then(()=>{r=r(),f(a)}):f(a)},end(){u(),i=l=null}}}function zt(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function xe(t,e){t.f(),zt(t,e)}function be(t,e,n,s,r,c,i,l,o,u,d,f){let a=t.length,_=c.length,h=a;const g={};for(;h--;)g[t[h].key]=h;const p=[],y=new Map,$=new Map;for(h=_;h--;){const m=f(r,c,h),b=n(m);let w=i.get(b);w?s&&w.p(m,e):(w=u(b,m),w.c()),y.set(b,p[h]=w),b in g&&$.set(b,Math.abs(h-g[b]))}const x=new Set,j=new Set;function F(m){mt(m,1),m.m(l,d),i.set(m.key,m),d=m.first,_--}for(;a&&_;){const m=p[_-1],b=t[a-1],w=m.key,R=b.key;m===b?(d=m.first,a--,_--):y.has(R)?!i.has(w)||x.has(w)?F(m):j.has(R)?a--:$.get(w)>$.get(R)?(j.add(w),F(m)):(x.add(R),a--):(o(b,i),a--)}for(;a--;){const m=t[a];y.has(m.key)||o(m,i)}for(;_;)F(p[_-1]);return p}function we(t){t&&t.c()}function $e(t,e){t&&t.l(e)}function Ft(t,e,n,s){const{fragment:r,on_mount:c,on_destroy:i,after_update:l}=t.$$;r&&r.m(e,n),s||T(()=>{const o=c.map(Z).filter(J);i?i.push(...o):k(o),t.$$.on_mount=[]}),l.forEach(T)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(N.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,s,r,c,i,l=[-1]){const o=M;A(t);const u=t.$$={fragment:null,ctx:null,props:c,update:E,not_equal:r,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:U(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};i&&i(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(f,a,..._)=>{const h=_.length?_[0]:a;return u.ctx&&r(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),d&&It(t,f)),a}):[],u.update(),d=!0,k(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){xt();const f=Nt(e.target);u.fragment&&u.fragment.l(f),f.forEach(ot)}else u.fragment&&u.fragment.c();e.intro&&mt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),bt(),ht()}A(o)}class Ee{$destroy(){Ht(this,1),this.$destroy=E}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{E as A,Ct as B,se as C,Gt as D,ue as E,kt as F,Jt as G,Kt as H,Ut as I,Vt as J,Qt as K,nt as L,rt as M,ne as N,k as O,ae as P,Zt as Q,J as R,Ee as S,Xt as T,be as U,_e as V,Ot as W,fe as X,T as Y,ge as Z,xe as _,te as a,Yt as b,oe as c,ye as d,ee as e,mt as f,pe as g,ot as h,ve as i,he as j,lt as k,re as l,Nt as m,ie as n,de as o,ce as p,Q as q,Mt as r,Wt as s,Lt as t,le as u,we as v,$e as w,Ft as x,Ht as y,me as z};
