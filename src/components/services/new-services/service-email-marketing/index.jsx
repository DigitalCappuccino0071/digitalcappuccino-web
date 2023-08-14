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

const ServiceEmailMarketing = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Digital Cappuccino is a best Email Marketing Agency | Email Marketing Company</title>
        <meta
          name="description"
          content="Digital Cappuccino offers email marketing management and newsletter services. Contact Digital Cappuccino for full-service email marketing to helping customers generate quality leads, drive revenue with maximum ROI. Call Now!"
          />
           <link rel="canonical" href="https://www.digitalcappuccino.com/email-marketing-services-delhi"/>
          <meta property="og:title" 
          content="Digital Cappuccino is a best Email Marketing Agency | Email Marketing Company" />
          <meta
            property="og:description"
            content="Digital Cappuccino offers email marketing management and newsletter services. Contact Digital Cappuccino for full-service email marketing to helping customers generate quality leads, drive revenue with maximum ROI. Call Now!"
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
        imagePath={"/assets/img/service/6.png"}
        title={"Digital Cappuccino Elevates Your Reach"}
        alt="Email Marketing Services in Delhi"
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

export default ServiceEmailMarketing;
