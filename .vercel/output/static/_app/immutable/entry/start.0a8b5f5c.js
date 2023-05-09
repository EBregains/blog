import{o as Ce,t as we}from"../chunks/index.784545ef.js";import{S as Ke,a as ze,I as q,g as qe,f as Fe,b as ye,c as le,s as H,i as _e,d as Q,e as K,P as He,h as Qe}from"../chunks/singletons.b90d2c24.js";import{R as Me,H as ee}from"../chunks/control.e7f5239e.js";function et(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function tt(t){return t.split("%25").map(decodeURI).join("%25")}function nt(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const at=["href","pathname","search","searchParams","toString","toJSON"];function rt(t,o){const l=new URL(t);for(const c of at){let f=l[c];Object.defineProperty(l,c,{get(){return o(),f},enumerable:!0,configurable:!0})}return ot(l),l}function ot(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const it="/__data.json";function st(t){return t.replace(/\/$/,"")+it}function Be(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Ve(t,o){const l=JSON.stringify(o);try{sessionStorage[t]=l}catch{}}function ct(...t){let o=5381;for(const l of t)if(typeof l=="string"){let c=l.length;for(;c;)o=o*33^l.charCodeAt(--c)}else if(ArrayBuffer.isView(l)){const c=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let f=c.length;for(;f;)o=o*33^c[--f]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(t,o)=>((t instanceof Request?t.method:(o==null?void 0:o.method)||"GET")!=="GET"&&te.delete(Se(t)),fe(t,o));const te=new Map;function lt(t,o){const l=Se(t,o),c=document.querySelector(l);if(c!=null&&c.textContent){const{body:f,...d}=JSON.parse(c.textContent),k=c.getAttribute("data-ttl");return k&&te.set(l,{body:f,init:d,ttl:1e3*Number(k)}),Promise.resolve(new Response(f,d))}return fe(t,o)}function ft(t,o,l){if(te.size>0){const c=Se(t,l),f=te.get(c);if(f){if(performance.now()<f.ttl&&["default","force-cache","only-if-cached",void 0].includes(l==null?void 0:l.cache))return new Response(f.body,f.init);te.delete(c)}}return fe(o,l)}function Se(t,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o!=null&&o.headers||o!=null&&o.body){const f=[];o.headers&&f.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&f.push(o.body),c+=`[data-hash="${ct(...f)}"]`}return c}const ut=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function dt(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${ht(t).map(c=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(f)return o.push({name:f[1],matcher:f[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(d)return o.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const k=c.split(/\[(.+?)\](?!\])/);return"/"+k.map((y,w)=>{if(w%2){if(y.startsWith("x+"))return ve(String.fromCharCode(parseInt(y.slice(2),16)));if(y.startsWith("u+"))return ve(String.fromCharCode(...y.slice(2).split("-").map(O=>parseInt(O,16))));const p=ut.exec(y);if(!p)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,$,S,U]=p;return o.push({name:S,matcher:U,optional:!!N,rest:!!$,chained:$?w===1&&k[0]==="":!1}),$?"(.*?)":N?"([^/]*)?":"([^/]+?)"}return ve(y)}).join("")}).join("")}/?$`),params:o}}function pt(t){return!/^\([^)]+\)$/.test(t)}function ht(t){return t.slice(1).split("/").filter(pt)}function mt(t,o,l){const c={},f=t.slice(1);let d=0;for(let k=0;k<o.length;k+=1){const u=o[k],y=f[k-d];if(u.chained&&u.rest&&d){c[u.name]=f.slice(k-d,k+1).filter(w=>w).join("/"),d=0;continue}if(y===void 0){u.rest&&(c[u.name]="");continue}if(!u.matcher||l[u.matcher](y)){c[u.name]=y;const w=o[k+1],p=f[k+1];w&&!w.rest&&w.optional&&p&&(d=0);continue}if(u.optional&&u.chained){d++;continue}return}if(!d)return c}function ve(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function gt({nodes:t,server_loads:o,dictionary:l,matchers:c}){const f=new Set(o);return Object.entries(l).map(([u,[y,w,p]])=>{const{pattern:N,params:$}=dt(u),S={id:u,exec:U=>{const O=N.exec(U);if(O)return mt(O,$,c)},errors:[1,...p||[]].map(U=>t[U]),layouts:[0,...w||[]].map(k),leaf:d(y)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function d(u){const y=u<0;return y&&(u=~u),[y,t[u]]}function k(u){return u===void 0?u:[f.has(u),t[u]]}}async function wt(t){var o;for(const l in t)if(typeof((o=t[l])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([c,f])=>[c,await f])));return t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const yt=-1,_t=-2,vt=-3,bt=-4,Et=-5,St=-6;function kt(t,o){if(typeof t=="number")return f(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const l=t,c=Array(l.length);function f(d,k=!1){if(d===yt)return;if(d===vt)return NaN;if(d===bt)return 1/0;if(d===Et)return-1/0;if(d===St)return-0;if(k)throw new Error("Invalid input");if(d in c)return c[d];const u=l[d];if(!u||typeof u!="object")c[d]=u;else if(Array.isArray(u))if(typeof u[0]=="string"){const y=u[0],w=o==null?void 0:o[y];if(w)return c[d]=w(f(u[1]));switch(y){case"Date":c[d]=new Date(u[1]);break;case"Set":const p=new Set;c[d]=p;for(let S=1;S<u.length;S+=1)p.add(f(u[S]));break;case"Map":const N=new Map;c[d]=N;for(let S=1;S<u.length;S+=2)N.set(f(u[S]),f(u[S+1]));break;case"RegExp":c[d]=new RegExp(u[1],u[2]);break;case"Object":c[d]=Object(u[1]);break;case"BigInt":c[d]=BigInt(u[1]);break;case"null":const $=Object.create(null);c[d]=$;for(let S=1;S<u.length;S+=2)$[u[S]]=f(u[S+1]);break;default:throw new Error(`Unknown type ${y}`)}}else{const y=new Array(u.length);c[d]=y;for(let w=0;w<u.length;w+=1){const p=u[w];p!==_t&&(y[w]=f(p))}}else{const y={};c[d]=y;for(const w in u){const p=u[w];y[w]=f(p)}}return c[d]}return f(0)}function ke(t){const o=new Set(t);function l(c,f){if(c)for(const d in c){if(d[0]==="_"||o.has(d))continue;const k=Rt(d,f==null?void 0:f.slice(f.lastIndexOf(".")))??`valid exports are ${t.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${d}'${f?` in ${f}`:""} (${k})`)}}return l}function Rt(t,o=".js"){let l=[];if(Je.includes(t)&&l.push(`+page${o}`),Ye.includes(t)&&l.push(`+page.server${o}`),We.includes(t)&&l.push(`+server${o}`),l.length>0)return`'${t}' is a valid export in ${l.join(" or ")}`}const Je=["load","prerender","csr","ssr","trailingSlash","config"],Ye=["load","prerender","csr","ssr","actions","trailingSlash","config"],We=["GET","POST","PATCH","PUT","DELETE","OPTIONS","prerender","trailingSlash","config"];ke(Je);ke(Ye);ke(We);function It(t){return t.filter(o=>o!=null)}const z=Be(Ke)??{},Z=Be(ze)??{};function be(t){z[t]=Q()}function Lt(t,o){var Te;const l=gt(t),c=t.nodes[0],f=t.nodes[1];c(),f();const d=document.documentElement,k=[],u=[];let y=null;const w={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},N=!1,$=!1,S=!0,U=!1,O=!1,B=!1,M=!1,F,x=(Te=history.state)==null?void 0:Te[q];x||(x=Date.now(),history.replaceState({...history.state,[q]:x},"",location.href));const ue=z[x];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let V,ne,ae;async function Re(){ae=ae||Promise.resolve(),await ae,ae=null;const e=new URL(location.href),n=W(e,!0);y=null;const r=ne={},a=n&&await he(n);if(r===ne&&a){if(a.type==="redirect")return re(new URL(a.location,e).href,{},[e.pathname],r);F.$set(a.props)}}function Ie(e){u.some(n=>n==null?void 0:n.snapshot)&&(Z[e]=u.map(n=>{var r;return(r=n==null?void 0:n.snapshot)==null?void 0:r.capture()}))}function Le(e){var n;(n=Z[e])==null||n.forEach((r,a)=>{var s,i;(i=(s=u[a])==null?void 0:s.snapshot)==null||i.restore(r)})}function Pe(){be(x),Ve(Ke,z),Ie(x),Ve(ze,Z)}async function re(e,{noScroll:n=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:i=!1},h,m){return typeof e=="string"&&(e=new URL(e,qe(document))),ce({url:e,scroll:n?Q():null,keepfocus:a,redirect_chain:h,details:{state:s,replaceState:r},nav_token:m,accepted:()=>{i&&(M=!0)},blocked:()=>{},type:"goto"})}async function Ae(e){return y={id:e.id,promise:he(e).then(n=>(n.type==="loaded"&&n.state.error&&(y=null),n))},y.promise}async function oe(...e){const r=l.filter(a=>e.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}function Oe(e){var a;p=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),V=e.props.page,F=new t.root({target:o,props:{...e.props,stores:H,components:u},hydrate:!0}),Le(x);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};w.after_navigate.forEach(s=>s(r)),$=!0}async function Y({url:e,params:n,branch:r,status:a,error:s,route:i,form:h}){let m="never";for(const v of r)(v==null?void 0:v.slash)!==void 0&&(m=v.slash);e.pathname=et(e.pathname,m),e.search=e.search;const b={type:"loaded",state:{url:e,params:n,branch:r,error:s,route:i},props:{constructors:It(r).map(v=>v.node.component)}};h!==void 0&&(b.props.form=h);let g={},R=!V,P=0;for(let v=0;v<Math.max(r.length,p.branch.length);v+=1){const _=r[v],j=p.branch[v];(_==null?void 0:_.data)!==(j==null?void 0:j.data)&&(R=!0),_&&(g={...g,..._.data},R&&(b.props[`data_${P}`]=g),P+=1)}return(!p.url||e.href!==p.url.href||p.error!==s||h!==void 0&&h!==V.form||R)&&(b.props.page={error:s,params:n,route:{id:(i==null?void 0:i.id)??null},status:a,url:new URL(e),form:h??null,data:R?g:V.data}),b}async function de({loader:e,parent:n,url:r,params:a,route:s,server_data_node:i}){var g,R,P;let h=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((g=b.universal)!=null&&g.load){let A=function(..._){for(const j of _){const{href:D}=new URL(j,r);m.dependencies.add(D)}};const v={route:{get id(){return m.route=!0,s.id}},params:new Proxy(a,{get:(_,j)=>(m.params.add(j),_[j])}),data:(i==null?void 0:i.data)??null,url:rt(r,()=>{m.url=!0}),async fetch(_,j){let D;_ instanceof Request?(D=_.url,j={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...j}):D=_;const C=new URL(D,r);return A(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),$?ft(D,C.href,j):lt(D,j)},setHeaders:()=>{},depends:A,parent(){return m.parent=!0,n()}};h=await b.universal.load.call(null,v)??null,h=h?await wt(h):null}return{node:b,loader:e,server:i,universal:(R=b.universal)!=null&&R.load?{type:"data",data:h,uses:m}:null,data:h??(i==null?void 0:i.data)??null,slash:((P=b.universal)==null?void 0:P.trailingSlash)??(i==null?void 0:i.slash)}}function $e(e,n,r,a,s){if(M)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&r)return!0;for(const i of a.params)if(s[i]!==p.params[i])return!0;for(const i of a.dependencies)if(k.some(h=>h(new URL(i))))return!0;return!1}function pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}async function he({id:e,invalidating:n,url:r,params:a,route:s}){if((y==null?void 0:y.id)===e)return y.promise;const{errors:i,layouts:h,leaf:m}=s,b=[...h,m];i.forEach(E=>E==null?void 0:E().catch(()=>{})),b.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let g=null;const R=p.url?e!==p.url.pathname+p.url.search:!1,P=p.route?s.id!==p.route.id:!1;let A=!1;const v=b.map((E,L)=>{var G;const I=p.branch[L],T=!!(E!=null&&E[0])&&((I==null?void 0:I.loader)!==E[1]||$e(A,P,R,(G=I.server)==null?void 0:G.uses,a));return T&&(A=!0),T});if(v.some(Boolean)){try{g=await Ge(r,v)}catch(E){return ie({status:E instanceof ee?E.status:500,error:await X(E,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(g.type==="redirect")return g}const _=g==null?void 0:g.nodes;let j=!1;const D=b.map(async(E,L)=>{var me;if(!E)return;const I=p.branch[L],T=_==null?void 0:_[L];if((!T||T.type==="skip")&&E[1]===(I==null?void 0:I.loader)&&!$e(j,P,R,(me=I.universal)==null?void 0:me.uses,a))return I;if(j=!0,(T==null?void 0:T.type)==="error")throw T;return de({loader:E[1],url:r,params:a,route:s,parent:async()=>{var De;const Ne={};for(let ge=0;ge<L;ge+=1)Object.assign(Ne,(De=await D[ge])==null?void 0:De.data);return Ne},server_data_node:pe(T===void 0&&E[0]?{type:"skip"}:T??null,E[0]?I==null?void 0:I.server:void 0)})});for(const E of D)E.catch(()=>{});const C=[];for(let E=0;E<b.length;E+=1)if(b[E])try{C.push(await D[E])}catch(L){if(L instanceof Me)return{type:"redirect",location:L.location};let I=500,T;if(_!=null&&_.includes(L))I=L.status??I,T=L.error;else if(L instanceof ee)I=L.status,T=L.body;else{if(await H.updated.check())return await J(r);T=await X(L,{params:a,url:r,route:{id:s.id}})}const G=await Ue(E,C,i);return G?await Y({url:r,params:a,branch:C.slice(0,G.idx).concat(G.node),status:I,error:T,route:s}):await je(r,{id:s.id},T,I)}else C.push(void 0);return await Y({url:r,params:a,branch:C,status:200,error:null,route:s,form:n?void 0:null})}async function Ue(e,n,r){for(;e--;)if(r[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:n,url:r,route:a}){const s={};let i=null;if(t.server_loads[0]===0)try{const g=await Ge(r,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;i=g.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||N)&&await J(r)}const m=await de({loader:c,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(i)}),b={node:await f(),loader:f,universal:null,server:null,data:null};return await Y({url:r,params:s,branch:[m,b],status:e,error:n,route:null})}function W(e,n){if(_e(e,K))return;const r=se(e);for(const a of l){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:n,route:a,params:nt(s),url:e}}}function se(e){return tt(e.pathname.slice(K.length)||"/")}function xe({url:e,type:n,intent:r,delta:a}){var m,b;let s=!1;const i={from:{params:p.params,route:{id:((m=p.route)==null?void 0:m.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((b=r==null?void 0:r.route)==null?void 0:b.id)??null},url:e},willUnload:!r,type:n};a!==void 0&&(i.delta=a);const h={...i,cancel:()=>{s=!0}};return O||w.before_navigate.forEach(g=>g(h)),s?null:i}async function ce({url:e,scroll:n,keepfocus:r,redirect_chain:a,details:s,type:i,delta:h,nav_token:m={},accepted:b,blocked:g}){var D,C,E;const R=W(e,!1),P=xe({url:e,type:i,delta:h,intent:R});if(!P){g();return}const A=x;b(),O=!0,$&&H.navigating.set(P),ne=m;let v=R&&await he(R);if(!v){if(_e(e,K))return await J(e);v=await je(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ne!==m)return!1;if(v.type==="redirect")if(a.length>10||a.includes(e.pathname))v=await ie({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(v.location,e).href,{},[...a,e.pathname],m),!1;else((D=v.props.page)==null?void 0:D.status)>=400&&await H.updated.check()&&await J(e);if(k.length=0,M=!1,U=!0,be(A),Ie(A),(C=v.props.page)!=null&&C.url&&v.props.page.url.pathname!==e.pathname&&(e.pathname=(E=v.props.page)==null?void 0:E.url.pathname),s){const L=s.replaceState?0:1;if(s.state[q]=x+=L,history[s.replaceState?"replaceState":"pushState"](s.state,"",e),!s.replaceState){let I=x+1;for(;Z[I]||z[I];)delete Z[I],delete z[I],I+=1}}y=null,$?(p=v.state,v.props.page&&(v.props.page.url=e),F.$set(v.props)):Oe(v);const{activeElement:_}=document;if(await we(),S){const L=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));n?scrollTo(n.x,n.y):L?L.scrollIntoView():scrollTo(0,0)}const j=document.activeElement!==_&&document.activeElement!==document.body;!r&&!j&&await Ee(),S=!0,v.props.page&&(V=v.props.page),O=!1,w.after_navigate.forEach(L=>L(P)),H.navigating.set(null),U=!1}async function je(e,n,r,a){return e.origin===location.origin&&e.pathname===location.pathname&&!N?await ie({status:a,error:r,url:e,route:n}):await J(e)}function J(e){return location.href=e.href,new Promise(()=>{})}function Ze(){let e;d.addEventListener("mousemove",i=>{const h=i.target;clearTimeout(e),e=setTimeout(()=>{a(h,2)},20)});function n(i){a(i.composedPath()[0],1)}d.addEventListener("mousedown",n),d.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const h of i)h.isIntersecting&&(oe(se(new URL(h.target.href))),r.unobserve(h.target))},{threshold:0});function a(i,h){const m=Fe(i,d);if(!m)return;const{url:b,external:g,download:R}=ye(m,K);if(g||R)return;const P=le(m);if(!P.reload)if(h<=P.preload_data){const A=W(b,!1);A&&Ae(A)}else h<=P.preload_code&&oe(se(b))}function s(){r.disconnect();for(const i of d.querySelectorAll("a")){const{url:h,external:m,download:b}=ye(i,K);if(m||b)continue;const g=le(i);g.reload||(g.preload_code===He.viewport&&r.observe(i),g.preload_code===He.eager&&oe(se(h)))}}w.after_navigate.push(s),s()}function X(e,n){return e instanceof ee?e.body:t.hooks.handleError({error:e,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{Ce(()=>(w.after_navigate.push(e),()=>{const n=w.after_navigate.indexOf(e);w.after_navigate.splice(n,1)}))},before_navigate:e=>{Ce(()=>(w.before_navigate.push(e),()=>{const n=w.before_navigate.indexOf(e);w.before_navigate.splice(n,1)}))},disable_scroll_handling:()=>{(U||!$)&&(S=!1)},goto:(e,n={})=>re(e,n,[]),invalidate:e=>{if(typeof e=="function")k.push(e);else{const{href:n}=new URL(e,location.href);k.push(r=>r.href===n)}return Re()},invalidateAll:()=>(M=!0,Re()),preload_data:async e=>{const n=new URL(e,qe(document)),r=W(n,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);await Ae(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const n=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const s=await Ue(p.branch.length,r,a.errors);if(s){const i=await Y({url:n,params:p.params,branch:r.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:a});p=i.state,F.$set(i.props),we().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...V,form:e.data,status:e.status}}),await we(),F.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var a;let r=!1;if(Pe(),!O){const s={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};w.before_navigate.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Pe()}),(e=navigator.connection)!=null&&e.saveData||Ze(),d.addEventListener("click",n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Fe(n.composedPath()[0],d);if(!r)return;const{url:a,external:s,target:i,download:h}=ye(r,K);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const m=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||h)return;if(s||m.reload){xe({url:a,type:"link"})?O=!0:n.preventDefault();return}const[g,R]=a.href.split("#");if(R!==void 0&&g===location.href.split("#")[0]){if(B=!0,be(x),p.url=a,H.page.set({...V,url:a}),H.page.notify(),!m.replace_state)return;B=!1,n.preventDefault()}ce({url:a,scroll:m.noscroll?Q():null,keepfocus:m.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:m.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),d.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(i,K))return;const h=n.target,{keep_focus:m,noscroll:b,reload:g,replace_state:R}=le(h);if(g)return;n.preventDefault(),n.stopPropagation();const P=new FormData(h),A=a==null?void 0:a.getAttribute("name");A&&P.append(A,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(P).toString(),ce({url:i,scroll:b?Q():null,keepfocus:m??!1,redirect_chain:[],details:{state:{},replaceState:R??i.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){if(n.state[q]===x)return;const a=z[n.state[q]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){z[x]=Q(),x=n.state[q],scrollTo(a.x,a.y);return}const s=n.state[q]-x;let i=!1;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{x=n.state[q]},blocked:()=>{history.go(-s),i=!0},type:"popstate",delta:s}),i||Le(x)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[q]:++x},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&H.navigating.set(null)})},_hydrate:async({status:e=200,error:n,node_ids:r,params:a,route:s,data:i,form:h})=>{N=!0;const m=new URL(location.href);({params:a={},route:s={id:null}}=W(m,!1)||{});let b;try{const g=r.map(async(R,P)=>{const A=i[P];return A!=null&&A.uses&&(A.uses=Xe(A.uses)),de({loader:t.nodes[R],url:m,params:a,route:s,parent:async()=>{const v={};for(let _=0;_<P;_+=1)Object.assign(v,(await g[_]).data);return v},server_data_node:pe(A)})});b=await Y({url:m,params:a,branch:await Promise.all(g),status:e,error:n,form:h,route:l.find(({id:R})=>R===s.id)??null})}catch(g){if(g instanceof Me){await J(new URL(g.location,location.href));return}b=await ie({status:g instanceof ee?g.status:500,error:await X(g,{url:m,params:a,route:s}),url:m,route:s})}Oe(b)}}}async function Ge(t,o){const l=new URL(t);l.pathname=st(t.pathname),l.searchParams.append("x-sveltekit-invalidated",o.map(f=>f?"1":"").join("_"));const c=await fe(l.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async f=>{var p;const d=new Map,k=c.body.getReader(),u=new TextDecoder;function y(N){return kt(N,{Promise:$=>new Promise((S,U)=>{d.set($,{fulfil:S,reject:U})})})}let w="";for(;;){const{done:N,value:$}=await k.read();if(N&&!w)break;for(w+=!$&&w?`
`:u.decode($);;){const S=w.indexOf(`
`);if(S===-1)break;const U=JSON.parse(w.slice(0,S));if(w=w.slice(S+1),U.type==="redirect")return f(U);if(U.type==="data")(p=U.nodes)==null||p.forEach(O=>{(O==null?void 0:O.type)==="data"&&(O.uses=Xe(O.uses),O.data=y(O.data))}),f(U);else if(U.type==="chunk"){const{id:O,data:B,error:M}=U,F=d.get(O);d.delete(O),M?F.reject(y(M)):F.fulfil(y(B))}}}})}function Xe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Ee(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,l=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),l!==null?o.setAttribute("tabindex",l):o.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var f;c((f=getSelection())==null?void 0:f.removeAllRanges())})})}}async function $t(t,o,l){const c=Lt(t,o);Qe({client:c}),l?await c._hydrate(l):c.goto(location.href,{replaceState:!0}),c._start_router()}export{$t as start};