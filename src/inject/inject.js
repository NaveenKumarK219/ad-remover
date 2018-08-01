chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading

		$("iframe").remove();
		console.log("Ads removed using Ad Remover!");
		// ----------------------------------------------------------

	}
	}, 10);
});
