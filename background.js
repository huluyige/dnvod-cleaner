chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["*://*.dnvod.tv/upload/gaming/*"]
    },
    ["blocking"]
);