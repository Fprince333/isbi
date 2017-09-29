$j(document).ready(function() {
  
  $j('.qode-cta-section-title').on('click', function() {
    $j('html, body').animate(
      {
        scrollTop: $j("#about").offset().top
      },
      800
    );
  });

  $j(".total-members .counter").append("K")
  $j(".aum .counter").append("B")
  $j(".returns .counter").append("B")
  $j(".passive .counter").append("%")
})
