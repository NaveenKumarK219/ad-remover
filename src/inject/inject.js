chrome.extension.sendMessage({}, function(response) {
	//var iteratorCount = 0;
	var readyStateCheckInterval = setInterval(function() {
		//removeAds(readyStateCheckInterval, iteratorCount); //called every 1000ms 
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			removeAds();
			// ----------------------------------------------------------
		}
	}, 10000);
});

// code to remove ads.
function removeAds(){
	var adsIframes = $('iframe'); // gets all frame elements in the page.
	var adsRemovedFlag = false;
	for(i=0;i<adsIframes.length;i++){
		console.log("iframe id recieved : "+adsIframes[i].id);
		if(adsIframes[i].id.indexOf('google') > -1 || adsIframes[i].id.indexOf('ads') > -1){
			console.log("iframe id replaced : "+adsIframes[i].id);
			//Replace the Ad frame with following
			$(adsIframes[i]).replaceWith("<h1 class=\'ad-logo\'>Ad Remover</h1><p class=\'ad-desc\'>Ads removed using Ad Remover &copy;Navin Kumar</p>");
			adsRemovedFlag = true;
		}
	}
	if(adsRemovedFlag == true){
		console.log("Ads removed using Ad Remover!");
	}
	
}


