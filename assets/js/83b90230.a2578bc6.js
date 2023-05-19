"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8788],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},g),{},{components:r})):n.createElement(f,l({ref:t},g))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Google Tag Manager \u57fa\u672c\u5e94\u7528\u4e0e\u5b9e\u8df5",comments:!0,date:new Date("2020-01-15T16:05:36.000Z"),updated:new Date("2020-01-15T16:05:36.000Z"),tags:["Google Tag Manager"],categories:null},l=void 0,i={permalink:"/blog/gtm-basic",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/gtm-basic.md",source:"@site/blog/gtm-basic.md",title:"Google Tag Manager \u57fa\u672c\u5e94\u7528\u4e0e\u5b9e\u8df5",description:"\u5982\u679c\u60f3\u4e86\u89e3\u7f51\u7ad9\u7528\u6237\u7684\u4e92\u52a8\u60c5\u51b5\uff0c\u6211\u4eec\u8be5\u600e\u4e48\u7edf\u8ba1\uff1f",date:"2020-01-15T16:05:36.000Z",formattedDate:"2020\u5e741\u670815\u65e5",tags:[{label:"Google Tag Manager",permalink:"/blog/tags/google-tag-manager"}],readingTime:3.61,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Google Tag Manager \u57fa\u672c\u5e94\u7528\u4e0e\u5b9e\u8df5",comments:!0,date:"2020-01-15T16:05:36.000Z",updated:"2020-01-15T16:05:36.000Z",tags:["Google Tag Manager"],categories:null},prevItem:{title:"Google Tag Manager \u5b9e\u7528\u81ea\u5b9a\u4e49 Variable \u548c Trigger",permalink:"/blog/gtm-variables"},nextItem:{title:"Webhooks - \u7f51\u7ad9\u81ea\u52a8\u5316\u90e8\u7f72\u5b9e\u8df5",permalink:"/blog/webhooks-deploy"}},c={authorsImageUrls:[]},p=[],g={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u4e86\u89e3\u7f51\u7ad9\u7528\u6237\u7684\u4e92\u52a8\u60c5\u51b5\uff0c\u6211\u4eec\u8be5\u600e\u4e48\u7edf\u8ba1\uff1f"),(0,a.kt)("p",null,"\u56fd\u9645\u7ad9\u7684\u8bdd\u53ef\u4ee5\u9009\u7528 Google \u5bb6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"gtag.js"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"analytics.js"),"\uff0c\u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"gtm.js")," \u8fdb\u884c\u5f00\u53d1\u3002\u524d\u4e24\u4e2a\u7684\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u5f0f\u57fa\u672c\u4e00\u81f4\uff0c\u5177\u4f53\u5dee\u522b\u53ef\u53c2\u8003\u4e0b\u65b9\u7684\u5f00\u53d1\u6587\u6863\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"gtm.js")," \u5c31\u662f\u672c\u6587\u8981\u8bf4\u7684 Google Tag Manager \u7684 js \u5e93\u3002"))}u.isMDXComponent=!0}}]);