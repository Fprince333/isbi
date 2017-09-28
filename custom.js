$j(document).ready(function() {
  $j('.qode-cta-section-title').on('click', function() {
    $j('html, body').animate(
      {
        scrollTop: $j("#about").offset().top
      },
      800
    );
  });
})
