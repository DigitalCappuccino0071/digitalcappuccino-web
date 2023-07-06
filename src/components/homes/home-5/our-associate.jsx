import React from "react";

const OurAssociate = () => {
  const associateLogo = [
    {
      id: 1,
      path: "/assets/img/associateLogo/asso1.png",
      alter: "digital-cappiccino",
    },
    {
      id: 2,
      path: "/assets/img/associateLogo/asso2.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso3.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso4.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso5.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso6.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso7.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso8.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso9.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso10.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso11.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso12.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso13.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso14.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso15.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso16.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso17.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso18.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso19.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso20.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso21.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso22.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso23.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso24.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso25.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso26.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso27.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso28.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso29.png",
      alter: "digital-cappiccino",
    },
    {
      id: 1,
      path: "/assets/img/associateLogo/asso30.png",
      alter: "digital-cappiccino",
    },
  ];
  return (
    <div className="tp-brand-area pt-60 pb-30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="tp-project-section-box text-center">
              <h5 className="tp-subtitle tp-subtitle-before-color">
                our Associates
              </h5>
              <h2 className="tp-title-sm pb-30">
                Our Group of Companies, Associations,Members, Affiliations &
                Partnerships
              </h2>
            </div>
          </div>
        </div>
        <section class="grid-logos">
          {associateLogo.map((e, i) => (
            <a href="" class="grid-logos__item">
              <img src={e.path} alt={e.alter} />
            </a>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OurAssociate;
