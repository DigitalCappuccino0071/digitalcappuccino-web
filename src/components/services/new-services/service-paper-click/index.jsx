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

const ServicePaperClick = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>
          Best PPC Agency in India, Google Ads, PPC Services in India, PPC
          Packages in India
        </title>
        <meta
          name="description"
          content="Best PPC Company in India. Affordable PPC Packages in India For Google Ads Management Services including Search, Display, YouTube, App Install, Shopping and PPC for LinkedIn and Facebook Campaign."
          key="desc"
        />
        <link
          rel="canonical"
          href="https://www.digitalcappuccino.com/ppc-marketing-company"
          key="canonical"
        />
      </Head>
      <Header />
      <Breadcrumb
        color={"#fec4c559"}
        imagePath={"/assets/img/service/5.png"}
        title={"DIGITAL CAPPUCCINO PPC MARKETING COMPANY IN DELHI"}
        alt="PPC Marketing Company in Delhi"
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

export default ServicePaperClick;
