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

	if ($j(".headlines").length) {
		var i = 0; 
		function myLoop () {
			 setTimeout(function () {
				$j($j(".headlines ul li")[i]).fadeIn("slow");
					i++;
					if (i < $j(".headlines ul li").length) {
						 myLoop();
					}
			 }, 400)
		}
		myLoop(); 
	}
});
