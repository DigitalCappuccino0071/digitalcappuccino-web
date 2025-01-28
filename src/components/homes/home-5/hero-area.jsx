import React from "react";
import Link from "next/link";

const hero_contents = {
    shapes: [
        // // "hero-shape-5.1.png",
        // // "hero-shape-4.png",
        // "hero-shape-4.png",
        // "hero-shape-5.2.png",
    ],
    subtitle: (
        <>
            Offer is going on till friday , <b>$84,99</b>
            <span>/mo</span>
        </>
    ),
    title: "Marketing Agency & Company in Gurgaon",
    highlight_text: "",
    short_text: (
        <>
            Empowering Every-Size-Business with Round-the-Clock Content and
            Advertising Solutions!
        </>
    ),
    hero_img: "/assets/img/hero/hero-5.1.png",

    social_links: [
        {
            num: 1,
            icon: "/assets/img/SocialIcons/facebook.png",
            title: "Facebook",
            link: "https://www.facebook.com/digitalcappuccino/",
        },
        {
            num: 2,
            icon: "/assets/img/SocialIcons/instagram.png",
            title: "Instagram",
            link: "https://www.instagram.com/digitalcappuccino/",
        },
        {
            num: 3,
            icon: "/assets/img/SocialIcons/linkedin.png",
            title: "Linkedin",
            link: "https://www.linkedin.com/company/digital-cappuccino/",
        },
        {
            num: 4,
            icon: "/assets/img/SocialIcons/youtube.png",
            title: "Youtube",
            link: "https://youtube.com/@Digitalcappuccino_",
        },
        {
            num: 5,
            icon: "/assets/img/SocialIcons/twitter.png",
            title: "Twitter",
            link: "https://twitter.com/Digicappuccino",
        },
    ],
    submit_text: "Free Consultation",
};

const {
    hero_img,
    highlight_text,
    shapes,
    short_text,
    subtitle,
    title,
    social_links,
    submit_text,
} = hero_contents;

const HeroArea = () => {
    return (
        <div className="tp-hero-area tp-hero-border p-relative">
            {shapes.map((s, i) => (
                <div
                    key={i}
                    className={`bp-hero-shape-${i + 1} d-none d-xxl-block`}
                >
                    <img src={`/assets/img/hero/${s}`} alt="" />
                </div>
            ))}
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="tp-hero-section-box-five">
                            <div className="tp-hero-section-box-five__title pb-45">
                                <h1
                                    className="tp-hero-bs-title wow tpfadeUp "
                                    data-wow-duration=".5s"
                                    data-wow-delay=".7s"
                                >
                                    {title}
                                    <span className="tp-highlight">
                                        <svg
                                            className="highlight-space"
                                            width="266"
                                            height="12"
                                            viewBox="0 0 266 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {" "}
                                            <path
                                                d="M0 0L266 12H0V0Z"
                                                fill="#FFDC60"
                                            />
                                        </svg>
                                        <i>{highlight_text}</i>
                                    </span>
                                </h1>
                                <p>{short_text}</p>
                            </div>
                            <div
                                className="tp-hero-section-box-five__input wow tpfadeUp"
                                data-wow-duration=".9s"
                                data-wow-delay="1s"
                            >
                                <div className="tp-header-yellow-button">
                                    <Link href="/contact-us">
                                        <a className="tp-btn-sky">
                                            {"Free Consultation"}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 ">
                        <div className="tp-hero-right-side-five p-relative ">
                            <div className="tp-yellow-circle-five"></div>
                            <div
                                className="tp-hero-right-side-five__img wow tpfadeRight"
                                data-wow-duration=".9s"
                                data-wow-delay="1.2s"
                            >
                                <img
                                    src={hero_img}
                                    alt="Digital Marketing Company"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-hero-icon-five">
                    <div className="tp-hero-social bp-hero-social tp-hero-social-bg-color">
                        {social_links.map((l, i) => (
                            <a
                                key={i}
                                className={`social-icon-${l.num} ${
                                    l.title === "Behance" ? "d-md-none" : ""
                                }`}
                                href={l.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>
                                    <img
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                        }}
                                        src={l.icon}
                                    />{" "}
                                </span>
                                <span className="socialName">{l.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;
