!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequire549c;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,o){t[e]=o},e.parcelRequire549c=r);var n=(0,r("4Nugj").default)();function d(e){if("Escape"===e.key){n.orderBackdrop.classList.add("backdrop_is-hidden");var o=document.body,t=o.style.top;o.style.position="",o.style.top="",window.scrollTo(0,-1*parseInt(t||"0")),n.html.style.scrollBehavior="smooth",window.removeEventListener("keydown",d),n.orderBackdrop.removeEventListener("click",s)}}function s(e){if(e.target.classList.contains("backdrop")){n.orderBackdrop.classList.add("backdrop_is-hidden");var o=document.body,t=o.style.top;o.style.position="",o.style.top="",window.scrollTo(0,-1*parseInt(t||"0")),n.html.style.scrollBehavior="smooth",n.orderBackdrop.removeEventListener("click",s),window.removeEventListener("keydown",d)}}n.heroBtn.addEventListener("click",(function(){n.orderBackdrop.classList.remove("backdrop_is-hidden"),n.html.style.scrollBehavior="auto";var e=document.documentElement.style.getPropertyValue("--scroll-y"),o=document.body;o.style.position="fixed",o.style.width="100%",o.style.top="-".concat(e),window.addEventListener("keydown",d),n.orderBackdrop.addEventListener("click",s)})),n.orderBtn.addEventListener("click",(function(){var e=document.body,o=e.style.top;e.style.position="",e.style.top="",window.scrollTo(0,-1*parseInt(o||"0")),n.orderBackdrop.classList.add("backdrop_is-hidden"),n.html.style.scrollBehavior="smooth",window.removeEventListener("keydown",d),n.orderBackdrop.removeEventListener("click",s)})),window.addEventListener("scroll",(function(){document.documentElement.style.setProperty("--scroll-y","".concat(window.scrollY,"px"))}))}();
//# sourceMappingURL=index.e3c3eb32.js.map