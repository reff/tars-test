$(document).ready(
    function () {
        $('.owl-carousel').owlCarousel(
            {
                items: 1,
                loop: true,
                nav: true,
                navText: ['&lt;', '&gt;'],
                autoplay: true,
                navContainer: '.slider__controls'
            }
        );

        /*
        $('.slider').each( function () {
            let owl = $(this).find('.owl-carousel');
            $(this).find('.slider__prev').on('click', function () {
                owl.trigger('prev.owl.carousel');
                return false;
            });
        } );
        */

    }
);
