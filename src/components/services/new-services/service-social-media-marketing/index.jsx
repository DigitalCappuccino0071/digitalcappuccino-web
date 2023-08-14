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

const ServiceSocialMediaMarketing = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Best Social Media Marketing Agency ( SMM)</title>
        <meta
          name="description"
          content="Digital Cappuccino is the best Social Media Marketing Agency in the world. We help businesses grow their social media presence and create engaging content to reach their audience."
          />
           <link rel="canonical" href="https://www.digitalcappuccino.com/social-media-marketing-services-delhi"/>
          <meta property="og:title" 
          content="Best Social Media Marketing Agency ( SMM)" />
          <meta
            property="og:description"
            content="Digital Cappuccino is the best Social Media Marketing Agency in the world. We help businesses grow their social media presence and create engaging content to reach their audience."
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
        imagePath={"/assets/img/service/3.png"}
        title={"Digitalcappuccino: Social Media Marketing Company in Delhi"}
        alt="Socail Media Marketing Company in Delhi"
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
