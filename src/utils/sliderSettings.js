export const getInitialSettings = (citiesCount) => ({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: citiesCount < 5 ? citiesCount % 5 : 5,
  slidesToScroll: 1,
  autoplay: true,
  centerPadding: "10px",
  autoplaySpeed: 1200,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 },
    },
  ],
});
