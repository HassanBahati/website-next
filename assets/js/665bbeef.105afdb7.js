"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[40776],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,f=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},i=void 0,s={unversionedId:"Reference/Logging",id:"version-v4.0.x/Reference/Logging",title:"Logging",description:"Logging",source:"@site/versioned_docs/version-v4.0.x/Reference/Logging.md",sourceDirName:"Reference",slug:"/Reference/Logging",permalink:"/website-next/docs/v4.0.x/Reference/Logging",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/Logging.md",tags:[],version:"v4.0.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Lifecycle",permalink:"/website-next/docs/v4.0.x/Reference/Lifecycle"},next:{title:"Middleware",permalink:"/website-next/docs/v4.0.x/Reference/Middleware"}},l={},p=[{value:"Logging",id:"logging",level:2},{value:"Enable logging",id:"enable-logging",level:3},{value:"Usage",id:"usage",level:3},{value:"Log Redaction",id:"log-redaction",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"logging"},"Logging"),(0,a.kt)("h3",{id:"enable-logging"},"Enable logging"),(0,a.kt)("p",null,"Logging is disabled by default, and you can enable it by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"{ logger: true\n}")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"{ logger: { level: 'info' } }")," when you create a Fastify instance. Note\nthat if the logger is disabled, it is impossible to enable it at runtime. We use\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/abstract-logging"},"abstract-logging")," for this\npurpose."),(0,a.kt)("p",null,"As Fastify is focused on performance, it uses\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino"},"pino")," as its logger, with the default log\nlevel, when enabled, set to ",(0,a.kt)("inlineCode",{parentName:"p"},"'info'"),"."),(0,a.kt)("p",null,"Enabling the production JSON logger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')({\n  logger: true\n})\n")),(0,a.kt)("p",null,"Enabling the logger with appropriate configuration for both local development\nand production environment requires bit more configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')({\n  logger: {\n      transport:\n        environment === 'development'\n          ? {\n              target: 'pino-pretty',\n              options: {\n                translateTime: 'HH:MM:ss Z',\n                ignore: 'pid,hostname'\n              }\n            }\n          : undefined\n    }\n})\n")),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("inlineCode",{parentName:"p"},"pino-pretty")," needs to be installed as a dev dependency, it is not included\nby default for performance reasons."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"You can use the logger like this in your route handlers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fastify.get('/', options, function (request, reply) {\n  request.log.info('Some info about the current request')\n  reply.send({ hello: 'world' })\n})\n")),(0,a.kt)("p",null,"You can trigger new logs outside route handlers by using the Pino instance from\nthe Fastify instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fastify.log.info('Something important happened!');\n")),(0,a.kt)("p",null,"If you want to pass some options to the logger, just pass them to Fastify. You\ncan find all available options in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino/blob/master/docs/api.md#pinooptions-stream"},"Pino\ndocumentation"),".\nIf you want to specify a file destination, use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')({\n  logger: {\n    level: 'info',\n    file: '/path/to/file' // Will use pino.destination()\n  }\n})\n\nfastify.get('/', options, function (request, reply) {\n  request.log.info('Some info about the current request')\n  reply.send({ hello: 'world' })\n})\n")),(0,a.kt)("p",null,"If you want to pass a custom stream to the Pino instance, just add a stream\nfield to the logger object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const split = require('split2')\nconst stream = split(JSON.parse)\n\nconst fastify = require('fastify')({\n  logger: {\n    level: 'info',\n    stream: stream\n  }\n})\n")),(0,a.kt)("a",{id:"logging-request-id"}),(0,a.kt)("p",null,'By default, Fastify adds an ID to every request for easier tracking. If the\n"request-id" header is present its value is used, otherwise a new incremental ID\nis generated. See Fastify Factory\n',(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.0.x/Reference/Server#factory-request-id-header"},(0,a.kt)("inlineCode",{parentName:"a"},"requestIdHeader"))," and Fastify Factory\n",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.0.x/Reference/Server#genreqid"},(0,a.kt)("inlineCode",{parentName:"a"},"genReqId"))," for customization options."),(0,a.kt)("p",null,"The default logger is configured with a set of standard serializers that\nserialize objects with ",(0,a.kt)("inlineCode",{parentName:"p"},"req"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"res"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"err")," properties. The object received\nby ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," is the Fastify ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.0.x/Reference/Request"},(0,a.kt)("inlineCode",{parentName:"a"},"Request"))," object, while the object\nreceived by ",(0,a.kt)("inlineCode",{parentName:"p"},"res")," is the Fastify ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.0.x/Reference/Reply"},(0,a.kt)("inlineCode",{parentName:"a"},"Reply"))," object. This behaviour\ncan be customized by specifying custom serializers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')({\n  logger: {\n    serializers: {\n      req (request) {\n        return { url: request.url }\n      }\n    }\n  }\n})\n")),(0,a.kt)("p",null,"For example, the response payload and headers could be logged using the approach\nbelow (even if it is ",(0,a.kt)("em",{parentName:"p"},"not recommended"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')({\n  logger: {\n    transport: {\n      target: 'pino-pretty'\n    },\n    serializers: {\n      res (reply) {\n        // The default\n        return {\n          statusCode: reply.statusCode\n        }\n      },\n      req (request) {\n        return {\n          method: request.method,\n          url: request.url,\n          path: request.routerPath,\n          parameters: request.params,\n          // Including the headers in the log could be in violation\n          // of privacy laws, e.g. GDPR. You should use the \"redact\" option to\n          // remove sensitive fields. It could also leak authentication data in\n          // the logs.\n          headers: request.headers\n        };\n      }\n    }\n  }\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": The body cannot be serialized inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," method because the\nrequest is serialized when we create the child logger. At that time, the body is\nnot yet parsed."),(0,a.kt)("p",null,"See an approach to log ",(0,a.kt)("inlineCode",{parentName:"p"},"req.body")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.addHook('preHandler', function (req, reply, done) {\n  if (req.body) {\n    req.log.info({ body: req.body }, 'parsed body')\n  }\n  done()\n})\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Any logger other than Pino will ignore this option.")),(0,a.kt)("p",null,"You can also supply your own logger instance. Instead of passing configuration\noptions, pass the instance. The logger you supply must conform to the Pino\ninterface; that is, it must have the following methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"trace"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"child"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const log = require('pino')({ level: 'info' })\nconst fastify = require('fastify')({ logger: log })\n\nlog.info('does not have request information')\n\nfastify.get('/', function (request, reply) {\n  request.log.info('includes request information, but is the same logger instance as `log`')\n  reply.send({ hello: 'world' })\n})\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The logger instance for the current request is available in every part of the\n",(0,a.kt)("a",{parentName:"em",href:"/website-next/docs/v4.0.x/Reference/Lifecycle"},"lifecycle"),".")),(0,a.kt)("h2",{id:"log-redaction"},"Log Redaction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://getpino.io"},"Pino")," supports low-overhead log redaction for obscuring\nvalues of specific properties in recorded logs. As an example, we might want to\nlog all the HTTP headers minus the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header for security concerns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = Fastify({\n  logger: {\n    stream: stream,\n    redact: ['req.headers.authorization'],\n    level: 'info',\n    serializers: {\n      req (request) {\n        return {\n          method: request.method,\n          url: request.url,\n          headers: request.headers,\n          hostname: request.hostname,\n          remoteAddress: request.ip,\n          remotePort: request.socket.remotePort\n        }\n      }\n    }\n  }\n})\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://getpino.io/#/docs/redaction"},"https://getpino.io/#/docs/redaction")," for more details."))}c.isMDXComponent=!0}}]);