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
          Web Design & Development Company in Gurgaon - Digital Cappuccino
        </title>
        <meta
          name="description"
          content="If you are looking for a website design & development company in Gurgaon that can help you achieve your business goals, then Digital Cappuccino is the perfect choice for you."
        />
        <link
          rel="canonical"
          href="https://www.digitalcappuccino.com/website-development-company-gurgaon"
        />
        <meta
          property="og:title"
          content="Web Design & Development Company in Gurgaon - Digital Cappuccino"
        />
        <meta
          property="og:description"
          content="If you are looking for a website design & development company in Gurgaon that can help you achieve your business goals, then Digital Cappuccino is the perfect choice for you."
        />
        <meta
          property="og:url"
          content="https://www.digitalcappuccino.com/website-development-company-gurgaon"
        />
        <meta
          property="og:image"
          content="https://www.digitalcappuccino.com/assets/img/service/1.png"
        />
        <script type="application/ld+json">
          {`
{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": "https://www.digitalcappuccino.com/website-development-company-gurgaon#webpage",
  "url": "https://www.digitalcappuccino.com/website-development-company-gurgaon",
  "inLanguage": "English",
  "name": "Website Development",
  "description": "If you are looking for a website design & development company in Gurgaon that can help you achieve your business goals, then Digital Cappuccino is the perfect choice for you.",
  "isPartOf": {
    "@id": "https://www.digitalcappuccino.com/digital-marketing-company-gurgaon#website"
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
        imagePath={"/assets/img/service/1.png"}
        title={"Premier Website Development Solutions in Gurgaon"}
        alt="Website Development Company in Gurgaon"
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

export default ServiceWebsiteDevelopment;
