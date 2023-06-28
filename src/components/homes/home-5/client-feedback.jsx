import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const testimonial_contents = {
  shapes: ["testimonial-shape-5.3.png", "testimonial-shape-5.4.png"],
  testi_items: [
    {
      ratings: [1, 2, 3, 4],
      desc:
        "Digital Cappuccino helped me take my business to the next level with their exceptional 360 marketing services. They delivered results beyond my expectations and provided a seamless experience throughout the process. Highly recommended!",
      name: "Smitha Ganneri",
      // title: "Content Creator (Amazon)",
      img: "/assets/img/testimonial/soul-sisters.png",
    },
    {
      ratings: [1, 2, 3, 4, 5],
      desc:
        "Digital Cappuccino is a game-changer for our business. Highly skilled, their team has helped us grow significantly on social media with perfectly aligned brand voice. We highly recommend their services to anyone looking to take their social media game to the next level.",
      name: "Sagar Saroha",
      // title: "Web Developer (Amazon)",
      img: "/assets/img/testimonial/net-media.png",
    },
  ],
};

const { img, shapes, testi_items } = testimonial_contents;

const ClientFeedback = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <div className="tp-testimonial-area pt-30 pb-30 fix p-relative px-2">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-test-shape-${i + 1} d-none d-lg-block`}>
        </div>
      ))}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="tp-project-section-box text-center">
              <h5 className="tp-subtitle">Testimonials</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="testimonial-pd-slider-section">
            <Swiper
              loop={sliderLoop}
              slidesPerView={1}
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="swiper-container testi-slider-pd-active p-relative"
              pagination={{
                el: ".project-slider-dots",
                clickable: true,
              }}
            >
              {testi_items.map((item, i) => {
                const { desc, name, ratings, img, title } = item;
                return (
                  <SwiperSlide key={i} className="white-bg">
                    <div className="row">
                      <div className="col-xl-5 col-lg-5 col-12">
                        <div className="tp-testimonial-thumb text-start">
                          <img src={img} alt=""  width={300} height={300}/>
                        </div>
                      </div>
                      <div className="tptesttimonial col-xl-7 col-lg-7 col-12">
                        <div className="tptestimonial__rating-5">
                          {ratings.map((r) => (
                            <span key={r}>
                              <i className="fas fa-star"></i>
                            </span>
                          ))}
                          <p>{desc}</p>
                        </div>
                        <div className="tptestimonial__meta-5">
                          <h4 className="tp-pd-testi-title">{name}</h4>
                          <span>{title}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <div className="project-slider-dots project-blue-dots text-start text-md-end z-index-1"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
