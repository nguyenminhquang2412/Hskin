$(document).ready(function () {
  $('.image-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
  $('.slider-table').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autospeed: 2000,
  });
  
  $('.sliderkhuyenmai').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autospeed: 2000,
  });

  $('.card-deck').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autospeed: 2000,
  });
  $('.kinhnghiemlamdep-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autospeed: 2000,
  });
  $('.TinTuc-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autospeed: 2000,
  });

});
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  // Lấy vị trí cuộn của trang web
  var scrollPosition = window.scrollY;

  // Kiểm tra vị trí cuộn và thêm/xóa class 'scrolled' để thay đổi màu nền của thanh navigation
  if (scrollPosition > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});