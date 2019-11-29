//dropdown js
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

//change color for current page link
const as = document.query

$(document ).ready(function() {
  $("a").each(function() {
    if (this.href == window.location.href){
      console.log("find it");
      $(this).addClass("current-link");
    }
  });
});

