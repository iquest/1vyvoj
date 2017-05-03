$(document).ready(function(){

	var button = $('#button');
  var offsetButton = button.offset();
	var arrow = $('.arrow');
	var hidePoint = ($(document).height()/3);

// 	$(window).scroll(function () {
// 		if ($(this).scrollTop() > offsetButton.top) {
// 			button.addClass("fixed-btn");
// 		} else {
// 			button.removeClass("fixed-btn");
// 		}
// 		if ($(this).scrollTop() > hidePoint) {
// 			arrow.addClass("hidden");
// 		} else {
// 			arrow.removeClass("hidden");
// 		}

// 	});
	
$("#stats-btn").click(function() {
	// $('#menu').addClass('menu-show');
	$('#stats').slideToggle(500);
	// alert("aa");
});

var target = $("#prinasime");
var targetOffset = target.offset().top;

  var $w = $(window).scroll(function() {
    if (($w.scrollTop()) > targetOffset) {
      $('#arrow').css({
        "background-image": "url('img/arrow-up.png')"
      });
    } else {
      $('#arrow').css({
        "background-image": "url('img/arrow-down.png')"
      });
    }
  });

// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


});
