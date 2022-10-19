"use strict";
const menuIcon = document.querySelector(".menu__icon");
const menuPopup = document.querySelector(".menu__popup");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menuPopup.classList.toggle("active");
});

$(document).ready(function () {
  $(".quote__slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: "linear",
    infinite: true,
    autoplay: true,
  });
});
