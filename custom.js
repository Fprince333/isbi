function isScrolledIntoView(elem) {
	var docViewTop = $j(window).scrollTop();
	var docViewBottom = docViewTop + $j(window).height();

	var elemTop = $j(elem).offset().top;
	var elemBottom = elemTop + $j(elem).height();

	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

$j(document).ready(function() {
	$j('.aum .counter').prepend('<span style="float:left">$</span>');
	$j('.aum .counter').append('<span style="float:left"> Billion</span>');
	$j('.returns .counter').append('<span style="float:left">%</span>');
	$j('.passive .counter').append('%');
	$j('.side_menu_button_wrapper').prepend('<p class="search-text">SEARCH</p>');

	$j('.search-text').on('click', function() {
		$j('.form_holder_outer').css('height', $j('.header_inner').height() + 'px');
		$j("form[role='search']").animate({ opacity: 'show' });
	});

	$j('.qode_search_close').on('click', function() {
		$j("form[role='search']").animate({ opacity: 'hide' });
	});

	$j('#portfolio').on('mouseleave', function() {
		$j('#secondary-chart-container').hide();
		$j('#portfolio-text').show();
	});
});
