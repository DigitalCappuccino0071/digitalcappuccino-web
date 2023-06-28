import React from 'react';

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Find the best solution for every stage of your business
</h3>
                <a href="#">Schedule a free expert session <i className="fal fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">We understand that every
business needs a unique digital strategy that caters to their specific needs.
Just like how each cup of coffee is crafted to perfection with different
flavors and strengths, we believe that each business needs a customized digital
strategy that fits their unique requirements.</p>
                <p className="pb-10">Our approach to digital
strategy and planning starts with a deep understanding of your business and
target audience. We conduct extensive research and analysis to identify the
best channels and tactics for reaching your ideal customers. We also take into
account your budget, timeline, and competitors to ensure that your strategy is
both effective and efficient.</p>
                {/*<p>We then create a comprehensive content strategy that is aligned with your business goals and target audience. This includes developing a search engine optimization (seo) strategy that can help improve your websites visibility in search engines, a social media strategy that can help you connect with your target audience and build brand awareness, and a paid advertising strategy that can help you reach your target*/}
                {/*  audience and drive conversions.</p>*/}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sd-big-img">
                <img src="/assets/img/service_1/digital_strategy.png" alt="" />
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
                <p className="pb-15">Once we have developed a comprehensive digital strategy, we move on to the planning phase. This involves
creating a detailed roadmap for implementation and execution. We break down the
strategy into actionable tasks and set realistic timelines and milestones. This
helps us stay on track and measure the success of our efforts.</p>
                <p>So, why not sip on a hot cup of coffee and let us help you create a digital plan that can help take your
business to the next level?
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