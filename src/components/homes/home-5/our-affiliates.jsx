import React from "react";
import Affiliates from "../../common/affiliates";

const OurAffiliates = () => {
  return (
    <div className="tp-brand-area pb-130">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-brand-title pb-60 d-flex align-items-center">
              <h4 className="tp-brand-build-title"> Our Affilates Partners</h4>
            </div>
          </div>
        </div>
        <div className="tp-brand-sl">
          <div className="swiper-container brand-slider-active">
            <Affiliates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAffiliates;
