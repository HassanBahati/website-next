"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[22626],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),y=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=y(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=y(t),d=o,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var y=2;y<i;y++)a[y]=t[y];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>y});var r=t(87462),o=(t(67294),t(3905));const i={},a=void 0,s={unversionedId:"Reference/Type-Providers",id:"version-v4.1.x/Reference/Type-Providers",title:"Type-Providers",description:"Type Providers",source:"@site/versioned_docs/version-v4.1.x/Reference/Type-Providers.md",sourceDirName:"Reference",slug:"/Reference/Type-Providers",permalink:"/website-next/docs/v4.1.x/Reference/Type-Providers",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Reference/Type-Providers.md",tags:[],version:"v4.1.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Server",permalink:"/website-next/docs/v4.1.x/Reference/Server"},next:{title:"TypeScript",permalink:"/website-next/docs/v4.1.x/Reference/TypeScript"}},p={},y=[{value:"Type Providers",id:"type-providers",level:2},{value:"Providers",id:"providers",level:3},{value:"Json Schema to Ts",id:"json-schema-to-ts",level:3},{value:"TypeBox",id:"typebox",level:3},{value:"Scoped Type-Provider",id:"scoped-type-provider",level:3},{value:"Type Definition of FastifyInstance + TypeProvider",id:"type-definition-of-fastifyinstance--typeprovider",level:3}],l={toc:y};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"type-providers"},"Type Providers"),(0,o.kt)("p",null,"Type Providers are a TypeScript only feature that enables Fastify to statically\ninfer type information directly from inline JSON Schema. They are an alternative\nto specifying generic arguments on routes; and can greatly reduce the need to\nkeep associated types for each schema defined in your project."),(0,o.kt)("h3",{id:"providers"},"Providers"),(0,o.kt)("p",null,"Type Providers are offered as additional packages you will need to install into\nyour project. Each provider uses a different inference library under the hood;\nallowing you to select the library most appropriate for your needs. Type\nProvider packages follow a ",(0,o.kt)("inlineCode",{parentName:"p"},"@fastify/type-provider-{provider-name}")," naming\nconvention."),(0,o.kt)("p",null,"The following inference packages are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"json-schema-to-ts")," -\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ThomasAribart/json-schema-to-ts"},"github")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"typebox")," - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sinclairzx81/typebox"},"github"))),(0,o.kt)("h3",{id:"json-schema-to-ts"},"Json Schema to Ts"),(0,o.kt)("p",null,"The following sets up a ",(0,o.kt)("inlineCode",{parentName:"p"},"json-schema-to-ts")," Type Provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @fastify/type-provider-json-schema-to-ts\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'\n\nimport fastify from 'fastify'\n\nconst server = fastify().withTypeProvider<JsonSchemaToTsProvider>()\n\nserver.get('/route', {\n    schema: {\n        querystring: {\n            type: 'object',\n            properties: {\n                foo: { type: 'number' },\n                bar: { type: 'string' },\n            },\n            required: ['foo', 'bar']\n        }\n    } as const // don't forget to use const !\n\n}, (request, reply) => {\n\n    // type Query = { foo: number, bar: string }\n\n    const { foo, bar } = request.query // type safe!\n})\n")),(0,o.kt)("h3",{id:"typebox"},"TypeBox"),(0,o.kt)("p",null,"The following sets up a TypeBox Type Provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @fastify/type-provider-typebox\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'\nimport { Type } from '@sinclair/typebox'\n\nimport fastify from 'fastify'\n\nconst server = fastify({\n    ajv: {\n        customOptions: {\n            strict: 'log',\n            keywords: ['kind', 'modifier'],\n        },\n    },\n}).withTypeProvider<TypeBoxTypeProvider>()\n\nserver.get('/route', {\n    schema: {\n        querystring: Type.Object({\n            foo: Type.Number(),\n            bar: Type.String()\n        })\n    }\n}, (request, reply) => {\n\n    // type Query = { foo: number, bar: string }\n\n    const { foo, bar } = request.query // type safe!\n})\n")),(0,o.kt)("p",null,"TypeBox uses the properties ",(0,o.kt)("inlineCode",{parentName:"p"},"kind")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"modifier")," internally. These properties\nare not strictly valid JSON schema which will cause ",(0,o.kt)("inlineCode",{parentName:"p"},"AJV@7")," and newer versions\nto throw an invalid schema error. To remove the error it's either necessary to\nomit the properties by using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinclairzx81/typebox#strict"},(0,o.kt)("inlineCode",{parentName:"a"},"Type.Strict()"))," or use the AJV\noptions for adding custom keywords."),(0,o.kt)("p",null,"See also the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinclairzx81/typebox#validation"},"TypeBox\ndocumentation")," on how to set\nup AJV to work with TypeBox."),(0,o.kt)("h3",{id:"scoped-type-provider"},"Scoped Type-Provider"),(0,o.kt)("p",null,"The provider types don't propagate globally. In encapsulated usage, one can\nremap the context to use one or more providers (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"typebox")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"json-schema-to-ts")," can be used in the same application)."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import Fastify from 'fastify'\nimport { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'\nimport { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'\nimport { Type } from '@sinclair/typebox'\n\nconst fastify = Fastify()\n\nfunction pluginWithTypebox(fastify: FastifyInstance, _opts, done): void {\n  fastify.withTypeProvider<TypeBoxTypeProvider>()\n    .get('/', {\n      schema: {\n        body: Type.Object({\n          x: Type.String(),\n          y: Type.Number(),\n          z: Type.Boolean()\n        })\n      }\n    }, (req) => {\n        const { x, y, z } = req.body // type safe\n    });\n  done()\n}\n\nfunction pluginWithJsonSchema(fastify: FastifyInstance, _opts, done): void {\n  fastify.withTypeProvider<JsonSchemaToTsProvider>()\n    .get('/', {\n      schema: {\n        body: {\n          type: 'object',\n          properties: {\n            x: { type: 'string' },\n            y: { type: 'number' },\n            z: { type: 'boolean' }\n          },\n        } as const\n      }\n    }, (req) => {\n      const { x, y, z } = req.body // type safe\n    });\n  done()\n}\n\nfastify.register(pluginWithJsonSchema)\nfastify.register(pluginWithTypebox)\n")),(0,o.kt)("p",null,"It's also important to mention that once the types don't propagate globally,\n",(0,o.kt)("em",{parentName:"p"},"currently")," is not possible to avoid multiple registrations on routes when\ndealing with several scopes, see bellow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import Fastify from 'fastify'\nimport { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'\nimport { Type } from '@sinclair/typebox'\n\nconst server = Fastify({\n    ajv: {\n        customOptions: {\n            strict: 'log',\n            keywords: ['kind', 'modifier'],\n        },\n    },\n}).withTypeProvider<TypeBoxTypeProvider>()\n\nserver.register(plugin1) // wrong\nserver.register(plugin2) // correct\n\nfunction plugin1(fastify: FastifyInstance, _opts, done): void {\n  fastify.get('/', {\n    schema: {\n      body: Type.Object({\n        x: Type.String(),\n        y: Type.Number(),\n        z: Type.Boolean()\n      })\n    }\n  }, (req) => {\n    // it doesn't works! in a new scope needs to call `withTypeProvider` again\n    const { x, y, z } = req.body\n  });\n  done()\n}\n\nfunction plugin2(fastify: FastifyInstance, _opts, done): void {\n  const server = fastify.withTypeProvider<TypeBoxTypeProvider>()\n\n  server.get('/', {\n    schema: {\n      body: Type.Object({\n        x: Type.String(),\n        y: Type.Number(),\n        z: Type.Boolean()\n      })\n    }\n  }, (req) => {\n    // works\n    const { x, y, z } = req.body\n  });\n  done()\n}\n")),(0,o.kt)("h3",{id:"type-definition-of-fastifyinstance--typeprovider"},"Type Definition of FastifyInstance + TypeProvider"),(0,o.kt)("p",null,"When working with modules one has to make use of ",(0,o.kt)("inlineCode",{parentName:"p"},"FastifyInstance")," with Type\nProvider generics. See the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport Fastify from 'fastify'\nimport { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'\nimport { registerRoutes } from './routes'\n\nconst server = Fastify({\n    ajv: {\n        customOptions: {\n            strict: 'log',\n            keywords: ['kind', 'modifier'],\n        },\n    },\n}).withTypeProvider<TypeBoxTypeProvider>()\n\nregisterRoutes(server)\n\nserver.listen({ port: 3000 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// routes.ts\nimport { Type } from '@sinclair/typebox'\nimport {\n  FastifyInstance,\n  FastifyLoggerInstance,\n  RawReplyDefaultExpression,\n  RawRequestDefaultExpression,\n  RawServerDefault\n} from 'fastify'\nimport { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'\n\ntype FastifyTypebox = FastifyInstance<\n  RawServerDefault,\n  RawRequestDefaultExpression<RawServerDefault>,\n  RawReplyDefaultExpression<RawServerDefault>,\n  FastifyLoggerInstance,\n  TypeBoxTypeProvider\n>;\n\nexport function registerRoutes(fastify: FastifyTypebox): void {\n  fastify.get('/', {\n    schema: {\n      body: Type.Object({\n        x: Type.String(),\n        y: Type.Number(),\n        z: Type.Boolean()\n      })\n    }\n  }, (req) => {\n    // works\n    const { x, y, z } = req.body\n  });\n}\n")))}c.isMDXComponent=!0}}]);