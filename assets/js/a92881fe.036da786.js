"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[40410],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=l(r),u=a,m=f["".concat(p,".").concat(u)]||f[u]||c[u]||i;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={},s=void 0,o={unversionedId:"Reference/Middleware",id:"version-v4.8.x/Reference/Middleware",title:"Middleware",description:"Middleware",source:"@site/versioned_docs/version-v4.8.x/Reference/Middleware.md",sourceDirName:"Reference",slug:"/Reference/Middleware",permalink:"/website-next/docs/v4.8.x/Reference/Middleware",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/Middleware.md",tags:[],version:"v4.8.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Logging",permalink:"/website-next/docs/v4.8.x/Reference/Logging"},next:{title:"Plugins",permalink:"/website-next/docs/v4.8.x/Reference/Plugins"}},p={},l=[{value:"Middleware",id:"middleware",level:2},{value:"Restrict middleware execution to certain paths",id:"restrict-middleware-execution-to-certain-paths",level:4},{value:"Alternatives",id:"alternatives",level:3}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"middleware"},"Middleware"),(0,a.kt)("p",null,"Starting with Fastify v3.0.0, middleware is not supported out of the box and\nrequires an external plugin such as\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-express"},(0,a.kt)("inlineCode",{parentName:"a"},"@fastify/express"))," or\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/middie"},(0,a.kt)("inlineCode",{parentName:"a"},"@fastify/middie")),"."),(0,a.kt)("p",null,"An example of registering the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-express"},(0,a.kt)("inlineCode",{parentName:"a"},"@fastify/express"))," plugin to ",(0,a.kt)("inlineCode",{parentName:"p"},"use"),"\nExpress middleware:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await fastify.register(require('@fastify/express'))\nfastify.use(require('cors')())\nfastify.use(require('dns-prefetch-control')())\nfastify.use(require('frameguard')())\nfastify.use(require('hsts')())\nfastify.use(require('ienoopen')())\nfastify.use(require('x-xss-protection')())\n")),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/middie"},(0,a.kt)("inlineCode",{parentName:"a"},"@fastify/middie")),", which provides\nsupport for simple Express-style middleware but with improved performance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await fastify.register(require('@fastify/middie'))\nfastify.use(require('cors')())\n")),(0,a.kt)("p",null,"Remember that middleware can be encapsulated; this means that you can decide\nwhere your middleware should run by using ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," as explained in the\n",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.8.x/Guides/Plugins-Guide"},"plugins guide"),"."),(0,a.kt)("p",null,"Fastify middleware does not expose the ",(0,a.kt)("inlineCode",{parentName:"p"},"send")," method or other methods specific to\nthe Fastify ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.8.x/Reference/Reply#reply"},"Reply")," instance. This is because Fastify wraps\nthe incoming ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"res")," Node instances using the\n",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.8.x/Reference/Request#request"},"Request")," and ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.8.x/Reference/Reply#reply"},"Reply")," objects\ninternally, but this is done after the middleware phase. If you need to create\nmiddleware, you have to use the Node ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"res")," instances. Otherwise, you\ncan use the ",(0,a.kt)("inlineCode",{parentName:"p"},"preHandler")," hook that already has the\n",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.8.x/Reference/Request#request"},"Request")," and ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.8.x/Reference/Reply#reply"},"Reply")," Fastify instances.\nFor more information, see ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.8.x/Reference/Hooks#hooks"},"Hooks"),"."),(0,a.kt)("h4",{id:"restrict-middleware-execution-to-certain-paths"},"Restrict middleware execution to certain paths"),(0,a.kt)("a",{id:"restrict-usage"}),(0,a.kt)("p",null,"If you need to only run middleware under certain paths, just pass the path as\nthe first parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," and you are done!"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note that this does not support routes with parameters, (e.g.\n",(0,a.kt)("inlineCode",{parentName:"em"},"/user/:id/comments"),") and wildcards are not supported in multiple paths.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\nconst serveStatic = require('serve-static')\n\n// Single path\nfastify.use('/css', serveStatic(path.join(__dirname, '/assets')))\n\n// Wildcard path\nfastify.use('/css/(.*)', serveStatic(path.join(__dirname, '/assets')))\n\n// Multiple paths\nfastify.use(['/css', '/js'], serveStatic(path.join(__dirname, '/assets')))\n")),(0,a.kt)("h3",{id:"alternatives"},"Alternatives"),(0,a.kt)("p",null,"Fastify offers some alternatives to the most commonly used middleware, such as\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-helmet"},(0,a.kt)("inlineCode",{parentName:"a"},"@fastify/helmet"))," in case of\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/helmetjs/helmet"},(0,a.kt)("inlineCode",{parentName:"a"},"helmet")),",\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-cors"},(0,a.kt)("inlineCode",{parentName:"a"},"@fastify/cors"))," for\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/expressjs/cors"},(0,a.kt)("inlineCode",{parentName:"a"},"cors")),", and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-static"},(0,a.kt)("inlineCode",{parentName:"a"},"@fastify/static"))," for\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/expressjs/serve-static"},(0,a.kt)("inlineCode",{parentName:"a"},"serve-static")),"."))}c.isMDXComponent=!0}}]);