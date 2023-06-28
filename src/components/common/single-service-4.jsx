import Link from "next/link";
import React from "react";

const SingleServiceFour = ({ service, index, m }) => {
  const { delay, duration, id, img, text_1, text_2, title, color } =
    service || {};
  return (
    <div className="col-md-4">
      <div
        className={`tp-services-item text-left h-100
      ${color} ${index && index > 2 ? "mb-30" : ""} ${
          m ? "mb-30" : ""
        } wow tpfadeUp`}
        data-wow-duration={duration}
        data-wow-delay={delay}
      >
        <div className="tp-services-item__icon mb-30">
          <img src={img} alt="" />
        </div>
        <div className="tp-services-item__content">
          <h3 className="tp-sv-title">{title}</h3>
          <div className="text-black" style={{ fontSize: "18px" }}>
            {text_1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceFour;
