(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function injectStylesheet(s,t){var e=s.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=t,s.head.appendChild(e)}function injectScript(s,t){var e=s.createElement("script");e.type="text/javascript",e.src=t,e.async=!1,s.head.appendChild(e)}function injectAssets(s,t,e){e.forEach(function(e){var n=t.assetRoot+"build/"+t.manifest[e];n.match(/\.css/)?injectStylesheet(s,n):injectScript(s,n)})}function bootHypothesisClient(s,t){if(!s.querySelector('link[type="application/annotator+html"]')){var e=s.createElement("link");e.rel="sidebar",e.href=t.sidebarAppUrl,e.type="application/annotator+html",s.head.appendChild(e);var n=s.createElement("link");n.rel="hypothesis-client",n.href=t.assetRoot+"build/boot.js",n.type="application/annotator+javascript",s.head.appendChild(n),injectAssets(s,t,["scripts/polyfills.bundle.js","scripts/jquery.bundle.js","scripts/annotator.bundle.js","styles/icomoon.css","styles/annotator.css","styles/pdfjs-overrides.css"])}}function bootSidebarApp(s,t){injectAssets(s,t,["scripts/raven.bundle.js","scripts/angular.bundle.js","scripts/katex.bundle.js","scripts/showdown.bundle.js","scripts/polyfills.bundle.js","scripts/unorm.bundle.js","scripts/sidebar.bundle.js","styles/angular-csp.css","styles/angular-toastr.css","styles/icomoon.css","styles/katex.min.css","styles/sidebar.css"])}function boot(s,t){s.querySelector("hypothesis-app")?bootSidebarApp(s,t):bootHypothesisClient(s,t)}module.exports=boot;

},{}],2:[function(require,module,exports){
"use strict";var boot=require("./boot"),settings=require("../shared/settings").jsonConfigsFrom(document);boot(document,{assetRoot:settings.assetRoot||"__ASSET_ROOT__",manifest:__MANIFEST__,sidebarAppUrl:settings.sidebarAppUrl||"__SIDEBAR_APP_URL__"});

},{"../shared/settings":3,"./boot":1}],3:[function(require,module,exports){
"use strict";function assign(o,s){for(var n in s)s.hasOwnProperty(n)&&(o[n]=s[n]);return o}function jsonConfigsFrom(o){for(var s={},n=o.querySelectorAll("script.js-hypothesis-config"),r=0;r<n.length;r++){var t;try{t=JSON.parse(n[r].textContent)}catch(o){console.warn("Could not parse settings from js-hypothesis-config tags",o),t={}}assign(s,t)}return s}module.exports={jsonConfigsFrom:jsonConfigsFrom};

},{}]},{},[2])
//# sourceMappingURL=boot.bundle.js.map
