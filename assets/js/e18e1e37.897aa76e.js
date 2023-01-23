"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[94117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"Documentation/LTS",id:"version-v1.14.x/Documentation/LTS",title:"LTS",description:"Long Term Support",source:"@site/versioned_docs/version-v1.14.x/Documentation/LTS.md",sourceDirName:"Documentation",slug:"/Documentation/LTS",permalink:"/website-next/docs/v1.14.x/Documentation/LTS",draft:!1,tags:[],version:"v1.14.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Hooks",permalink:"/website-next/docs/v1.14.x/Documentation/Hooks"},next:{title:"Lifecycle",permalink:"/website-next/docs/v1.14.x/Documentation/Lifecycle"}},p={},s=[{value:"Long Term Support",id:"long-term-support",level:2},{value:"Schedule",id:"schedule",level:3},{value:"CI tested operating systems",id:"ci-tested-operating-systems",level:3}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"lts"}),(0,a.kt)("h2",{id:"long-term-support"},"Long Term Support"),(0,a.kt)("p",null,"Fastify's Long Term Support (LTS) is provided according the schedule laid\nout in this document:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Major releases, "X" release of ',(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning")," X.Y.Z release\nversions, are supported for a minimum period of six months from their release\ndate. The release date of any specific version can be found at\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/releases"},"https://github.com/fastify/fastify/releases"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Major releases will receive security updates for an additional six months\nfrom the release of the next major release."))),(0,a.kt)("p",null,'A "month" is to be a period of 30 consecutive days.'),(0,a.kt)("a",{name:"lts-schedule"}),(0,a.kt)("h3",{id:"schedule"},"Schedule"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"End Of LTS Date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"1.0.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2018-03-06"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TBD")))),(0,a.kt)("a",{name:"supported-os"}),(0,a.kt)("h3",{id:"ci-tested-operating-systems"},"CI tested operating systems"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"CI"),(0,a.kt)("th",{parentName:"tr",align:"left"},"OS"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Package Manager"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Node.js"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Travis"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Linux"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Ubuntu 14.04"),(0,a.kt)("td",{parentName:"tr",align:"left"},"npm"),(0,a.kt)("td",{parentName:"tr",align:"left"},"6,8,9,10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Azure pipeline"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Linux"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Ubuntu 16.04"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yarn"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("del",{parentName:"td"},"6\xb9"),",8,10,11")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Azure pipeline"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Windows"),(0,a.kt)("td",{parentName:"tr",align:"left"},"vs2017-win2016"),(0,a.kt)("td",{parentName:"tr",align:"left"},"npm"),(0,a.kt)("td",{parentName:"tr",align:"left"},"6,8,10,11")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\xb9 yarn supports only node >= 8")))}c.isMDXComponent=!0}}]);