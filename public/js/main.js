const $ = require('jquery');
const slick = require('slick-carousel');
require('jquery-scrollstop');

$(document).ready(function(){
	$('.work-carousel').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: "<img id='prev-arrow' class='a-left control-c prev slick-prev' src='/images/prev.png'>",
		nextArrow: "<img id='next-arrow' class='a-right control-c next slick-next' src='/images/next.png'>",
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
		
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
		
			  	}
			}
		]
	});

	const animateScroll = (elementId, speed=1000) => {
		$('html, body').animate({
        	scrollTop: $(`#${elementId}`).offset().top
    	}, speed);
	}

	// HomePage Buttons

	$('#about').on('click', () => {
		animateScroll('about-page');
	});

	$('#work').on('click', () => {
		animateScroll('work-page');
	});

	$('#contact').on('click', () => {
		animateScroll('contact-page');
	});

	$('.scroll').on('click', () => {
		animateScroll('about-page');
	});

	// Carousel Buttons

	$('#prev-arrow').on('mouseenter', (e) => {
		e.target.src = '/images/prev-hover.png';
	});
	$('#prev-arrow').on('mouseleave', (e) => {
		e.target.src = '/images/prev.png';
	});
	$('#next-arrow').on('mouseenter', (e) => {
		e.target.src = '/images/next-hover.png';
	});
	$('#next-arrow').on('mouseleave', (e) => {
		e.target.src = '/images/next.png';
	});

	// sets latency in ms for when scrollStop event is fired after user stops scolling
	$.event.special.scrollstop.latency = 300;

	// On Scroll next page

	const pagesArray = ['main-page','about-page','work-page','contact-page'];

	// set wheelDelta value in normal jquery scroll event
	// let wheelDelta;
	// let currentPage;
	// $(window).on('mousewheel DOMMouseScroll', (e) => {
	// 	wheelDelta = e.originalEvent.wheelDelta;
	// 	// currentPage = checkCurrentPage();
	// });

	// // use scrollstop plugin to capture wheelDelta on scroll start and change pages accordingly
	// $(window).on('scrollstart', () => {
	// 	const currentPage = checkCurrentPage();
	// 	console.log(currentPage);
	// 	if (currentPage) {
	// 		const currentPageIndex = pagesArray.indexOf(currentPage);
	// 		if (wheelDelta > 0) {
	// 			animateScroll(pagesArray[currentPageIndex - 1]);
	// 		} else {
	// 			animateScroll(pagesArray[currentPageIndex + 1]);
	// 		}
	// 	}
	// });

	function isElementInViewport (el) {

	    if (typeof jQuery === "function" && el instanceof jQuery) {
	        el = el[0];
	    }

	    var rect = el.getBoundingClientRect();

	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	    );
	}

	function checkCurrentPage() {
		let visiblePage;
		if (isElementInViewport(document.getElementById('logo'))) {
			visiblePage = 'main-page';
		} else if (isElementInViewport(document.getElementById('my-pic'))) {
			visiblePage = 'about-page';
		} else if (isElementInViewport(document.getElementById('test'))) {
			visiblePage = 'work-page';
		} else if (isElementInViewport(document.getElementById('contact-me'))) {
			visiblePage = 'contact-page';
		} else {
			visiblePage = null;
		}

		return visiblePage;
	}

	// function onVisibilityChange(el, callback) {
	//     var old_visible;
	//     return function () {
	//         var visible = isElementInViewport(el);
	//         if (visible != old_visible) {
	//             old_visible = visible;
	//             if (typeof callback == 'function') {
	//                 callback();
	//             }
	//         }
	//     }
	// }

	// var handler = onVisibilityChange(el, function() {
	    
	// });

	// $(window).on('DOMContentLoaded load resize scroll', handler);

});
