
document.addEventListener("DOMContentLoaded", function () {
    jQuery('.preloader-background').delay(1700).fadeOut('slow');

    jQuery('.preloader-wrapper')
        .delay(1700)
        .fadeOut();
});
jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 100) {
        jQuery("header").addClass("bgwhite");
    }
    else {
        jQuery("header").removeClass("bgwhite");
    }
});
jQuery(document).ready(function () {
    jQuery("#connectslider, #sattvatestimonial").owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        smartSpeed: 2000,
        autoplayTimeout: 15000,
        nav: true,
        dots: false,
    });
    jQuery(".events-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    });
});

jQuery(document).ready(function () {
    jQuery(".course-slider").owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
});

// jQuery('#sattvatestimonial').owlCarousel({
//   items: 1,
//   autoplay: false,
//   loop: true,
//   smartSpeed:1500,
//   nav: true,
//   dots: false,
// });

$('.modal').on({
    'mousewheel': function (e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
    }
});


$('[data-show="more"]').on('click', function (event) {
    event.preventDefault();
    if ($(this).attr('more-collapse') === 'false') {
        $(this).attr('more-collapse', 'true');
        $(this).prev('.more-text').removeClass('hide');
        $(this).text('Read Less');
    } else {
        $(this).text('Read More');
        $(this).attr('more-collapse', 'false');
        $(this).prev('.more-text').addClass('hide');
    }
});

$(document).on('change', '.paymentMethod', function () {
    if ($(this).val() == 1) {
        $('.creditCardDiv').show();
        $('.paypal').hide();
    } else {
        $('.creditCardDiv').hide();
        $('.paypal').show();
    }
});

$(document).on('click', '.free-reg', function(){
    $('html, body').animate({
        scrollTop: $("#main-registration").offset().top
    }, 2000);
});

$(document).on('click', '.tesimonial .owl-dots button.owl-dot', function(){
    var index = $('.owl-dot').index(this);
    $('.testimonial_ul li span').removeClass('active');
    $('.testimonial_ul li').eq(index).find('span').addClass('active');
});


$(document).on('click', '.play_button_image', function(){
    $(this).parent().hide();
    $(this).parent().parent().find('.displayNonDiv').find('.moduleContent').show();
    $('video').trigger('pause');
    $(this).parent().parent().find('.displayNonDiv').find('.moduleContent').get(0).play();
});

// js added by hitesh

$(document).on('click', '#sidebarCollapse', function(){
    $("#sidebar").toggleClass("navmbl");
  });

$(document).on('click', '.closeVideo', function(){
    var src = $(this).parents('.modal-content').find('iframe').attr('src');
    $(this).parents('.modal-content').find('iframe').attr('src', '');
    $(this).parents('.modal-content').find('iframe').attr('src',src);
    //$(".videoPlayer").find("video").jwplayer().stop();
  });

  $(document).on('click', '.closeAudio', function(){
      $('audio').trigger('pause');
  });

  $(document).on('click', '.chapter-disc', function(){
    $(this).toggleClass("rem-elips");
    $(this).find('.chapter-readmore').toggle();
});   
$(document).on('click','.showModalVideo', function(){
   var src =  $(this).attr('data-src');
   $('#videoIframe').attr('src',src);
});  

$(document).on('click','.showAudioModal', function(){
    var src =  $(this).attr('data-src');
    var thumbnail = $(this).parents('.videos-newtabs').find('.thumbnailImage').attr('src');
    $('#audioModalImage').attr('src',thumbnail);
    var html = '<audio class="audio" src="'+src+'" controls><p>Fallback content goes here.</p></audio>'
    $('#audioDiv').html(html);
 }); 

 document.addEventListener('contextmenu', event => event.preventDefault());
 $(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});