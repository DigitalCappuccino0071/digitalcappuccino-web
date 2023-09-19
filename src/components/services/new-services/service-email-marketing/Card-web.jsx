import React from "react";
import Link from "next/link";

const data = [
  {
    id: 11,
    image: "/assets/img/breadcrum_1/email.png",
    alt: "Email Marketing Company Gurgaon",
    title: "Digital Cappuccino Delivers Unparalleled Solutions",
    peraOne:
      "At Digital Cappuccino, we provide a variety of services, including Email Marketing. Our strategy is sending promotional communications to a group of subscribers via email. Every email, whether to new or existing consumers, is a form of email marketing. Our techniques include sending emails for advertisements, business queries, and requests for sales or donations. Our key goals are to increase brand awareness, loyalty, and trust. We specialise in giving the best and top-notch Email Marketing services in Gurgaon as a leading Email Marketing firm.",
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
                  <img src={item.image} alt={item.alt} />
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
