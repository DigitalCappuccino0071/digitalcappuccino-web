import React from "react";
import Link from "next/link";

const data = [
    {
        id: 11,
        image: "/assets/img/breadcrum_1/google_ads.png",
        alt: "PPC Marketing Agency",
        title: "Get More Customers with Our PPC Marketing Services",
        peraOne:
            "Leading PPC agency in Gurgaon, Digital Cappuccino provides excellent PPC solutions to enable you to maximise your online visibility and ROI. Being the top PPC company in Gurgaon, we expertise in developing and maximising PPC campaigns that yield results. As a recognised PPC expert in Gurgaon, our team shines in keyword research, creative ad copy, and exact audience targeting. We run your PPC campaigns to deliver targeted traffic, boost conversions, and beat your advertising expenditure. Trust us, the best PPC agency in Gurgaon, to improve your digital marketing plan and get concrete results. Our expertise will make sure the correct audience sees your brand at the correct time.",
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
