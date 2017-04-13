jQuery("document").ready(function($){

	var button = $('#button');
  var offsetButton = button.offset();
	var arrow = $('.arrow');
	var hidePoint = ($(document).height()/3);

	$(window).scroll(function () {
		if ($(this).scrollTop() > offsetButton.top) {
			button.addClass("fixed-btn");
		} else {
			button.removeClass("fixed-btn");
		}
		if ($(this).scrollTop() > hidePoint) {
			arrow.addClass("hidden");
		} else {
			arrow.removeClass("hidden");
		}

	});



});
