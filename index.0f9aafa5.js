var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequire549c;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,o){t[e]=o},e.parcelRequire549c=r),r.register("krGWQ",(function(e,o){var t,r,n,d;function c(){return{heroBtn:document.querySelector(".hero__button"),orderBackdrop:document.querySelector(".order__backdrop"),orderBtn:document.querySelector(".order__button"),commentForm:document.querySelector(".form"),commentFormInputs:document.querySelectorAll(".form__input"),commentFormTextarea:document.querySelector(".form__textarea"),fileUplaod:document.querySelector(".input-file"),fileUploadLabel:document.querySelector(".input-file .order-form__field-name")}}t=e.exports,r="default",n=function(){return c},Object.defineProperty(t,r,{get:n,set:d,enumerable:!0,configurable:!0})}));const n=(0,r("krGWQ").default)();function d(e){"Escape"===e.key&&n.orderBackdrop.classList.add("backdrop_is-hidden");const o=document.body,t=o.style.top;o.style.position="",o.style.top="",window.scrollTo(0,-1*parseInt(t||"0")),window.removeEventListener("keydown",d),n.orderBackdrop.removeEventListener("click",c)}function c(e){if(!e.target.classList.contains("backdrop"))return;n.orderBackdrop.classList.add("backdrop_is-hidden");const o=document.body,t=o.style.top;o.style.position="",o.style.top="",window.scrollTo(0,-1*parseInt(t||"0")),n.orderBackdrop.removeEventListener("click",c),window.removeEventListener("keydown",d)}n.heroBtn.addEventListener("click",(function(){n.orderBackdrop.classList.remove("backdrop_is-hidden");const e=document.documentElement.style.getPropertyValue("--scroll-y"),o=document.body;o.style.position="fixed",o.style.top=`-${e}`,window.addEventListener("keydown",d),n.orderBackdrop.addEventListener("click",c)})),n.orderBtn.addEventListener("click",(function(){const e=document.body,o=e.style.top;e.style.position="",e.style.top="",window.scrollTo(0,-1*parseInt(o||"0")),n.orderBackdrop.classList.add("backdrop_is-hidden"),window.removeEventListener("keydown",d),n.orderBackdrop.removeEventListener("click",c)})),window.addEventListener("scroll",(()=>{document.documentElement.style.setProperty("--scroll-y",`${window.scrollY}px`)}));
//# sourceMappingURL=index.0f9aafa5.js.map