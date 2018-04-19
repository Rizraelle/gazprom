//Main slider

$(document).ready(function(){
    $('.main__slick').slick({
        slidesToShow: 3,
        infinite: false,
        slidesToScroll: 1,
        dots:false,
        adaptiveHeight:true,
        pauseOnHover:false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});