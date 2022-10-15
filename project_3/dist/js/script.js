$(document).ready(function(){
  $('.carousel__inner').slick({
      speed: 1200,
      // adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.svg"></button>',
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

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass
      ('catalog__content_active').eq($(this).index()).addClass
      ('catalog__content_active');
    });

  $('.catalog-item__link').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })
  $('.catalog-item__back').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });
  
  //modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button_mini').on('click',function() {
    $('.overlay, #order').fadeIn('slow');
  });
  $('.button_mini').each(function(i) {
    $(this).on('click',function() {
      $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text())
      $('.overlay, #order').fadeIn('slow');
    })
  });

  function valideForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свой почтовый адрес",
          email: "Ваша почта должна иметь формат name@domain.com"
        }
      }
    });
  };
  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();
    if (!$(this).valid()) {
      return;
    }
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut('slow');
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;  
  });

  // Smooth scroll and pageup
  
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 1600 && $(this).outerWidth() > 1200) {
  //     $('.pageup').fadeIn();
  //   } else {
  //     $('.pageup').fadeOut();
  //   }
  // });
  $("a[href^='#']").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  function pageUp(selector) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700 && $(this).outerWidth() > 1200) {
            $(selector).css("display","block");
        } else {
            $(selector).css("display","none")
        }
    });
}

pageUp('.pageup')

  new WOW().init();
});  