$(document).ready(function () {
    $('.gallery').slick({
        slidesToShow: 1, 
        slidesToScroll: 1, 
        arrows: true, 
        dots: true, 
        adaptiveHeight: true, 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1 
                }
            }
        ]
    });
});

