"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=g(a),m=r,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<l;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6026:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var n=a(7462),r=(a(7294),a(3905));const l={title:"Google Tag Manager \u5b9e\u7528\u81ea\u5b9a\u4e49 Variable \u548c Trigger",comments:!0,date:new Date("2020-01-16T22:19:47.000Z"),updated:new Date("2020-01-16T22:19:47.000Z"),tags:["Google Tag Manager"],categories:null},o=void 0,i={permalink:"/blog/gtm-variables",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/gtm-variables.md",source:"@site/blog/gtm-variables.md",title:"Google Tag Manager \u5b9e\u7528\u81ea\u5b9a\u4e49 Variable \u548c Trigger",description:"\u5355\u72ec\u4e3a\u6bcf\u4e2a\u57cb\u70b9\u5efa\u7acb\u4e00\u4e2a\u4e2a Tag \u548c Trigger, \u672a\u514d\u592a\u8fc7\u9ebb\u70e6\u3002\u8fd9\u91cc\u8bb0\u5f55\u51e0\u4e2a\u5b9e\u7528\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u4ee5\u63d0\u9ad8\u6548\u7387\u3002",date:"2020-01-16T22:19:47.000Z",formattedDate:"2020\u5e741\u670816\u65e5",tags:[{label:"Google Tag Manager",permalink:"/blog/tags/google-tag-manager"}],readingTime:2.405,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Google Tag Manager \u5b9e\u7528\u81ea\u5b9a\u4e49 Variable \u548c Trigger",comments:!0,date:"2020-01-16T22:19:47.000Z",updated:"2020-01-16T22:19:47.000Z",tags:["Google Tag Manager"],categories:null},prevItem:{title:"Webpack DllPlugin \u57fa\u672c\u5e94\u7528\u4e0e\u5b9e\u8df5",permalink:"/blog/webpack-dll"},nextItem:{title:"Google Tag Manager \u57fa\u672c\u5e94\u7528\u4e0e\u5b9e\u8df5",permalink:"/blog/gtm-basic"}},p={authorsImageUrls:[]},g=[{value:"\u6839\u636e CSS Selector \u83b7\u53d6\u76ee\u6807\u5143\u7d20",id:"\u6839\u636e-css-selector-\u83b7\u53d6\u76ee\u6807\u5143\u7d20",level:2},{value:"\u81ea\u5b9a\u4e49 GA Event Category / Event Label \u53d8\u91cf",id:"\u81ea\u5b9a\u4e49-ga-event-category--event-label-\u53d8\u91cf",level:2},{value:"\u81ea\u5b9a\u4e49 Data Layer \u53d8\u91cf",id:"\u81ea\u5b9a\u4e49-data-layer-\u53d8\u91cf",level:2}],c={toc:g},s="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5355\u72ec\u4e3a\u6bcf\u4e2a\u57cb\u70b9\u5efa\u7acb\u4e00\u4e2a\u4e2a Tag \u548c Trigger, \u672a\u514d\u592a\u8fc7\u9ebb\u70e6\u3002\u8fd9\u91cc\u8bb0\u5f55\u51e0\u4e2a\u5b9e\u7528\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u4ee5\u63d0\u9ad8\u6548\u7387\u3002"),(0,r.kt)("p",null,"Google Tag Manager \u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u524d\u7aef\u540c\u5b66\u53ef\u81ea\u884c\u9009\u62e9\u4f7f\u7528\u54ea\u4e9b\u3002"),(0,r.kt)("h2",{id:"\u6839\u636e-css-selector-\u83b7\u53d6\u76ee\u6807\u5143\u7d20"},"\u6839\u636e CSS Selector \u83b7\u53d6\u76ee\u6807\u5143\u7d20"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u53d8\u91cf\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Find Closest"),", \u53d8\u91cf\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom JavaScript"),", \u811a\u672c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function() {\n  return function(target, selector) {\n    while (!target.matches(selector) && !target.matches('body')) {\n      target = target.parentElement;\n    }\n    return target.matches(selector) ? target : undefined;\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GTM Variable",src:a(9840).Z,width:"2170",height:"1152"})),(0,r.kt)("p",null,"\u4e0b\u9762\u4f1a\u6709\u5177\u4f53\u5e94\u7528\u3002"),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49-ga-event-category--event-label-\u53d8\u91cf"},"\u81ea\u5b9a\u4e49 GA Event Category / Event Label \u53d8\u91cf"),(0,r.kt)("p",null,"\u5728\u5173\u8054\u914d\u7f6e GA \u7684 Event track \u7c7b\u578b\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf\uff0c\u800c\u4e0d\u7528\u628a\u503c\u5199\u6b7b\u3002\u540c\u6837\u662f\u5148\u547d\u540d\u53d8\u91cf\uff0c\u8bbe\u7f6e\u53d8\u91cf\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom JavaScript"),"\u3002\n\u811a\u672c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function() {\n    var el = {{Find Closest}}({{Click Element}}, '[data-label]');\n    return el ? el.dataset.label : ''\uff1b\n}\n")),(0,r.kt)("p",null,"\u811a\u672c\u4e2d\u51fa\u73b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\\{\\{Find Closest\\}\\}")," \u5c31\u662f\u4e0a\u9762\u81ea\u5b9a\u4e49\u7684\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"Find Closest"),"\uff0c\u53cc\u5927\u62ec\u53f7\u662f\u8c03\u7528\u53d6\u503c\u8bed\u6cd5\u3002\n\u4e0d\u540c\u7684\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\\{\\{Click Element\\}\\}")," \u662f Google Tag Manager \u5185\u7f6e\u53d8\u91cf\uff0c\u8868\u793a\u88ab\u70b9\u51fb\u7684 DOM \u5143\u7d20\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"selector")," \u53ef\u81ea\u884c\u6539\u5199\u3002"),(0,r.kt)("p",null,"\u8be5\u53d8\u91cf\u7684\u4f5c\u7528\u662f\u83b7\u53d6\u5230\u88ab\u70b9\u51fb\u76ee\u6807\u5143\u7d20\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"data-label")," \u503c\uff0c\u6ca1\u6709\u5219\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49-data-layer-\u53d8\u91cf"},"\u81ea\u5b9a\u4e49 Data Layer \u53d8\u91cf"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u624b\u52a8\u4e0a\u62a5\u7684\u8bdd\uff0c\u8fd9\u91cc\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Layer Variable")," \u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u6240\u5b9a\u4e49\u7684\u503c\u53ef\u4ee5\u88ab ",(0,r.kt)("inlineCode",{parentName:"p"},"window.dataLayer")," \u4e0a\u62a5\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u6ce8\u610f\uff1a\u6b64\u5904\u4ee3\u7801\u9700\u8981\u5728\u81ea\u5df1\u7684\u9875\u9762\u4e2d\u6dfb\u52a0\nwindow.dataLayer.push({\n    'event': 'track_custom_event',\n    'xxx': '\u5f85\u4e0a\u62a5\u7684\u503c'\n})\n")),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"xxx")," \u5373\u4e3a\u6b64\u5904\u9700\u8981\u5b9a\u4e49\u7684 Data Layer Variable Name\u3002"),(0,r.kt)("p",null,"\u518d\u5efa\u7acb\u4e00\u4e2a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u53d8\u91cf\uff0c\u53d8\u91cf\u7c7b\u578b\u9009 ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom Event"),"\u3002"),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u53ef\u4ee5\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom Event")," \u7c7b\u578b\u7684 Trigger \u6765\u54cd\u5e94\u624b\u52a8\u4e0a\u62a5\u4e8b\u4ef6\u3002\n\u5176\u4e2d Event Name \u53ef\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"[A-Z0-9_]+"),"\u3002\n\u6ce8\u610f\uff0c\u9700\u8981\u52a0\u4e00\u6761\u5339\u914d\u89c4\u5219\uff0c\u7528\u6765\u6392\u9664\u5b98\u65b9\u7684\u4e8b\u4ef6\u7c7b\u578b - ",(0,r.kt)("inlineCode",{parentName:"p"},"gtm"),"\uff0c\u793a\u56fe\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GTM Trigger",src:a(2843).Z,width:"2170",height:"1200"})))}u.isMDXComponent=!0},2843:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gtm2-trigger-3ca20f70555e151a79d2db5d759223a6.png"},9840:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gtm2-variable-d2324d090702f402804df2fedb487ecd.png"}}]);