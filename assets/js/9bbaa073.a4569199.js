"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[14775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(m,s(s({ref:t},f),{},{components:n})):r.createElement(m,s({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},s=void 0,o={unversionedId:"Reference/Index",id:"version-v4.11.x/Reference/Index",title:"Index",description:"Core Documents",source:"@site/versioned_docs/version-v4.11.x/Reference/Index.md",sourceDirName:"Reference",slug:"/Reference/",permalink:"/website-next/docs/v4.11.x/Reference/",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/Index.md",tags:[],version:"v4.11.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Write-Type-Provider",permalink:"/website-next/docs/v4.11.x/Guides/Write-Type-Provider"},next:{title:"ContentTypeParser",permalink:"/website-next/docs/v4.11.x/Reference/ContentTypeParser"}},l={},c=[{value:"Core Documents",id:"core-documents",level:2},{value:"Reference Documentation Table Of Contents",id:"reference-documentation-table-of-contents",level:2}],f={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"core-documents"},"Core Documents"),(0,a.kt)("a",{id:"reference-core-docs"}),(0,a.kt)("p",null,"For the full table of contents (TOC), see ",(0,a.kt)("a",{parentName:"p",href:"#reference-toc"},"below"),". The following\nlist is a subset of the full TOC that detail core Fastify APIs and concepts in\norder of most likely importance to the reader:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Server"},"Server"),": Documents the core Fastify API. Includes documentation\nfor the factory function and the object returned by the factory function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Lifecycle"},"Lifecycle"),": Explains the Fastify request lifecycle and\nillustrates where ",(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Hooks"},"Hooks")," are available for integrating with it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Routes"},"Routes"),": Details how to register routes with Fastify and how\nFastify builds and evaluates the routing trie."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Request"},"Request"),": Details Fastify's request object that is passed into\neach request handler."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Reply"},"Reply"),": Details Fastify's response object available to each\nrequest handler."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Validation-and-Serialization"},"Validation and Serialization"),": Details\nFastify's support for validating incoming data and how Fastify serializes data\nfor responses."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Plugins"},"Plugins"),": Explains Fastify's plugin architecture and API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Encapsulation"},"Encapsulation"),": Explains a core concept upon which all\nFastify plugins are built."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Decorators"},"Decorators"),": Explains the server, request, and response\ndecorator APIs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Hooks"},"Hooks"),": Details the API by which Fastify plugins can inject\nthemselves into Fastify's handling of the request lifecycle.")),(0,a.kt)("h2",{id:"reference-documentation-table-of-contents"},"Reference Documentation Table Of Contents"),(0,a.kt)("a",{id:"reference-toc"}),(0,a.kt)("p",null,"This table of contents is in alphabetical order."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/ContentTypeParser"},"Content Type Parser"),": Documents Fastify's default\ncontent type parser and how to add support for new content types."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Decorators"},"Decorators"),": Explains the server, request, and response\ndecorator APIs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Encapsulation"},"Encapsulation"),": Explains a core concept upon which all\nFastify plugins are built."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Errors"},"Errors"),": Details how Fastify handles errors and lists the\nstandard set of errors Fastify generates."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Hooks"},"Hooks"),": Details the API by which Fastify plugins can inject\nthemselves into Fastify's handling of the request lifecycle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/HTTP2"},"HTTP2"),": Details Fastify's HTTP2 support."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Lifecycle"},"Lifecycle"),": Explains the Fastify request lifecycle and\nillustrates where ",(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Hooks"},"Hooks")," are available for integrating with it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Logging"},"Logging"),": Details Fastify's included logging and how to\ncustomize it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/LTS"},"Long Term Support"),": Explains Fastify's long term support (LTS)\nguarantee and the exceptions possible to the ",(0,a.kt)("a",{parentName:"li",href:"https://semver.org"},"semver"),"\ncontract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Middleware"},"Middleware"),": Details Fastify's support for Express.js style\nmiddleware."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Plugins"},"Plugins"),": Explains Fastify's plugin architecture and API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Reply"},"Reply"),": Details Fastify's response object available to each\nrequest handler."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Request"},"Request"),": Details Fastify's request object that is passed into\neach request handler."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Routes"},"Routes"),": Details how to register routes with Fastify and how\nFastify builds and evaluates the routing trie."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Server"},"Server"),": Documents the core Fastify API. Includes documentation\nfor the factory function and the object returned by the factory function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/TypeScript"},"TypeScript"),": Documents Fastify's TypeScript support and\nprovides recommendations for writing applications in TypeScript that utilize\nFastify."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.11.x/Reference/Validation-and-Serialization"},"Validation and Serialization"),": Details\nFastify's support for validating incoming data and how Fastify serializes data\nfor responses.")))}p.isMDXComponent=!0}}]);