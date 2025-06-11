$(function () {
  // お知らせのスリック
  $('.slick-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    // タブレット対応
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 2
      }
    },

    // スマホ対応
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1
      }
    },
    ]
  });
});


