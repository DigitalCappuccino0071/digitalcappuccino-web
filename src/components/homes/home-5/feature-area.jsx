import Link from "next/link";
import React from "react";

const contents = {
  // shapes: ["bp-chose-5.1.png", "bp-chose-5.2.png", "bp-chose-5.3.png"],
  feature_bg: "/assets/img/feature/fea-2.png",
  subtitle: "Let’s Brew Exclusive Strategies",
  title: "Why Choose Digital Cappuccino ?",
  text_1:
    `We are not an Ad Agency around any random corner. We’re a team of professionals based out of Gurgaon, India. Our skilled members curate one-of-a-kind, compelling marketing solutions, much like your favourite cappuccino! Our social media marketing managers craft effective ad campaigns that only speak results. We also collaborate with social media influencers across the country to combine creativity with innovation and brew a strategic marketing plan. Client relationship is not only essential but also important for Digital Cappuccino. In addition to that, we synthesise other marketing programs like SEO, SEM, SMO, etc. and merge different techniques to reach desired goals. This requires close collaboration with our clients. As the best marketing agency in Gurgaon, we provide marketing excellence that makes you want more of us!
    `,
  // text_2:
    // "At Digital Cappuccino, we offer a variety of digital marketing solutions," +
  //   " like the different types of coffee, to suit the needs of businesses and their customers." +
    // " From a Cappuccino to an Americano, we serve it all with pleasure.",
  btn_text: <>{"Let's Connect"}</>,
};

const {
  btn_text,
  feature_bg,
  highlight_text,
  // shapes,
  subtitle,
  text_1,
  text_2,
  title,
} = contents;

const FeatureArea = () => {
  return (
    <div className="tp-chose-area pt-100 pb-50 p-relative paddingReduce">
      {/*{shapes.map((s, i) => (*/}
      {/*  <div key={i} className={`bp-chose-${i + 1} d-none d-lg-block`}>*/}
      {/*    <img src={`/assets/img/chose/${s}`} alt="" />*/}
      {/*  </div>*/}
      {/*))}*/}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-12">
            <div className="tpchosebox-main p-relative">
              <div className="row align-items-center tp-chose-space">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-12 wow tpfadeLeft"
                  data-wow-duration=".3s"
                  data-wow-delay=".5s"
                >
                  <div className="tp-chose-item">
                    <div className="tpchosebox mb-30">
                      <div className="tpchosebox__icon mb-30">
                        <a href="#">
                         <img src={`/assets/img/icon/professional-team.png`} alt=""  height={'35px'} width={'35spx'}/>
                        </a>
                      </div>
                      <div className="tpchosebox__content">
                        <h4>
                          <a href="#">
                            Professional  Team
                          </a>
                        </h4>
                        <p>15+ Team Member</p>
                      </div>
                    </div>
                    <div className="tpchosebox mb-30">
                      <div className="tpchosebox__icon mb-30">
                        <a href="#">
                         <img src={`/assets/img/icon/budget.png`} alt=""  height={'35px'} width={'35spx'}/>
                        </a>
                      </div>
                      <div className="tpchosebox__content">
                        <h4>
                          <a href="#">
                            Budgeting Expert
                          </a>
                        </h4>
                        <p>15+ Cr. Spend</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-12 wow tpfadeLeft"
                  data-wow-duration=".3s"
                  data-wow-delay=".5s"
                >
                  <div className="tp-chose-item">
                    <div className="tpchosebox mb-30">
                      <div className="tpchosebox__icon mb-30">
                        <a href="#">
                           <img src={`/assets/img/icon/google.png`} alt=""  height={'35px'} width={'35spx'}/>
                          {/*<i className="flaticon-group"></i>*/}
                        </a>
                      </div>
                      <div className="tpchosebox__content">
                        <h4>
                          <a href="#">
                           Google Certified Team
                          </a>
                        </h4>
                        <p>100% Attention to details</p>
                      </div>
                    </div>
                    <div className="tpchosebox mb-30">
                      <div className="tpchosebox__icon mb-30">
                        <a href="#">
                         <img src={`/assets/img/icon/competitive.png`} alt=""  height={'35px'} width={'35spx'}/>
                        </a>
                      </div>
                      <div className="tpchosebox__content">
                        <h4>
                          <a href="#">
                            Competitive Rate
                          </a>
                        </h4>
                        <p>100% Commitment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-5 col-md-10 col-12 wow tpfadeRight"
            data-wow-duration=".5s"
            data-wow-delay=".9s"
          >
            <div className="tp-feature-section-title-box">
              <h5 className="tp-subtitle pb-10">{subtitle}</h5>
              <h2 className="tp-title tp-title-sm">
                {title}
                <span className="tp-section-highlight">
                  {highlight_text}
                  <svg
                    width="247"
                    height="12"
                    viewBox="0 0 247 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-0.000488281 0L247 12H-0.000488281V0Z"
                      fill="#FFDC60"
                    />
                  </svg>
                </span>
              </h2>
              <p className="">{text_1}</p>
              <p className="">{text_2}</p>
              <div className="tp-fea-button-five">
                <Link href="/contact-us">
                  <a className="tp-btn-sky">{btn_text}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;

const ChoseItem = ({ item_num, m, icon, title, text, color }) => {
  return (
    <div
      className={`tpchosebox tpchosebox-${item_num} ${
        m && "mb-30"
      } wow tpfadeIn`}
      data-wow-duration=".5s"
      data-wow-delay=".7s"
    >
      <div className={`tpchosebox__icon fea-color-${color} mb-30`}>
        <a href="#">
          <i className={icon}></i>
        </a>
      </div>
      <div className="tpchosebox__content">
        <h4>
          <a href="#">{title}</a>
        </h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
