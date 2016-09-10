

/*
 * web component main
 */

require.config({
	paths: {
		jquery: 'jquery-1.11.0'
	}
})


define(['jquery','component'],function($,c){
	
	$('.A').click(function() {
		
		new c.Window().alert('Hello World!!!');
		
	});

});

