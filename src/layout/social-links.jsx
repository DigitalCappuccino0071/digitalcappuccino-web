import React from "react";

const social_links = [
  {
    link: "https://www.facebook.com/digitalcappuccino/",
    target: "_blank",
    icon: "fab fa-facebook",
    color: "#4267B2",
  },
  {
    link: "https://www.instagram.com/digitalcappuccino/",
    target: "_blank",
    icon: "fab fa-instagram",
    color: "rgb(228, 64, 95)",
  },
  {
    link: "https://www.linkedin.com/company/digital-cappuccino/",
    target: "_blank",
    icon: "fab fa-linkedin",
    color: "#0072b1",
  },
  {
    link: "https://www.youtube.com/@Digitalcappuccino_",
    target: "_blank",
    icon: "fab fa-youtube",
    color: "#FF0000",
  },
  {
    link: "https://twitter.com/Digicappuccino",
    target: "_blank",
    icon: "fab fa-twitter",
    color: "#1DA1F2",
  },
];

const hero_socials = [
  {
    num: 1,
    link: "https://www.facebook.com/digitalcappuccino/",
    target: "_blank",
    icon: "fab fa-facebook-f social-icon-1",
    title: "Facebook",
  },
  {
    num: 3,
    link: "https://youtube.com/@Digitalcappuccino_",
    target: "_blank",
    icon: "fab fa-youtube social-icon-3",
    title: "Youtube",
  },
  {
    num: 2,
    link: "https://twitter.com/Digicappuccino",
    target: "_blank",
    icon: "fab fa-twitter social-icon-2",
    title: "Twitter",
  },
];

export const HeroSocials = ({ hide_title = false }) => {
  return (
    <>
      {hero_socials.map((l, i) => (
        <a
          key={i}
          href={l.link}
          className={`social-icon-${l.num}`}
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
          {hide_title ? "" : l.title}
        </a>
      ))}
    </>
  );
};

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a key={i} href={l.link} target={l.target ? l.target : ""}>
          <i className={l.icon} style={{ color: `${l.color}` }}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
