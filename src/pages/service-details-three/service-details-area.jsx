import React from 'react';

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">From Concept to Launch: Your Vision, Our Expertise</h3>
                <a href="#">Schedule a free expert session <i className="fal fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">Your website is your digital storefront of your Business just
like a warm and inviting coffee shop, and at Digital Cappuccino, we provide
high-quality web design and development services to help you create a stunning
and functional website that showcases your brand and drives results.</p>
                <p className="pb-10">Our team of experienced designers and developers work
closely with clients to create custom website designs that are visually
appealing, user-friendly, and optimized for performance. We take the time to
understand your unique business goals, target audience, and brand personality
to create a website that truly reflects your business.</p>
                {/*<p>We then create a comprehensive content strategy that is aligned with your business goals and target audience. This includes developing a search engine optimization (seo) strategy that can help improve your websites visibility in search engines, a social media strategy that can help you connect with your target audience and build brand awareness, and a paid advertising strategy that can help you reach your target*/}
                {/*  audience and drive conversions.</p>*/}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sd-big-img">
                <img src="/assets/img/service_1/web_design.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Design a Website That Stands Out</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">Our web development services are focused on creating
responsive and scalable websites that provide a seamless user experience across
all devices. We use the latest technologies and best practices to ensure that
your website is secure, fast, and easy to maintain.</p>
                <p>Whether you need a simple brochure website or a complex
e-commerce platform, we offer a range of web design and development services to
meet the needs of businesses of all sizes and industries. Our web design and
development process is transparent, collaborative, and tailored to your
specific needs, so you can be sure that you&apos;ll get exceptional results.
</p>
                 <p>Partnering with Digital Cappuccino means that you can focus
on running your business while we take care of your online presence.
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