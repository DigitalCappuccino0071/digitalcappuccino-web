import React from "react";

const data = [
  {
    id: 11,
    image: "/assets/img/breadcrum_1/web_development.png",
    
    title: "Web Development ",
    peraOne:
      "Ready to brew up an exceptional website for your business? Our team of skilled " +
        "web designers are zealously equipped in creating websites that are eye- catching" +
        " and fascinating at the same time. We are one of the leading Website Development " +
        "Companies offering professional website " +
        "design and development for small enterprises to large businesses. At " +
        "Dgital Cappuccino, we Help You accomplish Your Business Goals " +
        "Through Stunning, Functional Website Designs. From Custom Layouts " +
        "and Intuitive Navigation to Seamless Integration with Your Existing " +
        "Systems, our web design service caters classic blend of form and " +
        "content. So, why settle for a milk -and- water website when we can" +
        "deliver to you a rich and frothy cappuccino?",
    // peraTwo:"At Digital Cappuccino we specialize in designing, building, shipping and scaling beautifu," +
    //     " At Digital Cappuccino we specialize in designing."
  },
  {
    id: 12,
    image: "/assets/img/breadcrum_1/social_media.png",
    title: "WordPress Web Development ",
    peraOne:
      "Make Digital Cappuccino your company of choice for WordPress " +
        "development. Professional WordPress design and development services " +
        "are what we offer. Exceptional care is taken to consider the" +
"particularities of each web project and deliver well optimised, seo-savvy " +
"WordPress solutions within the allotted time frames. To create websites" +
"that are safe and adaptable, our WordPress planners practice clear and" +
"clean code standards. This enables you to utilise dedicated project" +
"managers to delegate your WordPress development services in an" +
"efficient manner.",
    // peraTwo:"At Digital Cappuccino we specialize in designing, building, shipping and scaling beautifu, At Digital" +
    //     " Cappuccino we specialize in designing."
  },
  {
    id: 13,
    image: "/assets/img/breadcrum_1/seo.png",
    title: "E-commerce Website Development",
    peraOne:
      "With our tailored eCommerce website development services, grow your" +
"online business with us. At Digital Cappuccino, we craft aesthetically" +
"pleasing eCommerce platforms that improve user satisfaction, boost" +
"sales, and optimize conversion rates. Hire an eCommerce developer to" +
"handle all of your requirements for constructing a shopping cart portal" +
"using the newest advancements",
    // peraTwo:"At Digital Cappuccino we specialize in designing, building, shipping and scaling beautifu, " +
    //     "At Digital Cappuccino we specialize in designing."
  },
  {
    id: 14,
    image: "/assets/img/breadcrum_1/email.png",
    title: "CMS Website Development",
    peraOne:
      "At Digital Cappuccino, we specialize in delivering reliable, scalable, and" +
"feature-packed CMS-based web solutions. With multi-layer permissions",
    peraTwo:"we offer you full authority over the platform in order to manage, modify," +
"and broadcast products. We offer comprehensive, complete design and" +
"development for eCommerce web portals. Serving customers on" +
"eCommerce websites for the past 10+ years, we have expertise in" +
"creating specialised eCommerce web portals that meet client needs and" +
"specifications."

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
    image: "/assets/img/breadcrum_1/influencer.png",
    title: "Influencer Marketing ",
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
