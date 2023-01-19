"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[35545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},i="Delay Accepting Requests",s={unversionedId:"Guides/Delay-Accepting-Requests",id:"version-v4.6.x/Guides/Delay-Accepting-Requests",title:"Delay Accepting Requests",description:"Introduction",source:"@site/versioned_docs/version-v4.6.x/Guides/Delay-Accepting-Requests.md",sourceDirName:"Guides",slug:"/Guides/Delay-Accepting-Requests",permalink:"/website-next/docs/v4.6.x/Guides/Delay-Accepting-Requests",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Guides/Delay-Accepting-Requests.md",tags:[],version:"v4.6.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Database",permalink:"/website-next/docs/v4.6.x/Guides/Database"},next:{title:"Ecosystem",permalink:"/website-next/docs/v4.6.x/Guides/Ecosystem"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Solution",id:"solution",level:2},{value:"Overview",id:"overview",level:3},{value:"Hands-on",id:"hands-on",level:3},{value:"index.js",id:"indexjs",level:5},{value:"provider.js",id:"providerjs",level:5},{value:"delay-incoming-requests.js",id:"delay-incoming-requestsjs",level:5},{value:"customer-routes.js",id:"customer-routesjs",level:5},{value:"setup",id:"setup",level:5},{value:"delay",id:"delay",level:5},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delay-accepting-requests"},"Delay Accepting Requests"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Fastify provides several ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.6.x/Reference/Hooks"},"hooks")," useful for a variety of\nsituations. One of them is the ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.6.x/Reference/Hooks#onready"},(0,a.kt)("inlineCode",{parentName:"a"},"onReady"))," hook,\nwhich is useful for executing tasks ",(0,a.kt)("em",{parentName:"p"},"right before")," the server starts accepting\nnew requests. There isn't, though, a direct mechanism to handle scenarios in\nwhich you'd like the server to start accepting ",(0,a.kt)("strong",{parentName:"p"},"specific")," requests and denying\nall others, at least up to some point."),(0,a.kt)("p",null,"Say, for instance, your server needs to authenticate with an OAuth provider to\nstart serving requests. To do that it'd need to engage in the ",(0,a.kt)("a",{parentName:"p",href:"https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow"},"OAuth\nAuthorization Code\nFlow"),",\nwhich would require it to listen to two requests from the authentication\nprovider:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the Authorization Code webhook"),(0,a.kt)("li",{parentName:"ol"},"the tokens webhook")),(0,a.kt)("p",null,"Until the authorization flow is done you wouldn't be able to serve customer\nrequests. What to do then?"),(0,a.kt)("p",null,"There are several solutions for achieving that kind of behavior. Here we'll\nintroduce one of such techniques and, hopefully, you'll be able to get things\nrolling asap!"),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The proposed solution is one of many possible ways of dealing with this scenario\nand many similar to it. It relies solely on Fastify, so no fancy infrastructure\ntricks or third-party libraries will be necessary."),(0,a.kt)("p",null,"To simplify things we won't be dealing with a precise OAuth flow but, instead,\nsimulate a scenario in which some key is needed to serve a request and that key\ncan only be retrieved in runtime by authenticating with an external provider."),(0,a.kt)("p",null,"The main goal here is to deny requests that would otherwise fail ",(0,a.kt)("strong",{parentName:"p"},"as early as\npossible")," and with some ",(0,a.kt)("strong",{parentName:"p"},"meaningful context"),". That's both useful for the\nserver (fewer resources allocated to a bound-to-fail task) and for the client\n(they get some meaningful information and don't need to wait long for it)."),(0,a.kt)("p",null,"That will be achieved by wrapping into a custom plugin two main features:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the mechanism for authenticating with the provider\n",(0,a.kt)("a",{parentName:"li",href:"/website-next/docs/v4.6.x/Reference/Decorators"},"decorating")," the ",(0,a.kt)("inlineCode",{parentName:"li"},"fastify")," object with the\nauthentication key (",(0,a.kt)("inlineCode",{parentName:"li"},"magicKey")," from here onwards)"),(0,a.kt)("li",{parentName:"ol"},"the mechanism for denying requests that would, otherwise, fail")),(0,a.kt)("h3",{id:"hands-on"},"Hands-on"),(0,a.kt)("p",null,"For this sample solution we'll be using the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node.js v16.14.2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm 8.5.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fastify 4.0.0-rc.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fastify-plugin 3.0.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"undici 5.0.0"))),(0,a.kt)("p",null,"Say we have the following base server set up at first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Fastify = require('fastify')\n\nconst provider = require('./provider')\n\nconst server = Fastify({ logger: true })\nconst USUAL_WAIT_TIME_MS = 5000\n\nserver.get('/ping', function (request, reply) {\n  reply.send({ error: false, ready: request.server.magicKey !== null })\n})\n\nserver.post('/webhook', function (request, reply) {\n  // It's good practice to validate webhook requests really come from\n  // whoever you expect. This is skipped in this sample for the sake\n  // of simplicity\n\n  const { magicKey } = request.body\n  request.server.magicKey = magicKey\n  request.log.info('Ready for customer requests!')\n\n  reply.send({ error: false })\n})\n\nserver.get('/v1*', async function (request, reply) {\n  try {\n    const data = await provider.fetchSensitiveData(request.server.magicKey)\n    return { customer: true, error: false }\n  } catch (error) {\n    request.log.error({\n      error,\n      message: 'Failed at fetching sensitive data from provider',\n    })\n\n    reply.statusCode = 500\n    return { customer: null, error: true }\n  }\n})\n\nserver.decorate('magicKey', null)\n\nserver.listen({ port: '1234' }, () => {\n  provider.thirdPartyMagicKeyGenerator(USUAL_WAIT_TIME_MS)\n    .catch((error) => {\n      server.log.error({\n        error,\n        message: 'Got an error while trying to get the magic key!'\n      })\n\n      // Since we won't be able to serve requests, might as well wrap\n      // things up\n      server.close(() => process.exit(1))\n    })\n})\n")),(0,a.kt)("p",null,"Our code is simply setting up a Fastify server with a few routes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"/ping")," route that specifies whether the service is ready or not to serve\nrequests by checking if the ",(0,a.kt)("inlineCode",{parentName:"li"},"magicKey")," has been set up"),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"/webhook")," endpoint for our provider to reach back to us when they're ready\nto share the ",(0,a.kt)("inlineCode",{parentName:"li"},"magicKey"),". The ",(0,a.kt)("inlineCode",{parentName:"li"},"magicKey")," is, then, saved into the previously set\ndecorator on the ",(0,a.kt)("inlineCode",{parentName:"li"},"fastify")," object"),(0,a.kt)("li",{parentName:"ul"},"a catchall ",(0,a.kt)("inlineCode",{parentName:"li"},"/v1*")," route to simulate what would have been customer-initiated\nrequests. These requests rely on us having a valid ",(0,a.kt)("inlineCode",{parentName:"li"},"magicKey"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"provider.js")," file, simulating actions of an external provider, is as\nfollows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { fetch } = require('undici')\nconst { setTimeout } = require('timers/promises')\n\nconst MAGIC_KEY = '12345'\n\nconst delay = setTimeout\n\nexports.thirdPartyMagicKeyGenerator = async (ms) => {\n  // Simulate processing delay\n  await delay(ms)\n\n  // Simulate webhook request to our server\n  const { status } = await fetch(\n    'http://localhost:1234/webhook',\n    {\n      body: JSON.stringify({ magicKey: MAGIC_KEY }),\n      method: 'POST',\n      headers: {\n        'content-type': 'application/json',\n      },\n    },\n  )\n\n  if (status !== 200) {\n    throw new Error('Failed to fetch magic key')\n  }\n}\n\nexports.fetchSensitiveData = async (key) => {\n  // Simulate processing delay\n  await delay(700)\n  const data = { sensitive: true }\n\n  if (key === MAGIC_KEY) {\n    return data\n  }\n\n  throw new Error('Invalid key')\n}\n")),(0,a.kt)("p",null,"The most important snippet here is the ",(0,a.kt)("inlineCode",{parentName:"p"},"thirdPartyMagicKeyGenerator")," function,\nwhich will wait for 5 seconds and, then, make the POST request to our ",(0,a.kt)("inlineCode",{parentName:"p"},"/webhook"),"\nendpoint."),(0,a.kt)("p",null,"When our server spins up we start listening to new connections without having\nour ",(0,a.kt)("inlineCode",{parentName:"p"},"magicKey")," set up. Until we receive the webhook request from our external\nprovider (in this example we're simulating a 5 second delay) all our requests\nunder the ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1*")," path (customer requests) will fail. Worse than that: they'll\nfail after we've reached out to our provider with an invalid key and got an\nerror from them. That wasted time and resources for us and our customers.\nDepending on the kind of application we're running and on the request rate we're\nexpecting this delay is not acceptable or, at least, very annoying."),(0,a.kt)("p",null,"Of course, that could be simply mitigated by checking whether or not the\n",(0,a.kt)("inlineCode",{parentName:"p"},"magicKey")," has been set up before hitting the provider in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1*")," handler.\nSure, but that would lead to bloat in the code. And imagine we have dozens of\ndifferent routes, with different controllers, that require that key. Should we\nrepeatedly add that check to all of them? That's error-prone and there are more\nelegant solutions."),(0,a.kt)("p",null,"What we'll do to improve this setup overall is create a\n",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.6.x/Reference/Plugins"},(0,a.kt)("inlineCode",{parentName:"a"},"Plugin"))," that'll be solely responsible for making\nsure we both:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"do not accept requests that would otherwise fail until we're ready for them"),(0,a.kt)("li",{parentName:"ul"},"make sure we reach out to our provider as soon as possible")),(0,a.kt)("p",null,"This way we'll make sure all our setup regarding this specific ",(0,a.kt)("em",{parentName:"p"},"business rule"),"\nis placed on a single entity, instead of scattered all across our code base."),(0,a.kt)("p",null,"With the changes to improve this behavior, the code will look like this:"),(0,a.kt)("h5",{id:"indexjs"},"index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Fastify = require('fastify')\n\nconst customerRoutes = require('./customer-routes')\nconst { setup, delay } = require('./delay-incoming-requests')\n\nconst server = new Fastify({ logger: true })\n\nserver.register(setup)\n\n// Non-blocked URL\nserver.get('/ping', function (request, reply) {\n  reply.send({ error: false, ready: request.server.magicKey !== null })\n})\n\n// Webhook to handle the provider's response - also non-blocked\nserver.post('/webhook', function (request, reply) {\n  // It's good practice to validate webhook requests really come from\n  // whoever you expect. This is skipped in this sample for the sake\n  // of simplicity\n\n  const { magicKey } = request.body\n  request.server.magicKey = magicKey\n  request.log.info('Ready for customer requests!')\n\n  reply.send({ error: false })\n})\n\n// Blocked URLs\n// Mind we're building a new plugin by calling the `delay` factory with our\n// customerRoutes plugin\nserver.register(delay(customerRoutes), { prefix: '/v1' })\n\nserver.listen({ port: '1234' })\n")),(0,a.kt)("h5",{id:"providerjs"},"provider.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { fetch } = require('undici')\nconst { setTimeout } = require('timers/promises')\n\nconst MAGIC_KEY = '12345'\n\nconst delay = setTimeout\n\nexports.thirdPartyMagicKeyGenerator = async (ms) => {\n  // Simulate processing delay\n  await delay(ms)\n\n  // Simulate webhook request to our server\n  const { status } = await fetch(\n    'http://localhost:1234/webhook',\n    {\n      body: JSON.stringify({ magicKey: MAGIC_KEY }),\n      method: 'POST',\n      headers: {\n        'content-type': 'application/json',\n      },\n    },\n  )\n\n  if (status !== 200) {\n    throw new Error('Failed to fetch magic key')\n  }\n}\n\nexports.fetchSensitiveData = async (key) => {\n  // Simulate processing delay\n  await delay(700)\n  const data = { sensitive: true }\n\n  if (key === MAGIC_KEY) {\n    return data\n  }\n\n  throw new Error('Invalid key')\n}\n")),(0,a.kt)("h5",{id:"delay-incoming-requestsjs"},"delay-incoming-requests.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fp = require('fastify-plugin')\n\nconst provider = require('./provider')\n\nconst USUAL_WAIT_TIME_MS = 5000\n\nasync function setup(fastify) {\n  // As soon as we're listening for requests, let's work our magic\n  fastify.server.on('listening', doMagic)\n\n  // Set up the placeholder for the magicKey\n  fastify.decorate('magicKey', null)\n\n  // Our magic -- important to make sure errors are handled. Beware of async\n  // functions outside `try/catch` blocks\n  // If an error is thrown at this point and not captured it'll crash the\n  // application\n  function doMagic() {\n    fastify.log.info('Doing magic!')\n\n    provider.thirdPartyMagicKeyGenerator(USUAL_WAIT_TIME_MS)\n      .catch((error) => {\n        fastify.log.error({\n          error,\n          message: 'Got an error while trying to get the magic key!'\n        })\n\n        // Since we won't be able to serve requests, might as well wrap\n        // things up\n        fastify.close(() => process.exit(1))\n      })\n  }\n}\n\nconst delay = (routes) =>\n  function (fastify, opts, done) {\n    // Make sure customer requests won't be accepted if the magicKey is not\n    // available\n    fastify.addHook('onRequest', function (request, reply, next) {\n      if (!request.server.magicKey) {\n        reply.statusCode = 503\n        reply.header('Retry-After', USUAL_WAIT_TIME_MS)\n        reply.send({ error: true, retryInMs: USUAL_WAIT_TIME_MS })\n      }\n\n      next()\n    })\n\n    // Register to-be-delayed routes\n    fastify.register(routes, opts)\n\n    done()\n  }\n\nmodule.exports = {\n  setup: fp(setup),\n  delay,\n}\n")),(0,a.kt)("h5",{id:"customer-routesjs"},"customer-routes.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fp = require('fastify-plugin')\n\nconst provider = require('./provider')\n\nmodule.exports = fp(async function (fastify) {\n  fastify.get('*', async function (request ,reply) {\n    try {\n      const data = await provider.fetchSensitiveData(request.server.magicKey)\n      return { customer: true, error: false }\n    } catch (error) {\n      request.log.error({\n        error,\n        message: 'Failed at fetching sensitive data from provider',\n      })\n\n      reply.statusCode = 500\n      return { customer: null, error: true }\n    }\n  })\n})\n")),(0,a.kt)("p",null,"There is a very specific change on the previously existing files that is worth\nmentioning: Beforehand we were using the ",(0,a.kt)("inlineCode",{parentName:"p"},"server.listen")," callback to start the\nauthentication process with the external provider and we were decorating the\n",(0,a.kt)("inlineCode",{parentName:"p"},"server")," object right before initializing the server. That was bloating our\nserver initialization setup with unnecessary code and didn't have much to do\nwith starting the Fastify server. It was a business logic that didn't have its\nspecific place in the code base."),(0,a.kt)("p",null,"Now we've implemented the ",(0,a.kt)("inlineCode",{parentName:"p"},"delayIncomingRequests")," plugin in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"delay-incoming-requests.js")," file. That's, in truth, a module split into two\ndifferent plugins that will build up to a single use-case. That's the brains of\nour operation. Let's walk through what the plugins do:"),(0,a.kt)("h5",{id:"setup"},"setup"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," plugin is responsible for making sure we reach out to our provider\nasap and store the ",(0,a.kt)("inlineCode",{parentName:"p"},"magicKey")," somewhere available to all our handlers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  fastify.server.on('listening', doMagic)\n")),(0,a.kt)("p",null,"As soon as the server starts listening (very similar behavior to adding a piece\nof code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"server.listen"),"'s callback function) a ",(0,a.kt)("inlineCode",{parentName:"p"},"listening")," event is\nemitted (for more info refer to\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/net.html#event-listening"},"https://nodejs.org/api/net.html#event-listening"),"). We use that to reach out to\nour provider as soon as possible, with the ",(0,a.kt)("inlineCode",{parentName:"p"},"doMagic")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  fastify.decorate('magicKey', null)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"magicKey")," decoration is also part of the plugin now. We initialize it with\na placeholder, waiting for the valid value to be retrieved."),(0,a.kt)("h5",{id:"delay"},"delay"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"delay")," is not a plugin itself. It's actually a plugin ",(0,a.kt)("em",{parentName:"p"},"factory"),". It expects a\nFastify plugin with ",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," and exports the actual plugin that'll handle\nenveloping those routes with an ",(0,a.kt)("inlineCode",{parentName:"p"},"onRequest")," hook that will make sure no requests\nare handled until we're ready for them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const delay = (routes) =>\n  function (fastify, opts, done) {\n    // Make sure customer requests won't be accepted if the magicKey is not\n    // available\n    fastify.addHook('onRequest', function (request, reply, next) {\n      if (!request.server.magicKey) {\n        reply.statusCode = 503\n        reply.header('Retry-After', USUAL_WAIT_TIME_MS)\n        reply.send({ error: true, retryInMs: USUAL_WAIT_TIME_MS })\n      }\n\n      next()\n    })\n\n    // Register to-be-delayed routes\n    fastify.register(routes, opts)\n\n    done()\n  }\n")),(0,a.kt)("p",null,"Instead of updating every single controller that might use the ",(0,a.kt)("inlineCode",{parentName:"p"},"magicKey"),", we\nsimply make sure that no route that's related to customer requests will be\nserved until we have everything ready. And there's more: we fail ",(0,a.kt)("strong",{parentName:"p"},"FAST")," and\nhave the possibility of giving the customer meaningful information, like how\nlong they should wait before retrying the request. Going even further, by\nissuing a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503"},(0,a.kt)("inlineCode",{parentName:"a"},"503")," status\ncode")," we're\nsignaling to our infrastructure components (namely load balancers) we're still\nnot ready to take incoming requests and they should redirect traffic to other\ninstances, if available, besides in how long we estimate that will be solved.\nAll of that in a few simple lines!"),(0,a.kt)("p",null,"It's noteworthy that we didn't use the ",(0,a.kt)("inlineCode",{parentName:"p"},"fastify-plugin")," wrapper in the ",(0,a.kt)("inlineCode",{parentName:"p"},"delay"),"\nfactory. That's because we wanted the ",(0,a.kt)("inlineCode",{parentName:"p"},"onRequest")," hook to only be set within\nthat specific scope and not to the scope that called it (in our case, the main\n",(0,a.kt)("inlineCode",{parentName:"p"},"server")," object defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),"). ",(0,a.kt)("inlineCode",{parentName:"p"},"fastify-plugin")," sets the\n",(0,a.kt)("inlineCode",{parentName:"p"},"skip-override")," hidden property, which has a practical effect of making whatever\nchanges we make to our ",(0,a.kt)("inlineCode",{parentName:"p"},"fastify")," object available to the upper scope. That's\nalso why we used it with the ",(0,a.kt)("inlineCode",{parentName:"p"},"customerRoutes")," plugin: we wanted those routes to\nbe available to its calling scope, the ",(0,a.kt)("inlineCode",{parentName:"p"},"delay")," plugin. For more info on that\nsubject refer to ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.6.x/Reference/Plugins#handle-the-scope"},"Plugins"),"."),(0,a.kt)("p",null,"Let's see how that behaves in action. If we fired our server up with ",(0,a.kt)("inlineCode",{parentName:"p"},"node\nindex.js")," and made a few requests to test things out. These were the logs we'd\nsee (some bloat was removed to ease things up):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'{"time":1650063793316,"msg":"Doing magic!"}\n{"time":1650063793316,"msg":"Server listening at http://127.0.0.1:1234"}\n{"time":1650063795030,"reqId":"req-1","req":{"method":"GET","url":"/v1","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51928},"msg":"incoming request"}\n{"time":1650063795033,"reqId":"req-1","res":{"statusCode":503},"responseTime":2.5721680000424385,"msg":"request completed"}\n{"time":1650063796248,"reqId":"req-2","req":{"method":"GET","url":"/ping","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51930},"msg":"incoming request"}\n{"time":1650063796248,"reqId":"req-2","res":{"statusCode":200},"responseTime":0.4802369996905327,"msg":"request completed"}\n{"time":1650063798377,"reqId":"req-3","req":{"method":"POST","url":"/webhook","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51932},"msg":"incoming request"}\n{"time":1650063798379,"reqId":"req-3","msg":"Ready for customer requests!"}\n{"time":1650063798379,"reqId":"req-3","res":{"statusCode":200},"responseTime":1.3567829988896847,"msg":"request completed"}\n{"time":1650063799858,"reqId":"req-4","req":{"method":"GET","url":"/v1","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51934},"msg":"incoming request"}\n{"time":1650063800561,"reqId":"req-4","res":{"statusCode":200},"responseTime":702.4662979990244,"msg":"request completed"}\n')),(0,a.kt)("p",null,"Let's focus on a few parts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'{"time":1650063793316,"msg":"Doing magic!"}\n{"time":1650063793316,"msg":"Server listening at http://127.0.0.1:1234"}\n')),(0,a.kt)("p",null,"These are the initial logs we'd see as soon as the server started. We reach out\nto the external provider as early as possible within a valid time window (we\ncouldn't do that before the server was ready to receive connections)."),(0,a.kt)("p",null,"While the server is still not ready, a few requests are attempted:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'{"time":1650063795030,"reqId":"req-1","req":{"method":"GET","url":"/v1","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51928},"msg":"incoming request"}\n{"time":1650063795033,"reqId":"req-1","res":{"statusCode":503},"responseTime":2.5721680000424385,"msg":"request completed"}\n{"time":1650063796248,"reqId":"req-2","req":{"method":"GET","url":"/ping","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51930},"msg":"incoming request"}\n{"time":1650063796248,"reqId":"req-2","res":{"statusCode":200},"responseTime":0.4802369996905327,"msg":"request completed"}\n')),(0,a.kt)("p",null,"The first one (",(0,a.kt)("inlineCode",{parentName:"p"},"req-1"),") was a ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /v1"),", that failed (",(0,a.kt)("strong",{parentName:"p"},"FAST")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"responseTime"),"\nis in ",(0,a.kt)("inlineCode",{parentName:"p"},"ms"),") with our ",(0,a.kt)("inlineCode",{parentName:"p"},"503")," status code and the meaningful information in the\nresponse. Below is the response for that request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'HTTP/1.1 503 Service Unavailable\nConnection: keep-alive\nContent-Length: 31\nContent-Type: application/json; charset=utf-8\nDate: Fri, 15 Apr 2022 23:03:15 GMT\nKeep-Alive: timeout=5\nRetry-After: 5000\n\n{\n    "error": true,\n    "retryInMs": 5000\n}\n')),(0,a.kt)("p",null,"Then we attempt a new request (",(0,a.kt)("inlineCode",{parentName:"p"},"req-2"),"), which was a ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /ping"),". As expected,\nsince that was not one of the requests we asked our plugin to filter, it\nsucceeded. That could also be used as means of informing an interested party\nwhether or not we were ready to serve requests (although ",(0,a.kt)("inlineCode",{parentName:"p"},"/ping")," is more\ncommonly associated with ",(0,a.kt)("em",{parentName:"p"},"liveness")," checks and that would be the responsibility\nof a ",(0,a.kt)("em",{parentName:"p"},"readiness")," check -- the curious reader can get more info on these terms\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-setting-up-health-checks-with-readiness-and-liveness-probes"},"here"),")\nwith the ",(0,a.kt)("inlineCode",{parentName:"p"},"ready")," field. Below is the response for that request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'HTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 29\nContent-Type: application/json; charset=utf-8\nDate: Fri, 15 Apr 2022 23:03:16 GMT\nKeep-Alive: timeout=5\n\n{\n    "error": false,\n    "ready": false\n}\n')),(0,a.kt)("p",null,"After that there were more interesting log messages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'{"time":1650063798377,"reqId":"req-3","req":{"method":"POST","url":"/webhook","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51932},"msg":"incoming request"}\n{"time":1650063798379,"reqId":"req-3","msg":"Ready for customer requests!"}\n{"time":1650063798379,"reqId":"req-3","res":{"statusCode":200},"responseTime":1.3567829988896847,"msg":"request completed"}\n')),(0,a.kt)("p",null,"This time it was our simulated external provider hitting us to let us know\nauthentication had gone well and telling us what our ",(0,a.kt)("inlineCode",{parentName:"p"},"magicKey")," was. We saved\nthat into our ",(0,a.kt)("inlineCode",{parentName:"p"},"magicKey")," decorator and celebrated with a log message saying we\nwere now ready for customers to hit us!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'{"time":1650063799858,"reqId":"req-4","req":{"method":"GET","url":"/v1","hostname":"localhost:1234","remoteAddress":"127.0.0.1","remotePort":51934},"msg":"incoming request"}\n{"time":1650063800561,"reqId":"req-4","res":{"statusCode":200},"responseTime":702.4662979990244,"msg":"request completed"}\n')),(0,a.kt)("p",null,"Finally, a final ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /v1")," request was made and, this time, it succeeded. Its\nresponse was the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'HTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 31\nContent-Type: application/json; charset=utf-8\nDate: Fri, 15 Apr 2022 23:03:20 GMT\nKeep-Alive: timeout=5\n\n{\n    "customer": true,\n    "error": false\n}\n')),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Specifics of the implementation will vary from one problem to another, but the\nmain goal of this guide was to show a very specific use case of an issue that\ncould be solved within Fastify's ecosystem."),(0,a.kt)("p",null,"This guide is a tutorial on the use of plugins, decorators, and hooks to solve\nthe problem of delaying serving specific requests on our application. It's not\nproduction-ready, as it keeps local state (the ",(0,a.kt)("inlineCode",{parentName:"p"},"magicKey"),") and it's not\nhorizontally scalable (we don't want to flood our provider, right?). One way of\nimproving it would be storing the ",(0,a.kt)("inlineCode",{parentName:"p"},"magicKey")," somewhere else (perhaps a cache\ndatabase?)."),(0,a.kt)("p",null,"The keywords here were ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.6.x/Reference/Decorators"},"Decorators"),",\n",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.6.x/Reference/Hooks"},"Hooks"),", and ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v4.6.x/Reference/Plugins"},"Plugins"),".\nCombining what Fastify has to offer can lead to very ingenious and creative\nsolutions to a wide variety of problems. Let's be creative! :)"))}d.isMDXComponent=!0}}]);