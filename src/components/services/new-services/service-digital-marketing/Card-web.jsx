import React from "react";
import Link from "next/link";

const data = [
    {
        id: 11,
        image: "/assets/img/breadcrum_1/youtube.png",
        alt: "Influencer marketing company",
        title: "Watch Your Brand Flourish with Our Tailored Digital Marketing Services",
        peraOne:
            "We are one of the leading digital marketing services in Gurgaon. We offer a comprehensive suite of services designed to elevate your brand's online presence. Our team is an expert in SEO, social media management, creative content development, and influencer marketing. We tailor our strategies on the basis of our client's needs, ensuring enhanced visibility, engagement, and better ROI. Trust Digital Cappuccino to brew the perfect blend of digital solutions, driving your business forward in the competitive online landscape.",
    },
];

const CardWeb = () => {
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
                                            <h2 className="ac-client-name fs-2 pb-3">
                                                {item.title}
                                            </h2>
                                            <p>{item.peraOne}</p>
                                            <p className="text-justify">
                                                {item.peraTwo}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tp-news-button wow tpfadeUp"
                                    data-wow-duration=".7s"
                                    data-wow-delay="1s"
                                >
                                    <Link href="/contact-us">
                                        <a className="tp-btn-lg-yellow mr-20">
                                            Let&apos;s Connect
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className="col-xl-6 col-lg-6 wow tpfadeRight"
                                data-wow-duration=".5s"
                                data-wow-delay=".7s"
                            >
                                <div className="ac-testimonial-right">
                                    <img src={item.image} alt={item.alt} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardWeb;
