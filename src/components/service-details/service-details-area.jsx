import React from 'react';

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">best solution for every stage of your
                  business</h3>
                <a href="#">Schedule a free expert session <i className="fal fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">Our team of experienced digital marketers will work closely with you to understand your business objectives, target audience, and current digital marketing efforts. We will conduct a thorough analysis of your online presence and develop a
                  customised digital strategy that is tailored to your business needs.</p>
                <p className="pb-10">We begin by conducting a detailed market analysis to identify your target audience, competitors, and industry trends. From there, we help you define your business goals and set key
                  performance indicators (KPIs) to measure the success of your digital marketing efforts.</p>
                <p>We then create a comprehensive content strategy that is aligned with your business goals and target audience. This includes developing a search engine optimization (SEO) strategy that can help improve your websites visibility in search engines, a social media strategy that can help you connect with your target audience and build brand awareness, and a paid advertising strategy that can help you reach your target
                  audience and drive conversions.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sd-big-img">
                <img src="/assets/img/service/service-icon-10.1.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Design process based on best practices and
                  methodologies that deliver</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">Throughout the entire process, we believe in transparency and collaboration. We provide regular analytics and reporting to track
                  the performance of your digital marketing efforts and make necessary adjustments.</p>
                <p>At Digital Cappuccino, we understand that every business is unique, and we strive to create customized digital strategies and plans that are tailored to your specific needs. So, whether you re looking to launch a new digital marketing campaign or improve your existing efforts, our digital strategy and planning services can help you achieve your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;