(function($) {

	'use strict';
	
	// Sticky, Go To Top JS
	$(window).on('scroll', function() {
		// Header Sticky JS
		if ($(this).scrollTop() >150){  
			$('.navbar').addClass("is-sticky");
			$('.header_section').addClass("is-sticky");
		}
		else{
			$('.navbar').removeClass("is-sticky");
			$('.header_section').removeClass("is-sticky");
		};

		// Go To Top JS
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});
	
	// Sticky, Go To Top JS
	$(window).on('scroll', function() {
		// Header Sticky JS
		if ($(this).scrollTop() >60){  
			$('.sticky_scroll_nav').addClass("is-sticky"); 
		}
		else{
			$('.sticky_scroll_nav').removeClass("is-sticky"); 
		}; 
	});
	
	// Click Event JS
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" }, 50);
	});

	// Preloader
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	}) 

	// Partner Slide JS
	$('.partner-slide').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 2,
			},
			414: {
				items: 2,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
			1200: {
				items: 4,
			},
		},
	});

	// Trending Slide JS
	$('.trending-slide').owlCarousel({
		loop: true,
		margin: 20,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		stagePadding: 50,
		responsive: {
			0: {
				items: 1,
			},
			414: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});

	// Take It Slide JS
	$('.take-it-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
	});
	
	// Gallery Slider
	$('.gallery-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
		if (!e.namespace)  {
		return;
		}
		var carousel = e.relatedTarget;
		$('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
	}).owlCarousel({
		items: 1,
		loop:true,
		margin:0,
		dots:false,
		nav:true,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>",
		],
	});

	// mobile slider 
	$('.gallery_slider_mobile').owlCarousel({
		stagePadding: 20,
		loop:true,
		margin:10,
		nav:false,
		dots:true,
		items:1,
	})
	
	// WOW Animation
	if ($('.wow').length) {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated', 
			offset: 0, 
			mobile: false, 
			live: true, 
		});
		wow.init();
	}

	// pogress 
	$('.circlechart').circlechart();

	 // vedeo popup
	
	
})(jQuery);