const $ = require('jquery');
const slick = require('slick-carousel');
require('fullpage.js');

// might want a variable for autoScrolling: var and change it depending on viewport width
// This way it disables the scroll behavior if it's too janky for mobile devices
// or use jQuery.browser XXX

$(document).ready(() => {

	$('#fullpage').fullpage({
		paddingTop: '0px',
        paddingBottom: '0px',
		slideSelector: '.carousel-slide',
		scrollingSpeed: 1000,
		css3: true,
		easingcss3: 'ease-out',
		anchors: ['home', 'about-me', 'past-work', 'contact-me'],
		animateAnchor: true,
		// autoScrolling: false, // leave for debugging purposes
		afterRender: () => {
			$('.work-carousel').slick({
				dots: true,
				infinite: true,
				speed: 1000,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
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
						breakpoint: 545,
						settings: {
							arrows: false,
				
					  	}
					}
				]
			});
			// brings user to top page after refresh
			window.history.replaceState(null, null, '#home');
		}
	});

	// const animateScroll = (elementId, speed=1000) => {
	// 	$('html, body').animate({
 //        	scrollTop: $(`#${elementId}`).offset().top
 //    	}, speed);
	// }

	// // HomePage Buttons
	// const addEventListeners = (element, eventType, cb) => {
	// 	const scrollTo = element === '.scroll' ? 'about' : element.substr(1);
	// 	$(`${element}`).on(eventType, () => {
	// 		cb(`${scrollTo}-page`);
	// 	});
	// }

	// const btnArray = ['#about', '#work', '#contact', '.scroll'];

	// for (const el of btnArray) {
	// 	addEventListeners(el, 'click', animateScroll);
	// }

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

});
