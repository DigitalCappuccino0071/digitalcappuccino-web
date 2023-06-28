import React from "react";
import { AngelRight, ArrowBig, HighlightThree } from "../../../svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import ImageLightBox from "../../common/modals/image-lightbox";
import Link from "next/link";

const contents = {
  shapes: ["hero/hero-shape-5.2.png", "project/bp-pj-shape-5.1.png"],
  subtitle: "Projects",
  title: (
    <>
      Our Share In The Industry
      <span className="tp-section-highlight">
        <HighlightThree />{" "}
      </span>
    </>
  ),
  project_items: [
    {
      subtitle: "Music Industry",
      title: "T-Series",
      img: "/assets/img/project_1/t-series.png",
      alt: "Digital marketing Agency",
    },
    {
      subtitle: "OTT Industry",
      title: "Netflix",
      img: "/assets/img/project_1/netflix.png",
      alt: "Best Digital Marketing Agency",
    },
    {
      subtitle: "Health Care",
      title: "Max Life Insurance",
      img: "/assets/img/project_1/max-life.png",
      alt: "Top Digital Marketing Company",
    },
    {
      subtitle: "Business",
      title: "Business Consulting",
      img: "/assets/img/project_1/net-media.png",
      alt: "Best Digital Marketing Company",
    },
  ],
};

const { project_items, shapes, subtitle, title } = contents;

// images
const images = project_items.map((img) => img.img);

const ProjectArea = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  // photoIndex
  const [photoIndex, setPhotoIndex] = React.useState(null);
  // image open state
  const [open, setOpen] = React.useState(false);
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };
  return (
    <React.Fragment>
      <div className="tp-project-area tp-project-bs-space yellow-bg pt-30 pb-30 fix p-relative">
        {shapes.map((s, i) => (
          <div
            key={i}
            className={`bp-project-shape-${i + 1} d-none d-lg-block`}
          >
            <img src={`/assets/img/${s}`} alt="" />
          </div>
        ))}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="tp-project-section-box text-center">
                <h5 className="tp-subtitle tp-subtitle-before-color">
                  {subtitle}
                </h5>
                <h2 className="tp-title-sm pb-30">{title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tp-project-slider-section">
              <Swiper
                loop={sliderLoop}
                slidesPerView={1}
                spaceBetween={20}
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                className="swiper-container project-slider-active"
                pagination={{
                  el: ".my-dots",
                  clickable: true,
                }}
                breakpoints={{
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
              >
                {project_items.map((item, i) => {
                  const { img, subtitle, title, alt } = item;
                  return (
                    <SwiperSlide key={i}>
                      <div className="tpproject">
                        <div className="tpproject__content pl-5">
                          <h4 className="tp-pj-subtitle">
                            <span className="text-secondary">{subtitle}</span>
                          </h4>
                          <h3 className="tp-pj-title fs-5">
                            <b className="">{title}</b>
                          </h3>
                        </div>
                        <div className="tpproject__thumb">
                          <div className="fix radius-20">
                            <img className="w-100" src={img} alt={alt} />
                          </div>
                          {/* <div className="tpproject__thumb-icon">
                            <button
                              onClick={() => handleImagePopup(i)}
                              className="popup-image"
                            >
                              <ArrowBig />
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="my-dots text-center"></div>
            </div>
          </div>
        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox
        images={images}
        open={open}
        setOpen={setOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </React.Fragment>
  );
};

export default ProjectArea;
