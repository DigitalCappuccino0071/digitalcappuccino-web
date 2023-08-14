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

const ServiceDigitalMarketing = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
     <Head>
        <title>Best Marketing Agency in India | Top Marketing Companies in India</title>
        <meta
          name="description"
          content="Digital Cappuccino - offering you the world class Digital Marketing (SEO, SMO, SEM, PPC, Email Marketing) services provider agency."
          />
           <link rel="canonical" href="https://www.digitalcappuccino.com/digital-marketing-company-delhi"/>
          <meta property="og:title" 
          content="Best Marketing Agency in India | Top Marketing Companies in India" />
          <meta
            property="og:description"
            content="Digital Cappuccino - offering you the world class Digital Marketing (SEO, SMO, SEM, PPC, Email Marketing) services provider agency."
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
        imagePath={"/assets/img/service/2.png"}
        title={"Digital Cappuccino Digital Marketing Company in Delhi  "}
        alt="Digital Marketing Company in Delhi"
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

export default ServiceDigitalMarketing;
