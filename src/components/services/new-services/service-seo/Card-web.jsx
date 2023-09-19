import React from "react";
import Link from "next/link";

const data = [
  {
    id: 11,
    image: "/assets/img/breadcrum_1/seo.png",
    alt: "SEO Services Agency in Gurgaon",
    title: "Leading SEO Company in Gurgaon: Driving Unmatched Digital Growth",
    peraOne:
      "At Digital Cappuccino, we specialise in a variety of services, including high-quality SEO solutions. Our expertise is in increasing the quality and quantity of website traffic via search engines. Our focused strategy focuses on improving organic results across a wide range of search categories, including photos, videos, academia, news, and industry-specific searches. We assure the success of your online presence by understanding search engine operations and user preferences. Partner with us for exceptional SEO services in Gurgaon, where we work tirelessly as your preferred SEO firm to boost unpaid traffic and prospective client conversions. Choose Digital Cappuccino as the top SEO company in Gurgaon.",
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
