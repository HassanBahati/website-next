"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[94907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,m=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={},r=void 0,s={unversionedId:"Guides/Prototype-Poisoning",id:"version-v3.29.x/Guides/Prototype-Poisoning",title:"Prototype-Poisoning",description:"The following is an article written by Eran Hammer.",source:"@site/versioned_docs/version-v3.29.x/Guides/Prototype-Poisoning.md",sourceDirName:"Guides",slug:"/Guides/Prototype-Poisoning",permalink:"/website-next/docs/v3.29.x/Guides/Prototype-Poisoning",draft:!1,editUrl:"https://github.com/fastify/fastify/edit/main/docs/Guides/Prototype-Poisoning.md",tags:[],version:"v3.29.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"The hitchhiker's guide to plugins",permalink:"/website-next/docs/v3.29.x/Guides/Plugins-Guide"},next:{title:"Recommendations",permalink:"/website-next/docs/v3.29.x/Guides/Recommendations"}},l={},p=[{value:"A Tale of (prototype) Poisoning",id:"a-tale-of-prototype-poisoning",level:2},{value:"BOOM",id:"boom",level:3},{value:"Prototype in a\xa0nutshell",id:"prototype-in-anutshell",level:3},{value:"Oh joi!",id:"oh-joi",level:3},{value:"The right\xa0thing",id:"the-rightthing",level:3},{value:"A detour",id:"a-detour",level:3},{value:"A development",id:"a-development",level:3},{value:"Sigh of\xa0relief",id:"sigh-ofrelief",level:3},{value:"Good news, bad news, no\xa0news?",id:"good-news-bad-news-nonews",level:3},{value:"The solution\xa0business",id:"the-solutionbusiness",level:3},{value:"Putting it to the\xa0test",id:"putting-it-to-thetest",level:3},{value:"hapi ever-after",id:"hapi-ever-after",level:3},{value:"The after in happy ever-after",id:"the-after-in-happy-ever-after",level:3}],h={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The following is an article written by Eran Hammer.\nIt is reproduced here for posterity ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/issues/1426#issuecomment-817957913"},"with permission"),".\nIt has been reformatted from the original HTML source to Markdown source,\nbut otherwise remains the same. The original HTML can be retrieved from the\nabove permission link.")),(0,o.kt)("h2",{id:"a-tale-of-prototype-poisoning"},"A Tale of (prototype) Poisoning"),(0,o.kt)("a",{id:"pp"}),(0,o.kt)("p",null,"This story is a behind-the-scenes look at the process and drama created by a\nparticularity interesting web security issue. It is also a perfect illustration\nof the efforts required to maintain popular pieces of open source software and\nthe limitations of existing communication channels."),(0,o.kt)("p",null,"But first, if you use a JavaScript framework to process incoming JSON data, take\na moment to read up on ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/intrinsic/javascript-prototype-poisoning-vulnerabilities-in-the-wild-7bc15347c96"},"Prototype\nPoisoning"),"\nin general, and the specific ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hapijs/hapi/issues/3916"},"technical\ndetails")," of this issue. I'll explain\nit all in a bit, but since this could be a critical issue, you might want to\nverify your own code first. While this story is focused on a specific framework,\nany solution that uses ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," to process external data is potentially at\nrisk."),(0,o.kt)("h3",{id:"boom"},"BOOM"),(0,o.kt)("a",{id:"pp-boom"}),(0,o.kt)("p",null,"Our story begins with a bang."),(0,o.kt)("p",null,"The engineering team at Lob (long time generous supporters of my work!) reported\na critical security vulnerability they identified in our data validation\nmodule\u200a\u2014\u200a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hapijs/joi"},"joi"),". They provided some technical\ndetails and a proposed solution."),(0,o.kt)("p",null,"The main purpose of a data validation library is to ensure the output fully\ncomplies with the rules defined. If it doesn't, validation fails. If it passes,\nyour can blindly trust that the data you are working with is safe. In fact, most\ndevelopers treat validated input as completely safe from a system integrity\nperspective. This is crucial."),(0,o.kt)("p",null,"In our case, the Lob team provided an example where some data was able to sneak\nby the validation logic and pass through undetected. This is the worst possible\ndefect a validation library can have."),(0,o.kt)("h3",{id:"prototype-in-anutshell"},"Prototype in a\xa0nutshell"),(0,o.kt)("a",{id:"pp-nutshell"}),(0,o.kt)("p",null,'To understand this story, you need to understand how JavaScript works a bit.\nEvery object in JavaScript can have a prototype. It is a set of methods and\nproperties it "inherits" from another object. I put inherits in quotes because\nJavaScript isn\'t really an object oriented language.'),(0,o.kt)("p",null,"A long time ago, for a bunch of irrelevant reasons, someone decided that it\nwould be a good idea to use the special property name ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," to access (and\nset) an object's prototype. This has since been deprecated but nevertheless,\nfully supported."),(0,o.kt)("p",null,"To demonstrate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> const a = { b: 5 };\n> a.b;\n5\n> a.__proto__ = { c: 6 };\n> a.c;\n6\n> a;\n{ b: 5 }\n")),(0,o.kt)("p",null,"As you can see, the object doesn't have a ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," property, but its prototype does.\nWhen validating the object, the validation library ignores the prototype and\nonly validates the object's own properties. This allows ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," to sneak in via the\nprototype."),(0,o.kt)("p",null,"Another important part of this story is the way ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," \u2014 a utility\nprovided by the language to convert JSON formatted text into objects\u200a \u2014\u200a handles\nthis magic ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," property name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> const text = \'{ "b": 5, "__proto__": { "c": 6 } }\';\n> const a = JSON.parse(text);\n> a;\n{ b: 5, __proto__: { c: 6 } }\n')),(0,o.kt)("p",null,"Notice how ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," property. This is not a prototype reference. It\nis a simple object property key, just like ",(0,o.kt)("inlineCode",{parentName:"p"},"b"),". As we've seen from the first\nexample, we can't actually create this key through assignment as that invokes\nthe prototype magic and sets an actual prototype. ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," however, sets a\nsimple property with that poisonous name."),(0,o.kt)("p",null,"By itself, the object created by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," is perfectly safe. It doesn't\nhave a prototype of its own. It has a seemingly harmless property that just\nhappens to overlap with a built-in JavaScript magic name."),(0,o.kt)("p",null,"However, other methods are not as lucky:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> const x = Object.assign({}, a);\n> x;\n{ b: 5}\n> x.c;\n6;\n")),(0,o.kt)("p",null,"If we take the ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," object created earlier by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," and pass it to the\nhelpful ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," method (used to perform a shallow copy of all the top\nlevel properties of ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," into the provided empty ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," object), the magic\n",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__"),' property "leaks" and becomes ',(0,o.kt)("inlineCode",{parentName:"p"},"x")," 's actual prototype."),(0,o.kt)("p",null,"Surprise!"),(0,o.kt)("p",null,"Put together, if you get some external text input, parse it with ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()"),"\nthen perform some simple manipulation of that object (say, shallow clone and add\nan ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," ), and then pass it to our validation library, anything passed through\nvia ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," would sneak in undetected."),(0,o.kt)("h3",{id:"oh-joi"},"Oh joi!"),(0,o.kt)("a",{id:"pp-oh-joi"}),(0,o.kt)("p",null,"The first question is, of course, why does the validation module ",(0,o.kt)("strong",{parentName:"p"},"joi"),' ignore\nthe prototype and let potentially harmful data through? We asked ourselves the\nsame question and our instant thought was "it was an oversight". A bug. A really\nbig mistake. The joi module should not have allowed this to happen. But\u2026'),(0,o.kt)("p",null,'While joi is used primarily for validating web input data, it also has a\nsignificant user base using it to validate internal objects, some of which have\nprototypes. The fact that joi ignores the prototype is a helpful "feature". It\nallows validating the object\'s own properties while ignoring what could be a\nvery complicated prototype structure (with many methods and literal properties).'),(0,o.kt)("p",null,"Any solution at the joi level would mean breaking some currently working code."),(0,o.kt)("h3",{id:"the-rightthing"},"The right\xa0thing"),(0,o.kt)("a",{id:"pp-right-thing"}),(0,o.kt)("p",null,"At this point, we were looking at a devastatingly bad security vulnerability.\nRight up there in the upper echelons of epic security failures. All we knew is\nthat our extremely popular data validation library fails to block harmful data,\nand that this data is trivial to sneak through. All you need to do is add\n",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," and some crap to a JSON input and send it on its way to an\napplication built using our tools."),(0,o.kt)("p",null,"(Dramatic pause)"),(0,o.kt)("p",null,"We knew we had to fix joi to prevent this but given the scale of this issue, we\nhad to do it in a way that will put a fix out without drawing too much attention\nto it\u200a\u2014\u200awithout making it too easy to exploit\u200a\u2014\u200aat least for a few days until\nmost systems received the update."),(0,o.kt)("p",null,"Sneaking a fix isn't the hardest thing to accomplish. If you combine it with an\notherwise purposeless refactor of the code, and throw in a few unrelated bug\nfixes and maybe a cool new feature, you can publish a new version without\ndrawing attention to the real issue being fixed."),(0,o.kt)("p",null,"The problem was, the right fix was going to break valid use cases. You see, joi\nhas no way of knowing if you want it to ignore the prototype you set, or block\nthe prototype set by an attacker. A solution that fixes the exploit will break\ncode and breaking code tends to get a lot of attention."),(0,o.kt)("p",null,"On the other hand, if we released a proper (",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantically\nversioned"),") fix, mark it as a breaking change, and add a\nnew API to explicitly tell joi what you want it to do with the prototype, we\nwill share with the world how to exploit this vulnerability while also making it\nmore time consuming for systems to upgrade (breaking changes never get applied\nautomatically by build tools)."),(0,o.kt)("p",null,"Lose\u200a\u2014\u200aLose."),(0,o.kt)("h3",{id:"a-detour"},"A detour"),(0,o.kt)("a",{id:"pp-detour"}),(0,o.kt)("p",null,"While the issue at hand was about incoming request payloads, we had to pause and\ncheck if it could also impact data coming via the query string, cookies, and\nheaders. Basically, anything that gets serialized into objects from text."),(0,o.kt)("p",null,"We quickly confirmed node default query string parser was fine as well as its\nheader parser. I identified one potential issue with base64-encoded JSON cookies\nas well as the usage of custom query string parsers. We also wrote some tests to\nconfirm that the most popular third-party query string parser\u200a \u2014\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/qs"},"qs")," \u2014 \u200awas not vulnerable (it is not!)."),(0,o.kt)("h3",{id:"a-development"},"A development"),(0,o.kt)("a",{id:"pp-a-development"}),(0,o.kt)("p",null,"Throughout this triage, we just assumed that the offending input with its\npoisoned prototype was coming into joi from hapi, the web framework connecting\nthe hapi.js ecosystem. Further investigation by the Lob team found that the\nproblem was a bit more nuanced."),(0,o.kt)("p",null,"hapi used ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," to process incoming data. It first set the result\nobject as a ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," property of the incoming request, and then passed that\nsame object for validation by joi before being passed to the application\nbusiness logic for processing. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," doesn't actually leak the\n",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," property, it would arrive to joi with an invalid key and fail\nvalidation."),(0,o.kt)("p",null,"However, hapi provides two extension points where the payload data can be\ninspected (and processed) prior to validation. It is all properly documented and\nwell understood by most developers. The extension points are there to allow you\nto interact with the raw inputs prior to validation for legitimate (and often\nsecurity related) reasons."),(0,o.kt)("p",null,"If during one of these two extension points, a developer used ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()"),"\nor a similar method on the payload, the ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," property would leak and\nbecome an actual prototype."),(0,o.kt)("h3",{id:"sigh-ofrelief"},"Sigh of\xa0relief"),(0,o.kt)("a",{id:"pp-sigh-of-relief"}),(0,o.kt)("p",null,"We were now dealing with a much different level of awfulness. Manipulating the\npayload object prior to validation is not common which meant this was no longer\na doomsday scenario. It was still potentially catastrophic but the exposure\ndropped from every joi user to some very specific implementations."),(0,o.kt)("p",null,"We were no longer looking at a secretive joi release. The issue in joi is still\nthere, but we can now address it properly with a new API and breaking release\nover the next few weeks."),(0,o.kt)("p",null,"We also knew that we can easily mitigate this vulnerability at the framework\nlevel since it knows which data is coming from the outside and which is\ninternally generated. The framework is really the only piece that can protect\ndevelopers against making such unexpected mistakes."),(0,o.kt)("h3",{id:"good-news-bad-news-nonews"},"Good news, bad news, no\xa0news?"),(0,o.kt)("a",{id:"pp-good-news-no-news"}),(0,o.kt)("p",null,"The good news was that this wasn't our fault. It wasn't a bug in hapi or joi. It\nwas only possible through a complex combination of actions that was not unique\nto hapi or joi. This can happen with every other JavaScript framework. If hapi\nis broken, then the world is broken."),(0,o.kt)("p",null,"Great\u200a\u2014\u200awe solved the blame game."),(0,o.kt)("p",null,"The bad news is that when there is nothing to blame (other than JavaScript\nitself), it is much harder getting it fixed."),(0,o.kt)("p",null,"The first question people ask once a security issue is found is if there is\ngoing to be a CVE published. A CVE\u200a\u2014\u200aCommon Vulnerabilities and Exposures\u200a\u2014\u200ais a\n",(0,o.kt)("a",{parentName:"p",href:"https://cve.mitre.org/"},"database")," of known security issues. It is a critical\ncomponent of web security. The benefit of publishing a CVE is that it\nimmediately triggers alarms and informs and often breaks automated builds until\nthe issue is resolved."),(0,o.kt)("p",null,"But what do we pin this to?"),(0,o.kt)("p",null,'Probably, nothing. We are still debating whether we should tag some versions of\nhapi with a warning. The "we" is the node security process. Since we now have a\nnew version of hapi that mitigate the problem by default, it can be considered a\nfix. But because the fix isn\'t to a problem in hapi itself, it is not exactly\nkosher to declare older versions harmful.'),(0,o.kt)("p",null,"Publishing an advisory on previous versions of hapi for the sole purpose of\nnudging people into awareness and upgrade is an abuse of the advisory process.\nI'm personally fine with abusing it for the purpose of improving security but\nthat's not my call. As of this writing, it is still being debated."),(0,o.kt)("h3",{id:"the-solutionbusiness"},"The solution\xa0business"),(0,o.kt)("a",{id:"pp-solution-business"}),(0,o.kt)("p",null,"Mitigating the issue wasn't hard. Making it scale and safe was a bit more\ninvolved. Since we knew where harmful data can enter the system, and we knew\nwhere we used the problematic ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," we could replace it with a safe\nimplementation."),(0,o.kt)("p",null,"One problem. Validating data can be costly and we are now planning on validating\nevery incoming JSON text. The built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," implementation is fast.\nReally really fast. It is unlikely we can build a replacement that will be more\nsecure and anywhere as fast. Especially not overnight and without introducing\nnew bugs."),(0,o.kt)("p",null,"It was obvious we were going to wrap the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," method with\nsome additional logic. We just had to make sure it was not adding too much\noverhead. This isn't just a performance consideration but also a security one.\nIf we make it easy to slow down a system by simply sending specific data, we\nmake it easy to execute a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Denial-of-service_attack"},"DoS\nattack")," at very low\ncost."),(0,o.kt)("p",null,"I came up with a stupidly simple solution: first parse the text using the\nexisting tools. If this didn't fail, scan the original raw text for the\noffending string \"",(0,o.kt)("strong",{parentName:"p"},"proto"),'". Only if we find it, perform an actual scan of the\nobject. We can\'t block every reference to "',(0,o.kt)("strong",{parentName:"p"},"proto"),'"\u200a\u2014\u200asometimes it is\nperfectly valid value (like when writing about it here and sending this text\nover to Medium for publication).'),(0,o.kt)("p",null,'This made the "happy path" practically as fast as before. It just added one\nfunction call, a quick text scan (again, very fast built-in implementation), and\na conditional return. The solution had negligible impact on the vast majority of\ndata expected to pass through it.'),(0,o.kt)("p",null,"Next problem. The prototype property doesn't have to be at the top level of the\nincoming object. It can be nested deep inside. This means we cannot just check\nfor the presence of it at the top level. We need to recursively iterate through\nthe object."),(0,o.kt)("p",null,"While recursive functions are a favorite tool, they could be disastrous when\nwriting security-conscious code. You see, recursive function increase the size\nof the runtime call stack. The more times you loop, the longer the call stack\ngets. At some point\u200a\u2014\u200aKABOOM\u2014 you reach the maximum length and the process dies."),(0,o.kt)("p",null,"If you cannot guarantee the shape of the incoming data, recursive iteration\nbecomes an open threat. An attacker only needs to craft a deep enough object to\ncrash your servers."),(0,o.kt)("p",null,"I used a flat loop implementation that is both more memory efficient (less\nfunction calls, less passing of temporary arguments) and more secure. I am not\npointing this out to brag, but to highlight how basic engineering practices can\ncreate (or avoid) security pitfalls."),(0,o.kt)("h3",{id:"putting-it-to-thetest"},"Putting it to the\xa0test"),(0,o.kt)("a",{id:"pp-putting-to-test"}),(0,o.kt)("p",null,"I sent the code to two people. First to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nlf"},"Nathan\nLaFreniere")," to double check the security properties of\nthe solution, and then to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mcollina"},"Matteo Collina")," to\nreview the performance. They are among the very best at what they do and often\nmy go-to people."),(0,o.kt)("p",null,'The performance benchmarks confirmed that the "happy path" was practically\nunaffected. The interesting findings was that removing the offending values was\nfaster then throwing an exception. This raised the question of what should be\nthe default behavior of the new module\u200a\u2014\u200awhich I called\n',(0,o.kt)("a",{parentName:"p",href:"https://github.com/hapijs/bourne"},(0,o.kt)("strong",{parentName:"a"},"bourne"))," \u2014 \u200aerror or sanitize."),(0,o.kt)("p",null,"The concern, again, was exposing the application to a DoS attack. If sending a\nrequest with ",(0,o.kt)("inlineCode",{parentName:"p"},"__proto__")," makes things 500% slower, that could be an easy vector\nto exploit. But after a bit more testing we confirmed that sending ",(0,o.kt)("strong",{parentName:"p"},"any"),"\ninvalid JSON text was creating a very similar cost."),(0,o.kt)("p",null,"In other words, if you parse JSON, invalid values are going to cost you more,\nregardless of what makes them invalid. It is also important to remember that\nwhile the benchmark showed the significant % cost of scanning suspected objects,\nthe actual cost in CPU time was still in the fraction of milliseconds. Important\nto note and measure but not actually harmful."),(0,o.kt)("h3",{id:"hapi-ever-after"},"hapi ever-after"),(0,o.kt)("a",{id:"pp-hapi-ever-after"}),(0,o.kt)("p",null,"There are a bunch of things to be grateful for."),(0,o.kt)("p",null,"The initial disclosure by the Lob team was perfect. It was reported privately,\nto the right people, with the right information. They followed up with\nadditional findings, and gave us the time and space to resolve it the right way.\nLob also was a major sponsor of my work on hapi over the years and that\nfinancial support is critical to allow everything else to happen. More on that\nin a bit."),(0,o.kt)("p",null,"Triage was stressful but staffed with the right people. Having folks like\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Marsup"},"Nicolas Morel"),", Nathan, and Matteo, available and\neager to help is critical. This isn't easy to deal with without the pressure,\nbut with it, mistakes are likely without proper team collaboration."),(0,o.kt)("p",null,"We got lucky with the actual vulnerability. What started up looking like a\ncatastrophic problem, ended up being a delicate but straight-forward problem to\naddress."),(0,o.kt)("p",null,"We also got lucky by having full access to mitigate it at the source\u200a\u2014\u200adidn't\nneed to send emails to some unknown framework maintainer and hope for a quick\nanswer. hapi's total control over all of its dependencies proved its usefulness\nand security again. Not using ",(0,o.kt)("a",{parentName:"p",href:"http://hapijs.com"},"hapi"),"? ",(0,o.kt)("a",{parentName:"p",href:"https://hueniverse.com/why-you-should-consider-hapi-6163689bd7c2"},"Maybe you\nshould"),"."),(0,o.kt)("h3",{id:"the-after-in-happy-ever-after"},"The after in happy ever-after"),(0,o.kt)("a",{id:"pp-after-ever-after"}),(0,o.kt)("p",null,"This is where I have to take advantage of this incident to reiterate the cost\nand need for sustainable and secure open source."),(0,o.kt)("p",null,"My time alone on this one issue exceeded 20 hours. That's half a working week.\nIt came at the end of a month were I already spent over 30 hours publishing a\nnew major release of hapi (most of the work was done in December). This puts me\nat a personal financial loss of over $5000 this month (I had to cut back on paid\nclient work to make time for it)."),(0,o.kt)("p",null,"If you rely on code I maintain, this is exactly the level of support, quality,\nand commitment you want (and lets be honest\u200a\u2014\u200aexpect). Most of you take it for\ngranted\u200a\u2014\u200anot just my work but the work of hundreds of other dedicated open\nsource maintainers."),(0,o.kt)("p",null,"Because this work is important, I decided to try and make it not just\nfinancially sustainable but to grow and expand it. There is so much to improve.\nThis is exactly what motivates me to implement the new ",(0,o.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20190201220503/https://hueniverse.com/on-hapi-licensing-a-preview-f982662ee898"},"commercial licensing\nplan"),"\ncoming in March. You can read more about it\n",(0,o.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20190201220503/https://hueniverse.com/on-hapi-licensing-a-preview-f982662ee898"},"here"),"."),(0,o.kt)("p",null,"Of all the time consuming things, security is at the very top. I hope this story\nsuccessfully conveyed not just the technical details, but also the human drama and\nwhat it takes to keep the web secure."))}u.isMDXComponent=!0}}]);