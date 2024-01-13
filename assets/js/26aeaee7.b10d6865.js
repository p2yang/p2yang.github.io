"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,f=g["".concat(u,".").concat(m)]||g[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},i),{},{components:n})):r.createElement(f,o({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[g]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"parcel-vue\u73af\u5883\u4e0bpug\u652f\u6301\u5b9e\u8df5",comments:!0,date:new Date("2018-01-30T09:18:42.000Z"),updated:new Date("2018-01-30T09:18:42.000Z"),tags:["parcel","vue"],categories:null},o=void 0,p={permalink:"/blog/parcel-vue-pug",editUrl:"https://github.com/p2yang/p2yang.github.io/blob/main/blog/parcel-vue-pug.md",source:"@site/blog/parcel-vue-pug.md",title:"parcel-vue\u73af\u5883\u4e0bpug\u652f\u6301\u5b9e\u8df5",description:"parcel-plugin-vue \u63d2\u4ef6\u9ed8\u8ba4\u6ca1\u6709\u5b9e\u73b0\u6b64\u529f\u80fd\uff0c\u9700\u8981\u6211\u4eec\u81ea\u5df1\u5199\u914d\u7f6e\u3002\u5176\u9ed8\u8ba4\u8f6c\u6362\u5de5\u5177\u662f vueify, \u6839\u636e\u6587\u6863\u8d44\u6599\uff0c\u672c\u6587\u8bb0\u5f55\u4e0b\u5b9e\u73b0 pug \u652f\u6301\u7684\u57fa\u672c\u6b65\u9aa4\u3002",date:"2018-01-30T09:18:42.000Z",formattedDate:"2018\u5e741\u670830\u65e5",tags:[{label:"parcel",permalink:"/blog/tags/parcel"},{label:"vue",permalink:"/blog/tags/vue"}],readingTime:.915,hasTruncateMarker:!0,authors:[],frontMatter:{title:"parcel-vue\u73af\u5883\u4e0bpug\u652f\u6301\u5b9e\u8df5",comments:!0,date:"2018-01-30T09:18:42.000Z",updated:"2018-01-30T09:18:42.000Z",tags:["parcel","vue"],categories:null},prevItem:{title:"Gogs + Docker \u642d\u5efa Git \u670d\u52a1\u5668\u5b9e\u8df5",permalink:"/blog/docker-gogs"},nextItem:{title:"Parcel \u5f00\u542f\u4e09\u5927CSS\u9884\u5904\u7406\u5668--Stylus/Less/Sass",permalink:"/blog/parcel-step-2"}},u={authorsImageUrls:[]},c=[{value:"\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6 <strong><em>vue.config.js</em></strong>",id:"\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6-vueconfigjs",level:2},{value:"\u6dfb\u52a0\u4f9d\u8d56 <code>pug</code>",id:"\u6dfb\u52a0\u4f9d\u8d56-pug",level:2},{value:"\u4f7f\u7528pug\u8bed\u6cd5",id:"\u4f7f\u7528pug\u8bed\u6cd5",level:2}],i={toc:c},g="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"parcel-plugin-vue")," \u63d2\u4ef6\u9ed8\u8ba4\u6ca1\u6709\u5b9e\u73b0\u6b64\u529f\u80fd\uff0c\u9700\u8981\u6211\u4eec\u81ea\u5df1\u5199\u914d\u7f6e\u3002\u5176\u9ed8\u8ba4\u8f6c\u6362\u5de5\u5177\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"vueify"),", \u6839\u636e\u6587\u6863\u8d44\u6599\uff0c\u672c\u6587\u8bb0\u5f55\u4e0b\u5b9e\u73b0 pug \u652f\u6301\u7684\u57fa\u672c\u6b65\u9aa4\u3002"),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6-vueconfigjs"},"\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("strong",{parentName:"h2"},(0,a.kt)("em",{parentName:"strong"},"vue.config.js"))),(0,a.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"vue.config.js")),"\uff0c\u6dfb\u52a0pug\u89e3\u6790\u65b9\u6cd5\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// vue.config.js\nconst pug = require('pug')\n\nmodule.exports = {\n    customCompilers: {\n        pug (content, cb) {\n            const html = pug.render(content)\n            cb(null, html)\n        }\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5177\u4f53\u914d\u7f6e\u8bf4\u660e\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vuejs/vueify#configuring-options"},"\u6587\u6863"),".")),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u4f9d\u8d56-pug"},"\u6dfb\u52a0\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"h2"},"pug")),(0,a.kt)("p",null,"\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"pug")," \u6765\u89e3\u6790, \u6240\u4ee5\u6dfb\u52a0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add pug --dev\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528pug\u8bed\u6cd5"},"\u4f7f\u7528pug\u8bed\u6cd5"),(0,a.kt)("p",null,"\u73b0\u5728\u5c31\u53ef\u4ee5\u5728\u3002vue\u6587\u4ef6\u4e2d\u4e66\u5199pug\u8bed\u6cd5\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'<template lang="pug">\n  h1 parcel vue\n</template>\n// ...\n')),(0,a.kt)("p",null,"--\n\u5230\u6b64\uff0c\u5927\u529f\u544a\u6210\uff01"))}s.isMDXComponent=!0}}]);