!function(){function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return o(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,t)},r(t)}function o(t,n,e){return o=a()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&i(o,e.prototype),o},o.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,n){return i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},i(t,n)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var u=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(p,t);var r,o,u,s,l=(r=p,o=a(),function(){var t,n=c(r);if(o){var a=c(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return e(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=l.call(this)).attachShadow({mode:"open"}),t.image=t.getAttribute("url-image"),t.color=t.getAttribute("button-color"),t.headerMov=t.getAttribute("header-movement"),t.transparent=t.getAttribute("transparent-header"),t}return u=p,(s=[{key:"styles",value:function(){var t,n,e;return t=null===this.color?"teal":this.color,"true"!==this.transparent?(n="white",e="static"):(n="transparent",e="absolute"),"\n    <style>\n      * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n      }\n      :host {\n        display: block;\n        width: 100%;\n        height: 70px;\n        will-change: transform;\n        position: ".concat(e,";\n        background-color: ").concat(n,";\n        top: 0;\n        left: 0;\n      }\n      .my-header {\n        width: 100%;\n        height: 100%;\n      }\n      .my-header-container {\n        width: 90%;\n        height: 100%;\n        margin: 0 auto;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n      .my-header-container a {\n        width: fit-content;\n        height: fit-content;\n      }\n      .my-header-container img {\n        height: 60px;\n        filter: drop-shadow(-1px 1px 2px rgb(0 0 0 / 50%));\n      }\n      .my-header-container__button {\n        width: 40px;\n        height: 34px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n      }\n      .my-header-container__button span {\n        display: block;\n        width: 100%;\n        height: 4px;\n        background-color: ").concat(t,";\n        box-shadow: -1px 1px 3px 0px rgb(0 0 0 / 50%);\n        will-change: transform;\n        transition-property: transform, opacity;\n        transition-duration: 0.5s;\n      }\n      .button-animation span:nth-child(1) {\n        transform: translateY(calc(17px - 50%)) rotate(45deg);\n      }\n      .button-animation span:nth-child(2) {\n        transform: rotate(45deg);\n        opacity: 0%;\n        transition-duration: 0.5s;\n      }\n      .button-animation span:nth-child(3) {\n        transform: translateY(calc(-17px + 50%)) rotate(-45deg);\n      }\n      </style>\n    ")}},{key:"template",value:function(){var t=document.createElement("template"),n="\n    ".concat(this.styles(),'\n    <header class="my-header">\n      <div class="my-header-container">\n      <a href="/">\n      <img src="').concat(this.image,'" alt="Logo de Ultimate Gamer">\n      </a>\n        <div class="my-header-container__button">\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n      </div>\n    </header>\n    ');return t.innerHTML=n,t}},{key:"buttonAnimation",value:function(){var t=this.shadowRoot.querySelector(".my-header-container__button");t.addEventListener("click",(function(){t.classList.toggle("button-animation")}))}},{key:"transparetHeader",value:function(t){"true"===this.transparent&&!0===t?(this.style.backgroundColor="rgba(255,255,255,20%)",this.style.backdropFilter="blur(6px)"):"true"===this.transparent&&!1===t&&(this.style.backgroundColor="transparent",this.style.backdropFilter="unset")}},{key:"headerMovement",value:function(){var t,n=this;"false"!==this.headerMov&&window.addEventListener("scroll",(function(){t=window.scrollY,n.style.transform="translateY(".concat(t,"px)"),0!=t?(n.style.boxShadow="rgb(0 0 0 / 50%) 0px -1px 20px 0px",n.transparetHeader(!0)):(n.style.boxShadow="unset",n.transparetHeader(!1))}))}},{key:"connectedCallback",value:function(){var t=this.template().content.cloneNode(!0);this.shadowRoot.appendChild(t),this.buttonAnimation(),this.headerMovement()}}])&&n(u.prototype,s),Object.defineProperty(u,"prototype",{writable:!1}),p}(r(HTMLElement));window.customElements.define("my-header",u)}();