import{j as i,r as f,k as u,a as s,o as a,c as m,l as d,m as $,b as g,e as o,f as x}from"./entry.59c2dc56.js";import{_ as C}from"./message.18556953.js";import{u as v}from"./fetch.b2a75f83.js";function h(){const e=i();return e._appConfig||(e._appConfig=f(u)),e._appConfig}const k={props:["level"]};function y(e,t,n,p,c,r){return a(),m(d(`h${e.$props.level}`))}const A=s(k,[["render",y]]),B={setup(){let e=$(null);const t=h();return console.log(t),v("/api/goods","$PslAyef5YX").then(n=>{e.value=n.data}),{list:e}},created(){}};function N(e,t,n,p,c,r){const _=A,l=C;return a(),g("div",null,[o(_,{level:"2",textContent:"\u6807\u9898",style:{"text-align":"center"}}),o(l,{message:"\u6B22\u8FCE\u6765\u5230\u9996\u9875"}),x(" \u9996\u98751 ")])}const D=s(B,[["render",N]]);export{D as default};
