import Link from "next/link";
import React from "react";

const OurAssociate = () => {
  const associateLogo = [
    {
      id: 1,
      path: "/assets/img/associateLogo/asso1.png",
      urlLink: "https://mytrendingstudio.com/",
      alter: "Digital Marketing Company",
    },
    {
      id: 2,
      path: "/assets/img/associateLogo/asso2.png",
      urlLink: "https://www.district369.org/",
      alter: "Best Digital Marketing Company",
    },
    {
      id: 3,
      path: "/assets/img/associateLogo/asso3.png",
      urlLink: "https://www.bizzeonline.com/",
      alter: "Digital marketing Agency",
    },
    {
      id: 4,
      path: "/assets/img/associateLogo/asso4.png",
      urlLink: "#",
      alter4: "Best Digital Marketing Agency",
    },
    {
      id: 5,
      path: "/assets/img/associateLogo/asso5.png",
      urlLink: "https://globalskillacademy.org/",
      alter: "Top Digital Marketing Company",
    },
    {
      id: 6,
      path: "/assets/img/associateLogo/asso6.png",
      urlLink: "#",
      alter: "Top Digital Marketing Agency",
    },
    {
      id: 7,
      path: "/assets/img/associateLogo/asso7.png",
      urlLink: "#",
      alter: "Website Development Company",
    },
    {
      id: 8,
      path: "/assets/img/associateLogo/asso8.png",
      urlLink: "https://diamanteblockchain.com/",
      alter: "Web Development Company",
    },
    {
      id: 9,
      path: "/assets/img/associateLogo/asso9.png",
      urlLink: "https://msme.gov.in/",
      alter: "Digital Marketing Company",
    },
    {
      id: 10,
      path: "/assets/img/associateLogo/asso10.png",
      urlLink: "#",
      alter: "Best Digital Marketing Company",
    },
    {
      id: 11,
      path: "/assets/img/associateLogo/asso11.png",
      urlLink: "#",
      alter: "Digital marketing Agency",
    },
    {
      id: 12,
      path: "/assets/img/associateLogo/asso12.png",
      urlLink: "https://www.mca.gov.in/content/mca/global/en/home.html",
      alter: "Best Digital Marketing Agency",
    },
    {
      id: 13,
      path: "/assets/img/associateLogo/asso13.png",
      urlLink: "https://blockstack.tech/",
      alter: "Top Digital Marketing Company",
    },
    {
      id: 14,
      path: "/assets/img/associateLogo/asso14.png",
      urlLink: "https://paycircle.io/",
      alter: "Top Digital Marketing Agency",
    },
    {
      id: 15,
      path: "/assets/img/associateLogo/asso15.png",
      urlLink: "https://diamcircle.io/",
      alter: "Website Development Company",
    },
    {
      id: 16,
      path: "/assets/img/associateLogo/asso16.png",
      urlLink: "#",
      alter: "Web Development Company",
    },
    {
      id: 17,
      path: "/assets/img/associateLogo/asso17.png",
      urlLink: "https://hbr.org/",
      alter: "Digital Marketing Company",
    },
    {
      id: 18,
      path: "/assets/img/associateLogo/asso18.png",
      urlLink: "https://admin.skillindiadigital.gov.in/",
      alter: "Best Digital Marketing Company",
    },
    {
      id: 19,
      path: "/assets/img/associateLogo/asso19.png",
      urlLink: "https://icpweb.org/",
      alter: "Digital marketing Agency",
    },
    {
      id: 20,
      path: "/assets/img/associateLogo/asso20.png",
      urlLink: "#",
      alter: "Best Digital Marketing Agency",
    },
    {
      id: 21,
      path: "/assets/img/associateLogo/asso21.png",
      urlLink: "#",
      alter: "Top Digital Marketing Company",
    },
    {
      id: 22,
      path: "/assets/img/associateLogo/asso22.png",
      urlLink: "#",
      alter: "Top Digital Marketing Agency",
    },
    {
      id: 23,
      path: "/assets/img/associateLogo/asso23.png",
      urlLink: "#",
      alter: "Website Development Company",
    },
    {
      id: 24,
      path: "/assets/img/associateLogo/asso24.png",
      urlLink: "#",
      alter: "Web Development Company",
    },
    {
      id: 25,
      path: "/assets/img/associateLogo/asso25.png",
      urlLink: "https://iaapsy.org/",
      alter: "Digital Marketing Company",
    },
    {
      id: 26,
      path: "/assets/img/associateLogo/asso26.png",
      urlLink: "https://nsdcindia.org/",
      alter: "Best Digital Marketing Company",
    },
    {
      id: 27,
      path: "/assets/img/associateLogo/asso27.png",
      urlLink: "#",
      alter: "Digital marketing Agency",
    },
    {
      id: 28,
      path: "/assets/img/associateLogo/asso28.png",
      urlLink: "https://www.connect.tv/",
      alter: "Best Digital Marketing Agency",
    },
    {
      id: 29,
      path: "/assets/img/associateLogo/asso29.png",
      urlLink: "#",
      alter: "Top Digital Marketing Company",
    },
    {
      id: 30,
      path: "/assets/img/associateLogo/asso30.png",
      urlLink: "https://ackrolixinnovations.com/",
      alter: "Top Digital Marketing Agency",
    },
  ];
  return (
    <div className="tp-brand-area pt-60 pb-30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="tp-project-section-box text-center">
              <h5 className="tp-subtitle tp-subtitle-before-color">
                Our Associates
              </h5>
              <h2 className="tp-title-sm pb-30">
                Our Group of Companies,  Associations,  Members,  Affiliations &
                Partnerships
              </h2>
            </div>
          </div>
        </div>
        <section className="grid-logos">
          {associateLogo.map((e, i) => (
            <div className="grid-logos__item" key={i}>
              <a href={e.urlLink} target="_blank" rel="noopener noreferrer">
                <img src={e.path} alt={e.alter} />
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OurAssociate;
