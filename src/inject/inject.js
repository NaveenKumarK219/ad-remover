chrome.extension.sendMessage({}, function(response) {
	var iteratorCount = 0;
	
	// This will call the function at regular intervals
	var readyStateCheckInterval = setInterval(function() {
		// Ads are removed after page loading is finished
		if (document.readyState === "complete") {
			iteratorCount++;	
			removeAds();
		}
	}, 5000);
	if(iteratorCount == 10){
		clearInterval(readyStateCheckInterval);
	}
});
// This will replace the Ad in the page
/*ad_div = "<div class='ad-div'> \
			<h1 class='ad-logo blinking'>Navin's Ad Remover</h1> \
			<p class='ad-desc'>Ads removed using Ad Remover &copy;Navin Kumar</p> \
		</div>";*/
ad_div = "<div class='Ncontainer Ndiv-inline'>\
		      <div class='Ntext1 Ndiv-inline'>NAVIN's</div> \
					<div class='Ntext2 Ndiv-inline'> \
					  <span>AD REMOVER</span>\
					</div>\
					<p class='Ntext3'>&copy;Navin Kumar</p>\
		</div>";

// code to remove ads.
function removeAds(){
	var adsIframes = $('iframe'); // gets all frame elements in the page.
	var adsRemovedFlag = false;
	for(i=0;i<adsIframes.length;i++){
		console.log("iframe id recieved : "+adsIframes[i].id);
		if(adsIframes[i].id.indexOf('google') > -1 || adsIframes[i].id.indexOf('ads') > -1 || adsIframes[i].id.indexOf('-ad') > -1
			|| adsIframes[i].id.indexOf('ad-') > -1 || adsIframes[i].id.indexOf('_ad') > -1 || adsIframes[i].id.indexOf('ad_') > -1
			|| adsIframes[i].id.indexOf('swift') > -1){
			console.log("iframe id replaced : "+adsIframes[i].id);
			//Replace the Ad frame with following
			$(adsIframes[i]).replaceWith(ad_div);
			adsRemovedFlag = true;
		}
	}
	if(adsRemovedFlag == true){
		console.log("Ads removed using Ad Remover!");
	}
	
}


