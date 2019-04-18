$(document).ready(function(){

$('.slick-slider').slick({
  infinite: true,
  // autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  prevArrow: '<button class="prev arrows"></button>',
  nextArrow: '<button class="next arrows"></button>',
  slidesToScroll: 1,
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// $('.counter').each(function() {
//   var $this = $(this),
//       countTo = $this.attr('data-count');
  
//   $({ countNum: $this.text()}).animate({
//     countNum: countTo
//   },

//   {

//     duration: 1500,
//     easing:'linear',
//     step: function() {
//       $this.text(Math.floor(this.countNum));
//     },
//     complete: function() {
//       $this.text(this.countNum);
//       //alert('finished');
//     }

//   });  
//   $('.counter').click(function(event) {
//     event.preventDefault();
//     $('html').animate({scrollTop: 0}, 800)
//   });
  
  

});


// сщ

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];
var btn = document.getElementById('modal-btn-show');

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

// count
function countup(className){
    var countBlockTop = $("."+className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;
          
    $(window).scroll( function (){
      if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
        show = false;
            
        $('.'+className).spincrement({
          from: 1,
          duration: 2000,
        });
      }
    })  
  }

  
        $(function() {
    countup("count", $(".count").text());
  
        });

// hamb
        $(function () {
    
          $('.hamburger').on('click', function() {
              $(this).find('.hamburger--line').toggleClass('hamburger--line__x');
          });
          
      });

      
      $(function(){
        $('.hamburger').on('click', function(){
          $('.nav-2_none').slideToggle(250, function(){
            if($(this).css('display') === 'none'){
            $(this).removeAttr('style');
        }
      });
      });
      });