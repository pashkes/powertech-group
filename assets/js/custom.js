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

    //Slider product item
    if($('.technique').length) {
      $('.technique__single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.technique__preview'
      });
      $('.technique__preview').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: 0,
        asNavFor: '.technique__single',
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<button class="technique__arrow technique__arrow--back">назад</button>',
        nextArrow: '<button class="technique__arrow technique__arrow--next">вперед</button>',
        arrows: true
      });
    }

    //select lang site
    var lang = $('.header__lang');

    lang.on('click', function () {
      $(this).toggleClass('header__lang--open');
    });

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

  });
})(jQuery);

$(function () {
  categoriesInner.removeClass('static');
  mainImg.removeClass('static');
});
//sticky header img
var categories = $('.categories');
var categoriesInner = $('.categories__inner');
var categoriesItem = $('.categories__item');
var mainImg = $('.header__main');
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

    if (windowWidth <= TABLET_WIDTH) {
      categories.css('height', categoriesHeight);
    }
  }
}


$(window).on('load scroll resize ready ontouchstart ontouchmove touchmove', function () {
  topImg();
});

//opacity on scroll
var imgOpacity = $('.header__bg');

$(window).on('scroll', function () {
  var scrollCoef = 0.0010;
  imgOpacity.css({
    opacity: .9 - $(window).scrollTop() * scrollCoef
  })
});

$.fn.inView = function () {
  //Window Object
  var win = $(window);
  //Object to Check
  var obj = $(this);
  //the top Scroll Position in the page
  var scrollPosition = win.scrollTop();
  //the end of the visible area in the page, starting from the scroll position
  var visibleArea = win.scrollTop() + win.height();
  //the end of the object to check
  var objEndPos = (obj.offset().top + obj.outerHeight());
  return (visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
};
var isMobile = navigator.userAgent.match(/Mobile/i) == "Mobile";

//Start animation in viewport
(function ($) {

  $(window).on('scroll load resize ready', function () {
    var animateElements = [
          $('h1'),
          $('.intro__subtitle'),
          $('.about__text'),
          $('.about__more'),
          $('.about__photo'),
          $('.features__rhombus')
        ],
        visibleClass = "show-element";

    $.each(animateElements, function (key, selector) {
      if (selector.length && !selector.hasClass(visibleClass)) {
        if (selector.inView() || isMobile) {
          selector.addClass(visibleClass);
        }
      }
    });

  });
})(jQuery);