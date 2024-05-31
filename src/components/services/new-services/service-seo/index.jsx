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

const ServiceSEO = () => {
    useEffect(() => {
        setTimeout(() => {
            animationCreate();
        }, 500);
    }, []);

    return (
        <Wrapper>
            <Head>
                <title>SEO Company Gurgaon | Ecommerce SEO services </title>
                <meta
                    name="description"
                    content="SEO Company in Gurgaon – Digital Cappuccino is a leading SEO Agency that offers the best SEO services in Gurgaon which helps you to get more website traffic. Call us at +91-9910190071"
                />
                <link
                    rel="canonical"
                    href="https://www.digitalcappuccino.com/seo-company-gurgaon"
                />
                <meta
                    property="og:title"
                    content="SEO Company Gurgaon | Ecommerce SEO services"
                />
                <meta
                    property="og:description"
                    content="SEO Company in Gurgaon – Digital Cappuccino is a leading SEO Agency that offers the best SEO services in Gurgaon which helps you to get more website traffic. Call us at +91-9910190071"
                />
                <meta
                    property="og:url"
                    content="https://www.digitalcappuccino.com/seo-company-gurgaon"
                />
                <meta
                    property="og:image"
                    content="https://www.digitalcappuccino.com/assets/img/service/4.png"
                />
            </Head>
            <Header />
            <Breadcrumb
                color={"#fec4c559"}
                imagePath={"/assets/img/service/4.png"}
                title={"SEO Company in Gurgaon"}
                alt="SEO Service Company in Gurgaon"
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
                            "@id": "https://www.digitalcappuccino.com/seo-company-gurgaon#webpage",
                            url: "https://www.digitalcappuccino.com/seo-company-gurgaon",
                            inLanguage: "English",
                            name: "SEO Company",
                            description:
                                "We are the top-rated SEO company in Gurgaon. We provides the best and most effective SEO services in Gurgaon to improve your SEO Ranking.",
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

export default ServiceSEO;
