class BackgroundExtension{
	testBackground(){
		console.log("Hola Background");
	}
}

var startBackground = function(config) {
	var extension = new BackgroundExtension(config.apiUrl);

	browser.browserAction.onClicked.addListener(() => {
	  extension.testBackground();
	});
}

function checkExpectedParameters(config){
	if (config == undefined)
		return false;
    var foundParams = ["apiUrl"].filter(param => (param && config.hasOwnProperty(param)));
    return (config.length == foundParams.length);
}

browser.storage.local.get("config").then(data => {
    if (!checkExpectedParameters(data.config)) {
        data.config = {
        	"apiUrl": ""
        };
        //Si no se setea, se puede perder consistencia con lo que se lee en la pagina de config
        browser.storage.local.set({"config": data.config }).then(() => startBackground(data.config));
    }
    else startBackground(data.config);
});