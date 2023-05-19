"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1079],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},b="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=i(r),m=a,g=b["".concat(p,".").concat(m)]||b[m]||s[m]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[b]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const l={title:"Webpack DllPlugin \u57fa\u672c\u5e94\u7528\u4e0e\u5b9e\u8df5",comments:!0,date:new Date("2020-01-19T22:37:31.000Z"),updated:new Date("2020-01-19T22:37:31.000Z"),tags:["webpack"],categories:["webpack"]},o=void 0,c={permalink:"/blog/webpack-dll",editUrl:"https://github.com/p2yang/p2yang.github.io/blob/main/blog/blog/webpack-dll.md",source:"@site/blog/webpack-dll.md",title:"Webpack DllPlugin \u57fa\u672c\u5e94\u7528\u4e0e\u5b9e\u8df5",description:"Webpack \u5185\u7f6e\u63d2\u4ef6 DllPlugin \u53ef\u4ee5\u5c06\u4e00\u4e9b\u8f83\u957f\u65f6\u95f4\u5185\u3001\u7a33\u5b9a\u4e0d\u53d8\u7684\u5305\u6216\u7ec4\u4ef6\u62c6\u5206\u51fa\u6765\uff0c\u4ee5 script \u5916\u94fe\u7684\u5f62\u5f0f\u5f15\u5165\u9875\u9762\uff0c\u4ee5\u51cf\u5c11 webpack \u6253\u5305\u65f6\u95f4\uff0c\u957f\u671f\u7f13\u5b58\u3002\u672c\u6587\u8bb0\u5f55\u4e86 Webpack \u5185\u7f6e\u63d2\u4ef6 DllPlugin \u57fa\u672c\u5e94\u7528\u65b9\u6cd5\u3002",date:"2020-01-19T22:37:31.000Z",formattedDate:"2020\u5e741\u670819\u65e5",tags:[{label:"webpack",permalink:"/blog/tags/webpack"}],readingTime:2.115,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Webpack DllPlugin \u57fa\u672c\u5e94\u7528\u4e0e\u5b9e\u8df5",comments:!0,date:"2020-01-19T22:37:31.000Z",updated:"2020-01-19T22:37:31.000Z",tags:["webpack"],categories:["webpack"]},prevItem:{title:"\u4f7f\u7528 fetch \u65b9\u6cd5\u4e0b\u8f7d\u540e\u7aef\u6587\u4ef6",permalink:"/blog/fetch-download"},nextItem:{title:"Google Tag Manager \u5b9e\u7528\u81ea\u5b9a\u4e49 Variable \u548c Trigger",permalink:"/blog/gtm-variables"}},p={authorsImageUrls:[]},i=[],u={toc:i},b="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Webpack")," \u5185\u7f6e\u63d2\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"DllPlugin")," \u53ef\u4ee5\u5c06\u4e00\u4e9b\u8f83\u957f\u65f6\u95f4\u5185\u3001\u7a33\u5b9a\u4e0d\u53d8\u7684\u5305\u6216\u7ec4\u4ef6\u62c6\u5206\u51fa\u6765\uff0c\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," \u5916\u94fe\u7684\u5f62\u5f0f\u5f15\u5165\u9875\u9762\uff0c\u4ee5\u51cf\u5c11 ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack")," \u6253\u5305\u65f6\u95f4\uff0c\u957f\u671f\u7f13\u5b58\u3002\u672c\u6587\u8bb0\u5f55\u4e86 Webpack \u5185\u7f6e\u63d2\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"DllPlugin")," \u57fa\u672c\u5e94\u7528\u65b9\u6cd5\u3002"))}s.isMDXComponent=!0}}]);