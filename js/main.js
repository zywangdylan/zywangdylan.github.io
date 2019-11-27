const mainnav = document.getElementById("mobile-nav");

$('svg').click(function () {
  if (mainnav.style.display != "block") {
    // mainnav.style.display = "block";
    $('#mobile-nav').removeClass('display-none');
    $('#mobile-nav').toggleClass('display-block');
    $('#mobile-nav').slideToggle(300);
    // mainnav.style.display = "block";
  }else{
    $('#mobile-nav').removeClass('display-block');
    $('#mobile-nav').toggleClass('display-none');
    $('#mobile-nav').slideUp(300);
  }
});


