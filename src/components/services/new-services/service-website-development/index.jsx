import React, { useEffect } from "react";
import { FooterFour, FooterThree, Header, Wrapper } from "../../../../layout";
import { animationCreate } from "../../../../utils/utils";
import Breadcrumb from "../../../common/breadcrumb/breadcrumb";
import CtaTwo from "../../../common/cta/cta-2";
import ServicesWeb from "./services-web";
import CardWeb from "./Card-web";
import AccordionArea from "./accordion";
import TestimonialArea from "./testimonial-area";
import ClientFeedback from "../../../homes/home-5/client-feedback";
import Head from "next/head";
import Script from "next/script";

const ServiceWebsiteDevelopment = () => {
    useEffect(() => {
        setTimeout(() => {
            animationCreate();
        }, 500);
    }, []);

    return (
        <Wrapper>
            <Head>
                <title>
                    Website Development Company in Gurgaon | Web Design &
                    Development Services
                </title>
                <meta
                    name="description"
                    content="Digital Cappuccino is Gurgaon's is one of the best web development company in Gurgaon. Our expert web developers and designers provide you website designing, website development, and digital marketing services."
                />
                <link
                    rel="canonical"
                    href="https://www.digitalcappuccino.com/web-development-company-gurgaon"
                />
                <meta
                    property="og:title"
                    content="Website Development Company in Gurgaon | Web Design & Development Services"
                />
                <meta
                    property="og:description"
                    content="Digital Cappuccino is Gurgaon's is one of the best web development company in Gurgaon. Our expert web developers and designers provide you website designing, website development, and digital marketing services."
                />
                <meta
                    property="og:url"
                    content="https://www.digitalcappuccino.com/web-development-company-gurgaon"
                />
                <meta
                    property="og:image"
                    content="https://www.digitalcappuccino.com/assets/img/service/1.png"
                />
            </Head>
            <Header />
            <Breadcrumb
                color={"#fec4c559"}
                imagePath={"/assets/img/service/1.png"}
                title={"Website Development"}
                alt="Website Development Company in Gurgaon"
            />
            <CardWeb />
            <ServicesWeb />
            {/*<TestimonialArea style_2={true}/>*/}
            <ClientFeedback />
            <AccordionArea />
            <CtaTwo />
            <FooterFour />
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "http://schema.org",
                            "@type": "WebPage",
                            "@id": "https://www.digitalcappuccino.com/web-development-company-gurgaon#webpage",
                            url: "https://www.digitalcappuccino.com/web-development-company-gurgaon",
                            inLanguage: "English",
                            name: "Website Development",
                            description:
                                "Digital Cappuccino is the most trusted web development company in Gurgaon that provides redesigning, web development, and digital marketing.",
                            isPartOf: {
                                "@id": "https://www.digitalcappuccino.com/digital-marketing-company-gurgaon#website",
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

export default ServiceWebsiteDevelopment;
