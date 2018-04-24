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

$(function() {

	var mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			991: {
				slidesPerView: 2
			},
			767: {
				slidesPerView: 1
			}
		}
   });
});


//Smooth search input

document.getElementById('search__button').onclick = function(){
    document.getElementsByClassName('search_input')[0].classList.toggle("show__input");
};



//Remove focus from inputs etc.

$("button").mouseup(function(){
    $(this).blur();
})