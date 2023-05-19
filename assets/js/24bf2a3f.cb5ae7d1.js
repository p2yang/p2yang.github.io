"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=m(n),s=a,d=k["".concat(p,".").concat(s)]||k[s]||c[s]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u5c0f\u8bd5 Momentjs Query API",date:new Date("2017-11-28T00:33:55.000Z"),updated:null,tags:["moment"]},o=void 0,i={permalink:"/blog/momentjs-query",editUrl:"https://github.com/p2yang/p2yang.github.io/blob/main/blog/blog/momentjs-query.md",source:"@site/blog/momentjs-query.md",title:"\u5c0f\u8bd5 Momentjs Query API",description:"moment\u7528\u7684\u597d\uff0c\u53ef\u7701\u4e00\u5927\u7b14\u7cbe\u529b\u548c\u65f6\u95f4\u3002",date:"2017-11-28T00:33:55.000Z",formattedDate:"2017\u5e7411\u670828\u65e5",tags:[{label:"moment",permalink:"/blog/tags/moment"}],readingTime:1.135,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u5c0f\u8bd5 Momentjs Query API",date:"2017-11-28T00:33:55.000Z",updated:null,tags:["moment"]},prevItem:{title:"npm\u5305\u53d1\u5e03\u5b9e\u8df5",permalink:"/blog/npm-package"},nextItem:{title:"webpack \u914d\u7f6e react \u5f00\u53d1\u73af\u5883",permalink:"/blog/webpack"}},p={authorsImageUrls:[]},m=[{value:"\u8d77\u59cb\u4e0e\u7ed3\u675f",id:"\u8d77\u59cb\u4e0e\u7ed3\u675f",level:2},{value:"Boolean \u5224\u65ad",id:"boolean-\u5224\u65ad",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u65f6\u95f4\u6233",id:"\u65f6\u95f4\u6233",level:3},{value:"\u540e\u8bb0",id:"\u540e\u8bb0",level:2}],u={toc:m},k="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"moment\u7528\u7684\u597d\uff0c\u53ef\u7701\u4e00\u5927\u7b14\u7cbe\u529b\u548c\u65f6\u95f4\u3002"),(0,a.kt)("h2",{id:"\u8d77\u59cb\u4e0e\u7ed3\u675f"},"\u8d77\u59cb\u4e0e\u7ed3\u675f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5468\u671f\u7684\u5f00\u59cb\u65f6\u95f4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"moment().startOf(String)\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5468\u671f\u7684\u7ed3\u675f\u65f6\u95f4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"moment().endOf(String)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"String \u652f\u6301\u4ee5\u4e0b\u53c2\u6570\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"year"),(0,a.kt)("li",{parentName:"ul"},"month"),(0,a.kt)("li",{parentName:"ul"},"quarter"),(0,a.kt)("li",{parentName:"ul"},"week"),(0,a.kt)("li",{parentName:"ul"},"isoWeek"),(0,a.kt)("li",{parentName:"ul"},"day"),(0,a.kt)("li",{parentName:"ul"},"date"),(0,a.kt)("li",{parentName:"ul"},"hour"),(0,a.kt)("li",{parentName:"ul"},"minute"),(0,a.kt)("li",{parentName:"ul"},"second")))),(0,a.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"moment().startOf('month');\nmoment().startOf('year');\nmoment().startOf('week');\n")),(0,a.kt)("h2",{id:"boolean-\u5224\u65ad"},"Boolean \u5224\u65ad"),(0,a.kt)("p",null,"\u5224\u65ad\u65f6\u95f4A\u662f\u5426\u5728\u76ee\u6807\u65f6\u95f4B\u4e4b\u524d\u6216\u4e4b\u540e, \u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/*\n  A\uff0fB \u7c7b\u578b\u652f\u6301 Moment|String|Number|Date|Array\n\n  \u53c2\u6570 String \u53ef\u4ee5\u662f year\uff0fmonth\uff0fweek\uff0fday\uff0fhour\uff0fminute\uff0fsecond,\u53ef\u7701\u7565\n */\nmoment(A).isBefore(B, String)\n")),(0,a.kt)("p",null,"  \u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const a = moment()\na.isBefore('2017-11-27'); // true\na.isAfter('2017-11-27'); // false\n")),(0,a.kt)("p",null,"\u7c7b\u4f3c\u8fd8\u6709\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isSame"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isSameBefore"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isSameAfter"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isBetween")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"moment('2010-10-20').isBetween('2010-01-01', '2012-01-01', 'year'); // false\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isDST"),"\nchecks if the current moment is in daylight saving time."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"moment([2011, 2, 12]).isDST(); // false, March 12 2011 is not DST\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isDSTShifted"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isMoment"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isLeapYear"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isDate")))),(0,a.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("h3",{id:"\u65f6\u95f4\u6233"},"\u65f6\u95f4\u6233"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"moment().valueOf(); // \u6beb\u79d2\u6570\nmoment().unix(); // \u79d2\u6570\n")),(0,a.kt)("h2",{id:"\u540e\u8bb0"},"\u540e\u8bb0"),(0,a.kt)("p",null,"\u5b98\u65b9\u6587\u6863\u793a\u4f8b\u548c\u63cf\u8ff0\u6e05\u6670\u660e\u4e86\uff0c\u53ef\u70b9\u51fb",(0,a.kt)("a",{parentName:"p",href:"http://momentjs.com/docs/#/parsing/"},"\u67e5\u770b\u5b98\u65b9\u6587\u6863"),"\uff0c\u4e0d\u591a\u8d58\u8ff0\u3002"))}c.isMDXComponent=!0}}]);