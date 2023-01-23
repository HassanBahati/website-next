"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[12059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"Reference/Decorators",id:"version-v4.12.x/Reference/Decorators",title:"Decorators",description:"Decorators",source:"@site/versioned_docs/version-v4.12.x/Reference/Decorators.md",sourceDirName:"Reference",slug:"/Reference/Decorators",permalink:"/website-next/docs/v4.12.x/Reference/Decorators",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/Decorators.md",tags:[],version:"v4.12.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"ContentTypeParser",permalink:"/website-next/docs/v4.12.x/Reference/ContentTypeParser"},next:{title:"Encapsulation",permalink:"/website-next/docs/v4.12.x/Reference/Encapsulation"}},l={},c=[{value:"Decorators",id:"decorators",level:2},{value:"Usage",id:"usage",level:3},{value:"<code>decorate(name, value, [dependencies])</code>",id:"decoratename-value-dependencies",level:4},{value:"<code>decorateReply(name, value, [dependencies])</code>",id:"decoratereplyname-value-dependencies",level:4},{value:"<code>decorateRequest(name, value, [dependencies])</code>",id:"decoraterequestname-value-dependencies",level:4},{value:"<code>hasDecorator(name)</code>",id:"hasdecoratorname",level:4},{value:"hasRequestDecorator",id:"hasrequestdecorator",level:4},{value:"hasReplyDecorator",id:"hasreplydecorator",level:4},{value:"Decorators and Encapsulation",id:"decorators-and-encapsulation",level:3},{value:"Getters and Setters",id:"getters-and-setters",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"decorators"},"Decorators"),(0,r.kt)("p",null,"The decorators API allows customization of the core Fastify objects, such as the\nserver instance itself and any request and reply objects used during the HTTP\nrequest lifecycle. The decorators API can be used to attach any type of property\nto the core objects, e.g. functions, plain objects, or native types."),(0,r.kt)("p",null,"This API is ",(0,r.kt)("em",{parentName:"p"},"synchronous"),". Attempting to define a decoration asynchronously\ncould result in the Fastify instance booting before the decoration completes its\ninitialization. To avoid this issue, and register an asynchronous decoration,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," API, in combination with ",(0,r.kt)("inlineCode",{parentName:"p"},"fastify-plugin"),", must be used instead.\nTo learn more, see the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v4.12.x/Reference/Plugins"},"Plugins")," documentation."),(0,r.kt)("p",null,"Decorating core objects with this API allows the underlying JavaScript engine to\noptimize the handling of server, request, and reply objects. This is\naccomplished by defining the shape of all such object instances before they are\ninstantiated and used. As an example, the following is not recommended because\nit will change the shape of objects during their lifecycle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Bad example! Continue reading.\n\n// Attach a user property to the incoming request before the request\n// handler is invoked.\nfastify.addHook('preHandler', function (req, reply, done) {\n  req.user = 'Bob Dylan'\n  done()\n})\n\n// Use the attached user property in the request handler.\nfastify.get('/', function (req, reply) {\n  reply.send(`Hello, ${req.user}`)\n})\n")),(0,r.kt)("p",null,"Since the above example mutates the request object after it has already been\ninstantiated, the JavaScript engine must deoptimize access to the request\nobject. By using the decoration API this deoptimization is avoided:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Decorate request with a 'user' property\nfastify.decorateRequest('user', '')\n\n// Update our property\nfastify.addHook('preHandler', (req, reply, done) => {\n  req.user = 'Bob Dylan'\n  done()\n})\n// And finally access it\nfastify.get('/', (req, reply) => {\n  reply.send(`Hello, ${req.user}!`)\n})\n")),(0,r.kt)("p",null,"Note that it is important to keep the initial shape of a decorated field as\nclose as possible to the value intended to be set dynamically in the future.\nInitialize a decorator as a ",(0,r.kt)("inlineCode",{parentName:"p"},"''")," if the intended value is a string, and as\n",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if it will be an object or a function."),(0,r.kt)("p",null,"Remember this example works only with value types as reference types will be\nshared amongst all requests. See ",(0,r.kt)("a",{parentName:"p",href:"#decorate-request"},"decorateRequest"),"."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://mathiasbynens.be/notes/shapes-ics"},"JavaScript engine fundamentals: Shapes and Inline\nCaches")," for more information on this\ntopic."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("a",{id:"usage"}),(0,r.kt)("h4",{id:"decoratename-value-dependencies"},(0,r.kt)("inlineCode",{parentName:"h4"},"decorate(name, value, [dependencies])")),(0,r.kt)("a",{id:"decorate"}),(0,r.kt)("p",null,"This method is used to customize the Fastify ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v4.12.x/Reference/Server"},"server"),"\ninstance."),(0,r.kt)("p",null,"For example, to attach a new method to the server instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('utility', function () {\n  // Something very useful\n})\n")),(0,r.kt)("p",null,"As mentioned above, non-function values can be attached:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('conf', {\n  db: 'some.db',\n  port: 3000\n})\n")),(0,r.kt)("p",null,"To access decorated properties, use the name provided to the decoration API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.utility()\n\nconsole.log(fastify.conf.db)\n")),(0,r.kt)("p",null,"The decorated ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v4.12.x/Reference/Server"},"Fastify server")," is bound to ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," in\nroute ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v4.12.x/Reference/Routes"},"route")," handlers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('db', new DbConnection())\n\nfastify.get('/', async function (request, reply) {\n  // using return\n  return { hello: await this.db.query('world') }\n  \n  // or\n  // using reply.send()\n  reply.send({ hello: await this.db.query('world') })\n  await reply\n})\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),' parameter is an optional list of decorators that the\ndecorator being defined relies upon. This list is simply a list of string names\nof other decorators. In the following example, the "utility" decorator depends\nupon "greet" and "hi" decorators:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function greetDecorator (fastify, opts) {\n  fastify.decorate('greet', () => {\n    return 'greet message'\n  })\n}\n\nasync function hiDecorator (fastify, opts) {\n  fastify.decorate('hi', () => {\n    return 'hi message'\n  })\n}\n\nasync function utilityDecorator (fastify, opts) {\n  fastify.decorate('utility', () => {\n    return `${fastify.greet()} | ${fastify.hi()}`\n  })\n}\n\nfastify.register(fastifyPlugin(greetDecorator, { name: 'greet' }))\nfastify.register(fastifyPlugin(hiDecorator, { name: 'hi' }))\nfastify.register(fastifyPlugin(utilityDecorator, { dependencies: ['greet', 'hi'] }))\n\nfastify.get('/', function (req, reply) {\n  // Response: {\"hello\":\"greet message | hi message\"}\n  reply.send({ hello: fastify.utility() })\n})\n\nfastify.listen({ port: 3000 }, (err, address) => {\n  if (err) throw err\n})\n")),(0,r.kt)("p",null,"Note: using an arrow function will break the binding of ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"FastifyInstance"),"."),(0,r.kt)("p",null,"If a dependency is not satisfied, the ",(0,r.kt)("inlineCode",{parentName:"p"},"decorate")," method will throw an exception.\nThe dependency check is performed before the server instance is booted. Thus, it\ncannot occur during runtime."),(0,r.kt)("h4",{id:"decoratereplyname-value-dependencies"},(0,r.kt)("inlineCode",{parentName:"h4"},"decorateReply(name, value, [dependencies])")),(0,r.kt)("a",{id:"decorate-reply"}),(0,r.kt)("p",null,"As the name suggests, this API is used to add new methods/properties to the core\n",(0,r.kt)("inlineCode",{parentName:"p"},"Reply")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorateReply('utility', function () {\n  // Something very useful\n})\n")),(0,r.kt)("p",null,"Note: using an arrow function will break the binding of ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," to the Fastify\n",(0,r.kt)("inlineCode",{parentName:"p"},"Reply")," instance."),(0,r.kt)("p",null,"Note: using ",(0,r.kt)("inlineCode",{parentName:"p"},"decorateReply")," will emit a warning if used with a reference type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Don't do this\nfastify.decorateReply('foo', { bar: 'fizz'})\n")),(0,r.kt)("p",null,"In this example, the reference of the object is shared with all the requests:\n",(0,r.kt)("strong",{parentName:"p"},"any mutation will impact all requests, potentially creating security\nvulnerabilities or memory leaks"),". To achieve proper encapsulation across\nrequests configure a new value for each incoming request in the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v4.12.x/Reference/Hooks#onrequest"},(0,r.kt)("inlineCode",{parentName:"a"},"'onRequest'"),"\nhook"),". Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fp = require('fastify-plugin')\n\nasync function myPlugin (app) {\n  app.decorateRequest('foo', null)\n  app.addHook('onRequest', async (req, reply) => {\n    req.foo = { bar: 42 }\n  })\n}\n\nmodule.exports = fp(myPlugin)\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#decorate"},(0,r.kt)("inlineCode",{parentName:"a"},"decorate"))," for information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," parameter."),(0,r.kt)("h4",{id:"decoraterequestname-value-dependencies"},(0,r.kt)("inlineCode",{parentName:"h4"},"decorateRequest(name, value, [dependencies])")),(0,r.kt)("a",{id:"decorate-request"}),(0,r.kt)("p",null,"As above with ",(0,r.kt)("a",{parentName:"p",href:"#decorate-reply"},(0,r.kt)("inlineCode",{parentName:"a"},"decorateReply")),", this API is used add new\nmethods/properties to the core ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorateRequest('utility', function () {\n  // something very useful\n})\n")),(0,r.kt)("p",null,"Note: using an arrow function will break the binding of ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," to the Fastify\n",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," instance."),(0,r.kt)("p",null,"Note: using ",(0,r.kt)("inlineCode",{parentName:"p"},"decorateRequest")," will emit a warning if used with a reference type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Don't do this\nfastify.decorateRequest('foo', { bar: 'fizz'})\n")),(0,r.kt)("p",null,"In this example, the reference of the object is shared with all the requests:\n",(0,r.kt)("strong",{parentName:"p"},"any mutation will impact all requests, potentially creating security\nvulnerabilities or memory leaks"),"."),(0,r.kt)("p",null,"To achieve proper encapsulation across requests configure a new value for each\nincoming request in the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v4.12.x/Reference/Hooks#onrequest"},(0,r.kt)("inlineCode",{parentName:"a"},"'onRequest'")," hook"),". Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fp = require('fastify-plugin')\n\nasync function myPlugin (app) {\n  app.decorateRequest('foo', null)\n  app.addHook('onRequest', async (req, reply) => {\n    req.foo = { bar: 42 }\n  })\n}\n\nmodule.exports = fp(myPlugin)\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#decorate"},(0,r.kt)("inlineCode",{parentName:"a"},"decorate"))," for information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," parameter."),(0,r.kt)("h4",{id:"hasdecoratorname"},(0,r.kt)("inlineCode",{parentName:"h4"},"hasDecorator(name)")),(0,r.kt)("a",{id:"has-decorator"}),(0,r.kt)("p",null,"Used to check for the existence of a server instance decoration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.hasDecorator('utility')\n")),(0,r.kt)("h4",{id:"hasrequestdecorator"},"hasRequestDecorator"),(0,r.kt)("a",{id:"has-request-decorator"}),(0,r.kt)("p",null,"Used to check for the existence of a Request decoration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.hasRequestDecorator('utility')\n")),(0,r.kt)("h4",{id:"hasreplydecorator"},"hasReplyDecorator"),(0,r.kt)("a",{id:"has-reply-decorator"}),(0,r.kt)("p",null,"Used to check for the existence of a Reply decoration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.hasReplyDecorator('utility')\n")),(0,r.kt)("h3",{id:"decorators-and-encapsulation"},"Decorators and Encapsulation"),(0,r.kt)("a",{id:"decorators-encapsulation"}),(0,r.kt)("p",null,"Defining a decorator (using ",(0,r.kt)("inlineCode",{parentName:"p"},"decorate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"decorateRequest"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"decorateReply"),")\nwith the same name more than once in the same ",(0,r.kt)("strong",{parentName:"p"},"encapsulated")," context will\nthrow an exception."),(0,r.kt)("p",null,"As an example, the following will throw:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const server = require('fastify')()\n\nserver.decorateReply('view', function (template, args) {\n  // Amazing view rendering engine\n})\n\nserver.get('/', (req, reply) => {\n  reply.view('/index.html', { hello: 'world' })\n})\n\n// Somewhere else in our codebase, we define another\n// view decorator. This throws.\nserver.decorateReply('view', function (template, args) {\n  // Another rendering engine\n})\n\nserver.listen({ port: 3000 })\n")),(0,r.kt)("p",null,"But this will not:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const server = require('fastify')()\n\nserver.decorateReply('view', function (template, args) {\n  // Amazing view rendering engine.\n})\n\nserver.register(async function (server, opts) {\n  // We add a view decorator to the current encapsulated\n  // plugin. This will not throw as outside of this encapsulated\n  // plugin view is the old one, while inside it is the new one.\n  server.decorateReply('view', function (template, args) {\n    // Another rendering engine\n  })\n\n  server.get('/', (req, reply) => {\n    reply.view('/index.page', { hello: 'world' })\n  })\n}, { prefix: '/bar' })\n\nserver.listen({ port: 3000 })\n")),(0,r.kt)("h3",{id:"getters-and-setters"},"Getters and Setters"),(0,r.kt)("a",{id:"getters-setters"}),(0,r.kt)("p",null,'Decorators accept special "getter/setter" objects. These objects have functions\nnamed ',(0,r.kt)("inlineCode",{parentName:"p"},"getter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setter")," (though the ",(0,r.kt)("inlineCode",{parentName:"p"},"setter")," function is optional). This\nallows defining properties via decorators, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('foo', {\n  getter () {\n    return 'a getter'\n  }\n})\n")),(0,r.kt)("p",null,"Will define the ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," property on the Fastify instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(fastify.foo) // 'a getter'\n")))}d.isMDXComponent=!0}}]);