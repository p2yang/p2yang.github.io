"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),y=o,d=s["".concat(c,".").concat(y)]||s[y]||m[y]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Node API - Querystring",comments:!0,date:new Date("2018-01-04T22:56:50.000Z"),updated:new Date("2018-01-04T22:56:50.000Z"),tags:["node"],categories:null},i=void 0,l={permalink:"/blog/node-querystring",editUrl:"https://github.com/p2yang/p2yang.github.io/blob/main/blog/blog/node-querystring.md",source:"@site/blog/node-querystring.md",title:"Node API - Querystring",description:"querystring \u662f\u4e00\u4e2a\u5b9e\u7528\u7684 URL query \u5b57\u7b26\u4e32\u5904\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u5e8f\u5217\u5316\u4e00\u4e32\u952e\u503c\u5bf9\u5b57\u7b26\u4e32\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5bf9\u8c61\u8f6c\u5316\u6210\u4e00\u6bb5 a=b&c=d \u5f62\u5f0f\u7684\u5b57\u7b26\u4e32\u3002\u603b\u4e4b\uff0c\u975e\u5e38\u597d\u7528\uff0c\u5c24\u5176\u662f\u5904\u7406\u8ddfurl query\u76f8\u5173\u53c2\u6570\u7684\u65f6\u5019\u3002",date:"2018-01-04T22:56:50.000Z",formattedDate:"2018\u5e741\u67084\u65e5",tags:[{label:"node",permalink:"/blog/tags/node"}],readingTime:3.165,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Node API - Querystring",comments:!0,date:"2018-01-04T22:56:50.000Z",updated:"2018-01-04T22:56:50.000Z",tags:["node"],categories:null},prevItem:{title:"\u5173\u4e8e Opera Mini \u5f00\u53d1\u7684\u90a3\u4e9b\u4e8b\u513f",permalink:"/blog/opera-mini"},nextItem:{title:"\u5173\u4e8e\u7f51\u9875\u6253\u5370\u7684\u5f00\u53d1\u5b9e\u8df5",permalink:"/blog/html-print"}},c={authorsImageUrls:[]},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"querystring")," \u662f\u4e00\u4e2a\u5b9e\u7528\u7684 URL query \u5b57\u7b26\u4e32\u5904\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u5e8f\u5217\u5316\u4e00\u4e32\u952e\u503c\u5bf9\u5b57\u7b26\u4e32\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5bf9\u8c61\u8f6c\u5316\u6210\u4e00\u6bb5 ",(0,o.kt)("inlineCode",{parentName:"p"},"a=b&c=d")," \u5f62\u5f0f\u7684\u5b57\u7b26\u4e32\u3002\u603b\u4e4b\uff0c\u975e\u5e38\u597d\u7528\uff0c\u5c24\u5176\u662f\u5904\u7406\u8ddfurl query\u76f8\u5173\u53c2\u6570\u7684\u65f6\u5019\u3002"))}m.isMDXComponent=!0}}]);