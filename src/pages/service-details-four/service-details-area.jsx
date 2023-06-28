import React from 'react';

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Brew Up a Storm on Social Media with
                  Digital Cappuccino</h3>
                <a href="#">Schedule a free expert session <i className="fal fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">Just like a perfect cup of cappuccino, your content should
be rich, bold, and satisfying. Our team of experienced content creators will
work with you to develop a content strategy that aligns with your business
goals and brand voice. From blog posts to social media content to email
campaigns, we&apos;ll help you create compelling content that resonates with your
audience.</p>
                <p className="pb-10">We also specialize in video and GIF production. Whether you
need a product demo, explainer video, or social media GIFs, we&apos;ll create
eye-catching visuals that showcase your brand in the best possible light. Our
team uses state-of-the-art equipment and editing software to produce
high-quality videos and GIFs that capture the attention of your audience.</p>
                {/*<p>We then create a comprehensive content strategy that is aligned with your business goals and target audience. This includes developing a search engine optimization (seo) strategy that can help improve your websites visibility in search engines, a social media strategy that can help you connect with your target audience and build brand awareness, and a paid advertising strategy that can help you reach your target*/}
                {/*  audience and drive conversions.</p>*/}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sd-big-img">
                <img src="/assets/img/service_1/video.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Wake up Your Brand with
Digital Cappuccino</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">At Digital Cappuccino, we understand that content marketing
is more than just creating great content. That&apos;s why we provide comprehensive
content marketing services that help you distribute your content effectively.
From search engine optimization (SEO) to social media advertising to email
marketing, we&apos;ll help you get your content in front of the right people at the
right time.</p>
                <p>Like a perfectly crafted latte, great content takes time,
skill, and attention to detail. That&apos;s why we take a collaborative approach to
content creation, working closely with you to ensure that every piece of
content is on-brand and meets your specific goals and objectives. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;