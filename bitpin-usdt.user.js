
 // ==UserScript==
 // @name         Bitpin USDT Chart Overlay Remover
 // @namespace    https://github.com/shinraad/Bitpin-USDTChart-Userscript
 // @version      1.0.2
 // @description  Remove the specified overlay div from Bitpin USDT page.
 // @match        https://bitpin.org/coin/USDT/
 // @match        https://www.bitpin.org/coin/USDT/
 // @match        https://bitpin.ir/coin/USDT/
 // @match        https://www.bitpin.ir/coin/USDT/
 // @run-at       document-start
 // @grant        none
 // @noframes
 // @updateURL    https://raw.githubusercontent.com/shinraad/Bitpin-USDTChart-Userscript/main/bitpin-usdt.user.js
 // @downloadURL  https://raw.githubusercontent.com/shinraad/Bitpin-USDTChart-Userscript/main/bitpin-usdt.user.js
 // ==/UserScript==

(function () {
    'use strict';

    const TARGET_SELECTOR =
        'div.absolute.inset-0.z-20.flex.items-center.justify-center.backdrop-blur-md';

    function removeTarget() {
        document.querySelectorAll(TARGET_SELECTOR).forEach(div => {
            div.remove();
        });
    }

    function initialize() {
        removeTarget();

        const observer = new MutationObserver(() => {
            removeTarget();
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class']
        });
    }

    if (document.documentElement) {
        initialize();
    } else {
        document.addEventListener('DOMContentLoaded', initialize, {
            once: true
        });
    }
})();
