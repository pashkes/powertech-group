

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
                speed: 800
            });
        }


      //Toggle mobile menu
      var burger = $('.toggle-menu');
      var header = $('.header__top');

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