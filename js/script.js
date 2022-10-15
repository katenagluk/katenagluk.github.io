$(document).ready(function(){
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    // arrow app
    function pageUp(selector) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 700 && $(this).outerWidth() > 1250) {
                $(selector).css("display","block");
            } else {
                $(selector).css("display","none")
            }
        });
    }

    pageUp('.pageup')

    // form validation
    // function validateForms(form){
    //     $(form).validate({
    //         rules: {
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             email: {
    //                 required: true,
    //                 email: true
    //             },
    //         },
    //         messages: {
    //             name: {
    //                 required: "Please enter your name",
    //                 minlength: jQuery.validator.format("Enter 3 characters!")
    //             },
    //             email: {
    //                 required: "Please enter your email",
    //                 email: "Email address entered incorrectly"
    //             },
    //         }
    //     });
    // };
    // validateForms('#searchform');

    // form submiting
    function submitForm(selector) {
        $(selector).on('click', function() {
            const nameField = $.trim($('#name').val());
            const emailField = $.trim($('#email').val());
            const checkboxField = $("#checkbox").is(':checked');
            if (!nameField || !emailField || !checkboxField) {
                return;
            } else {
                $('.window, #thanks').fadeIn('slow');
            }
        });
    }

    submitForm('#submit_button')
    
    // close modal window
    $('.modal__close').on('click',function() {
        $('.window, #thanks').fadeOut('slow');
        $("#searchform")[0].reset();
    });

    // send message to the mail
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
            $('#searchform').fadeOut;
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });
});

