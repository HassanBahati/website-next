"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[50905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const a={},r="How to write a good plugin",s={unversionedId:"Guides/Write-Plugin",id:"version-v3.29.x/Guides/Write-Plugin",title:"How to write a good plugin",description:"First, thank you for deciding to write a plugin for Fastify. Fastify is a",source:"@site/versioned_docs/version-v3.29.x/Guides/Write-Plugin.md",sourceDirName:"Guides",slug:"/Guides/Write-Plugin",permalink:"/website-next/docs/v3.29.x/Guides/Write-Plugin",draft:!1,tags:[],version:"v3.29.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Testing",permalink:"/website-next/docs/v3.29.x/Guides/Testing"},next:{title:"Index",permalink:"/website-next/docs/v3.29.x/Reference/"}},l={},u=[{value:"Code",id:"code",level:2},{value:"Documentation",id:"documentation",level:2},{value:"License",id:"license",level:2},{value:"Examples",id:"examples",level:2},{value:"Test",id:"test",level:2},{value:"Code Linter",id:"code-linter",level:2},{value:"Continuous Integration",id:"continuous-integration",level:2},{value:"Let&#39;s start!",id:"lets-start",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-write-a-good-plugin"},"How to write a good plugin"),(0,o.kt)("p",null,"First, thank you for deciding to write a plugin for Fastify. Fastify is a\nminimal framework and plugins are its strength, so thank you."),(0,o.kt)("p",null,"The core principles of Fastify are performance, low overhead, and providing a\ngood experience to our users. When writing a plugin, it is important to keep\nthese principles in mind. Therefore, in this document, we will analyze what\ncharacterizes a quality plugin."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Need some inspiration? You can use the label ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/fastify/fastify/issues?q=is%3Aissue+is%3Aopen+label%3A%22plugin+suggestion%22"},'"plugin\nsuggestion"'),"\nin our issue tracker!")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("p",null,"Fastify uses different techniques to optimize its code, many of them are\ndocumented in our Guides. We highly recommend you read ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v3.29.x/Guides/Plugins-Guide"},"the hitchhiker's guide\nto plugins")," to discover all the APIs you can use to build\nyour plugin and learn how to use them."),(0,o.kt)("p",null,"Do you have a question or need some advice? We are more than happy to help you!\nJust open an issue in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/help"},"help repository"),"."),(0,o.kt)("p",null,"Once you submit a plugin to our ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v3.29.x/Guides/Ecosystem"},"ecosystem list"),", we will review\nyour code and help you improve it if necessary."),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Documentation is extremely important. If your plugin is not well documented we\nwill not accept it to the ecosystem list. Lack of quality documentation makes it\nmore difficult for people to use your plugin, and will likely result in it going\nunused."),(0,o.kt)("p",null,"If you want to see some good examples on how to document a plugin take a look\nat:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-caching"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/caching"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-compress"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/compress"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-cookie"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/cookie"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastify/point-of-view"},(0,o.kt)("inlineCode",{parentName:"a"},"point-of-view"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastify/under-pressure"},(0,o.kt)("inlineCode",{parentName:"a"},"under-pressure")))),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"You can license your plugin as you prefer, we do not enforce any kind of\nlicense."),(0,o.kt)("p",null,"We prefer the ",(0,o.kt)("a",{parentName:"p",href:"https://choosealicense.com/licenses/mit/"},"MIT license")," because we\nthink it allows more people to use the code freely. For a list of alternative\nlicenses see the ",(0,o.kt)("a",{parentName:"p",href:"https://opensource.org/licenses"},"OSI list")," or GitHub's\n",(0,o.kt)("a",{parentName:"p",href:"https://choosealicense.com/"},"choosealicense.com"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Always put an example file in your repository. Examples are very helpful for\nusers and give a very fast way to test your plugin. Your users will be grateful."),(0,o.kt)("h2",{id:"test"},"Test"),(0,o.kt)("p",null,"It is extremely important that a plugin is thoroughly tested to verify that is\nworking properly."),(0,o.kt)("p",null,"A plugin without tests will not be accepted to the ecosystem list. A lack of\ntests does not inspire trust nor guarantee that the code will continue to work\namong different versions of its dependencies."),(0,o.kt)("p",null,"We do not enforce any testing library. We use ",(0,o.kt)("a",{parentName:"p",href:"https://www.node-tap.org/"},(0,o.kt)("inlineCode",{parentName:"a"},"tap")),"\nsince it offers out-of-the-box parallel testing and code coverage, but it is up\nto you to choose your library of preference."),(0,o.kt)("h2",{id:"code-linter"},"Code Linter"),(0,o.kt)("p",null,"It is not mandatory, but we highly recommend you use a code linter in your\nplugin. It will ensure a consistent code style and help you to avoid many\nerrors."),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://standardjs.com/"},(0,o.kt)("inlineCode",{parentName:"a"},"standard"))," since it works without the need to\nconfigure it and is very easy to integrate into a test suite."),(0,o.kt)("h2",{id:"continuous-integration"},"Continuous Integration"),(0,o.kt)("p",null,"It is not mandatory, but if you release your code as open source, it helps to\nuse Continuous Integration to ensure contributions do not break your plugin and\nto show that the plugin works as intended. Both\n",(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/"},"CircleCI")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub\nActions")," are free for open source projects\nand easy to set up."),(0,o.kt)("p",null,"In addition, you can enable services like ",(0,o.kt)("a",{parentName:"p",href:"https://dependabot.com/"},"Dependabot"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"https://snyk.io/"},"Snyk"),", which will help you keep your dependencies up to\ndate and discover if a new release of Fastify has some issues with your plugin."),(0,o.kt)("h2",{id:"lets-start"},"Let's start!"),(0,o.kt)("p",null,"Awesome, now you know everything you need to know about how to write a good\nplugin for Fastify! After you have built one (or more!) let us know! We will add\nit to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify#ecosystem"},"ecosystem")," section of\nour documentation!"),(0,o.kt)("p",null,"If you want to see some real world examples, check out:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastify/point-of-view"},(0,o.kt)("inlineCode",{parentName:"a"},"point-of-view"))," Templates\nrendering (",(0,o.kt)("em",{parentName:"li"},"ejs, pug, handlebars, marko"),") plugin support for Fastify."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-mongodb"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/mongodb"))," Fastify\nMongoDB connection plugin, with this you can share the same MongoDB connection\npool in every part of your server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-multipart"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/multipart"))," Multipart\nsupport for Fastify."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-helmet"},(0,o.kt)("inlineCode",{parentName:"a"},"@fastify/helmet"))," Important\nsecurity headers for Fastify.")))}c.isMDXComponent=!0}}]);