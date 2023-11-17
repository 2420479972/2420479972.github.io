import{c as L,d as O,g as k,j as A,k as D,b as a,m as P,p as E,l as y,n as w,q as F,s as C,I,v as H,x as U,y as V,z as v,A as q,B as G,r as J,C as K,w as Q,D as R,o as W,h as X,E as o,F as b,G as Y,H as Z,_ as $}from"./index-a2b9700e.js";import{F as ee}from"./index-af9b88da.js";import{u as te}from"./use-route-33e1c4ca.js";import{P as oe}from"./index-8d0cf824.js";import{L as se}from"./index-0d8428fc.js";import{H as ne}from"./header-be1a4db6.js";import"./use-touch-b7bef329.js";import"./on-popup-reopen-26f038ff.js";let f=0;function ae(e){e?(f||document.body.classList.add("van-toast--unclickable"),f++):f&&(f--,f||document.body.classList.remove("van-toast--unclickable"))}const[ce,u]=L("toast"),ie=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],le={icon:String,show:Boolean,type:y("text"),overlay:Boolean,message:w,iconSize:w,duration:F(2e3),position:y("middle"),teleport:[String,Object],wordBreak:String,className:C,iconPrefix:String,transition:y("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:C,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var B=O({name:ce,props:le,emits:["update:show"],setup(e,{emit:t,slots:s}){let l,n=!1;const r=()=>{const c=e.show&&e.forbidClick;n!==c&&(n=c,ae(n))},d=c=>t("update:show",c),g=()=>{e.closeOnClick&&d(!1)},m=()=>clearTimeout(l),p=()=>{const{icon:c,type:i,iconSize:x,iconPrefix:N,loadingType:j}=e;if(c||i==="success"||i==="fail")return a(I,{name:c||i,size:x,class:u("icon"),classPrefix:N},null);if(i==="loading")return a(se,{class:u("loading"),size:x,type:j},null)},M=()=>{const{type:c,message:i}=e;if(s.message)return a("div",{class:u("text")},[s.message()]);if(H(i)&&i!=="")return c==="html"?a("div",{key:0,class:u("text"),innerHTML:String(i)},null):a("div",{class:u("text")},[i])};return k(()=>[e.show,e.forbidClick],r),k(()=>[e.show,e.type,e.message,e.duration],()=>{m(),e.show&&e.duration>0&&(l=setTimeout(()=>{d(!1)},e.duration))}),A(r),D(r),()=>a(oe,P({class:[u([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:g,onClosed:m,"onUpdate:show":d},E(e,ie)),{default:()=>[p(),M()]})}});function re(){const e=V({show:!1}),t=n=>{e.show=n},s=n=>{v(e,n,{transitionAppear:!0}),t(!0)},l=()=>t(!1);return te({open:s,close:l,toggle:t}),{open:s,close:l,state:e,toggle:t}}function de(e){const t=U(e),s=document.createElement("div");return document.body.appendChild(s),{instance:t.mount(s),unmount(){t.unmount(),document.body.removeChild(s)}}}const ue={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let _=[],fe=!1,S=v({},ue);const me=new Map;function T(e){return q(e)?e:{message:e}}function pe(){const{instance:e,unmount:t}=de({setup(){const s=J(""),{open:l,state:n,close:r,toggle:d}=re(),g=()=>{},m=()=>a(B,P(n,{onClosed:g,"onUpdate:show":d}),null);return k(s,p=>{n.message=p}),K().render=m,{open:l,close:r,message:s}}});return e}function _e(){if(!_.length||fe){const e=pe();_.push(e)}return _[_.length-1]}function ve(e={}){if(!G)return{};const t=_e(),s=T(e);return t.open(v({},S,me.get(s.type||S.type),s)),t}const z=e=>t=>ve(v({type:e},T(t))),he=z("success"),ge=z("fail");Q(B);async function ye(e){try{await navigator.clipboard.writeText(e),he({message:"复制成功",duration:1e3})}catch(t){console.error("Unable to copy to clipboard",t),ge("复制失败")}}const h=e=>(Y("data-v-a4377c85"),e=e(),Z(),e),ke=h(()=>o("div",{class:"logo-content"},[o("div",{class:"logo-img-text"},[o("div",{class:"logo-image"}),o("div",{class:"logo-text"},"链世界")])],-1)),xe={class:"form"},we=h(()=>o("div",{class:"avatar-content"},[o("div",{class:"avatar"},"1")],-1)),Ce={class:"nickname-content"},be={class:"nickname"},Se={class:"pre-address"},Oe={class:"pre"},Pe=h(()=>o("span",null,"上级地址：",-1)),Ie=h(()=>o("div",{class:"address"},"0x1234567890",-1)),Be={class:"copy"},Te={class:"go-to-content"},ze={class:"go-to"},Me={class:"text"},Ne={class:"text"},je=O({__name:"index",setup(e){const t=()=>{ye("0x1234567890")};return(s,l)=>{const n=ee,r=I,d=R("text-to-right");return W(),X("main",null,[a(ne),ke,o("div",xe,[we,o("div",Ce,[o("div",be,[a(n,{placeholder:"请输入昵称"})])]),o("div",Se,[o("div",Oe,[Pe,Ie,o("div",Be,[a(r,{"class-prefix":"icon",name:"fuzhi",onClick:t,size:"20",color:"#fff"})])])]),o("div",Te,[o("div",ze,[a(r,{"class-prefix":"icon",name:"jiantou_xiangyou",size:"30",color:"#fff"})])])]),o("footer",null,[b(o("div",Me,null,512),[[d,"一个完全去中心化的聊天APP"]]),b(o("div",Ne,null,512),[[d,"带你探索你的自由世界"]])])])}}});const Ge=$(je,[["__scopeId","data-v-a4377c85"]]);export{Ge as default};
