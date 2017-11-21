function openPDF(url) {
  var w = window.open(url, "_blank");
  w.focus();
}

// Download a file form a url.
function saveFile(url) {
	// Get file name from url.
	var filename = url.substring(url.lastIndexOf('/') + 1).split('?')[0];
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'blob';
	xhr.onload = function () {
		var a = document.createElement('a');
		a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
		a.download = filename; // Set the file name.
		a.style.display = 'none';
		document.body.appendChild(a);
		a.click();
	};
	xhr.open('GET', url);
	xhr.send();
}

function adjustPdfCss() {
	var poll = setInterval(function () {
		updateCss();
	}, 500);

	function updateCss() {
		if (
			$j('.caption')
			.parent()
			.height() > 0
		) {
			$j('.download-pdf').css(
				'height',
				$j('.caption')
				.parent()
				.height()
			);
			clearInterval(poll)
		}
	}
}

function adjustPopUpCss() {
	var poll = setInterval(function () {
		addCss();
	}, 500);

	function addCss() {
		if ($j('.active').length) {
			$j('.download-pdf').css(
				'height',
				$j($j('.active .download-pdf').closest('.image_with_text')[0]).height() + 'px'
			);
			$j('.download-pdf').css('width', '100%');
			$j('.download-pdf').css('position', 'absolute');
			$j('.download-pdf').css('top', '0');
			$j('.download-pdf').css('cursor', 'pointer');
			$j('.active h3').each(function (i) {
				if (
					$j(this)
					.html()
					.indexOf('<br>') === -1
				) {
					$j(this).html(
						$j(this)
						.text()
						.split(' ')
						.join('<br>')
					);
				}
			});
			clearInterval(poll);
		}
	}
}

$j(document).ready(function () {
	const isMeetingsPage = window.location.href.indexOf('meetings') > -1;
	const isReportsAndDisclosuresPage = window.location.href.indexOf('reports-and-disclosures') > -1;
	$j('.aum .counter').prepend('<span style="float:left">$</span>');
	$j('.aum .counter').append('<span style="float:left; padding-left: 5px;"> Billion</span>');
	$j('.returns .counter').append('<span style="float:left">%</span>');
	$j('.passive .counter').append('%');
	$j('.side_menu_button_wrapper').prepend('<p class="search-text">SEARCH</p>');
	$j('#menu-footer').prepend(
		'<li style="float: left; color: white;">180 North LaSalle Street, Suite 2015 || Chicago, IL  60601 || <a style="font-size: inherit" href="tel:312-793-5718">312-793-5718</a></li>'
	);

	$j('.search-text').on('click', function () {
		$j('.form_holder_outer').css('height', $j('.header_inner').height() + 'px');
		$j("form[role='search']").animate({
			opacity: 'show'
		});
	});

	$j('.qode_search_close').on('click', function () {
		$j("form[role='search']").animate({
			opacity: 'hide'
		});
	});

	$j('#portfolio').on('mouseleave', function () {
		$j('#secondary-chart-container').hide();
		$j('#portfolio-text').show();
	});

	if (isMeetingsPage) {
		$j('.popup-selector').each(function (i) {
			$j(this)
				.closest('.text')
				.css('cursor', 'pointer')
				.addClass($j(this).data().id);
		});
		setInterval(adjustPopUpCss, 500);
		$j('.download-pdf').click(function (e) {
			e.preventDefault();
			openPDF($j(this).data().file);
		});
	}

	if (isReportsAndDisclosuresPage) {
		setInterval(adjustPdfCss, 500);
		setInterval(adjustPopUpCss, 500);
		$j('.download-pdf').css('cursor', 'pointer');
		$j('.download-pdf').click(function (e) {
			e.preventDefault();
			openPDF($j(this).data().file);
		});
		$j('.popup-selector').each(function (i) {
			$j(this)
				.closest('.text')
				.css('cursor', 'pointer')
				.addClass($j(this).data().id);
		});
		$j('.caption').each(function (i) {
			$j(this).html(
				$j(this)
				.text()
				.split(' ')
				.join('<br>')
			);
		});
	}
});