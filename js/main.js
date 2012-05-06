$(function() {

	var HOME = 36;
	var END = 35;
	var slides = $(".slides").children().length;

	$(window).keydown(function(e) {
		if (e.keyCode === HOME) {
			location.href = "#/";
		} 
		else if(e.keyCode === END) {
			location.href = "#/" + (slides-1);
		}
	});

});
