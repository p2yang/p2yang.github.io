"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8227],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var n=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(i),d=l,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return i?n.createElement(g,r(r({ref:t},p),{},{components:i})):n.createElement(g,r({ref:t},p))}));function g(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,r=new Array(a);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4203:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(7462),l=(i(7294),i(3905));const a={title:"Sublime Text \u5b9e\u7528\u63d2\u4ef6",comments:!0,date:new Date("2018-05-21T19:04:05.000Z"),updated:new Date("2018-05-21T19:04:05.000Z"),tags:["Sublime Text"],categories:["Editor"]},r=void 0,o={permalink:"/blog/sublime-text-plugins",editUrl:"https://github.com/p2yang/p2yang.github.io/blob/main/blog/sublime-text-plugins.md",source:"@site/blog/sublime-text-plugins.md",title:"Sublime Text \u5b9e\u7528\u63d2\u4ef6",description:"\u672c\u6587\u662f\u5bf9 Sublime Text \u7f16\u8f91\u5668\u4e00\u4e9b\u5b9e\u7528\u63d2\u4ef6\u7684\u603b\u7ed3\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u3002",date:"2018-05-21T19:04:05.000Z",formattedDate:"2018\u5e745\u670821\u65e5",tags:[{label:"Sublime Text",permalink:"/blog/tags/sublime-text"}],readingTime:2.585,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Sublime Text \u5b9e\u7528\u63d2\u4ef6",comments:!0,date:"2018-05-21T19:04:05.000Z",updated:"2018-05-21T19:04:05.000Z",tags:["Sublime Text"],categories:["Editor"]},prevItem:{title:"webpack profile \u6587\u4ef6\u5206\u6790\u529f\u80fd",permalink:"/blog/webpack-profile-stats"},nextItem:{title:"Node API - URL",permalink:"/blog/node-url"}},s={authorsImageUrls:[]},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"Sync Settings -- \u914d\u7f6e\u4e91\u540c\u6b65",id:"sync-settings----\u914d\u7f6e\u4e91\u540c\u6b65",level:2},{value:"SideBarEnhancements -- \u4fa7\u8fb9\u680f\u589e\u5f3a",id:"sidebarenhancements----\u4fa7\u8fb9\u680f\u589e\u5f3a",level:2},{value:"SublimeCodeIntel -- \u4ee3\u7801\u63d0\u793a",id:"sublimecodeintel----\u4ee3\u7801\u63d0\u793a",level:2},{value:"SublimeLinter -- \u4ee3\u7801\u6821\u9a8c",id:"sublimelinter----\u4ee3\u7801\u6821\u9a8c",level:2},{value:"SublimeLinter-eslint -- Eslint \u8bed\u6cd5\u6821\u9a8c",id:"sublimelinter-eslint----eslint-\u8bed\u6cd5\u6821\u9a8c",level:3},{value:"SublimeLinter-json -- JSON \u68c0\u6d4b",id:"sublimelinter-json----json-\u68c0\u6d4b",level:3},{value:"ESLint-Formatter -- Eslint fix",id:"eslint-formatter----eslint-fix",level:2},{value:"Git",id:"git",level:2},{value:"Git\u200bGutter -- \u663e\u793agit\u4fe1\u606f",id:"gitgutter----\u663e\u793agit\u4fe1\u606f",level:2},{value:"Git blame -- Git \u5386\u53f2\u95ee\u8d23",id:"git-blame----git-\u5386\u53f2\u95ee\u8d23",level:2},{value:"Color Highlighter -- \u989c\u8272\u9ad8\u4eae",id:"color-highlighter----\u989c\u8272\u9ad8\u4eae",level:2},{value:"Case Conversion -- \u683c\u5f0f\u8f6c\u6362",id:"case-conversion----\u683c\u5f0f\u8f6c\u6362",level:2},{value:"DocBlockr -- \u6dfb\u52a0\u6ce8\u91ca",id:"docblockr----\u6dfb\u52a0\u6ce8\u91ca",level:2},{value:"\u4e3b\u9898\u914d\u8272",id:"\u4e3b\u9898\u914d\u8272",level:2},{value:"Spacegray",id:"spacegray",level:3},{value:"Material",id:"material",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u662f\u5bf9 Sublime Text \u7f16\u8f91\u5668\u4e00\u4e9b\u5b9e\u7528\u63d2\u4ef6\u7684\u603b\u7ed3\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u3002"),(0,l.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,l.kt)("p",null,"\u60f3\u88c5\u63d2\u4ef6\uff0c\u8bf7\u5148\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"p"},"Package Control"),", \u7f51\u4e0a\u6559\u7a0b\u5f88\u591a\uff0c\u672c\u6587\u4e0d\u505a\u8d58\u8ff0\u3002"),(0,l.kt)("p",null,"\u6240\u6709\u652f\u6301\u7684\u63d2\u4ef6\u53ef\u4ee5\u4ece",(0,l.kt)("a",{parentName:"p",href:"https://packagecontrol.io/"},"packagecontrol.io"),"\u4e0a\u627e\u5230\u3002"),(0,l.kt)("h2",{id:"sync-settings----\u914d\u7f6e\u4e91\u540c\u6b65"},"Sync Settings -- \u914d\u7f6e\u4e91\u540c\u6b65"),(0,l.kt)("p",null,"\u6700\u7b80\u5355\u7684\u3001\u7701\u4e8b\u513f\u3001\u5b89\u5168\u7684\u65b9\u6cd5\u5f53\u7136\u662f\u201c\u62ff\u6765\u4e3b\u4e49\u201d\u4e86\u3002\u8fd9\u4e2a\u63d2\u4ef6\u53ef\u4ee5\u5c06\u4f60\u7684\u914d\u7f6e\u4e0a\u4f20\u5230",(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/"},(0,l.kt)("inlineCode",{parentName:"a"},"Gist")),"\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"Gist"),"\u4e0a\u7684\u914d\u7f6e\u540c\u6b65\u5230\u672c\u5730\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\u522b\u4eba\u5206\u4eab\u7684\u914d\u7f6e\u3002\u6ce8\u610f\u8fd9\u4e9b\u914d\u7f6e\u5305\u62ec\u4e86\u63d2\u4ef6\u3001\u5feb\u6377\u952e\u3001\u4e2a\u6027\u5316\u914d\u7f6e\u7b49\u3002"),(0,l.kt)("h2",{id:"sidebarenhancements----\u4fa7\u8fb9\u680f\u589e\u5f3a"},"SideBarEnhancements -- \u4fa7\u8fb9\u680f\u589e\u5f3a"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u7684\u4fa7\u8fb9\u680f\u529f\u80fd\u6781\u7b80\uff0c\u4f7f\u7528\u8be5\u63d2\u4ef6\u5e94\u8be5\u80fd\u6ee1\u8db3\u9700\u6c42\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(3602).Z,width:"994",height:"1686"})),(0,l.kt)("h2",{id:"sublimecodeintel----\u4ee3\u7801\u63d0\u793a"},"SublimeCodeIntel -- \u4ee3\u7801\u63d0\u793a"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5c31\u4e0d\u7528\u8bf4\u4e86\u5427\uff0c\u6548\u7387\u5fc5\u5907\u3002"),(0,l.kt)("h2",{id:"sublimelinter----\u4ee3\u7801\u6821\u9a8c"},"SublimeLinter -- \u4ee3\u7801\u6821\u9a8c"),(0,l.kt)("p",null,"\u914d\u5408\u4ee5\u4e0b\u4e24\u4e2a\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5bf9\u6587\u4ef6\u8fdb\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"Eslint")," \u89c4\u5219\u6821\u9a8c\uff0c\u8ba9\u4ee3\u7801\u66f4\u6f02\u4eae\u3001\u98ce\u683c\u66f4\u7edf\u4e00\u3002"),(0,l.kt)("h3",{id:"sublimelinter-eslint----eslint-\u8bed\u6cd5\u6821\u9a8c"},"SublimeLinter-eslint -- Eslint \u8bed\u6cd5\u6821\u9a8c"),(0,l.kt)("h3",{id:"sublimelinter-json----json-\u68c0\u6d4b"},"SublimeLinter-json -- JSON \u68c0\u6d4b"),(0,l.kt)("h2",{id:"eslint-formatter----eslint-fix"},"ESLint-Formatter -- Eslint fix"),(0,l.kt)("p",null,"\u5c06\u4e0d\u7b26\u5408\u89c4\u5219\u7684\u4ee3\u7801\u683c\u5f0f\u5316\uff0c\u4e0d\u8fc7\uff0c\u53ea\u80fd\u683c\u5f0f\u5316\u7b80\u5355\u7684\u89c4\u5219\uff0c\u5982\u6807\u70b9\u7b26\u53f7\u3002"),(0,l.kt)("h2",{id:"git"},"Git"),(0,l.kt)("p",null,"\u5e94\u8be5\u8981\u88c5\u5427\u3002"),(0,l.kt)("h2",{id:"gitgutter----\u663e\u793agit\u4fe1\u606f"},"Git\u200bGutter -- \u663e\u793agit\u4fe1\u606f"),(0,l.kt)("p",null,"\u770b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(7148).Z,width:"704",height:"346"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(3759).Z,width:"597",height:"346"})),(0,l.kt)("h2",{id:"git-blame----git-\u5386\u53f2\u95ee\u8d23"},"Git blame -- Git \u5386\u53f2\u95ee\u8d23"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"vscode")," \u4e0a\u6709\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Gitlens"),"\uff0c\u53ef\u4ee5\u5728\u6bcf\u884c\u4ee3\u7801\u4e0a\u663e\u793a\u4e0a\u4e00\u6b21\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Git"),"\u63d0\u4ea4\u8bb0\u5f55\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Sublime Text")," \u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Git blame")," \u540c\u6837\u53ef\u4ee5\u5b9e\u73b0\u6b64\u529f\u80fd\u3002\u4ee3\u7801\u8d23\u4efb\u5230\u884c\uff0c\u4ece\u6b64\uff0c\u4e0d\u7528\u62c5\u5fc3\u7529\u9505\uff08\u5f53\u7136\u5566\uff0c\u53ef\u4ee5\u67e5\u770b\u5177\u4f53\u7684\u6587\u4ef6commit history\uff09\u3002\u8be5\u63d2\u4ef6\u63d0\u4f9b\u4e86\u5feb\u901f\u67e5\u770b\u67d0\u884c\u6216\u67d0\u6587\u4ef6\u4e0a\u6b21\u4fee\u6539\u5386\u53f2\u8bb0\u5f55\u7684\u529f\u80fd\uff0c\u5341\u5206\u65b9\u4fbf\u3002"),(0,l.kt)("h2",{id:"color-highlighter----\u989c\u8272\u9ad8\u4eae"},"Color Highlighter -- \u989c\u8272\u9ad8\u4eae"),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(3243).Z,width:"672",height:"626"})),(0,l.kt)("h2",{id:"case-conversion----\u683c\u5f0f\u8f6c\u6362"},"Case Conversion -- \u683c\u5f0f\u8f6c\u6362"),(0,l.kt)("p",null,"\u5c06\u9009\u4e2d\u6587\u672c\u8f6c\u6362\u6210\u76ee\u6807\u683c\u5f0f\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"snake_case"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"SCREAMING_SNAKE_CASE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"PascalCase"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dot.case"),"\u7b49\u3002"),(0,l.kt)("h2",{id:"docblockr----\u6dfb\u52a0\u6ce8\u91ca"},"DocBlockr -- \u6dfb\u52a0\u6ce8\u91ca"),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(2438).Z,width:"368",height:"192"})),(0,l.kt)("h2",{id:"\u4e3b\u9898\u914d\u8272"},"\u4e3b\u9898\u914d\u8272"),(0,l.kt)("h3",{id:"spacegray"},"Spacegray"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u767d\u8272"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:i(5553).Z,width:"1788",height:"1600"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9ed1\u8272"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{src:i(5082).Z,width:"1788",height:"1600"})))),(0,l.kt)("h3",{id:"material"},"Material"),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(6231).Z,width:"1600",height:"1200"})),(0,l.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,l.kt)("p",null,"\u8be6\u7ec6\u5b89\u88c5\u4f7f\u7528\u6559\u7a0b\u90fd\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://packagecontrol.io/"},"packagecontrol.io")," \u4e0a\u627e\u5230\uff0c\u4ee5\u4e0a\u90e8\u5206\u622a\u56fe\u4e5f\u662f\u53d6\u81ea\u5b98\u65b9\u6587\u6863\u3002\u6682\u65f6\u5148\u8bb0\u5f55\u5230\u8fd9\u91cc\u5427\u3002"))}u.isMDXComponent=!0},3243:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/colorhighlighte-4adc09ea3ab04d0d4484131e400e6f89.png"},2438:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/docblockr-9be1f67768596c6e3671bc157c1fa544.gif"},7148:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/gitgutter1-6a44a1fe65e697d88144072e7195262b.gif"},3759:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/gitgutter2-701f68d2a194425bce2c8bc7ae362bf8.gif"},6231:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/material-92442f8c8ca7c6cd873c8da367bc870b.gif"},3602:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/sidebar-8e032538dc8b26b94d375ff6daeb89f7.png"},5553:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/spacegray1-c541522a786d38dbcd508b20f21bd801.png"},5082:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/spacegray2-190cac6319d5f5c303939f59c9f740fb.png"}}]);