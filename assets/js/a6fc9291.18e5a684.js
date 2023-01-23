"use strict";(self.webpackChunk_fastify_website=self.webpackChunk_fastify_website||[]).push([[4486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),u=s,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const a={},o=void 0,i={unversionedId:"Guides/Recommendations",id:"version-v3.29.x/Guides/Recommendations",title:"Recommendations",description:"Recommendations",source:"@site/versioned_docs/version-v3.29.x/Guides/Recommendations.md",sourceDirName:"Guides",slug:"/Guides/Recommendations",permalink:"/website-next/docs/v3.29.x/Guides/Recommendations",draft:!1,tags:[],version:"v3.29.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Prototype-Poisoning",permalink:"/website-next/docs/v3.29.x/Guides/Prototype-Poisoning"},next:{title:"Serverless",permalink:"/website-next/docs/v3.29.x/Guides/Serverless"}},l={},p=[{value:"Recommendations",id:"recommendations",level:2},{value:"Use A Reverse Proxy",id:"use-a-reverse-proxy",level:2},{value:"HAProxy",id:"haproxy",level:3},{value:"Nginx",id:"nginx",level:3},{value:"Kubernetes",id:"kubernetes",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"recommendations"},"Recommendations"),(0,s.kt)("p",null,"This document contains a set of recommendations when using Fastify."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#use-a-reverse-proxy"},"Use A Reverse Proxy"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#haproxy"},"HAProxy")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#nginx"},"Nginx")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#kubernetes"},"Kubernetes"))),(0,s.kt)("h2",{id:"use-a-reverse-proxy"},"Use A Reverse Proxy"),(0,s.kt)("a",{id:"reverseproxy"}),(0,s.kt)("p",null,"Node.js is an early adopter of frameworks shipping with an easy-to-use web\nserver within the standard library. Previously, with languages like PHP or\nPython, one would need either a web server with specific support for the\nlanguage or the ability to set up some sort of ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Common_Gateway_Interface"},"CGI gateway")," that works\nwith the language. With Node.js, one can write an application that ",(0,s.kt)("em",{parentName:"p"},"directly"),"\nhandles HTTP requests. As a result, the temptation is to write applications that\nhandle requests for multiple domains, listen on multiple ports (i.e. HTTP ",(0,s.kt)("em",{parentName:"p"},"and"),"\nHTTPS), and then expose these applications directly to the Internet to handle\nrequests."),(0,s.kt)("p",null,"The Fastify team ",(0,s.kt)("strong",{parentName:"p"},"strongly")," considers this to be an anti-pattern and extremely\nbad practice:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"It adds unnecessary complexity to the application by diluting its focus."),(0,s.kt)("li",{parentName:"ol"},"It prevents ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Scalability#Horizontal"},"horizontal scalability"),".")),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20190821102906/https://medium.com/intrinsic/why-should-i-use-a-reverse-proxy-if-node-js-is-production-ready-5a079408b2ca"},"Why should I use a Reverse Proxy if Node.js is Production Ready?"),"\nfor a more thorough discussion of why one should opt to use a reverse proxy."),(0,s.kt)("p",null,"For a concrete example, consider the situation where:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The app needs multiple instances to handle load."),(0,s.kt)("li",{parentName:"ol"},"The app needs TLS termination."),(0,s.kt)("li",{parentName:"ol"},"The app needs to redirect HTTP requests to HTTPS."),(0,s.kt)("li",{parentName:"ol"},"The app needs to serve multiple domains."),(0,s.kt)("li",{parentName:"ol"},"The app needs to serve static resources, e.g. jpeg files.")),(0,s.kt)("p",null,"There are many reverse proxy solutions available, and your environment may\ndictate the solution to use, e.g. AWS or GCP. Given the above, we could use\n",(0,s.kt)("a",{parentName:"p",href:"https://www.haproxy.org/"},"HAProxy")," or ",(0,s.kt)("a",{parentName:"p",href:"https://nginx.org/"},"Nginx")," to solve these requirements:"),(0,s.kt)("h3",{id:"haproxy"},"HAProxy"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-conf"},'# The global section defines base HAProxy (engine) instance configuration.\nglobal\n  log /dev/log syslog\n  maxconn 4096\n  chroot /var/lib/haproxy\n  user haproxy\n  group haproxy\n\n  # Set some baseline TLS options.\n  tune.ssl.default-dh-param 2048\n  ssl-default-bind-options no-sslv3 no-tlsv10 no-tlsv11\n  ssl-default-bind-ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:RSA+AESGCM:RSA+AES:!aNULL:!MD5:!DSS\n  ssl-default-server-options no-sslv3 no-tlsv10 no-tlsv11\n  ssl-default-server-ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:RSA+AESGCM:RSA+AES:!aNULL:!MD5:!DSS\n\n# Each defaults section defines options that will apply to each subsequent\n# subsection until another defaults section is encountered.\ndefaults\n  log   global\n  mode  http\n  option        httplog\n  option        dontlognull\n  retries       3\n  option redispatch\n  # The following option make haproxy close connections to backend servers\n  # instead of keeping them open. This can alleviate unexpected connection\n  # reset errors in the Node process.\n  option http-server-close\n  maxconn       2000\n  timeout connect 5000\n  timeout client 50000\n  timeout server 50000\n\n  # Enable content compression for specific content types.\n  compression algo gzip\n  compression type text/html text/plain text/css application/javascript\n\n# A "frontend" section defines a public listener, i.e. an "http server"\n# as far as clients are concerned.\nfrontend proxy\n  # The IP address here would be the _public_ IP address of the server.\n  # Here, we use a private address as an example.\n  bind 10.0.0.10:80\n  # This redirect rule will redirect all traffic that is not TLS traffic\n  # to the same incoming request URL on the HTTPS port.\n  redirect scheme https code 308 if !{ ssl_fc }\n  # Technically this use_backend directive is useless since we are simply\n  # redirecting all traffic to this frontend to the HTTPS frontend. It is\n  # merely included here for completeness sake.\n  use_backend default-server\n\n# This frontend defines our primary, TLS only, listener. It is here where\n# we will define the TLS certificates to expose and how to direct incoming\n# requests.\nfrontend proxy-ssl\n  # The `/etc/haproxy/certs` directory in this example contains a set of\n  # certificate PEM files that are named for the domains the certificates are\n  # issued for. When HAProxy starts, it will read this directory, load all of\n  # the certificates it finds here, and use SNI matching to apply the correct\n  # certificate to the connection.\n  bind 10.0.0.10:443 ssl crt /etc/haproxy/certs\n\n  # Here we define rule pairs to handle static resources. Any incoming request\n  # that has a path starting with `/static`, e.g.\n  # `https://one.example.com/static/foo.jpeg`, will be redirected to the\n  # static resources server.\n  acl is_static path -i -m beg /static\n  use_backend static-backend if is_static\n\n  # Here we define rule pairs to direct requests to appropriate Node.js\n  # servers based on the requested domain. The `acl` line is used to match\n  # the incoming hostname and define a boolean indicating if it is a match.\n  # The `use_backend` line is used to direct the traffic if the boolean is\n  # true.\n  acl example1 hdr_sub(Host) one.example.com\n  use_backend example1-backend if example1\n\n  acl example2 hdr_sub(Host) two.example.com\n  use_backend example2-backend if example2\n\n  # Finally, we have a fallback redirect if none of the requested hosts\n  # match the above rules.\n  default_backend default-server\n\n# A "backend" is used to tell HAProxy where to request information for the\n# proxied request. These sections are where we will define where our Node.js\n# apps live and any other servers for things like static assets.\nbackend default-server\n  # In this example we are defaulting unmatched domain requests to a single\n  # backend server for all requests. Notice that the backend server does not\n  # have to be serving TLS requests. This is called "TLS termination": the TLS\n  # connection is "terminated" at the reverse proxy.\n  # It is possible to also proxy to backend servers that are themselves serving\n  # requests over TLS, but that is outside the scope of this example.\n  server server1 10.10.10.2:80\n\n# This backend configuration will serve requests for `https://one.example.com`\n# by proxying requests to three backend servers in a round-robin manner.\nbackend example1-backend\n  server example1-1 10.10.11.2:80\n  server example1-2 10.10.11.2:80\n  server example2-2 10.10.11.3:80\n\n# This one serves requests for `https://two.example.com`\nbackend example2-backend\n  server example2-1 10.10.12.2:80\n  server example2-2 10.10.12.2:80\n  server example2-3 10.10.12.3:80\n\n# This backend handles the static resources requests.\nbackend static-backend\n  server static-server1 10.10.9.2:80\n')),(0,s.kt)("h3",{id:"nginx"},"Nginx"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-nginx"},"# This upstream block groups 3 servers into one named backend fastify_app\n# with 2 primary servers distributed via round-robin\n# and one backup which is used when the first 2 are not reachable\n# This also assumes your fastify servers are listening on port 80.\n# more info: http://nginx.org/en/docs/http/ngx_http_upstream_module.html\nupstream fastify_app {\n  server 10.10.11.1:80;\n  server 10.10.11.2:80;\n  server 10.10.11.3:80 backup;\n}\n\n# This server block asks NGINX to respond with a redirect when\n# an incoming request from port 80 (typically plain HTTP), to\n# the same request URL but with HTTPS as protocol.\n# This block is optional, and usually used if you are handling\n# SSL termination in NGINX, like in the example here.\nserver {\n  # default server is a special parameter to ask NGINX\n  # to set this server block to the default for this address/port\n  # which in this case is any address and port 80\n  listen 80 default_server;\n  listen [::]:80 default_server;\n\n  # With a server_name directive you can also ask NGINX to\n  # use this server block only with matching server name(s)\n  # listen 80;\n  # listen [::]:80;\n  # server_name example.tld;\n\n  # This matches all paths from the request and responds with\n  # the redirect mentioned above.\n  location / {\n    return 301 https://$host$request_uri;\n  }\n}\n\n# This server block asks NGINX to respond to requests from\n# port 443 with SSL enabled and accept HTTP/2 connections.\n# This is where the request is then proxied to the fastify_app\n# server group via port 3000.\nserver {\n  # This listen directive asks NGINX to accept requests\n  # coming to any address, port 443, with SSL, and HTTP/2\n  # if possible.\n  listen 443 ssl http2 default_server;\n  listen [::]:443 ssl http2 default_server;\n\n  # With a server_name directive you can also ask NGINX to\n  # use this server block only with matching server name(s)\n  # listen 443 ssl http2;\n  # listen [::]:443 ssl http2;\n  # server_name example.tld;\n\n  # Your SSL/TLS certificate (chain) and secret key in the PEM format\n  ssl_certificate /path/to/fullchain.pem;\n  ssl_certificate_key /path/to/private.pem;\n\n  # A generic best practice baseline for based\n  # on https://ssl-config.mozilla.org/\n  ssl_session_timeout 1d;\n  ssl_session_cache shared:FastifyApp:10m;\n  ssl_session_tickets off;\n\n  # This tells NGINX to only accept TLS 1.3, which should be fine\n  # with most modern browsers including IE 11 with certain updates.\n  # If you want to support older browsers you might need to add\n  # additional fallback protocols.\n  ssl_protocols TLSv1.3;\n  ssl_prefer_server_ciphers off;\n\n  # This adds a header that tells browsers to only ever use HTTPS\n  # with this server.\n  add_header Strict-Transport-Security \"max-age=63072000\" always;\n\n  # The following directives are only necessary if you want to\n  # enable OCSP Stapling.\n  ssl_stapling on;\n  ssl_stapling_verify on;\n  ssl_trusted_certificate /path/to/chain.pem;\n\n  # Custom nameserver to resolve upstream server names\n  # resolver 127.0.0.1;\n\n  # This section matches all paths and proxies it to the backend server\n  # group specified above. Note the additional headers that forward\n  # information about the original request. You might want to set\n  # trustProxy to the address of your NGINX server so the X-Forwarded\n  # fields are used by fastify.\n  location / {\n    # more info: http://nginx.org/en/docs/http/ngx_http_proxy_module.html\n    proxy_http_version 1.1;\n    proxy_cache_bypass $http_upgrade;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection 'upgrade';\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n\n    # This is the directive that proxies requests to the specified server.\n    # If you are using an upstream group, then you do not need to specify a port.\n    # If you are directly proxying to a server e.g.\n    # proxy_pass http://127.0.0.1:3000 then specify a port.\n    proxy_pass http://fastify_app;\n  }\n}\n")),(0,s.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,s.kt)("a",{id:"kubernetes"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"readinessProbe")," uses ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"},"(by\ndefault"),")\nthe pod IP as the hostname. Fastify listens on ",(0,s.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," by default. The probe\nwill not be able to reach the application in this case. In order to make it\nwork, the application must listen on ",(0,s.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," or specify a custom hostname in\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"readinessProbe.httpGet")," spec, as per the following example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"readinessProbe:\n    httpGet:\n        path: /health\n        port: 4000\n    initialDelaySeconds: 30\n    periodSeconds: 30\n    timeoutSeconds: 3\n    successThreshold: 1\n    failureThreshold: 5\n")))}d.isMDXComponent=!0}}]);