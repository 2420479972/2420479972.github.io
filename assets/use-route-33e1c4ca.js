import{z as c,C as a}from "./index-a2b9700e.js";const n="van-hairline",O=`${n}--right`,T=`${n}--bottom`,R=`${n}--top-bottom`,p=`${n}-unset--top-bottom`,u="van-haptics-feedback",B=Symbol("van-form"),E=5;function f(t){const o=a();o&&c(o.proxy,t)}const _={to:[String,Object],url:String,replace:Boolean};function r({to:t,url:o,replace:s,$router:e}){t&&e?e[s?"replace":"push"](t):o&&(s?location.replace(o):location.href=o)}function m(){const t=a().proxy;return()=>r(t)}export{R as B,B as F,u as H,E as T,m as a,r as b,p as c,O as d,T as e,_ as r,f as u};