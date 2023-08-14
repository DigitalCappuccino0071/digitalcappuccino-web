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

const ServiceWebsiteDevelopment = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Digital Marketing & Website Development Company | Digital Cappuccino</title>
        <meta
          name="description"
          content="Digital Cappuccino is a digital marketing Company in India. We provides website Development, Social Media Marketing, PPC Marketing, SEO and Email Marketing Services."
          />
           <link rel="canonical" href="https://www.digitalcappuccino.com/website-development-company-delhi"/>
          <meta property="og:title" 
          content="Digital Marketing & Website Development Company | Digital Cappuccino" />
          <meta
            property="og:description"
            content="Digital Cappuccino is a digital marketing Company in India. We provides website Development, Social Media Marketing, PPC Marketing, SEO and Email Marketing Services."
          />
           <meta
            property="og:url"
            content="#"
          />
          <meta
            property="og:image"
            content="https://www.digitalcappuccino.com/assets/img/logo/new-logo-design-v1.png"
        />
      </Head>
      <Header />
      <Breadcrumb
        color={"#fec4c559"}
        imagePath={"/assets/img/service/1.png"}
        title={"Premier Website Development Solutions"}
        alt="Website Development Company in Delhi"
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
