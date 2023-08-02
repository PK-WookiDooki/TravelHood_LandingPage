$(document).ready(function () {
    $(".slick-dots").addClass("clearfix");
    $(".slider").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
