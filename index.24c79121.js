!function(){var e={menuBtn:document.querySelector(".burger-button"),mobileMenu:document.querySelector(".menu")};function t(n){if("A"===n.target.nodeName){var i="true"===e.menuBtn.getAttribute("aria-expanded")||!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!i),e.mobileMenu.classList.toggle("is-open"),e.mobileMenu.removeEventListener("click",t)}}e.menuBtn.addEventListener("click",(function(){var n="true"===e.menuBtn.getAttribute("aria-expanded")||!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!n),e.mobileMenu.classList.toggle("is-open"),e.mobileMenu.addEventListener("click",t)}))}();
//# sourceMappingURL=index.24c79121.js.map