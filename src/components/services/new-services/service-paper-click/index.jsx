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

const ServicePaperClick = () => {
    useEffect(() => {
        setTimeout(() => {
            animationCreate();
        }, 500);
    }, []);

    return (
        <Wrapper>
            <Head>
                <title>
                    Best PPC Company in Gurgaon | PPC Agency in Gurgaon{" "}
                </title>
                <meta
                    name="description"
                    content="Digital Cappuccino is the best PPC company & agency in Gurgaon. We offer the affordable PPC services and synthesize marketing programs and merge techniques to reach your goals."
                />
                <link
                    rel="canonical"
                    href="https://www.digitalcappuccino.com/ppc-marketing-company-gurgaon"
                />
                <meta
                    property="og:title"
                    content="Best PPC Agency in Gurgaon| PPC management services"
                />
                <meta
                    property="og:description"
                    content="Maximize Sales with the best PPC management services With Digital Cappucino, it’s known as one of the best PPC marketing agencies in Gurgaon that offers PPC services and marketing programs. CONTACT US NOW."
                />
                <meta
                    property="og:url"
                    content="https://www.digitalcappuccino.com/ppc-marketing-company-gurgaon"
                />
                <meta
                    property="og:image"
                    content="https://www.digitalcappuccino.com/assets/img/service/5.png"
                />
                <script type="application/ld+json">
                    {`
{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": "https://www.digitalcappuccino.com/ppc-marketing-company-gurgaon#webpage",
  "url": "https://www.digitalcappuccino.com/ppc-marketing-company-gurgaon",
  "inLanguage": "English",
  "name": "PPC Marketing ",
  "description": "We are one of the best PPC companies in Gurgaon. We will help you achieve the best possible outcomes. Providing you with the best PPC services.",
  "isPartOf": {
    "@id": "#website"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Digital Cappuccino",
      "sameAs": "https://www.digitalcappuccino.com/"
    }
  ],
  "mentions": [
    {
      "@type": "Thing",
      "name": "Digital Cappuccino",
      "sameAs": "https://www.digitalcappuccino.com/"
    }
  ]
}
`}
                </script>
            </Head>

            <Header />
            <Breadcrumb
                color={"#fec4c559"}
                imagePath={"/assets/img/service/5.png"}
                title={"Digital Cappuccino: PPC Marketing Company in Gurgaon"}
                alt="PPC Marketing Company in Gurgaon"
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

export default ServicePaperClick;
