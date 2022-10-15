$(document).ready(function(){
  // $('.carousel__inner').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     speed: 1200,
  //     adaptiveHeight: true,
  //     prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrows/left.png"></button>',
  //     nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrows/right.png"></button>',
    //   responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //     dots: false,
    //     arrows: false,
    //     }
    //   },
    // ]    
  // });

  $('.section_slider').slick(
    {
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="./icons/arrows/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="./icons/arrows/right.png"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
          dots: true,
          arrows: false,
          }
        },
      ]
    }
  );


});  
