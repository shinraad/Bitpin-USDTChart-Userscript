
 // ==UserScript==
 // @name         Bitpin USDT Chart Overlay Remover
 // @namespace    https://github.com/shinraad/Bitpin-USDTChart-Userscript
 // @version      1.0.0
 // @description  Remove the login overlay from the Bitpin USDT chart.
 // @match        https://bitpin.org/coin/USDT/
 // @match        https://www.bitpin.org/coin/USDT/
 // @run-at       document-start
 // @grant        none
 // @noframes
 // @updateURL    https://raw.githubusercontent.com/shinraad/Bitpin-USDTChart-Userscript/main/bitpin-usdt.user.js
 // @downloadURL  https://raw.githubusercontent.com/shinraad/Bitpin-USDTChart-Userscript/main/bitpin-usdt.user.js
 // ==/UserScript==

(function () {
    'use strict';

    const TARGET_CLASSES = [
        'absolute',
        'inset-0',
        'z-20',
        'flex',
        'items-center',
        'justify-center',
        'backdrop-blur-md'
    ];

    const SELECTOR =
        'div[aria-hidden="true"].absolute.inset-0.z-20.flex.items-center.justify-center.backdrop-blur-md';

    function isTarget(element) {
        return (
            element instanceof Element &&
            element.matches(SELECTOR) &&
            element.classList.length === TARGET_CLASSES.length
        );
    }

    function removeOverlay(root = document) {
        if (isTarget(root)) {
            root.remove();
            return;
        }

        if (!root.querySelectorAll) return;

        root.querySelectorAll(SELECTOR).forEach(element => {
            if (isTarget(element)) {
                element.remove();
            }
        });
    }

    function initialize() {
        removeOverlay();

        const observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes') {
                    removeOverlay(mutation.target);
                    continue;
                }

                for (const node of mutation.addedNodes) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        removeOverlay(node);
                    }
                }
            }
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'aria-hidden']
        });
    }

    if (document.documentElement) {
        initialize();
    } else {
        const startupObserver = new MutationObserver(() => {
            if (document.documentElement) {
                startupObserver.disconnect();
                initialize();
            }
        });

        startupObserver.observe(document, {
            childList: true
        });
    }
})();
