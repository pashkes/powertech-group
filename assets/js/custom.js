'use strict';

/**
 * Document ready functions
 */
(function ($) {
  $(document).ready(function () {

    //Initialization custom calendar flatpickr
    if ($('.technique__field--date').length) {
      Flatpickr.localize(Flatpickr.l10ns.ru);
      $(".technique__field--date").flatpickr({
        disableMobile: true,
        dateFormat: "d.m.Y"
      });
    }
    //END

    //Slider product item
    if ($('.technique').length) {
      $('.slide-technical').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.technique__preview'
      });
      $('.technique__preview').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: 0,
        asNavFor: '.slide-technical',
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button class="technique__arrow technique__arrow--back">назад</button>',
        nextArrow: '<button class="technique__arrow technique__arrow--next">вперед</button>',
        arrows: true
      });
    }
    //END

    //select lang site
    var lang = $('.header__lang');

    lang.on('click', function () {
      $(this).toggleClass('header__lang--open');
    });
    //END

    //slider reviews
    var reviews = $('.slider');

    if (reviews.length) {
      reviews.slick({
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
    //END

    //Toggle mobile menu
    var burger = $('.toggle-menu');
    var header = $('.header');

    burger.on('click', function () {
      $(this).toggleClass('active');
      header.toggleClass('js-menu-show');
    });

    $(window).on('resize', function () {
      if ($(window).width() > 1024) {
        header.removeClass('js-menu-show');
      }
    });
    //END
    $(function () {
      categoriesInner.removeClass('static');
      mainImg.removeClass('static');
    });
    // FIXED HEADER VIDEO BG
    topImg();

  });
})(jQuery);

//FUNCTION FIXED HEADER VIDEO BG

var categories = $('.categories');
var categoriesInner = $('.categories__inner');
var categoriesItem = $('.categories__item');
var mainImg = $('.header__main');
var headerTitle = $('.header__title');
var TABLET_WIDTH = 768;

function topImg() {
  if (categories.length) {
    var windowWidth = $(window).width();
    var categoriesHeight = categoriesInner.innerHeight();
    var mainImgHeight = mainImg.innerHeight();
    var categoriesItemHeight = categoriesItem.innerHeight() / 2.35;



    categories.css('margin-top', mainImgHeight);
    categories.css('height', categoriesHeight - categoriesItemHeight);
    categoriesInner.css('top', -categoriesItemHeight);
    var catHeight = categories.css('margin-top');
    console.log(catHeight);

    headerTitle.css('height', mainImgHeight - categoriesItemHeight);

    if (windowWidth <= TABLET_WIDTH) {
      categories.css('height', categoriesHeight);
    }
  }
}
$(window).on('scroll resize', function () {
  topImg();
});
//END//

//opacity on scroll
var imgOpacity = $('.header__bg');

$(window).on('scroll', function () {
  var scrollCoef = 0.0005;
  imgOpacity.css({
    opacity: .4 - $(window).scrollTop() * scrollCoef
  })
});
//END

//insert contacts number
$('.menu').find('.header__contacts a').removeAttr('href').text('');

var telText1 = $('.header__contacts--desktop').find('.header__tel-icon').text();
var telText2 = $('.header__contacts--desktop').find('.header__tel--first').text();
var telText3 = $('.header__contacts--desktop').find('.header__tel--second').text();
var tel1Href = $('.header__contacts--desktop').find('.header__tel-icon').attr('href');
var tel2Href = $('.header__contacts--desktop').find('.header__tel--first').attr('href');
var tel3Href = $('.header__contacts--desktop').find('.header__tel--second').attr('href');

$('.menu').find('.header__tel-icon').text(telText1).attr('href', tel1Href);
$('.menu').find('.header__tel--first').text(telText2).attr('href', tel2Href);
$('.menu').find('.header__tel--second').text(telText3).attr('href', tel3Href);
//END

//ANIMATION ON SCROLL
document.addEventListener('DOMContentLoaded', function () {
  var trigger = new ScrollTrigger({
    toggle: {
      visible: 'show-element'
    },
    offset: {
      x: 0,
      y: 150
    },
    once: true
  }, document.body, window);
});


//END