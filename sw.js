if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,r,f)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(r.map((a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}}))).then((e=>{const a=f(...e);return s.default||(s.default=a),s}))})))}}define("./sw.js",["./workbox-d9ace124"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/KaTeX_AMS-Regular.18191795.ttf",revision:"3e94a45ca214f93c9774291237bb393e"},{url:"assets/KaTeX_AMS-Regular.34c2ce38.woff2",revision:"92297720a8aaa0d239940bf10509fa1f"},{url:"assets/KaTeX_Caligraphic-Bold.895d6214.ttf",revision:"4c37056017b7f742eeb8851510f4971a"},{url:"assets/KaTeX_Caligraphic-Bold.acee258c.woff2",revision:"7d1eb996b957fdf12cad6e323da6db5c"},{url:"assets/KaTeX_Caligraphic-Regular.24cb93b6.ttf",revision:"096ac2cc25065eeca89ca560d0a51b1a"},{url:"assets/KaTeX_Caligraphic-Regular.ada73fb2.woff2",revision:"b7703ab2622e72e54714135836b9da1a"},{url:"assets/KaTeX_Fraktur-Bold.5ed7c1a3.woff2",revision:"5ec2d70532268860be506b06c8c82615"},{url:"assets/KaTeX_Fraktur-Bold.6e355454.ttf",revision:"06e6c3f3900bf855fe69c6adbf2b59ac"},{url:"assets/KaTeX_Fraktur-Regular.3c51f649.ttf",revision:"e78f1f025d28668ddcaa2791fc818436"},{url:"assets/KaTeX_Fraktur-Regular.79bb8158.woff2",revision:"56d671ca5dc88ca20911bddc5a84c9fb"},{url:"assets/KaTeX_Main-Bold.0bc8b973.woff2",revision:"d94e53ed77ae219e76e90cf02e7d627d"},{url:"assets/KaTeX_Main-Bold.6a6e2a05.ttf",revision:"5c6035670847d3c6f8af38393b04eee9"},{url:"assets/KaTeX_Main-BoldItalic.20912b1a.woff2",revision:"addf865739892218570c00053c6c02dc"},{url:"assets/KaTeX_Main-BoldItalic.2241f144.ttf",revision:"dde48012334937d446600e982f5d8522"},{url:"assets/KaTeX_Main-Italic.3b653e89.ttf",revision:"890a6b3ff7159ac41c71ccd2c4e76323"},{url:"assets/KaTeX_Main-Italic.d98644df.woff2",revision:"c24bf2da2b956b13ba8101dda48a2d77"},{url:"assets/KaTeX_Main-Regular.0b23765e.woff2",revision:"46b1ffa6b7af252c4f89e7c8d757a39f"},{url:"assets/KaTeX_Main-Regular.1a9cbbfd.ttf",revision:"d866ab9ba6d5654e524ec6bd5e1d5a14"},{url:"assets/KaTeX_Math-BoldItalic.275f5ffd.ttf",revision:"cbf872382693c0b1c71f5df380206d7a"},{url:"assets/KaTeX_Math-BoldItalic.6e612a33.woff2",revision:"bb40192b2e03ed2f0fa8ee17ff587fd3"},{url:"assets/KaTeX_Math-Italic.23099f26.woff2",revision:"c359b8d5e269eaf907baa338587ca80e"},{url:"assets/KaTeX_Math-Italic.fced106b.ttf",revision:"96c61839461dd0264a18a65a39212a62"},{url:"assets/KaTeX_SansSerif-Bold.675e3f47.ttf",revision:"cb7f745a9094fa659195d2d6f13711eb"},{url:"assets/KaTeX_SansSerif-Bold.eecd8e98.woff2",revision:"95392fb82420439d0c3bb9f2d414f83c"},{url:"assets/KaTeX_SansSerif-Italic.9e4e756c.ttf",revision:"9c330d9e5674fd3e79c644e451240331"},{url:"assets/KaTeX_SansSerif-Italic.fba87080.woff2",revision:"7de8e4ae08eaaeb10a5112ce7f09ba80"},{url:"assets/KaTeX_SansSerif-Regular.45c5ffa1.ttf",revision:"63e176e62748655e2076a07a12cc9355"},{url:"assets/KaTeX_SansSerif-Regular.9729a729.woff2",revision:"3ad86448e4a27c0e4a9b4e333aebeaa7"},{url:"assets/KaTeX_Script-Regular.15c00a11.woff2",revision:"9003d8e8bd5d718f953b45d21235f424"},{url:"assets/KaTeX_Script-Regular.9770e478.ttf",revision:"52316064070cd6860d779f6a1185633e"},{url:"assets/KaTeX_Size1-Regular.8af05c8b.ttf",revision:"f8369ce8f0adc37a0654c8e989499e7c"},{url:"assets/KaTeX_Size1-Regular.c77c185d.woff2",revision:"1eacb53819cf38ec1e4ffb5d777d4864"},{url:"assets/KaTeX_Size2-Regular.15df6913.ttf",revision:"90b50b453237cd955bbe7b979bb7345a"},{url:"assets/KaTeX_Size2-Regular.5e2769eb.woff2",revision:"1fe5d5d629404094a867aa61068c9157"},{url:"assets/KaTeX_Size3-Regular.569c9046.ttf",revision:"0a94dd2f83ba3c455c02dcf740a0944a"},{url:"assets/KaTeX_Size4-Regular.80aca689.woff2",revision:"a3fa8a08a95dab81913e04695b08cc32"},{url:"assets/KaTeX_Size4-Regular.feea5a15.ttf",revision:"70d01e490e97425d479807ea319ceed5"},{url:"assets/KaTeX_Typewriter-Regular.cf805e11.ttf",revision:"2f0057192d241cb99d64bba848b0164a"},{url:"assets/KaTeX_Typewriter-Regular.e96429b2.woff2",revision:"099e00d5873cd2d4ef3ca5d23c23c313"},{url:"assets/main.9ad567e7.js",revision:"b4863a945aea55a59f41e5ab284629f0"},{url:"assets/main.df161339.css",revision:"ffec39a5081ad424eea302e03c9ae07c"},{url:"assets/vendor.7295291a.js",revision:"f2ea068159ac4b3869cb142ce996b85f"},{url:"index.html",revision:"a220ff40d851ca178d02d326225931d3"},{url:"monaco-custom-worker.js",revision:"53844ec3cb8f92bedf80c48efd60609c"},{url:"service-worker-register.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"service-worker.js",revision:"a6fd73b748ef9f5a0437ae99b31f9eb3"},{url:"favicon.ico",revision:"72ac7cb442863601d0607c5dd35988bf"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"8ff0b58dfbe8a47e56976f1becf1d687"},{url:"pwa-192x192.png",revision:"421b20d7346947ababafbe553cc18e7d"},{url:"pwa-512x512.png",revision:"76d630b09f13ea20acda423f052e90df"},{url:"manifest.webmanifest",revision:"982637676c808a3d96d82dd74e70cf70"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
