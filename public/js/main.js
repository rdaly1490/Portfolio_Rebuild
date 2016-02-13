var $ = require('jquery');
var slick = require('slick-carousel');

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
