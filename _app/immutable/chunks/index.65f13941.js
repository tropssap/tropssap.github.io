function w(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(B)}function L(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function ot(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function G(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(J(e,n))}function ft(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function dt(t,e,n,i,r,o){if(r){const c=O(e,n,i,o);t.p(c,r)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let v=!1;function K(){v=!0}function W(){v=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:Q(1,r,x=>e[n[x]].claim_order,l))-1;i[u]=n[f]+1;const a=f+1;n[a]=u,r=Math.max(a,r)}const o=[],c=[];let s=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(o.push(e[u-1]);s>=u;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<o.length&&c[u].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(c[u],f)}}function U(t,e){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){v&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function pt(){return A(" ")}function yt(){return A("")}function gt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,e,n,i,r=!1){tt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const u=n(s);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const u=n(s);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function P(t,e,n,i){return T(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function bt(t,e,n){return P(t,e,n,X)}function $t(t,e,n){return P(t,e,n,Y)}function et(t,e){return T(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function wt(t){return et(t," ")}function vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Et(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e){return new t(e)}let y;function p(t){y=t}function z(){if(!y)throw new Error("Function called outside component initialization");return y}function St(t){z().$$.on_mount.push(t)}function At(t){z().$$.after_update.push(t)}const h=[],k=[];let m=[];const q=[],D=Promise.resolve();let N=!1;function F(){N||(N=!0,D.then(H))}function jt(){return F(),D}function S(t){m.push(t)}const E=new Set;let d=0;function H(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const e=h[d];d++,p(e),nt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;k.length;)k.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;q.length;)q.pop()();N=!1,E.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function it(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let _;function Ct(){_={r:0,c:[],p:_}}function Mt(){_.r||g(_.c),_=_.p}function rt(t,e){t&&t.i&&($.delete(t),t.i(e))}function kt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function qt(t){t&&t.c()}function Bt(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(B).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),o.forEach(S)}function ut(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,n,i,r,o,c,s=[-1]){const u=y;p(t);const l=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,x,...j)=>{const C=j.length?j[0]:x;return l.ctx&&r(l.ctx[a],l.ctx[a]=C)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](C),f&&lt(t,a)),x}):[],l.update(),f=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){K();const a=Z(e.target);l.fragment&&l.fragment.l(a),a.forEach(V)}else l.fragment&&l.fragment.c();e.intro&&rt(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),W(),H()}p(u)}class Ot{$destroy(){ut(this,1),this.$destroy=w}$on(e,n){if(!L(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ct as A,ut as B,Y as C,$t as D,U as E,w as F,ft as G,dt as H,ht as I,_t as J,at as K,ot as L,gt as M,L as N,Ot as S,pt as a,mt as b,wt as c,kt as d,yt as e,Mt as f,rt as g,V as h,Lt as i,At as j,X as k,bt as l,Z as m,xt as n,St as o,Et as p,A as q,et as r,st as s,jt as t,vt as u,Ct as v,k as w,Nt as x,qt as y,Bt as z};
