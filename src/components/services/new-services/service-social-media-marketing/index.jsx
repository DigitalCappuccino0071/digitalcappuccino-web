import React, { useEffect } from "react";
import { FooterFour, FooterThree, Header, Wrapper } from "../../../../layout";
import { animationCreate } from "../../../../utils/utils";
import Breadcrumb from "../../../common/breadcrumb/breadcrumb";
import CtaTwo from "../../../common/cta/cta-2";
import CaseArea from "../../../common/recent-case-studies";
import TestimonialArea from "./testimonial-area";
import ServicesWeb from "./services-web";
import CardDetails from "../../service-1/card-details";
import CardWeb from "./Card-web";
import AccordionArea from "./accordion";
import ClientFeedback from "../../../homes/home-5/client-feedback";
import Head from "next/head";
import Script from "next/script";

const ServiceSocialMediaMarketing = () => {
    useEffect(() => {
        setTimeout(() => {
            animationCreate();
        }, 500);
    }, []);

    return (
        <Wrapper>
            <Head>
                <title>
                    Social Media Marketing Company in Gurgaon|Social Media
                    Agency in Gurgaon
                </title>
                <meta
                    name="description"
                    content="Looking for a Social Media Marketing company & Agency in Gurgaon? Digital Cappuccino is the best social media marketing Company in Gurgaon. We offer professional social media services and marketing programs to reach your goals."
                />
                <link
                    rel="canonical"
                    href="https://www.digitalcappuccino.com/social-media-marketing-services-gurgaon"
                />
                <meta
                    property="og:title"
                    content=" Social Media Marketing Company in Gurgaon | Social Media Agency in Gurgaon"
                />
                <meta
                    property="og:description"
                    content="Looking for a Social Media Marketing company & Agency in Gurgaon? Digital Cappuccino is the best social media marketing Company in Gurgaon. We offer professional social media services and marketing programs to reach your goals."
                />
                <meta
                    property="og:url"
                    content="https://www.digitalcappuccino.com/social-media-marketing-services-gurgaon"
                />
                <meta
                    property="og:image"
                    content="https://www.digitalcappuccino.com/assets/img/service/3.png"
                />
            </Head>
            <Header />
            <Breadcrumb
                color={"#fec4c559"}
                imagePath={"/assets/img/service/3.png"}
                title={"Social Media Marketing Company in Gurgaon"}
                alt="Socail Media Marketing Company in Gurgaon"
            />
            <CardWeb />
            <ServicesWeb />
            {/*<TestimonialArea style_2={true}/>*/}
            <ClientFeedback />
            <AccordionArea />
            <CtaTwo />
            <FooterFour />
        </Wrapper>
    );
};

export default ServiceSocialMediaMarketing;
