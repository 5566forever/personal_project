/*
$("button.btn_hamburger").on("click", function(){
  $("aside.aside").toggleClass("-on");
});
*/

/* ========== 漢堡選單切換 ========== */
$("button.hamburger.hamburger--elastic").on("click", function(){
    $("aside.aside").toggleClass("-open");
    $("button.hamburger.hamburger--elastic").toggleClass("is-active");
});


/* ========== 產品slide ========== */

$(document).ready(function(){
  $('.flex_4').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


/* ========== 回到最上方 ========== */
$(function(){
  $("#back_to_the_top").on("click", function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });  
});