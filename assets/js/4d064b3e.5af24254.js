"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||p;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const p={title:"Parcel + Vue \u5c1d\u9c9c",comments:!0,date:new Date("2018-01-24T19:46:26.000Z"),updated:new Date("2018-01-24T19:46:26.000Z"),tags:["parcel","vue"],categories:null},l=void 0,i={permalink:"/blog/parcel-vue",editUrl:"https://github.com/p2yang/p2yang.github.io/blob/main/blog/blog/parcel-vue.md",source:"@site/blog/parcel-vue.md",title:"Parcel + Vue \u5c1d\u9c9c",description:"Webpack \u4e45\u8d1f\u76db\u540d\uff0c\u5305\u7f57\u4e07\u8c61\u3002\u82e5\u662f\u7528\u5176\u9020\u8f6e\u5b50\u7684\u8bdd\uff0c\u96be\u514d\u4fee\u4fee\u8865\u8865\u3002\u5e74\u524d\u5174\u8d77\u4e86Parcel\u6253\u5305\u5de5\u5177\uff0c\u53f7\u79f0\u201c\u6781\u901f\u96f6\u914d\u7f6e\u201d\uff0c\u8ba9\u4eba\u4e0d\u80dc\u5411\u5f80\u3002\u8fd9\u4e0d\u5f97\u7a7a\u4e86\uff0c\u5c31\u6765\u5c1d\u5c1d\u9c9c\uff0c\u8bb0\u5f55\u4e0b\u5982\u4f55\u4f7f\u7528 Parcel + Vue\u8fdb\u884c\u5f00\u53d1\u3002",date:"2018-01-24T19:46:26.000Z",formattedDate:"2018\u5e741\u670824\u65e5",tags:[{label:"parcel",permalink:"/blog/tags/parcel"},{label:"vue",permalink:"/blog/tags/vue"}],readingTime:2.075,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Parcel + Vue \u5c1d\u9c9c",comments:!0,date:"2018-01-24T19:46:26.000Z",updated:"2018-01-24T19:46:26.000Z",tags:["parcel","vue"],categories:null},prevItem:{title:"Parcel \u5f00\u542f\u4e09\u5927CSS\u9884\u5904\u7406\u5668--Stylus/Less/Sass",permalink:"/blog/parcel-step-2"},nextItem:{title:"frp \u5185\u7f51\u7a7f\u900f\u5b9e\u8df5",permalink:"/blog/net-cross-by-frp"}},o={authorsImageUrls:[]},c=[{value:"\u9884\u5907",id:"\u9884\u5907",level:2},{value:"\u4e24\u4e2a\u4f9d\u8d56",id:"\u4e24\u4e2a\u4f9d\u8d56",level:3},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:3},{value:"\u5f00\u59cb",id:"\u5f00\u59cb",level:2},{value:"\u751f\u4ea7\u73af\u5883",id:"\u751f\u4ea7\u73af\u5883",level:2}],u={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Webpack \u4e45\u8d1f\u76db\u540d\uff0c\u5305\u7f57\u4e07\u8c61\u3002\u82e5\u662f\u7528\u5176\u9020\u8f6e\u5b50\u7684\u8bdd\uff0c\u96be\u514d\u4fee\u4fee\u8865\u8865\u3002\u5e74\u524d\u5174\u8d77\u4e86Parcel\u6253\u5305\u5de5\u5177\uff0c\u53f7\u79f0\u201c\u6781\u901f\u96f6\u914d\u7f6e\u201d\uff0c\u8ba9\u4eba\u4e0d\u80dc\u5411\u5f80\u3002\u8fd9\u4e0d\u5f97\u7a7a\u4e86\uff0c\u5c31\u6765\u5c1d\u5c1d\u9c9c\uff0c\u8bb0\u5f55\u4e0b\u5982\u4f55\u4f7f\u7528 Parcel + Vue\u8fdb\u884c\u5f00\u53d1\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u662f",(0,a.kt)("a",{parentName:"p",href:"https://github.com/p2yang/parcel-vue"},"\u793a\u4f8b\u4ee3\u7801"),"!"),(0,a.kt)("h2",{id:"\u9884\u5907"},"\u9884\u5907"),(0,a.kt)("h3",{id:"\u4e24\u4e2a\u4f9d\u8d56"},"\u4e24\u4e2a\u4f9d\u8d56"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"parcel-bundler"),"(",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/parcel-bundler"},"\u6233\u6211\ud83d\udc47"),")\n\u8fd9\u662f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Parcel"))," \u6253\u5305\u5de5\u5177\uff0c\u201c\u6781\u901f\u96f6\u914d\u7f6e\u201d\u7684\u8d77\u6e90\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"parcel-plugin-vue"),"(",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/parcel-plugin-vue"},"\u6233\u6211\ud83d\udc47"),")\n\u8fd9\u662f\u4e00\u4e2a parcel \u63d2\u4ef6\uff0c\u4f7f pacel \u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},".vue")," \u6587\u4ef6\u3002"))),(0,a.kt)("h3",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parcel-vue\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 .babelrc\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500src\n   \u251c\u2500\u2500 App.vue\n   \u251c\u2500\u2500 main.js\n")),(0,a.kt)("p",null,"\u8fd9\u662f\u57fa\u672c\u7684\u9879\u76ee\u7ed3\u6784\u3002"),(0,a.kt)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5parcel\u76f8\u5173\u5f00\u53d1\u4f9d\u8d56"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"yarn add parcel-bundler parcel-plugin-vue babel-preset-env -D\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5vue"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"yarn add vue\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u5165\u53e3\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>parcel + vue</title>\n</head>\n<body>\n  <div id="app"></div>\n  <script src="./src/main.js"><\/script>\n</body>\n</html>\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u811a\u672c\u5185\u5bb9 ",(0,a.kt)("inlineCode",{parentName:"p"},"main.js")," \u548c vue\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"App.vue")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// ./src/main.js\nimport Vue from 'vue'\nimport App from './App'\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n})\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"// App.vue\n<template>\n  <h1>parcel vue</h1>\n</template>\n\n<script>\nexport default {\n  name: 'App'\n}\n<\/script>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},".babelrc")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'{\n  "presets": [\n    "env"\n  ]\n}\n')))),(0,a.kt)("p",null,"\u5927\u529f\u544a\u6210\uff01\uff01\uff01"),(0,a.kt)("p",null,"\u989d\uff0c\u518d\u52a0\u6761\u542f\u52a8\u811a\u672c\u5427\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// package.json\n{\n  ...,\n  "scripts": {\n    "start": "parcel index.html"\n  },\n  ...\n}\n')),(0,a.kt)("p",null,"Node\u6267\u884c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,a.kt)("p",null,"\u597d\u4e86\uff0c\u6d4f\u89c8\u5668\u6253\u5f00http://localhost:1234\u770b\u770b\u5427\u3002"),(0,a.kt)("h2",{id:"\u751f\u4ea7\u73af\u5883"},"\u751f\u4ea7\u73af\u5883"),(0,a.kt)("p",null,"\u6784\u5efa\u751f\u4ea7\u73af\u5883\uff0c\u53ea\u9700\u8981\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"parcel build index.html --public-url ./\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u4ee5index.html\u4e3a\u5165\u53e3\uff0cparcel\u4f1a\u81ea\u52a8\u8bc6\u522b\u548c\u63d0\u53d6\u76f8\u5173\u4f9d\u8d56\u8d44\u6e90\uff0c\u5e76\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," \u6587\u4ef6\u5939\u3002\u8fd9\u91cc ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," \u540d\u79f0\u662f\u9ed8\u8ba4\u7684\uff0c\u53ef\u4ee5\u6309\u610f\u613f\u66f4\u6539\u3002\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"parcel build -h")," \u67e5\u770b\u5177\u4f53\u7684\u53c2\u6570\u5217\u8868\u3002"),(0,a.kt)("p",null,"\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://github.com/p2yang/parcel-vue"},"\u793a\u4f8b\u4ee3\u7801"),"\u3002"))}s.isMDXComponent=!0}}]);