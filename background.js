chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let code = 'tag=camecoho-20';
    if (details.url.indexOf(code) > 0) { return {} ; }
    let separator = details.url.indexOf('?') > 0 ? '&' : '?';
    let redirectUrl = details.url + separator + code;
    return {redirectUrl: redirectUrl};
  },
  { urls: ["*://amazon.com/*", "*://www.amazon.com/*" ],
    types: ["main_frame"] },
  ["blocking"]
);
