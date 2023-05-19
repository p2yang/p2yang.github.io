"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,b=u["".concat(c,".").concat(g)]||u[g]||m[g]||a;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u767d\u7528\u4e86\u90a3\u4e48\u591a\u5e74\u7684 \u2018oh-my-zsh\u2019 -- Plugins",comments:!0,date:new Date("2018-03-22T19:02:56.000Z"),updated:new Date("2018-03-22T19:02:56.000Z"),tags:["Terminal","Tool"],categories:["Tool"]},l=void 0,i={permalink:"/blog/zsh",editUrl:"https://github.com/p2yang/p2yang.github.io/blob/main/blog/blog/zsh.md",source:"@site/blog/zsh.md",title:"\u767d\u7528\u4e86\u90a3\u4e48\u591a\u5e74\u7684 \u2018oh-my-zsh\u2019 -- Plugins",description:"\u4ee5\u524d\u867d\u7136\u7814\u7a76\u8fc7 Oh My Zsh \u7684\u4f7f\u7528\u6280\u5de7\uff0c\u4f46\u90fd\u662f\u5728\u9700\u6c42\u7684\u9a71\u52a8\u4e0b\u8fdb\u884c\u7684\u3002\u6362\u8fc7\u591a\u6b21\u4e3b\u9898\uff0c\u914d\u8fc7 Sublime Text \u548c Git \u7b49 alias\u547d\u4ee4\uff0c\u8fd8\u6709\u4e00\u4e9b\u96f6\u6563\u7684\u914d\u7f6e\u3002\u4eca\u5929\u5076\u7136\u770b\u5230\u5176\u53ef\u4ee5\u5f00\u542f web-search \u529f\u80fd\uff0c\u5341\u5206\u60ca\u559c\u548c\u597d\u5947\u3002\u6d4f\u89c8\u8fc7\u5b98\u65b9 wiki \u540e\uff0c\u624d\u53d1\u73b0\u6709\u4e00\u4e9b\u5f88\u5b9e\u7528\u7684 plugins, \u4fbf\u8bb0\u5f55\u4e0b\u6298\u817e\u8fc7\u7a0b\u5427\u3002",date:"2018-03-22T19:02:56.000Z",formattedDate:"2018\u5e743\u670822\u65e5",tags:[{label:"Terminal",permalink:"/blog/tags/terminal"},{label:"Tool",permalink:"/blog/tags/tool"}],readingTime:2.81,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u767d\u7528\u4e86\u90a3\u4e48\u591a\u5e74\u7684 \u2018oh-my-zsh\u2019 -- Plugins",comments:!0,date:"2018-03-22T19:02:56.000Z",updated:"2018-03-22T19:02:56.000Z",tags:["Terminal","Tool"],categories:["Tool"]},prevItem:{title:"Node API - URL",permalink:"/blog/node-url"},nextItem:{title:"Gogs + Docker \u642d\u5efa Git \u670d\u52a1\u5668\u5b9e\u8df5",permalink:"/blog/docker-gogs"}},c={authorsImageUrls:[]},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ee5\u524d\u867d\u7136\u7814\u7a76\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Oh My Zsh")," \u7684\u4f7f\u7528\u6280\u5de7\uff0c\u4f46\u90fd\u662f\u5728\u9700\u6c42\u7684\u9a71\u52a8\u4e0b\u8fdb\u884c\u7684\u3002\u6362\u8fc7\u591a\u6b21\u4e3b\u9898\uff0c\u914d\u8fc7 Sublime Text \u548c Git \u7b49 alias\u547d\u4ee4\uff0c\u8fd8\u6709\u4e00\u4e9b\u96f6\u6563\u7684\u914d\u7f6e\u3002\u4eca\u5929\u5076\u7136\u770b\u5230\u5176\u53ef\u4ee5\u5f00\u542f web-search \u529f\u80fd\uff0c\u5341\u5206\u60ca\u559c\u548c\u597d\u5947\u3002\u6d4f\u89c8\u8fc7\u5b98\u65b9 wiki \u540e\uff0c\u624d\u53d1\u73b0\u6709\u4e00\u4e9b\u5f88\u5b9e\u7528\u7684 plugins, \u4fbf\u8bb0\u5f55\u4e0b\u6298\u817e\u8fc7\u7a0b\u5427\u3002"))}m.isMDXComponent=!0}}]);