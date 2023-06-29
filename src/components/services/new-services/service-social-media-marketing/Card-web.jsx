import React from "react";
import Link from "next/link";

const data = [
  {
    id: 11,
    image: "/assets/img/breadcrum_1/social_media.png",
    alt: "social media marketing agency",
    title: "Social Media Marketing ",
    peraOne:
      "Digital Cappuccino, Social Media Management Company, works with customers to determine the best methods for clients to obtain access to their target audiences in order to match social media marketing tactics with company goals and overall marketing strategy. Content reigns supreme. We are the top social media management firm, and we create content that our customers utilise to engage with their most important audiences through social networks. We assess their perceptions and interactions in order to enhance plans and boost the efficacy of social marketing.",
  },
];

const CardWeb = () => {
  return (
    <>
      {data.map((item, e) => (
        <div
          key={item.id}
          className="ac-about-content-area"
          id={`sectionScroller${item.id}`}
        >
          <div className="container">
            <div
              className={`row ac-testimonial-space pb-0 ${
                e % 2 ? "rowLeft" : "rowRight"
              }`}
            >
              <div
                className="col-xl-6 col-lg-6 wow tpfadeLeft"
                data-wow-duration=".3s"
                data-wow-delay=".5s"
              >
                <div className="ac-testimonial-info">
                  <div className="actestimonial">
                    <div className="actestimonial__position">
                      <h2 className="ac-client-name fs-2 pb-3">{item.title}</h2>
                      <p>{item.peraOne}</p>
                      <p className="text-justify">{item.peraTwo}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tp-news-button wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay="1s"
                >
                  <Link href="/contact-us">
                    <a className="tp-btn-lg-yellow mr-20">Let&apos;s Connect</a>
                  </Link>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow tpfadeRight"
                data-wow-duration=".5s"
                data-wow-delay=".7s"
              >
                <div className="ac-testimonial-right">
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardWeb;
