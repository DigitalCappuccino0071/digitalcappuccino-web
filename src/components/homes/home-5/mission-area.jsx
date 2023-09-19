import React from "react";
import { HighlightThree } from "../../../svg";

const SvgHighlight = () => (
  <svg
    width="201"
    height="12"
    viewBox="0 0 201 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {" "}
    <path d="M0 0L201 12H0V0Z" fill="#FFDC60" />
  </svg>
);

const contents = {
  shapes: [
    "mission-shape-5.1.png",
    "mission-shape-5.6.png",
    "mission-shape-5.3.png",
  ],
  tabs: [
    { active: true, id: "mission", title: "Our Mission" },
    { id: "vision", title: "Our Vision" },
    { id: "value", title: "Our Values" },
  ],
  tab_contents: [
    {
      show: true,
      id: "mission",
      title: (
        <>
          Digital Mastery is Our Commitment
          <span className="tp-section-highlight">
            <SvgHighlight />{" "}
          </span>{" "}

        </>
      ),
      text_1: (
        <>
        We seek to equip organisations with the tools they need to succeed in the digital arena. Today&apos;s businesses face unique challenges. We help our clients overcome such issues to achieve their goals. Our advertising agency in Gurgaon develops beneficial measures. Let us begin on a creative, innovative, and exceptional trip. We are the leading online advertising agency in Gurgaon. Our ultimate goal is to make sure that our clients thrive in the dynamic digital market.
        </>
      ),
      
    },
    {
      id: "vision",
      title: (
        <>
          Dedicated to Digital Transformation
          <span className="tp-section-highlight">
            <HighlightThree />{" "}
          </span>
        </>
      ),
      text_1: (
        <>
         We will be your go-to advertising agency in Gurgaon. 
    Digital Cappuccino&apos;s mission is to redefine the digital landscape. We&apos;re driven to redefine your online experiences.
        </>
      ),
      text_2: (
        <>
        We inject innovation and creativity into every aspect. 
        We have an uncompromising commitment to perfection. 
        We have emerged as the best advertising agency in Gurgaon.
         We will assist you to propel your journey forward. 
         Impact matters in the digital world. We are a premier ad company in Gurgaon. 
         We help organisations to leave an unforgettable impression on their target audiences. 
         Be the user of our creative techniques as we follow the trends.

        </>
      ),
    },
    {
      id: "value",
      title: (
        <>
          We Cultivate Trust & Synergy{" "}


        </>
      ),
      text_1: (
        <>
      Digital Cappuccino is the best advertising agency in Gurgaon. 
  Because of its ethics and collaboration. Transparency and strong client relationships are our top priorities.
        </>
      ),
      text_2: (
        <>
         Within our team, collaborative synergy produces exceptional achievements.
 Our revolutionary strategy provides focused solutions. Client objectives shape our actions. 
 We pave ways to achieve our aims together. Trust our online advertising agency in Gurgaon. 
 We value integrity and creativity in the ever-changing digital landscape.
 </>
      ),
    },
  ],
  video: "/assets/video/vision.mp4",
};

const { shapes, tabs, tab_contents, video } = contents;

const MissionArea = () => {
  return (
    <div className="tp-mission-area pt-60 p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-mission-shape-${i + 1} d-none d-lg-block`}>

        </div>
      ))}
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-7 col-md-11 wow tpfadeLeft"
            data-wow-duration=".5s"
            data-wow-delay=".7s"
          >
            <div className="tp-mission-tab-section ">
              <nav>
                <div className="nav tp-mission-tab" id="nav-tab" role="tablist">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`nav-links ${tab.active ? "active" : ""}`}
                      id={`nav-${tab.id}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${tab.id}`}
                      type="button"
                      role="tab"
                      aria-controls={`nav-${tab.id}-tab`}
                      aria-selected={tab.active ? "true" : "false"}
                      tabIndex="-1"
                    >
                      <span>{tab.title}</span>
                    </button>
                  ))}
                </div>
              </nav>
            </div>
            <div className="tab-content" id="nav-tabContent">
              {tab_contents.map((item) => {
                const { id, text_1, text_2, title, show } = item;
                return (
                  <div
                    key={id}
                    className={`tab-pane fade ${show ? "show active" : ""}`}
                    id={id}
                    role="tabpanel"
                    aria-labelledby={`nav-${id}-tab`}
                  >
                    <div className="tpmission">
                      <div className="tpmission__content">
                        <h3 className="tp-mission-title">{title}</h3>
                        <p className="">{text_1}</p>
                        <p>{text_2}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-5 col-md-12 wow tpfadeRight"
            data-wow-duration=".5s"
            data-wow-delay=".7s"
          >
            <div className="tp-mission-img">
              <video
                autoPlay
                loop
                style={{ width: "100%", borderRadius: "16px" }}
              >
                <source src={video} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionArea;
