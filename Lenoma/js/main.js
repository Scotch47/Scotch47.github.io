$(document).ready(function(){
  $('.slide-wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,

  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  accessibility: true,
  speed: 1200,
  });


  $('.slider-blocks').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
  adaptiveHeight: true,
  infinite: false,
  arrows: true,
  prevArrow: '<button class="prev arrows"></button>',
  nextArrow: '<button class="next arrows"></button>',
  accessibility: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
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

    $('.slider-brend').slick({
      slidesToShow: 5,
      slidesToScroll: 2,
    adaptiveHeight: true,
    arrows: true,
    infinite:false,
    prevArrow: '<button class="prev arrows"></button>',
    nextArrow: '<button class="next arrows"></button>',
    accessibility: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]








});

	

  $('#main-nav').hcOffcanvasNav({
    maxWidth: 991
  });



  

});