import React, { useEffect } from "react";
import { FooterFour, FooterThree, Header, Wrapper } from "../../../../layout";
import { animationCreate } from "../../../../utils/utils";
import Breadcrumb from "../../../common/breadcrumb/breadcrumb";
import CtaTwo from "../../../common/cta/cta-2";
// import CardWeb from "./Card-web";
import AccordionArea from "./accordion";
// import ClientFeedback from "../../../homes/home-5/client-feedback";
import Head from "next/head";
// import FeatureArea from "../../../homes/home-5/feature-area";
// import BrandArea from "../../../homes/home-5/brand-area";
// import ProjectArea from "../../../homes/home-5/project-area";
// import ServicesArea from "../../../homes/home-5/services-area";
// import TeamArea from "../../../homes/home-5/team-area";
import Link from "next/link";
import Script from "next/script";
import CardWeb from "./services/new-services/service-digital-marketing/Card-web";
import ServicesArea from "./homes/home-5/services-area";
import FeatureArea from "./homes/home-5/feature-area";
import BrandArea from "./homes/home-5/brand-area";
import ProjectArea from "./homes/home-5/project-area";
import TeamArea from "./homes/home-5/team-area";
import ClientFeedback from "./homes/home-5/client-feedback";

const LandingPage = () => {
    useEffect(() => {
        setTimeout(() => {
            animationCreate();
        }, 500);
    }, []);

    return (
        <Wrapper>
            <Head>
                <title>Best Influencer Marketing Company in Gurgaon</title>
                <meta
                    name="description"
                    content="Looking for the best influencer marketing agency in Gurgaon? Digital Cappuccino is the best influencer marketing company in Gurgaon. We synthesize marketing programs and merge techniques to reach your goals."
                />
                <link
                    rel="canonical"
                    href="https://www.digitalcappuccino.com/influencer-marketing-company"
                />
                <meta
                    property="og:title"
                    content="Best Influencer Marketing Company in Gurgaon"
                />
                <meta
                    property="og:description"
                    content="Looking for the best influencer marketing agency in Gurgaon? Digital Cappuccino is the best influencer marketing company in Gurgaon. We synthesize marketing programs and merge techniques to reach your goals."
                />
                <meta
                    property="og:url"
                    content="https://www.digitalcappuccino.com/influencer-marketing-company"
                />
                <meta
                    property="og:image"
                    content="https://www.digitalcappuccino.com/assets/img/service/2.png"
                />
            </Head>
            <Header />
            <Breadcrumb
                color={"#fec4c559"}
                imagePath={"/assets/img/service/2.png"}
                title={"Influencer Marketing Company in Gurgaon "}
                alt="Best Influencer Marketing Agency in Gurgaon"
            />
            <CardWeb />

            <ServicesArea />
            <FeatureArea />
            <BrandArea />
            {/*<OurAffiliates/>*/}
            <ProjectArea />
            {/*<TestimonialArea style_2={true}/>*/}
            <TeamArea />
            <ClientFeedback />
            <AccordionArea />
            <CtaTwo />
            <FooterFour />
            <footer className="d-flex d-lg-none justify-content-center align-items-center gap-5 py-3 px-4">
                <Link
                    href="https://wa.me/9818696071"
                    className="cursor-pointer"
                    target="_blank"
                >
                    <i
                        className="fab fa-whatsapp fa-2x"
                        style={{ color: "#25D366!important" }}
                    ></i>
                </Link>
                <Link href="tel:9818696071">
                    <i
                        className="fas fa-phone fa-2x"
                        style={{ color: "#25D366" }}
                    ></i>
                </Link>
            </footer>
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "http://schema.org",
                            "@type": "WebPage",
                            "@id": "https://www.digitalcappuccino.com/digital-marketing-company-gurgaon#webpage",
                            url: "https://www.digitalcappuccino.com/digital-marketing-company-gurgaon",
                            inLanguage: "English",
                            name: "Digital Marketing",
                            description:
                                "One of the best digital marketing companies in Gurgaon. That offers a wide range of services, including SEO, web development, and PPC marketing.",
                            isPartOf: {
                                "@id": "#website",
                            },
                            about: [
                                {
                                    "@type": "Thing",
                                    name: "Digital Cappuccino",
                                    sameAs: "https://www.digitalcappuccino.com/",
                                },
                            ],
                            mentions: [
                                {
                                    "@type": "Thing",
                                    name: "Digital Cappuccino",
                                    sameAs: "https://www.digitalcappuccino.com/",
                                },
                            ],
                        },
                    ]),
                }}
            />
        </Wrapper>
    );
};

export default LandingPage;
