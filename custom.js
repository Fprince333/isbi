function isScrolledIntoView(elem) {
	var docViewTop = $j(window).scrollTop();
	var docViewBottom = docViewTop + $j(window).height();

	var elemTop = $j(elem).offset().top;
	var elemBottom = elemTop + $j(elem).height();

	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

$j(document).ready(function() {
	$j('.total-members .counter').append('K');
	$j('.aum .counter').prepend('<span style="float:left">$</span>');
	$j('.aum .counter').append('<span style="float:left">B</span>');
	$j('.returns .counter').prepend('<span style="float:left">$</span>');
	$j('.returns .counter').append('<span style="float:left">B</span>');
	$j('.passive .counter').append('%');
	$j('.side_menu_button_wrapper').prepend('<p class="search-text">SEARCH</p>');

	$j('.about-link').on('click', function() {
		$j('html, body').animate(
			{
				scrollTop: $j('#about').offset().top
			},
			800
		);
	});

	$j('.search-text').on('click', function() {
		$j('.form_holder_outer').css('height', $j('.header_inner').height() + 'px');
		$j("form[role='search']").animate({ opacity: 'show' });
	});

	$j('.qode_search_close').on('click', function() {
		$j("form[role='search']").animate({ opacity: 'hide' });
	});

	$j(window).scroll(function() {
		if (window.location.pathname.length === 1) {
			$j.each($j('#menu-header li a'), function(i, v) {
				$j(v).removeClass('active');
			});
			if (isScrolledIntoView('.homepage-top-row') || isScrolledIntoView('.counter-row')) {
				$j('#menu-header li.home').addClass('active');
			}
			if (isScrolledIntoView('#contact-us')) {
				$j('#menu-header li.contact').addClass('active');
			} else {
				$j('#menu-header li.contact').removeClass('active');
				$j('#menu-header li.contact').removeClass('current_page_item');
			}
		}
	});

	$j('#portfolio').on('mouseleave', function() {
		$j('#secondary-chart-container').hide();
		$j('#portfolio-text').show();
	});

	if (window.location.pathname.length === 1) {
		$j.each($j('#menu-header li a'), function(i, v) {
			$j(v).removeClass('active');
		});
	}
});
