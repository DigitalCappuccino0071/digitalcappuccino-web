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
        <title>E-mail marketing agency in Gurgaon with a personified presence- Digital Marketing</title>
        <meta
          name="description"
          content="No.1 e-mail marketing agency in Gurgaon, we at Digital Cappuccino would make your business grow faster and effectively with our email marketing service for your esteem."
          />
           <link rel="canonical" href="https://www.digitalcappuccino.com/email-marketing-services-gurgaon"/>
          <meta property="og:title" 
          content="E-mail marketing agency in Gurgaon with a personified presence- Digital Marketing" />
          <meta
            property="og:description"
            content="No.1 e-mail marketing agency in Gurgaon, we at Digital Cappuccino would make your business grow faster and effectively with our email marketing service for your esteem."
          />
           <meta
            property="og:url"
            content="https://www.digitalcappuccino.com/email-marketing-services-gurgaon"
          />
          <meta
            property="og:image"
            content="https://www.digitalcappuccino.com/assets/img/service/6.png"
        />
      </Head>
      <Header />
      <Breadcrumb
        color={"#fec4c559"}
        imagePath={"/assets/img/service/6.png"}
        title={"Digital Cappuccino Elevates Your Reach:Email marketing in Gurgaon"}
        alt="Email Marketing Services in Gurgaon"
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
