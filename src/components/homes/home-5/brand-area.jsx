import React from 'react';
import Brands from '../../common/brands';

const BrandArea = () => {
  return (
    <div className="tp-brand-area pt-30 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-brand-title pb-30 d-flex align-items-center">
              <h4 className="tp-brand-build-title"> Our Digital & Affiliates Partners</h4>
            </div>
          </div>
        </div>
        <div className="tp-brand-sl">
          <div className="swiper-container brand-slider-active">
            <Brands />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;