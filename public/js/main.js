const $ = require('jquery');
const slick = require('slick-carousel');
require('fullpage.js');

$(document).ready(() => {

	$('#fullpage').fullpage({
		paddingTop: '0px',
        paddingBottom: '0px',
		slideSelector: '.carousel-slide',
		scrollingSpeed: 1000,
		css3: true,
		easingcss3: 'ease-out',
		anchors: ['', 'about-me', 'past-work', 'contact-me'],
		animateAnchor: true,
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
							fade: false,
							speed: 700
					  	}
					}
				]
			});
			// brings user to top page after refresh
			window.history.replaceState(null, null, '#');

			/*
			VH units have a known bug in ios safari browsers where the url bar will
			take up a portion of the 100vh on a page.  Below we check if the user
			is using an ios browser, and then if so we manipulate the background 
			total size with jQuery.
			*/
			const iOSCheck = () => {
				var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
				return iOS;
			}
			if (iOSCheck()) {
				const vhPages = $('#main-page, #about-page, #work-page, contact-page');
				$('#logo').css('marginBottom', '4.5vh');
				$('.scroll-container').css('marginTop', '-5vh');
				$('.slick-active').css('marginBottom', '10vh');
				$(window).resize('resizeBackground');
				function resizeBackground() {
				    vhPages.height($(window).height() + 60);
				}
				resizeBackground();
			}
		}
	});

	// No need for overkill here, only have 2 cases for listeners that aren't provided
	// by slick carousel
	const addCarouselListeners = (elementId) => {
		const imgString = elementId.substring(0,4);
		$(`#${elementId}`).on('mouseenter', (e) => {
			e.target.src = `/images/${imgString}-hover.png`;
		});
		$(`#${elementId}`).on('mouseleave', (e) => {
			e.target.src = `/images/${imgString}.png`;
		});
	}

	addCarouselListeners('prev-arrow');
	addCarouselListeners('next-arrow');

});
