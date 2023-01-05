$(document).ready(function () {
  $('.slider').slider();

  $('.modal').modal();

  $('.button-collapse').sideNav();

  $('.carousel.carousel-slider').carousel({ fullWidth: true, autoplay: true });
  autoplay();
  function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 4500);
  }

  $('.collapsible').collapsible();

  // $('select').material_select();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false, // Close upon selecting a date,
    container: undefined, // ex. 'body' will append picker to body
  });

  $('ul.tabs').tabs();

  $('.btnNext').on('click', function (e) {
    $('.slider').slider('next');
  });

  $('.homeCarousel').owlCarousel({
    loop: false,
    margin: 0,
    responsiveClass: true,
    items: 1,
    dots: true,
    autoplay: true,
  });

  $('.livestreamCarousel').owlCarousel({
    stagePadding: 40,
    loop: false,
    margin: 15,
    responsiveClass: true,
    items: 2,
    dots: false,
  });

  $('.receiveCarousel').owlCarousel({
    loop: true,
    margin: 15,
    responsiveClass: true,
    items: 1,
    dots: false,
    nav: true,
    autoplay: true,
  });

  $('.addFavorite, .addClasses').click(function () {
    $(this).toggleClass('active');
  });

  $('.hariomMessage, .paymentCardForm, .paypalForm').hide();

  //    $(".viewData").slideUp();

  $(document).on('click', '.viewLink', function () {
    $(this).prev('.viewData').slideToggle(500);
    $(this).toggleClass('active');
    $(this).parents('.card-content').find('.extract').toggleClass('active');
    // var text = $(this).text();
    // if (text == 'View More') {
    //   $(this).text('View Less');
    // } else {
    //   $(this).text('View More');
    // }
  });
});
function goBack() {
  window.history.back();
}
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 1) {
//     $('.pageHeader, .secInner').addClass('sticky');
//   } else {
//     $('.pageHeader, .secInner').removeClass('sticky');
//   }
// });

$('#monthly').click(function () {
  if ($(this).is(':checked')) {
    $('#monthlySub').modal('open');
    $(this).parent('.planRadio').toggleClass('active');
  }
});

$('#yearly').click(function () {
  if ($(this).is(':checked')) {
    $('#yearlySub').modal('open');
  }
});

$('#paymentCard').click(function () {
  if ($(this).is(':checked')) {
    $('.paymentCardForm').show();
    $('.paypalForm').hide();
  }
});

$('#paypal').click(function () {
  if ($(this).is(':checked')) {
    $('.paypalForm').show();
    $('.paymentCardForm').hide();
  }
});

$('#hariomCheck').click(function () {
  if ($(this).is(':checked')) {
    $('.hariomMessage').show();
  } else if ($(this).is(':not(:checked)')) {
    $('.hariomMessage').hide();
  }
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#imagePreview').css(
        'background-image',
        'url(' + e.target.result + ')'
      );
      $('#imagePreview').hide();
      $('#imagePreview').fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$('#imageUpload').change(function () {
  readURL(this);
});

var vChipsList = [];

// INITIALIZATION OF AUTOCOMPLETE LIST
var vTagList = {
  Abundance: null,
  Activating: null,
  avion: null,
  maman: null,
  paPa: null,
  aVec: null,
  instinct: null,
  Surf: null,
  blurp: null,
  doublon: null,
};

function fDisplayChips() {
  // FILLS THE CHIPS ZONE FROM THE LIST
  $('#lg-Chips').material_chip({
    data: vChipsList,
  });
}

// ADDING A NEW CHIP
function fChipAdd(lChipName) {
  lChipName = lChipName.toLowerCase();
  // test1 : minimum word size
  if (!(lChipName.length > 2)) {
    return 0;
  }
  // test2 :  no duplicates
  for (i = 0; i < vChipsList.length; i++) {
    if (lChipName == vChipsList[i].tag) {
      return 0;
    }
  }
  // tests Okay => add the chip and refresh the view
  vChipsList.push({ tag: lChipName });
  fDisplayChips();
  return 1;
}

$(function () {
  // delete chip command
  $('#lg-Chips').on('chip.delete', function (e, chip) {
    vChipsList = $('#lg-Chips').material_chip('data');
  });

  $('#lg-Chips').focusin(function () {
    $('#lg-input').focus();
  });

  fDisplayChips();

  // NEW CHIP COMMAND
  $('#cmd-ChipsAjout').click(function () {
    fChipAdd($('#lg-input').val());
    $('#lg-input').val('');
  });

  $('.autocomplete-content li span').click(function () {
    alert('test');
    fChipAdd($('#lg-input').val());
    $('#lg-input').val('');
  });

  // $('#lg-input').autocomplete({
  //   data: vTagList,
  // });
});

$('.animated-progress span').each(function () {
  $(this).animate(
    {
      width: $(this).attr('data-progress') + '%',
    },
    1000
  );
  $(this).text($(this).attr('data-progress') + '%');
});
$(document).on('click', '.nextChapterBtn', function () {
  //alert('Hello');
  $(this)
    .parents('.accordion__item')
    .find('.accordion__panel')
    .attr('hidden', true);
  $(this)
    .parents('.accordion__item')
    .find('.accordion__heading')
    .find('.accordion__button')
    .attr('aria-expanded', false);
  $(this)
    .parents('.accordion__item')
    .next()
    .find('.accordion__heading')
    .find('.accordion__button')
    .attr('aria-expanded', true);
  $(this)
    .parents('.accordion__item')
    .next()
    .find('.accordion__panel')
    .removeAttr('hidden');
});

// $(document).on('click', '.accordion__heading', function () {
//   //alert('Hello');
//   $('.accordion__item').find('.accordion__panel').attr('hidden', true);
//   $('.accordion__item')
//     .find('.accordion__heading')
//     .find('.accordion__button')
//     .attr('aria-expanded', false);
// });
$(document).on('click', '#courseVideo', function () {
  var src = $(this).attr('data-src');
  var vTitle = $(this).attr('data-title');
  var vDesc = $(this).attr('data-description');

  $('#courseVidUrl').attr('src', src);
  $('#courseVidTitle').html(vTitle);
  $('#courseVidDesc').html(vDesc);
});

$(document).on('click', '#viewVideo', function () {
  var src = $(this).attr('data-src');
  $('#videoIframe').attr('src', src);
});
$(document).on('click', '.initModal', function () {
  $('.modal').modal();
  $('.collapsible').collapsible();
});

$(document).on('click', '.initCollapse', function () {
  $('.collapsible').collapsible();
  $('.modal').modal();
});
$(document).on('click', '.modal-close', function () {
  var src = $(this).parents('.modal-content').find('iframe').attr('src');
  $(this).parents('.modal-content').find('iframe').attr('src', '');
  $(this).parents('.modal-content').find('iframe').attr('src', src);
  //$(".videoPlayer").find("video").jwplayer().stop();
});
$(document).on('click', '.card-header', function () {
  if ($(this).hasClass('active')) {
    $('.card-header').removeClass('active');
  } else {
    $('.card-header').removeClass('active');
    $(this).addClass('active');
  }
});

// $('.splashCarousel').on('click', '.item', function () {
//   alert('click');
// });

$(document).on('click', '.splashCarousel .item a.btnNext', function () {
  $('.splashCarousel').trigger('next.owl.carousel');
});
