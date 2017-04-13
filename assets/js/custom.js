

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

    });
})(jQuery);