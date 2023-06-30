import React from "react";
import Link from "next/link";

const data = [
  {
    id: 11,
    image: "/assets/img/breadcrum_1/email.png",
    alt: "Email Marketing Company",
    title: "Email Marketing",
    peraOne:
      "Digital Cappuccino, being the top email marketing company, specialises in the creation of commercial email campaigns. To assist organisations in understanding how their strategies are succeeding, we build personalised emails, segment target groups, and evaluate data from email campaigns. Through efficient email marketing, our Email Marketing Services help companies grow their client base, generate revenues, and establish loyalty.",
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
