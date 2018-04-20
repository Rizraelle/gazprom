//Trying to add slider for header

function newClass(){
    var block = document.querySelector(".menu__line--list");
    if (window.matchMedia('(max-width: 1200px)').matches) {
        block.classList.add('menu__slider');
    } else {
        block.classList.remove('slider');
    }
};

newClass();
$(window).resize(newClass);


//Main slider

// $(document).ready(function(){
//     $('.main__slick').slick({
//         slidesToShow: 3,
//         infinite: false,
//         slidesToScroll: 1,
//         dots:false,
//         draggable:false,
//         adaptiveHeight:true,
//         pauseOnHover:false,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     arrows: false,
//                     dots: true,
//                     appendDots:$('#dots'),
//                     draggable:true
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: false,
//                     dots: true,
//                     draggable:true
//                 }
//             }
//         ]
//     });
//     $('.menu__slider').slick({
//         slidesToShow: 8,
//         infinite: false,
//         dots:false,
//         adaptiveHeight:true,
//         pauseOnHover:false,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 6,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// });


//Smooth search input

document.getElementById('search__button').onclick = function(){
    document.getElementsByClassName('search_input')[0].classList.toggle("show__input");
};



//Remove focus from inputs etc.

$("button").mouseup(function(){
    $(this).blur();
})