(function ($) {
    'use strict';

    /*------------- preloader js --------------*/
	function loader() {
		$(window).on('load', function () {
			
		});
	}
	loader();

	$(window).on("load", function () {
		background();
	});

    // background image js
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	// bannerSlide 
	var esolution = $('.esolution__carousel');
	esolution.owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		smartSpeed: 800,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		loop: true,
		slideSpeed: 3000,
		nav: true,
		dots: false,
	});
	// bannerSlide 
	var serviceslide = $('.service-slide');
	serviceslide.owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		smartSpeed: 800,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		loop: true,
		slideSpeed: 3000,
		navText: ["Prev", "Next"],
		nav: true,
		dots: false,
	});
	var quickslide = $('.quick-view-img');
	quickslide.owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		smartSpeed: 800,
		loop: true,
		slideSpeed: 2000,
		navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
		nav: true,
		dots: false,
	});

	// partner
	var partner = $('.partner');
	partner.owlCarousel({
		items: 3,
		loop: true,
		margin: 0,
		loop: true,
		slideSpeed: 3000,
		nav: false,
		dots: false,
	});
	// partner
	var testimonial = $('.testimonial');
	testimonial.owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		loop: true,
		slideSpeed: 3000,
		nav: false,
		dots: false,
	});

	// Activate lightcase
	$('a[data-rel^=lightcase]').lightcase();

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	jQuery('.dot-menu-nav ul').each(function (i, liList) {
		var $liList = $(liList);
		$liList.on('click', 'li a', function (event) {
			var $anchor = $(this);
			jQuery('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 0
			}, 200, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	// menu spy
	jQuery('section')
		.scrollWatchMapTo('.dot-menu-nav ul li', null, {
			resolutionMode: 'focus-line',
			viewMarginTop: 0
		});

	// debug focus line checkbox
	jQuery('#toggleDebugFocusLine').change(function () {
		var watcher = $(window).data('shira.scrollwatch');
		watcher.options.debugFocusLine = this.checked;
		watcher.pulse();
	});

	// offcanvas menu
	$(function() {
		$('.btn-link').addClass('collapsed');
	});

})(jQuery);

