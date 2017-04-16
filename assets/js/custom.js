'use strict';

/**
 * Document ready functions
 */
(function ($) {
    $(document).ready(function () {

        //select lang site
        var lang = $('.header__lang');

        lang.on('click', function() {
            $(this).toggleClass('header__lang--open');
        });

        //slider reviews
        var reviews = $('.slider');

        if(reviews.length) {
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

      //insert number tel contacts header

    });
})(jQuery);

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
      categoriesInner.css('top', - categoriesItemHeight);

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

$(window).on('scroll', function() {
  var scrollCoef = 0.0010;
  imgOpacity.css({
    opacity: .9 - $(window).scrollTop() * scrollCoef
  })
});