
$(document).ready(function(){
  // Pageup
  function pageUp(selector) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 600 && $(this).outerWidth() > 1200) {
          $(selector).css("display","block");
      } else {
          $(selector).css("display","none");
      }
    });
  }
  pageUp('.pageup');
  // slick slider
  $('.carousel_inner').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
        dots: true,
        arrows: false,
        }
      },
    ]
  });
  // form submiting
  function submitForm(selector) {
  $(selector).on('click', function() {
    const nameField = $.trim($('#name').val());
    const emailField = $.trim($('#email').val());
    if (!nameField || !emailField) {
      return;
    } else {
      $('.window, #thanks').fadeIn('slow');
      }
    });
  }
  submitForm('#submit_button');
  // close modal window
  $('.modal__close').on('click',function() {
      $('.window, #thanks').fadeOut('slow');
      $("#searchform")[0].reset();
  });
});
