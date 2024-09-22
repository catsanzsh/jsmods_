a// ==UserScript==
// @name        Project Orion Optimized
// @version     1.2
// @license     MIT
// @description Automates file uploading process for various models on specified websites.
// @author      Pro-Fessional
// @match       *://example.com/*  // Change this to the website's URL where you want to upload files
// @grant       none
// @run-at      document-end
// @namespace   https://greasyfork.org/users/1090501
// ==/UserScript==

(function () {
    'use strict';

    // General function to trigger file upload
    function triggerFileUpload(fileName, selector) {
        const input = document.querySelector(selector || 'input[type="file"]'); // Default selector if none provided
        if (!input) {
            console.error('File input element not found for selector:', selector);
            return;
        }

        // Create a DataTransfer object to simulate file upload
        const dataTransfer = new DataTransfer();
        const file = new File([new Blob(['dummy content'])], fileName, { type: 'application/octet-stream' });
        dataTransfer.items.add(file);
        input.files = dataTransfer.files;
        input.dispatchEvent(new Event('change', { bubbles: true }));

        console.log(`File '${fileName}' successfully uploaded using selector: ${selector}`);
    }

    // Function to handle different model uploads
    function handleModelUpload(model = 'Omni Mini') {
        const currentVersion = '4.10.24';  // Centralized model version
        const modelFilePaths = {
            'GPT-3': `gpt3-model-${currentVersion}.txt`,
            'GPT-4': `gpt4-model-${currentVersion}.txt`,
            'Omni Mini': `omni-mini-model-${currentVersion}.txt`
        };

        const selectors = {
            'GPT-3': '#gpt3-file-input',
            'GPT-4': '#gpt4-file-input',
            'Omni Mini': '#omni-mini-file-input'
        };

        const fileName = modelFilePaths[model];
        const selector = selectors[model];

        if (fileName && selector) {
            triggerFileUpload(fileName, selector);
        } else {
            console.error(`Model '${model}' not supported or selector not found.`);
        }
    }

    // Example usage: Upload for default model 'Omni Mini'
    handleModelUpload();  // Defaults to 'Omni Mini', can pass other model names
})();
