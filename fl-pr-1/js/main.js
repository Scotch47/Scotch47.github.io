$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    accessibility: true,
    speed: 1200,
  });

  $('.work-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
    variableWidth: true,
    dots: true,
    responsive: [{
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]

  });


  $(".click").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });


  // show
  var windowHeight = $(window).height();
  $(window).scroll(function () {
    if ($(this).scrollTop() > windowHeight) {
      $('#scrollToTop').fadeIn();
    } else {
      $('#scrollToTop').fadeOut();
    }
  });



  // up
  $('#scrollToTop').click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 800);
  });

  var nav = $('.header-top');

  $('.header-top__burger, .js-nav').click(function (event) {
    $('.header-top__burger, .nav').toggleClass('active');
    $('body').toggleClass('body-lock');
  });




});