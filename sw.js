if (!self.define) {
    let e, s = {};
    const i = (i, n) => (i = new URL(i + ".js", n).href, s[i] || new Promise((s => {
      if ("document" in self) {
        const e = document.createElement("script");
        e.src = i, e.onload = s, document.head.appendChild(e);
      } else e = i, importScripts(i), s();
    })).then(() => {
      let e = s[i];
      if (!e) throw new Error(`Module ${i} didn’t register its module`);
      return e;
    }));
    self.define = (n, t) => {
      const r = e || ("document" in self ? document.currentScript.src : "") || location.href;
      if (s[r]) return;
      let o = {};
      const c = e => i(e, r),
        l = {
          module: {
            uri: r
          },
          exports: o,
          require: c
        };
      s[r] = Promise.all(n.map(e => l[e] || c(e))).then(e => (t(...e), o));
    }
  }
  define(["./workbox-74f2ef77"], (function (e) {
    "use strict";
    self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
      url: "assets/index-EgQliWLT.js",
      revision: null
    }, {
      url: "assets/index-y1twqb23.css",
      revision: null
    }, {
      url: "index.html",
      revision: "afdd709b40255c6bc4ee675c088c01c0"
    }, {
      url: "registerSW.js",
      revision: "1872c500de691dce40960bb85481de07"
    }, {
      url: "manifest.webmanifest",
      revision: "1077048f7f11a4d3960d8438058d1242"
    }], {}), e.cleanupOutdatedCaches(), e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))), e.registerRoute(/\/assets\//, new e.CacheFirst({
      cacheName: "assets-cache",
      plugins: [new e.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 2592e3
      })]
    }), "GET")
  }));