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
        <title>Digital Marketing Company in Gurgaon - Digital Cappuccino</title>
        <meta
          name="description"
          content="Digital Cappuccino - offering you the world class Digital Marketing (SEO, SMO, SEM, PPC, Email Marketing) services provider agency in Gurgaon"
          />
           <link rel="canonical" href="https://www.digitalcappuccino.com/digital-marketing-company-gurgaon"/>
          <meta property="og:title" 
          content="Digital Marketing Company in Gurgaon - Digital Cappuccino" />
          <meta
            property="og:description"
            content="Digital Cappuccino - offering you the world class Digital Marketing (SEO, SMO, SEM, PPC, Email Marketing) services provider agency in Gurgaon"
          />
           <meta
            property="og:url"
            content="https://www.digitalcappuccino.com/digital-marketing-company-gurgaon"
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
        title={"Digital Cappuccino: Digital Marketing Company in Gurgaon "}
        alt="Digital Marketing Company in Gurgaon"
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
