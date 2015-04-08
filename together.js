document.addEventListener('keydown', function(e){
    var evtObj = window.event? event : e
    if(evtObj.keyCode == 84 && evtObj.altKey && evtObj.ctrlKey) {
	TogetherJS(this);
	return false;
    }
},false);

TogetherJS.on("ready", function(){
    Reveal.addEventListener("slidechanged", function(event){
	if(TogetherJS.require("peers").Self.isCreator) {
	    TogetherJS.send({
		type: "slidechanged",
		indexh: event.indexh,
		indexv: event.indexv
	    });
	}
    });

    TogetherJS.hub.on("slidechanged", function(event){
	console.log("event received");
	if(event.peer.isCreator) {
	    console.log(event);
	    Reveal.slide(event.indexh, event.indexv);
	}
    });
})
