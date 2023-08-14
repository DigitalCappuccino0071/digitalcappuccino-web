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

const ServiceSEO = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
        <Head>
        <title>Best SEO Services Agency in India - Digital Cappuccino</title>
        <meta
          name="description"
          content="Digital Cappuccino is a top rated award winning SEO Company in India. We provide best SEO services to get more website traffic and reach through organic channels."
          />
           <link rel="canonical" href="https://www.digitalcappuccino.com/digital-marketing-company-delhi"/>
          <meta property="og:title" 
          content="Best SEO Services Agency in India - Digital Cappuccino" />
          <meta
            property="og:description"
            content="Digital Cappuccino is a top rated award winning SEO Company in India. We provide best SEO services to get more website traffic and reach through organic channels."
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
        imagePath={"/assets/img/service/4.png"}
        title={"Improve Your Digital Presence with Professional SEO Services"}
        alt="SEO Service Company in Delhi"
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

export default ServiceSEO;
