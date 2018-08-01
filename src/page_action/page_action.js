var removeAdButton = document.getElementById("remove-ad");

removeAdButton.onclick = function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: '$("iframe").remove();'});
    });
};
