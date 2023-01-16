"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[25582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,f=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a="V4 Migration Guide",s={unversionedId:"Guides/Migration-Guide-V4",id:"version-v4.5.x/Guides/Migration-Guide-V4",title:"V4 Migration Guide",description:"This guide is intended to help with migration from Fastify v3 to v4.",source:"@site/versioned_docs/version-v4.5.x/Guides/Migration-Guide-V4.md",sourceDirName:"Guides",slug:"/Guides/Migration-Guide-V4",permalink:"/website-next/docs/v4.5.x/Guides/Migration-Guide-V4",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Guides/Migration-Guide-V4.md",tags:[],version:"v4.5.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"V3 Migration Guide",permalink:"/website-next/docs/v4.5.x/Guides/Migration-Guide-V3"},next:{title:"The hitchhiker's guide to plugins",permalink:"/website-next/docs/v4.5.x/Guides/Plugins-Guide"}},l={},p=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Error handling composition (#3261)",id:"error-handling-composition-3261",level:3},{value:"Deprecation of <code>app.use()</code> (#3506)",id:"deprecation-of-appuse-3506",level:3},{value:"<code>reply.res</code> moved to <code>reply.raw</code>",id:"replyres-moved-to-replyraw",level:3},{value:"Need to <code>return reply</code> to signal a &quot;fork&quot; of the promise chain",id:"need-to-return-reply-to-signal-a-fork-of-the-promise-chain",level:3},{value:"<code>exposeHeadRoutes</code> true by default",id:"exposeheadroutes-true-by-default",level:3},{value:"Synchronous route definitions",id:"synchronous-route-definitions",level:3},{value:"Non Breaking Changes",id:"non-breaking-changes",level:2},{value:"Change of schema for multiple types",id:"change-of-schema-for-multiple-types",level:3},{value:"Add <code>reply.trailers</code> methods (#3794)",id:"add-replytrailers-methods-3794",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"v4-migration-guide"},"V4 Migration Guide"),(0,o.kt)("p",null,"This guide is intended to help with migration from Fastify v3 to v4."),(0,o.kt)("p",null,"Before migrating to v4, please ensure that you have fixed all deprecation\nwarnings from v3. All v3 deprecations have been removed and they will no longer\nwork after upgrading."),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("h3",{id:"error-handling-composition-3261"},"Error handling composition (",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/3261"},"#3261"),")"),(0,o.kt)("p",null,"When an error is thrown in a async error handler function,\nthe upper-level error handler is executed if set.\nIf there is not a upper-level error handler, the default will\nbe executed as it was previously."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import Fastify from 'fastify'\n\nconst fastify = Fastify()\n\nfastify.register(async fastify => {\n  fastify.setErrorHandler(async err => {\n    console.log(err.message) // 'kaboom'\n    throw new Error('caught')\n  })\n  \n  fastify.get('/encapsulated', async () => {\n    throw new Error('kaboom')\n  })\n})\n\nfastify.setErrorHandler(async err => {\n  console.log(err.message) // 'caught' \n  throw new Error('wrapped')\n})\n\nconst res = await fastify.inject('/encapsulated')\nconsole.log(res.json().message) // 'wrapped'\n")),(0,o.kt)("h3",{id:"deprecation-of-appuse-3506"},"Deprecation of ",(0,o.kt)("inlineCode",{parentName:"h3"},"app.use()")," (",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/3506"},"#3506"),")"),(0,o.kt)("p",null,"Starting this version of Fastify, we have deprecated the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"app.use()"),". We\nhave decided not to support the use of middlewares. Both\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/middie"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/middie"))," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-express"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/express"))," will still be\nthere and maintained. Use Fastify's ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v4.5.x/Reference/Hooks"},"hooks")," instead."),(0,o.kt)("h3",{id:"replyres-moved-to-replyraw"},(0,o.kt)("inlineCode",{parentName:"h3"},"reply.res")," moved to ",(0,o.kt)("inlineCode",{parentName:"h3"},"reply.raw")),(0,o.kt)("p",null,"If you previously used the ",(0,o.kt)("inlineCode",{parentName:"p"},"reply.res")," attribute to access the underlying Request\nobject you'll instead need to depend on ",(0,o.kt)("inlineCode",{parentName:"p"},"reply.raw"),"."),(0,o.kt)("h3",{id:"need-to-return-reply-to-signal-a-fork-of-the-promise-chain"},"Need to ",(0,o.kt)("inlineCode",{parentName:"h3"},"return reply"),' to signal a "fork" of the promise chain'),(0,o.kt)("p",null,"In some situations, like when a response is sent asynchronously or when you're\njust not explicitly returning a response, you'll need to return the ",(0,o.kt)("inlineCode",{parentName:"p"},"reply"),"\nargument from your router handler."),(0,o.kt)("h3",{id:"exposeheadroutes-true-by-default"},(0,o.kt)("inlineCode",{parentName:"h3"},"exposeHeadRoutes")," true by default"),(0,o.kt)("p",null,"Starting from v4, all the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," routes will create a sibling ",(0,o.kt)("inlineCode",{parentName:"p"},"HEAD")," route.\nYou can revert this behaviour by setting the server's option ",(0,o.kt)("inlineCode",{parentName:"p"},"exposeHeadRoutes"),"\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"synchronous-route-definitions"},"Synchronous route definitions"),(0,o.kt)("p",null,"The route registration has been made synchronous from v4.\nThis change was done to provide better error reporting for route definition.\nAs a result if you specify an ",(0,o.kt)("inlineCode",{parentName:"p"},"onRoute")," hook in a plugin you should either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"wrap your routes in a plugin (recommended)"),(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"await register(...)"))),(0,o.kt)("p",null,"For example refactor this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fastify.register((instance, opts, done) => {\n  instance.addHook('onRoute', (routeOptions) => {\n    const { path, method } = routeOptions;\n    console.log({ path, method });\n  });\n  done();\n});\n")),(0,o.kt)("p",null,"Into this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"await fastify.register((instance, opts, done) => {\n  instance.addHook('onRoute', (routeOptions) => {\n    const { path, method } = routeOptions;\n    console.log({ path, method });\n  });\n  done();\n});\n")),(0,o.kt)("h2",{id:"non-breaking-changes"},"Non Breaking Changes"),(0,o.kt)("h3",{id:"change-of-schema-for-multiple-types"},"Change of schema for multiple types"),(0,o.kt)("p",null,'Since Fastify v4 has upgraded to Ajv v8. The "type" keywords with multiple types\n(other than with "null") are prohibited. Read more\n',(0,o.kt)("a",{parentName:"p",href:"https://ajv.js.org/strict-mode.html#strict-types"},"'here'")),(0,o.kt)("p",null,"You may encounter a console warning such as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'strict mode: use allowUnionTypes to allow union type keyword at "#/properties/image" (strictTypes)\n')),(0,o.kt)("p",null,"So schemas like below will need to be changed from"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type: 'object',\nproperties: {\n  api_key: { type: 'string' },\n  image: { type: ['object', 'array'] }\n  }\n}\n")),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type: 'object',\nproperties: {\n  api_key: { type: 'string' },\n  image: {\n    anyOf: [\n      { type: 'array' },\n      { type: 'object' }\n    ]\n  }\n}\n")),(0,o.kt)("h3",{id:"add-replytrailers-methods-3794"},"Add ",(0,o.kt)("inlineCode",{parentName:"h3"},"reply.trailers")," methods (",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/fastify/fastify/pull/3794"},"#3794"),")"),(0,o.kt)("p",null,"Fastify now supports the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer"},"HTTP Trailer")," response headers."))}u.isMDXComponent=!0}}]);