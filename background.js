chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    url = tab.url;
    console.log(url);
    if (url.includes('https://docs.microsoft.com/fr-fr/')) {
      chrome.tabs.update(tabId, {url: url.replace('fr-fr', 'en-us')});
    } 
});
