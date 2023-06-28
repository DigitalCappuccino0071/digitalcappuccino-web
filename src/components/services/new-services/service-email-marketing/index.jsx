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
        <title>
          Digital Cappuccino is a best Email Marketing Agency | Email Marketing
          Company
        </title>
        <meta
          name="description"
          content="Digital Cappuccino offers email marketing management and newsletter services. Contact Digital Cappuccino for full-service email marketing to helping customers generate quality leads, drive revenue with maximum ROI. Call Now!"
          key="desc"
        />
        <link
          rel="canonical"
          href="https://www.digitalcappuccino.com/email-marketing-services"
          key="canonical"
        />
      </Head>
      <Header />
      <Breadcrumb
        color={"#fec4c559"}
        imagePath={"/assets/img/service/6.png"}
        title={"	Email Marketing Company"}
        alt="Email Marketing Services"
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
