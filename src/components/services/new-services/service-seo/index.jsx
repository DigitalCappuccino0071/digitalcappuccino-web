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
        <title>SEO company in Delhi for SEO services -Digital Cappuccino </title>
        <meta
          name="description"
          content="We, at Digital Cappuccino, have successfully earned the trust of our clients as the best SEO company in Delhi, our reputation precedes building a vast clientele globally."
          />
           <link rel="canonical" href="https://www.digitalcappuccino.com/seo-services-delhi"/>
          <meta property="og:title" 
          content="SEO company in Delhi for SEO services -Digital Cappuccino " />
          <meta
            property="og:description"
            content="We, at Digital Cappuccino, have successfully earned the trust of our clients as the best SEO company in Delhi, our reputation precedes building a vast clientele globally."
          />
           <meta
            property="og:url"
            content="https://www.digitalcappuccino.com/seo-services-delhi"
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
