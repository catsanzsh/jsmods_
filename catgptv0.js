// ==UserScript==
// @name               ChatGPT Model Switcher (Supports GPT-4 Mobile and All Available Models)
// @name:zh-CN         ChatGPT 模型切换器（支持 GPT-4 Mobile 及所有可用模型）
// @name:zh-TW         ChatGPT 模型切换器（支持 GPT-4 Mobile 及所有可用模型）
// @namespace          https://github.com/hydrotho/ChatGPT_Model_Switcher
// @version            2.5.0
// @author             Hydrotho
// @description        Use the GPT-4 Mobile model on the ChatGPT web interface. It also provides the ability to switch to other models for added flexibility. Generally, this script does not conflict with other popular ChatGPT scripts.
// @description:zh-CN  在 ChatGPT 网页端使用 GPT-4 Mobile 模型。同时，它还提供了切换到其他模型的功能，以提供更大的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。
// @description:zh-TW  在 ChatGPT 网页端使用 GPT-4 Mobile 模型。同时，它还提供了切换到其他模型的功能，以提供更大的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。
// @license            MIT
// @copyright          2023, Hydrotho (https://github.com/hydrotho)
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
// @supportURL         https://github.com/hydrotho/ChatGPT_Model_Switcher/issues
// @match              http*://chat.openai.com/*
// @match              http*://chatgpt.com/*
// @require            https://cdn.jsdelivr.net/npm/vue@3.4.27/dist/vue.global.prod.js#sha256-VMrHpvwhhCKPXCaAPunCoWMozbWKGCjzejy8voYbGOs=
// @grant              none
// @run-at             document-start
// @downloadURL https://update.greasyfork.org/scripts/468905/ChatGPT%20Model%20Switcher%20%28Supports%20GPT-4%20Mobile%20and%20All%20Available%20Models%29.user.js
// @updateURL https://update.greasyfork.org/scripts/468905/ChatGPT%20Model%20Switcher%20%28Supports%20GPT-4%20Mobile%20and%20All%20Available%20Models%29.meta.js
// ==/UserScript==

// ... (rest of the code is the same as before, up to the `models` definition)

const extraModels = [
    {
        slug: "text-davinci-002-render-sha-mobile",
        title: "GPT-3.5 (Mobile)",
        description: "An experimental model that does not guarantee usability",
        tags: ["gpt3.5", "mobile", "unofficial"]
    },
    {
        slug: "gpt-4-mobile",
        title: "GPT-4 (Mobile)",
        description: "An experimental model that does not guarantee usability",
        tags: ["gpt4", "mobile", "unofficial"]
    },
    // Add ChatGPT Plus models here (replace placeholders with actual slugs)
    {
        slug: "gpt-4-0314", // Replace with the actual slug for GPT-4
        title: "GPT-4",
        description: "ChatGPT Plus model",
        tags: ["gpt4", "plus"]
    },
    {
        slug: "gpt-4-32k-0314", // Replace with the actual slug for GPT-4 32k
        title: "GPT-4 32k",
        description: "ChatGPT Plus model with extended context",
        tags: ["gpt4", "plus", "32k"]
    }
    // Add more ChatGPT Plus models as needed...
];

// ... (rest of the code remains the same)
