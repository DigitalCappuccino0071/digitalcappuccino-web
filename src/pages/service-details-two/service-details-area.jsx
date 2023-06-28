import React from 'react';

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space"> Rise to the Top of Search Engine Rankings with Our Tailored
SEO Strategies
                  </h3>
                <a href="#">Schedule a free expert session <i className="fal fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">Digital Cappuccino helps you brew up a strong online
presence! we understand the importance of search engine optimization and how it
can impact your business. That s why we offer high-quality SEO services that
help increase your website s visibility and drive more traffic to your site.</p>
                <p className="pb-10">Our team of experienced SEO experts uses the latest
techniques and strategies to ensure your website ranks higher in search engine
results pages (SERPs). We also offer search engine marketing (SEM) services,
which include paid advertising campaigns on search engines, to help you reach
your target audience and increase conversions.</p>
                {/*<p>We then create a comprehensive content strategy that is aligned with your business goals and target audience. This includes developing a search engine optimization (seo) strategy that can help improve your websites visibility in search engines, a social media strategy that can help you connect with your target audience and build brand awareness, and a paid advertising strategy that can help you reach your target*/}
                {/*  audience and drive conversions.</p>*/}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sd-big-img">
                <img src="/assets/img/service_1/seo_sem.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Drive Quality Traffic to Your Website with Digital
Cappuccino</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">Our approach to SEO and SEM is transparent and
collaborative. We work closely with you to understand your business goals and
tailor our services to meet your specific needs. Whether you re a small
business owner or a large corporation, we have the expertise and resources to
help you succeed.</p>
                <p>In addition to our SEO and SEM services, we also provide
comprehensive analytics and reporting, so you can track your website s
performance and make informed decisions about your digital marketing strategy. </p>
                 <p>Don&apos;t let your website get lost in the online noise – let
Digital Cappuccino help you rise to the top of the search engine rankings. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;