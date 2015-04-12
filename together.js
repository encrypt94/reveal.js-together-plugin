window.togetherPlugin = {
    sendSlideChanged: function(h, v, f){
	if(TogetherJS.require("peers").Self.isCreator) {
	    TogetherJS.send({
		type: "slidechanged",
		indexh: h,
		indexv: v,
		indexf: f
	    });
	}
    },

    sendFragmentChanged: function(){
	var indices = Reveal.getIndices();
	this.sendSlideChanged(indices.h, indices.v, indices.f);
    },

    init: function(){
	document.addEventListener('keydown', function(e){
	    var evtObj = window.event? event : e
	    // Ctrl + Alt + t
	    if(evtObj.keyCode == 84 && evtObj.altKey && evtObj.ctrlKey) {
		TogetherJS(this);
		return false;
	    }
	},false);

	TogetherJS.on("ready", function(){
	    Reveal.addEventListener("slidechanged", function(event){
		togetherPlugin.sendSlideChanged(event.indexh, event.indexv, 0)
	    });

	    Reveal.addEventListener("fragmentshown", function(event){
		togetherPlugin.sendFragmentChanged();
	    });

	    Reveal.addEventListener("fragmenthidden", function(event){
		togetherPlugin.sendFragmentChanged();
	    });

	    TogetherJS.hub.on("slidechanged", function(event){
		if(event.peer.isCreator) {
		    Reveal.slide(event.indexh, event.indexv, event.indexf);
		}
	    });
	});
    }
}

togetherPlugin.init();
