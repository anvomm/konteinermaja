!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire549c;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},e.parcelRequire549c=n),n.register("4Nugj",(function(e,t){var o,n,r,u;function l(){return{html:document.querySelector("html"),heroBtn:document.querySelector(".hero__button"),orderBackdrop:document.querySelector(".order__backdrop"),orderBtn:document.querySelector(".order__button"),commentForm:document.querySelector(".form"),commentFormInputs:document.querySelectorAll(".form__input"),commentFormTextarea:document.querySelector(".form__textarea"),fileUplaod:document.querySelector(".input-file"),fileUploadLabel:document.querySelector(".input-file .order-form__field-name"),container:document.querySelector(".grid"),mobContainer:document.querySelector(".technology__mobile-gallery"),technologyBackdrop:document.querySelector(".backdrop"),technologyModal:document.querySelector(".technology-modal__content"),closeBtn:document.querySelector(".modal-button"),menuBtn:document.querySelector(".burger-button"),mobileMenu:document.querySelector(".menu")}}o=e.exports,n="default",r=function(){return l},Object.defineProperty(o,n,{get:r,set:u,enumerable:!0,configurable:!0})}));var r=(0,n("4Nugj").default)();function u(e){if("A"===e.target.nodeName){var t="true"===r.menuBtn.getAttribute("aria-expanded")||!1;r.menuBtn.classList.toggle("is-open"),r.menuBtn.setAttribute("aria-expanded",!t),r.mobileMenu.classList.toggle("is-open"),r.mobileMenu.removeEventListener("click",u)}}r.menuBtn.addEventListener("click",(function(){var e="true"===r.menuBtn.getAttribute("aria-expanded")||!1;r.menuBtn.classList.toggle("is-open"),r.menuBtn.setAttribute("aria-expanded",!e),r.mobileMenu.classList.toggle("is-open"),r.mobileMenu.addEventListener("click",u)}))}();
//# sourceMappingURL=index.8eea7421.js.map
