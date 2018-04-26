chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'jquery-3.3.1.min.js',
    allFrames: true
  }, function(){
    chrome.tabs.executeScript({
      file: 'baeqyangsan.js',
      allFrames: true
    })
  })
})
