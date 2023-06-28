import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const brand_images = [
  "/assets/img/brand-logos/bvpt.png",
  //   "/assets/img/brand-logos/facebook.png",
  //   "/assets/img/brand-logos/google.png",
  //   "/assets/img/brand-logos/instagram.png",
  //   "/assets/img/brand-logos/pintrust.png",
  //   "/assets/img/brand-logos/twiter.png",
  //   "/assets/img/brand-logos/youtube.png",

  //   "/assets/img/brand/brand-2.png",
  //   "/assets/img/brand/brand-3.png",
  //   "/assets/img/brand/brand-4.png",
  //   "/assets/img/brand/brand-5.png",
  //   "/assets/img/brand/brand-6.png",
  //   "/assets/img/brand/brand-6.png",
];

const Index = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <Swiper
      loop={sliderLoop}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: true }}
      className="swiper-wrapper d-flex align-items-center"
      breakpoints={{
        // when window width is >= 1200px
        1200: {
          slidesPerView: 1,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
        },
        // when window width is >= 576px
        576: {
          slidesPerView: 1,
        },
      }}
    >
      {brand_images.map((brand, i) => (
        <SwiperSlide key={i}>
          <div className="tp-brand-icon text-start">
            <img src={brand} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Index;
