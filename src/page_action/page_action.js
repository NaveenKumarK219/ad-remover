var removeAdButton = document.getElementById("remove-ad");
// Code to remove Ads
var jsCode = `  adsIframes = $('iframe'); 
				for(i=0;i<adsIframes.length;i++){
					console.log("iframe id recieved : "+adsIframes[i].id); 
					if(adsIframes[i].id.indexOf('google') > -1 || adsIframes[i].id.indexOf('ads') > -1 
						|| adsIframes[i].id.indexOf('-ad') > -1 || adsIframes[i].id.indexOf('ad-') > -1 
						|| adsIframes[i].id.indexOf('_ad') > -1 || adsIframes[i].id.indexOf('ad_') > -1){
						console.log("iframe id replaced : "+adsIframes[i].id); 
						$(adsIframes[i]).replaceWith("<h1 class='ad-logo'>Ad Remover</h1><p class='ad-desc'>Ads removed using Ad Remover &copy;Navin Kumar</p>"); 
					}
				} 
				console.log('Ads removed using Ad Remover!');
`;
removeAdButton.onclick = function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: jsCode});
    });
};

