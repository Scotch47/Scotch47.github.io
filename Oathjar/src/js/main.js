$(document).ready(function() {
// табы
	$('.about__toggle').click(function(event) {
		event.preventDefault();

		$('.about-content__box').hide();

		var href = $(this).attr('href');

		$(href).fadeIn();
			
	});
// появление
var windowHeight = $(window).height();



	$(window).scroll(function(){

		if ( $(this).scrollTop() > windowHeight) {

			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}


	});
// прокрутка
	$('#scrollToTop').click(function(event) {
		event.preventDefault();
		$('html').animate({scrollTop: 0}, 800)
	});

});

