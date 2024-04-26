import React from "react";

const accordion_items = [
    {
        id: "one",
        show: true,
        title: "Why is Digital Cappuccino the top influencer marketing agency in Gurgaon?",
        desc: "We at Digital Cappuccino are experts at creating personalised influencer marketing plans that are suited to the unique requirements and objectives of Gurgaon-based companies.",
    },
    {
        id: "two",
        title: "How is the selection of influencers for campaigns by Digital Cappuccino done?",
        desc: " To guarantee authenticity and efficacy in our partnerships, we carefully choose influencers whose values and target audience coincide with the brand's..",
    },
    {
        id: "three",
        title: "What distinguishes Digital Cappuccino from other Gurgaon-based influencer marketing firms",
        desc: "We distinguish ourselves by ensuring effective outcomes for our customers through our creative narrative approach, data-driven decision-making, and strategic influencer alignment.",
    },
    {
        id: "four",
        title: "How is the effectiveness of influencer marketing programmes measured by Digital Cappuccino",
        desc: "We employ state-of-the-art analytics to monitor campaign effectiveness and gauge important parameters, guaranteeing our clients the highest possible return on investment (ROI).",
    },
    {
        id: "five",
        title: "Which platforms does Digital Cappuccino utilise in Gurgaon for influencer marketing?w is the effectiveness of influencer marketing programmes measured by Digital Cappuccino",
        desc: "Our work spans multiple channels, such as Twitter, LinkedIn, Snapchat, Instagram, YouTube, and more, guaranteeing thorough coverage and interaction.",
    },
    {
        id: "six",
        title: "How can my business profit from influencer marketing services in Gurgaon?",
        desc: "Influencer marketing has the potential to raise brand recognition and conversions by strengthening brand visibility, fostering trust, and successfully engaging target audiences.",
    },
    {
        id: "seven",
        title: "Which kinds of companies in Gurgaon can profit from Digital Cappuccino's influencer marketing services?",
        desc: "Businesses in Gurgaon of all sizes and sectors who want to expand their online presence and attract new customers can benefit from our services.",
    },
    {
        id: "eight",
        title: "Does Digital Cappuccino provide Gurgaon local businesses with specialised influencer marketing solutions?",
        desc: "Yes, we customise our tactics to meet the unique needs and goals of neighbourhood companies in Gurgaon, guaranteeing optimal effects and outcomes.",
    },
    {
        id: "nine",
        title: "How can I begin using the influencer marketing services in Gurgaon offered by Digital Cappuccino?",
        desc: "Just get in touch with us via our website or the listed contact details to talk about your requirements and find out how we can support the expansion of your business.",
    },
    {
        id: "ten",
        title: "What outcomes can I anticipate from my influencer marketing partnership with Digital Cappuccino in Gurgaon?",
        desc: "In the Gurgaon market, working with us will boost your brand's exposure, credibility, and engagement—all of which will contribute to its improved reputation and expansion.",
    },
];

const AccordionArea = () => {
    return (
        <>
            <div className="sd-accordio-area grey-bg pt-30 pb-30">
                <div className="container">
                    <div className="row">
                        <div>
                            <h3 className="tp-title-sm mb-30">
                                Stay Ahead with our FutureReady Digital
                                Marketing Solutions
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-custom-accordio">
                                <div
                                    className="accordion"
                                    id="accordionExample"
                                >
                                    {accordion_items.map((item, i) => {
                                        const { id, show, title, desc } = item;
                                        return (
                                            <div
                                                key={id}
                                                className={`accordion-items ${
                                                    show
                                                        ? "faq-accordio-border"
                                                        : ""
                                                }`}
                                            >
                                                <h2
                                                    className="accordion-header"
                                                    id={`heading-${id}`}
                                                >
                                                    <button
                                                        className={`accordion-buttons ${
                                                            show
                                                                ? ""
                                                                : "collapsed"
                                                        }`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse-${id}`}
                                                        aria-expanded={
                                                            show
                                                                ? "true"
                                                                : "false"
                                                        }
                                                        aria-controls={`collapse-${id}`}
                                                    >
                                                        {title}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse-${id}`}
                                                    className={`accordion-collapse collapse ${
                                                        show ? "show" : ""
                                                    }`}
                                                    aria-labelledby={`heading-${id}`}
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        {desc}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccordionArea;
