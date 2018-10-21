chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["*://*.dnvod.tv/upload/gaming/*", "*://*.dnvod.tv/upload/upload/*"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if( details.url == "http://www.google.com/" )
            return {redirectUrl: "http://www.google.com/?q=defaultquery" };
        if( details.url == "http://manong.eu/" )
            return {redirectUrl: "http://manong.eu/?details=faadsf" };
    },
    {urls: ["http://www.google.com/*", "http://manong.eu/*"]},
    ["blocking"]
 );