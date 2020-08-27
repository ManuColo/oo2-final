function startExtension(){
	console.log("StartFE");
	browser.runtime.sendMessage({
		"call": "startBackground",
	});
}

console.log("A punto de llamar start extension");
startExtension();
