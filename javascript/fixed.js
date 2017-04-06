jQuery("document").ready(function($){

	var button = $('#button');
  var offset = button.offset();

	$(window).scroll(function () {
		if ($(this).scrollTop() > offset.top) {
			button.addClass("fixed-btn");
		} else {
			button.removeClass("fixed-btn");
		}
	});

});
