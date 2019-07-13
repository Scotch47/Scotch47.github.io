$(document).ready(function() {
	// show
	var windowHeight = $(window).height();	
	$(window).scroll(function(){	
		if ( $(this).scrollTop() > windowHeight) {	
			$('#scrollToTop').fadeIn();
			} else {
				$('#scrollToTop').fadeOut();
			}	
		});



	// up
		$('#scrollToTop').click(function(event) {
			event.preventDefault();
			$('html,body').animate({scrollTop: 0}, 800);
		});

		

		// menu
		(function ($) {
      $(function () {
        $('.menu__icon').on('click', function () {
          $(this).closest('.menu')
            .toggleClass('menu_state_open');
        });

        $('.menu__links-item').on('click', function () {
         

          $(this).closest('.menu')
            .removeClass('menu_state_open');
        });
      });
		})(jQuery);


		// video 

		$('.video-wrapper__btn').click(function () {
      this.style.display = 'none';
      $('div.youtube').css('display', 'block');
      $('iframe.youtube').prop('src', 'https://www.youtube.com/embed/TdpBRZ0dZhw');
		});
		
		
		// slider top
		  $('.header-slick').slick({
        arrows: false,
			dots: true  });

			
			// slider-comment
			$('.slider-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
	
				asNavFor: '.slider-nav'
			});
			$('.slider-nav').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.slider-for',
				prevArrow: '<button class="prev arrows"></button>',
				nextArrow: '<button class="next arrows"></button>',
				centerMode: true,
				focusOnSelect: true,
				variableWidth: true,	
	
			});

	
	});
	
	var $page = $('html, body');
    $('a[href*="#"]').click(function () {
      $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1200);
      return false;
    });
	