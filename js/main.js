
// const mq = window.matchMedia("(max-width: 860px)");

// if (mq.matches){
//   console.log("hhhh");
//   const mainnav = document.getElementById("mobile-nav");
//   const menuicon = document.querySelector("svg");

//   menuicon.addEventListener("click", function(){
//     $("mobile-nav").toggleClass('display-block');
//     $("mobile-nav").slideToggle(300);
//     if(mainnav.style.display != "block"){
//       // mainnav.style.display = "block";
//       // mainnav.classList.toggle("display-block");
//       $("mobile-nav").toggleClass('display-block');
//       $("mobile-nav").slideToggle(300);
//     }else{
//       mainnav.style.display = "none";
//     }

//     $('#mobile-nav').focusout(function () {
//         $(this).removeClass('display-block');
//         $(this).find('#mobile-nav').slideUp(300);
//     });
//   })
// }
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


