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
    }
);
