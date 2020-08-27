browser.runtime.onMessage.addListener((request, sender) => {
	console.log("[background-side] calling the message: " + request.call);
	if(extension[request.call]){
		extension[request.call](request.args);
	}
});

