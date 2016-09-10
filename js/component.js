

/*
 * web component development
 */

define(['jquery'],function(){
	
	function Window() {
		
	}
	
	Window.prototype = {
		alert:function(ct){
			
			var boundingBox = $('<div class="window_boundingBox"  draggable="true"></div>');
			boundingBox.appendTo('body');
			boundingBox.html(ct);
			
		},
		confirm:function(){},
		prompt:function(){},
	}
	
	return {
		Window:Window
	}

});

