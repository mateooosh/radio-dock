if(!self.define){let o,e={};const r=(r,s)=>(r=new URL(r+".js",s).href,e[r]||new Promise((e=>{if("document"in self){const o=document.createElement("script");o.src=r,o.onload=e,document.head.appendChild(o)}else o=r,importScripts(r),e()})).then((()=>{let o=e[r];if(!o)throw new Error(`Module ${r} didn’t register its module`);return o})));self.define=(s,i)=>{const c=o||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let d={};const n=o=>r(o,c),t={module:{uri:c},exports:d,require:n};e[c]=Promise.all(s.map((o=>t[o]||n(o)))).then((o=>(i(...o),d)))}}define(["./workbox-db5fc017"],(function(o){"use strict";o.setCacheNameDetails({prefix:"radio-dock"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/radio-dock/css/app.d3aca4b1.css",revision:null},{url:"/radio-dock/css/chunk-vendors.124634c0.css",revision:null},{url:"/radio-dock/index.html",revision:"da4cc698ac8d4441df582f9e41b3e76b"},{url:"/radio-dock/js/app.76716057.js",revision:null},{url:"/radio-dock/js/chunk-vendors.0008849c.js",revision:null},{url:"/radio-dock/manifest.json",revision:"b31a8532fd2d2bbdbf57ca4fc674a911"},{url:"/radio-dock/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
