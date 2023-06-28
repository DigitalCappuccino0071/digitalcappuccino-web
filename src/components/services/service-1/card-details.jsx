import React from "react";

const data = [
  {
    id: 11,
    image: "/assets/img/breadcrum_1/web_development.png",
    title: "Web Development ",
    peraOne:
      "Are you ready to brew up an outstanding website? At Digital Cappuccino, we're passionate about crafting websites that are as bold and invigorating. Our team of skilled web developers understands the importance of a strong online presence, and we're here to help you achieve your business goals through stunning, functional website design. From custom layouts and intuitive navigation to seamless integration with your existing systems, our web development services are designed to provide the perfect blend of form and function. So why settle for a bland website when you can have one that's " +
      "as rich and satisfying as your favourite cup of coffee?",
    // peraTwo:"At Digital Cappuccino we specialize in designing, building, shipping and scaling beautifu," +
    //     " At Digital Cappuccino we specialize in designing."
  },
  {
    id: 12,
    image: "/assets/img/breadcrum_1/social_media.png",
    title: "Social Media Management ",
    peraOne:
      "Are you looking for a way to make your social media presence shine? Look no further than Digital Cappuccino's social media management services. Our team of expert marketers knows the ins and outs of social media platforms and can help you build a strong and engaging presence on the channels that matter most to your business. From crafting compelling content to managing customer interactions, we'll work with you every step of the way to ensure that your social media strategy is tailored to your business goals. Don't settle for just another social media account - let us help you stand out from the crowd and reach your target audience effectively.",
    // peraTwo:"At Digital Cappuccino we specialize in designing, building, shipping and scaling beautifu, At Digital" +
    //     " Cappuccino we specialize in designing."
  },
  {
    id: 13,
    image: "/assets/img/breadcrum_1/seo.png",
    title: "SEO",
    peraOne:
      "Looking to get your website to the top of the search engine rankings and increase organic traffic? At Digital Cappuccino, we specialize in search engine optimization (seo) and can help you achieve just that. Our team of experienced digital marketers uses cutting-edge techniques to optimize your website for search engines and drive qualified traffic to your site. From keyword research and on-page optimization to link building and content creation, we have the expertise to take your website to the next level. With our detailed reporting and analytics, we'll help you understand the impact of our seo strategies and make necessary adjustments to keep your website ahead of the competition.",
    // peraTwo:"At Digital Cappuccino we specialize in designing, building, shipping and scaling beautifu, " +
    //     "At Digital Cappuccino we specialize in designing."
  },
  {
    id: 14,
    image: "/assets/img/breadcrum_1/email.png",
    title: "Email Marketing",
    peraOne:
      "Are you looking for a powerful way to connect with your audience and increase conversions? Look no further than Digital Cappuccino's email marketing services. Our team of experienced marketers can help you develop and execute a successful email marketing strategy that engages your subscribers and drives results. From crafting attention-grabbing subject lines to designing visually stunning email templates, we'll help you create compelling content that resonates with your audience and encourages them to take action. Our services also include list segmentation, A/B testing, and detailed analytics to ensure that your campaigns are targeted, effective, and continually optimized for success. Let us help you take your email marketing to the next level and achieve your business goals.",
    // peraTwo:"At Digital Cappuccino we specialize in designing, building, shipping and scaling beautifu, " +
    //     "At Digital Cappuccino we specialize in designing."
  },
  {
    id: 15,
    image: "/assets/img/breadcrum_1/google_ads.png",
    title: "Google Ads ",
    peraOne:
      "Looking to elevate your business with Google Ads? At Digital Cappuccino, we have the expertise to create and execute a targeted Google Ads campaign that will drive traffic, generate leads, and boost sales. Our experienced team of digital marketers specializes in every aspect of Google Ads, from conducting thorough keyword research to crafting compelling ad copies that yield results. We pride ourselves on delivering exceptional services that optimize your ads and provide maximum ROI. With detailed analytics and reporting, we'll monitor your campaign's performance and make necessary adjustments to ensure your ongoing success.",
    // peraTwo:"At Digital Cappuccino we specialize in designing, building, shipping and scaling beautifu, At Digital " +
    //     "Cappuccino we specialize in designing."
  },
  {
    id: 16,
    image: "/assets/img/breadcrum_1/youtube.png",
    title: "Youtube Ads",
    peraOne:
      "Need help advertising your business on the largest video-sharing platform? Our team of skilled digital marketers can help you create and execute a successful YouTube advertising campaign. We provide various YouTube ad formats, including skippable and non-skippable in-stream ads, bumper ads, and discovery ads, to ensure maximum reach and engagement with your target audience. Our YouTube advertising services also include video production and optimization, ad targeting and placement, and analytics to track ad performance and make necessary adjustments.",
    // peraTwo:"At Digital Cappuccino we specialize in designing, building, shipping and scaling beautifu, " +
    //     "At Digital Cappuccino we specialize in designing."
  },
  {
    id: 17,
    image: "/assets/img/breadcrum_1/logo_design.png",
    title: "Logo Design ",
    peraOne:
      "If you're looking for a unique and memorable logo for your brand, you've come to the right place. At Digital Cappuccino, our team of skilled graphic designers can create a custom logo that captures the essence of your business and helps you stand out in a crowded market. We start by getting to know your brand and your goals, and then we work closely with you to develop a logo that is tailored to your vision. Our logo design services include multiple design concepts, revisions, and file formats to ensure that you are completely satisfied with the end result.",
    // peraTwo:"At Digital Cappuccino we specialize in designing, building, shipping and scaling beautifu," +
    //     " At Digital Cappuccino we specialize in designing."
  },
  {
    id: 18,
    image: "/assets/img/breadcrum_1/digital.png",
    title: "digital Marketing ",
    peraOne:
      "Are you seeking to collaborate with industry leaders to enhance your brand's reputation and boost sales? Look no further than Digital Cappuccino! Our influencer marketing services will assist you in identifying the perfect influencer, negotiating partnerships, and managing campaigns for maximum ROI. With our expertise, we can help you achieve your business objectives, whether it's to boost brand recognition, drive website traffic, or increase revenue. Don't wait any longer; let us help you connect with the right influencers to reach your target audience effectively.",
    // peraTwo:"At Digital Cappuccino we specialize in designing, building, shipping and scaling beautifu, " +
    //     "At Digital Cappuccino we specialize in designing."
  },
];

const CardDetails = () => {
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
                      <h1 className="ac-client-name fs-2 pb-3">
                        <a href="#">{item.title}</a>
                      </h1>
                      <span className="text-capitalize" style={{}}>
                        {item.peraOne}
                      </span>
                      <span className="text-capitalize text-justify">
                        {item.peraTwo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow tpfadeRight"
                data-wow-duration=".5s"
                data-wow-delay=".7s"
              >
                <div className="ac-testimonial-right">
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardDetails;
