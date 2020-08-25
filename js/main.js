$(function () {
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/slier-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/slider-right.svg" alt=""></button>',
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
  });

  $(".slider__inner").slick({
    arrows: false,
    autoplay: true,
    infinite: true,
  });

  $(".about__slider-kuchnia, .about__slider-sypalnia2").slick({
    arrows: false,
    autoplay: true,
    infinite: true,
  });

  $(".about__slider-sypalnia, .about__slider-lazienka").slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
  });
});
