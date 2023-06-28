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
          Brewing Success Through Creative Digital Solutions
          <span className="tp-section-highlight">
            <SvgHighlight />{" "}
          </span>{" "}

        </>
      ),
      text_1: (
        <>
        As a digital marketing agency, our goal is to help businesses harness the power of the digital world to
achieve success.
        </>
      ),
      text_2: (
        <>
          {
            "We understand the unique challenges facing businesses in today's digital landscape, " +
              "and we are committed to helping our clients navigate those challenges and achieve " +
              "their goals. With a focus on creativity, innovation, and quality, we are dedicated " +
              "to brewing success for our clients. Our mission is to help businesses stay ahead of the curve and succeed in an ever-changing digital world."
          }
        </>
      ),

    },
    {
      id: "vision",
      title: (
        <>
          A World Where Every Business Can Savor Digital Success
          <span className="tp-section-highlight">
            <HighlightThree />{" "}
          </span>
        </>
      ),
      text_1: (
        <>
          We envision a world where every business can leverage the power of the digital world to achieve
success.
        </>
      ),
      text_2: (
        <>
         Whether you&apos;re a small start-up or a large corporation, we provide best marketing solutions that
help you achieve your goals and connect with your customers in meaningful ways. We&apos;re working
towards a future where every business has the opportunity to achieve digital success.
We&apos;re passionate about empowering businesses to succeed in the digital world, and we believe
that together, we can create a world where every business can thrive.
        </>
      ),
    },
    {
      id: "value",
      title: (
        <>
          Agility, Adaptability, Empowerment: Our Commitment to Your Digital
          Success{" "}


        </>
      ),
      text_1: (
        <>
         Our values of agility, adaptability, and empowerment guide everything we do. We always stay on
top of the latest trends and technologies, so we can adapt quickly to changes in the industry.
        </>
      ),
      text_2: (
        <>
         Whether you&apos;re looking to increase your online visibility, drive traffic to your website, or improve
your social media presence, we&apos;re here to help.
We collaborate with our clients, giving them the tools and knowledge, they need to succeed in
the digital landscape. We&apos;re dedicated to delivering measurable results that drive growth and
revenue for our clients.
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
