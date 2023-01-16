"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[49528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,h=c["".concat(l,".").concat(d)]||c[d]||f[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},o=void 0,s={unversionedId:"Reference/Plugins",id:"version-latest/Reference/Plugins",title:"Plugins",description:"Plugins",source:"@site/versioned_docs/version-latest/Reference/Plugins.md",sourceDirName:"Reference",slug:"/Reference/Plugins",permalink:"/website-next/docs/latest/Reference/Plugins",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/Plugins.md",tags:[],version:"latest",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Middleware",permalink:"/website-next/docs/latest/Reference/Middleware"},next:{title:"Reply",permalink:"/website-next/docs/latest/Reference/Reply"}},l={},p=[{value:"Plugins",id:"plugins",level:2},{value:"Plugin Options",id:"plugin-options",level:3},{value:"Route Prefixing option",id:"route-prefixing-option",level:4},{value:"Error handling",id:"error-handling",level:4},{value:"async/await",id:"asyncawait",level:3},{value:"ESM support",id:"esm-support",level:4},{value:"Create a plugin",id:"create-a-plugin",level:3},{value:"Handle the scope",id:"handle-the-scope",level:3}],u={toc:p};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"Fastify allows the user to extend its functionalities with plugins. A plugin can\nbe a set of routes, a server ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/latest/Reference/Decorators"},"decorator"),", or whatever. The API\nthat you will need to use one or more plugins, is ",(0,i.kt)("inlineCode",{parentName:"p"},"register"),"."),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," creates a ",(0,i.kt)("em",{parentName:"p"},"new scope"),", this means that if you make some\nchanges to the Fastify instance (via ",(0,i.kt)("inlineCode",{parentName:"p"},"decorate"),"), this change will not be\nreflected by the current context ancestors, but only by its descendants. This\nfeature allows us to achieve plugin ",(0,i.kt)("em",{parentName:"p"},"encapsulation")," and ",(0,i.kt)("em",{parentName:"p"},"inheritance"),", in this\nway we create a ",(0,i.kt)("em",{parentName:"p"},"directed acyclic graph")," (DAG) and we will not have issues\ncaused by cross dependencies."),(0,i.kt)("p",null,"You may have already seen in the ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/latest/Guides/Getting-Started#your-first-plugin"},"Getting\nStarted")," guide how easy it is\nto use this API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fastify.register(plugin, [options])\n")),(0,i.kt)("h3",{id:"plugin-options"},"Plugin Options"),(0,i.kt)("a",{id:"plugin-options"}),(0,i.kt)("p",null,"The optional ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," parameter for ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify.register")," supports a predefined\nset of options that Fastify itself will use, except when the plugin has been\nwrapped with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},"fastify-plugin"),". This\noptions object will also be passed to the plugin upon invocation, regardless of\nwhether or not the plugin has been wrapped. The currently supported list of\nFastify specific options is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Routes#custom-log-level"},(0,i.kt)("inlineCode",{parentName:"a"},"logLevel"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/website-next/docs/latest/Reference/Routes#custom-log-serializer"},(0,i.kt)("inlineCode",{parentName:"a"},"logSerializers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#route-prefixing-option"},(0,i.kt)("inlineCode",{parentName:"a"},"prefix")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: Those options will be ignored when used with fastify-plugin")),(0,i.kt)("p",null,"It is possible that Fastify will directly support other options in the future.\nThus, to avoid collisions, a plugin should consider namespacing its options. For\nexample, a plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," might be registered like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register(require('fastify-foo'), {\n  prefix: '/foo',\n  foo: {\n    fooOption1: 'value',\n    fooOption2: 'value'\n  }\n})\n")),(0,i.kt)("p",null,"If collisions are not a concern, the plugin may simply accept the options object\nas-is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register(require('fastify-foo'), {\n  prefix: '/foo',\n  fooOption1: 'value',\n  fooOption2: 'value'\n})\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," parameter can also be a ",(0,i.kt)("inlineCode",{parentName:"p"},"Function")," that will be evaluated at the\ntime the plugin is registered while giving access to the Fastify instance via\nthe first positional argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fp = require('fastify-plugin')\n\nfastify.register(fp((fastify, opts, done) => {\n  fastify.decorate('foo_bar', { hello: 'world' })\n\n  done()\n}))\n\n// The opts argument of fastify-foo will be { hello: 'world' }\nfastify.register(require('fastify-foo'), parent => parent.foo_bar)\n")),(0,i.kt)("p",null,"The Fastify instance passed on to the function is the latest state of the\n",(0,i.kt)("strong",{parentName:"p"},"external Fastify instance")," the plugin was declared on, allowing access to\nvariables injected via ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/latest/Reference/Decorators"},(0,i.kt)("inlineCode",{parentName:"a"},"decorate"))," by preceding plugins\naccording to the ",(0,i.kt)("strong",{parentName:"p"},"order of registration"),". This is useful in case a plugin\ndepends on changes made to the Fastify instance by a preceding plugin i.e.\nutilizing an existing database connection to wrap around it."),(0,i.kt)("p",null,"Keep in mind that the Fastify instance passed on to the function is the same as\nthe one that will be passed into the plugin, a copy of the external Fastify\ninstance rather than a reference. Any usage of the instance will behave the same\nas it would if called within the plugins function i.e. if ",(0,i.kt)("inlineCode",{parentName:"p"},"decorate")," is called,\nthe decorated variables will be available within the plugins function unless it\nwas wrapped with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-plugin")),"."),(0,i.kt)("h4",{id:"route-prefixing-option"},"Route Prefixing option"),(0,i.kt)("a",{id:"route-prefixing-option"}),(0,i.kt)("p",null,"If you pass an option with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," value, Fastify will\nuse it to prefix all the routes inside the register, for more info check\n",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/latest/Reference/Routes#route-prefixing"},"here"),"."),(0,i.kt)("p",null,"Be aware that if you wrap your routes with\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-plugin")),", this option will\nnot work (there is a ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/latest/Reference/Routes#fastify-plugin"},"workaround")," available)."),(0,i.kt)("h4",{id:"error-handling"},"Error handling"),(0,i.kt)("a",{id:"error-handling"}),(0,i.kt)("p",null,"The error handling is done by\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcollina/avvio#error-handling"},"avvio"),"."),(0,i.kt)("p",null,"As a general rule, it is highly recommended that you handle your errors in the\nnext ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ready")," block, otherwise you will get them inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"listen"),"\ncallback."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register(require('my-plugin'))\n\n// `after` will be executed once\n// the previous declared `register` has finished\nfastify.after(err => console.log(err))\n\n// `ready` will be executed once all the registers declared\n// have finished their execution\nfastify.ready(err => console.log(err))\n\n// `listen` is a special ready,\n// so it behaves in the same way\nfastify.listen({ port: 3000 }, (err, address) => {\n  if (err) console.log(err)\n})\n")),(0,i.kt)("h3",{id:"asyncawait"},"async/await"),(0,i.kt)("a",{id:"async-await"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"async/await")," is supported by ",(0,i.kt)("inlineCode",{parentName:"p"},"after"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ready"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"listen"),", as well as\n",(0,i.kt)("inlineCode",{parentName:"p"},"fastify")," being a ",(0,i.kt)("a",{parentName:"p",href:"https://promisesaplus.com/"},"Thenable"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await fastify.register(require('my-plugin'))\n\nawait fastify.after()\n\nawait fastify.ready()\n\nawait fastify.listen({ port: 3000 })\n")),(0,i.kt)("h4",{id:"esm-support"},"ESM support"),(0,i.kt)("a",{id:"esm-support"}),(0,i.kt)("p",null,"ESM is supported as well from ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html"},"Node.js\n",(0,i.kt)("inlineCode",{parentName:"a"},"v13.3.0"))," and above!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// main.mjs\nimport Fastify from 'fastify'\nconst fastify = Fastify()\n\nfastify.register(import('./plugin.mjs'))\n\nfastify.listen({ port: 3000 }, console.log)\n\n\n// plugin.mjs\nasync function plugin (fastify, opts) {\n  fastify.get('/', async (req, reply) => {\n    return { hello: 'world' }\n  })\n}\n\nexport default plugin\n")),(0,i.kt)("h3",{id:"create-a-plugin"},"Create a plugin"),(0,i.kt)("a",{id:"create-plugin"}),(0,i.kt)("p",null,"Creating a plugin is very easy, you just need to create a function that takes\nthree parameters, the ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify")," instance, an ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," object, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"done"),"\ncallback."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (fastify, opts, done) {\n  fastify.decorate('utility', function () {})\n\n  fastify.get('/', handler)\n\n  done()\n}\n")),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," inside another ",(0,i.kt)("inlineCode",{parentName:"p"},"register"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (fastify, opts, done) {\n  fastify.decorate('utility', function () {})\n\n  fastify.get('/', handler)\n\n  fastify.register(require('./other-plugin'))\n\n  done()\n}\n")),(0,i.kt)("p",null,"Sometimes, you will need to know when the server is about to close, for example,\nbecause you must close a connection to a database. To know when this is going to\nhappen, you can use the ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/latest/Reference/Hooks#on-close"},(0,i.kt)("inlineCode",{parentName:"a"},"'onClose'"))," hook."),(0,i.kt)("p",null,"Do not forget that ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," will always create a new Fastify scope, if you do\nnot need that, read the following section."),(0,i.kt)("h3",{id:"handle-the-scope"},"Handle the scope"),(0,i.kt)("a",{id:"handle-scope"}),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," only for extending the functionality of the server\nwith  ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/latest/Reference/Decorators"},(0,i.kt)("inlineCode",{parentName:"a"},"decorate")),", it is your responsibility to tell Fastify\nnot to create a new scope. Otherwise, your changes will not be accessible by the\nuser in the upper scope."),(0,i.kt)("p",null,"You have two ways to tell Fastify to avoid the creation of a new context:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-plugin"))," module"),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"'skip-override'")," hidden property")),(0,i.kt)("p",null,"We recommend using the ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify-plugin")," module, because it solves this problem\nfor you, and you can pass a version range of Fastify as a parameter that your\nplugin will support."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fp = require('fastify-plugin')\n\nmodule.exports = fp(function (fastify, opts, done) {\n  fastify.decorate('utility', function () {})\n  done()\n}, '0.x')\n")),(0,i.kt)("p",null,"Check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-plugin")),"\ndocumentation to learn more about how to use this module."),(0,i.kt)("p",null,"If you do not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify-plugin")," module, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"'skip-override'"),"\nhidden property, but we do not recommend it. If in the future the Fastify API\nchanges it will be your responsibility to update the module, while if you use\n",(0,i.kt)("inlineCode",{parentName:"p"},"fastify-plugin"),", you can be sure about backward compatibility."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function yourPlugin (fastify, opts, done) {\n  fastify.decorate('utility', function () {})\n  done()\n}\nyourPlugin[Symbol.for('skip-override')] = true\nmodule.exports = yourPlugin\n")))}f.isMDXComponent=!0}}]);